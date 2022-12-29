import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { getGames } from "./axios";

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const games = await getGames();
      setData(games);
    };
    fetchData();
  }, [user]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home user={user} setUser={setUser} games={data} />}
        />
        <Route
          path="/sign-in"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route path="/cart" element={<Cart />} />
        {isAdmin && <Route path="/admin" element={<Admin />} />}
      </Routes>
    </Router>
  );
}

export default App;
