const bcryptRegister = require("bcrypt");
const clientRegister = require("../config/db");
const jwtRegister = require("jsonwebtoken");

exports.register = async (req: { body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; token?: any; }): any; new(): any; }; }; }) => {
  const { email, password } = req.body;
  try {
    const data = await clientRegister.query(`SELECT * FROM users WHERE email= $1;`, [email]);
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: 'Email already exists. Please use a different email.',
      });
    } else {
      const hash = await bcryptRegister.hash(password, 10);
      const user = {
        email,
        password: hash,
      };
      clientRegister
        .query(`INSERT INTO users (email, password) VALUES ($1,$2);`, [user.email, user.password])
        .then(() => {
          const token = jwtRegister.sign(
            {
              email: user.email,
            },
            process.env.SECRET_KEY
          );
          return res.status(200).json({ message: 'User added to database.', token });
        })
        .catch((err: any) => {
          console.error(err);
          return res.status(500).json({
            error: 'Database error',
          });
        });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: 'Internal server error',
    });
  }
};