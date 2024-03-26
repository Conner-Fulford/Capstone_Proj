import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db";

const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const data = await db.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]);
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: "User is not registered, Sign Up first",
      });
    } else {
      bcrypt.compare(
        password,
        user[0].password,
        (err: any, result: boolean) => {
          if (err) {
            res.status(500).json({
              error: "Server error",
            });
          } else if (result === true) {
            const token = jwt.sign(
              {
                user_id: user[0].user_id,
                email: email,
              },
              (process.env as any).SECRET_KEY
            );
            res.status(200).json({
              message: "User signed in!",
              token: token,
            });
          } else {
            if (result === false)
              res.status(400).json({
                error: "Enter correct password!",
              });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error occurred while signing in!",
    });
  }
};

const register = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const data = await db.query(`SELECT * FROM users WHERE email= $1;`, [
      email,
    ]);
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: "Email already there, No need to register again.",
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const user = {
        email,
        password: hash,
      };
      db.query(
        `INSERT INTO users (email, password) VALUES ($1,$2) RETURNING user_id;`,
        [user.email, user.password],
        (err: any, result: any) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: "Database error",
            });
          } else {
            const user_id = result.rows[0].user_id;
            const token = jwt.sign(
              {
                user_id: user_id,
                email: user.email,
              },
              (process.env as any).SECRET_KEY
            );
            return res
              .status(200)
              .send({ message: "User added to database, not verified", token });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while registering user!",
    });
  }
};

  const account = async (req: any, res: any) => {
    const { user_id, email, password, profile_pic, bio, banner_pic } = req.body;

    try {
      const user = await db.query(
        `SELECT * FROM users WHERE user_id= $1;`,
        [user_id]
      );

      /*
        if(user['rowCount'] == 0){
          res.status(200).json({
            message: 'User ID does not exist!'
        }) */

      //works on a basic level, will need to add more parameters for changing password

      const newEmail = email || user["rows"][0]["email"]; //the posted email or the default email obtained through the user variable, if there is a posted email submitted then it will update the user.email with the new email and if there is no posted email then it will default to the or function regular email
      const newPassword = password || user["rows"][0]["password"];
      const newProfile_Pic = profile_pic || user["rows"][0]["profile_pic"];
      const newBio = bio || user["rows"][0]["bio"];
      const newBanner_Pic = banner_pic || user["rows"][0]["banner_pic"];

      const updatedUser = await db.query(
        `UPDATE users SET email = $1, password = $2, profile_pic = $3, bio = $4, banner_pic = $5 WHERE user_id = $6;`,
        [newEmail, newPassword, newProfile_Pic, newBio, newBanner_Pic, user_id]
      );

      res.status(200).json({
        user_id: user_id,
        email: newEmail,
        password: newPassword,
        profile_pic: newProfile_Pic,
        bio: newBio,
        banner_pic: newBanner_Pic,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Database error while updating user!",
      });
    }
  };

  const get_user = async (req: any, res: any) => {
    const { user_id } = req.body;
    try {
      if(Number.isInteger(user_id)){
        const data = await db.query(`SELECT * FROM users WHERE user_id= $1;`, [
          user_id,
        ]);
  
        res.status(200).json({
          user_id:  data["rows"][0]["user_id"],
          email:  data["rows"][0]["email"],
          password:  data["rows"][0]["password"],
          profile_pic:  data["rows"][0]["profile_pic"],
          bio:  data["rows"][0]["bio"],
          banner_pic:  data["rows"][0]["banner_pic"],
          created_at:  data["rows"][0]["created_at"],
          updated_at:  data["rows"][0]["updated_at"],

        });
  
      } else {
        return res.status(400).json({ error: "User ID is not an integer!" });
      }
  
  
  
  
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  };

  const update_password = async (req: any, res: any) => {
    const { user_id, password, newPassword } = req.body;
    try {
      const data = await db.query(`SELECT * FROM users WHERE user_id= $1;`, [
        user_id,
      ]);

        const hash = await bcrypt.hash(newPassword, 10);
        
        bcrypt.compare(
          password,
          data["rows"][0]["password"],
          (err: any, result: boolean) => {
            if (err) {
              res.status(500).json({
                error: "Server error",
              });
            } else if (result === true) {
              const newHash = bcrypt.hash(newPassword, 10);

              const updatedUser = db.query(
                `UPDATE users SET password = $1 WHERE user_id = $2;`,
                [hash, user_id]
              );

              res.status(200).json({
                message: "Successfully updated password.",
                newPassword: hash,
              });
            } else {
              if (result === false)
                res.status(400).json({
                  error: "Enter correct password!",
                });
            }
          }
        );
    } catch (err) {
      console.log(err);
      res.status(500).json({
        error: "Database error while registering user!",
      });
    }
  };

  export default { login, register, account, get_user, update_password };