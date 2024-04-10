import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPassBox from "./components/UserPassBox";
import ProfilePage from "./components/ProfilePage";
import UserRegisterBox from "./components/UserRegisterBox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPassBox />} />
          <Route path="/register" element={<UserRegisterBox />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
