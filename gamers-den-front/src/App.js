import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CannotReach from "./components/CannotReach";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {}, [user]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route
          path="/sign-in"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route path="/cart" element={<Cart user={user} setUser={setUser} />} />

        <Route
          path="/admin"
          element={user ? <Admin user={user} /> : <CannotReach />}
        />

        <Route
          path="/checkOut"
          element={
            user ? <CheckOut user={user} setUser={setUser} /> : <CannotReach />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
