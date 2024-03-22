import bcryptLogin from 'bcrypt';
import jwtLogin from 'jsonwebtoken';
import clientLogin from "../config/db";

const login = async (req: any, res: any) => {
    const { email, password } = req.body;
    try {
        const data = await clientLogin.query(`SELECT * FROM users WHERE email= $1;`, [email]);
        const user = data.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "User is not registered, Sign Up first",
            });
        } else {
            bcryptLogin.compare(password, user[0].password, (err: any, result: boolean) => {
                if (err) {
                    res.status(500).json({
                        error: "Server error",
                    });
                } else if (result === true) {
                    const token = jwtLogin.sign(
                        {
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
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error occurred while signing in!",
        });
    }
};

export default login;