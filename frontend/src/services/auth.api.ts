import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signup = async ({ email, password }: any) => {
  await axios
    .post(import.meta.env.VITE_REGISTER_API, { email, password })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(import.meta.env.VITE_LOGIN_API, {
    email,
    password,
  });

  if (response.data && response.data.token) {
    document.cookie = `token=${response.data.token}; path=/; SameSite=None; Secure`;
    console.log("Login successful:", response.data);

    const userId = getUserIdFromToken();
    console.log("User ID:", userId);

    return response.data; // return the response data
  } else {
    throw new Error("Login failed");
  }
};

const getUserIdFromToken = () => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token"))

  if (!token) {
    console.error("Token not found in cookies");
    return null;
  }

  try {
    const decodedToken: JwtPayload & { user_id: number } = jwtDecode(token);
    return decodedToken.user_id;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

export { signup, signin, getUserIdFromToken };