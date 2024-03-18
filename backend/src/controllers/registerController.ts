import bcryptRegister from 'bcrypt';
import clientRegister from '../config/db';
import jwtRegister from 'jsonwebtoken';

const register = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const data = await clientRegister.query(`SELECT * FROM users WHERE email= $1;`, [email]);
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: 'Email already there, No need to register again.',
      });
    } else {
      const hash = await bcryptRegister.hash(password, 10);
      const user = {
        email,
        password: hash,
      };
      clientRegister.query(
        `INSERT INTO users (email, password) VALUES ($1,$2);`,
        [user.email, user.password],
        (err: any) => {
          if (err) {
            console.error(err);
            return res.status(500).json({
              error: 'Database error',
            });
          } else {
            const token = jwtRegister.sign(
              {
                email: user.email,
              },
              (process.env as any).SECRET_KEY
            );
            return res.status(200).send({ message: 'User added to database, not verified', token });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Database error while registering user!',
    });
  }
};

export default register;