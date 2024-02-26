const bcryptLogin = require("bcrypt");
const clientLogin = require("../config/db");
const jwtLogin = require("jsonwebtoken");

exports.login = async (req: { body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; token?: any; }): void; new(): any; }; }; }) => {
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
                        process.env.SECRET_KEY
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
