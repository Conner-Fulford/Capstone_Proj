 const bcryptAccount = require("bcrypt");
  const clientAccount = require("../config/db");
  const jwtAccount = require("jsonwebtoken");
  
  exports.account = async (req: any, res: any) => {
    const { user_id, email, password } = req.body;  
  
    try{
        const user = await clientAccount.query(`SELECT * FROM users WHERE user_id= $1;`, [user_id]);      

        /*
        if(user['rowCount'] == 0){
          res.status(200).json({
            message: 'User ID does not exist!'
        }) */

        //works on a basic level, will need to add more parameters for changing password

        const newEmail = email || user['rows'][0]['email']; //the posted email or the default email obtained through the user variable, if there is a posted email submitted then it will update the user.email with the new email and if there is no posted email then it will default to the or function regular email
        const newPassword = password || user['rows'][0]['password'];
  
        const updatedUser  = await clientAccount.query(`UPDATE users SET email = $1, password = $2 WHERE user_id = $3;`, [newEmail, newPassword, user_id]);
  
          res.status(200).json({
              user_id: user_id,
              email: newEmail,
              password: newPassword,
  
          })
  
    } catch(err){
      console.log(err);
      res.status(500).json({
        error: 'Database error while registering user!',
      });
    }
  
  
  
  }