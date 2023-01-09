import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CannotReach from "./components/CannotReach";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { updateUser } from "./axios";

function App() {
  const [user, setUser] = useState(null);

  const handleAddToCart = async (item) => {
    const newCart = [...user.cart, item];
    setUser({
      ...user,
      cart: newCart,
    });
    const upDate = {
      user: { email: user.email },
      update: { cart: newCart },
    };
    const res = await updateUser(upDate);
  };

  const handleRemoveFromCart = async (item) => {
    const arr = [...user.cart];
    arr.splice(item, 1);
    setUser({
      ...user,
      cart: arr,
    });
    const upDate = {
      user: { email: user.email },
      update: { cart: arr },
    };
    const res = await updateUser(upDate);
  };

  const handlePurchase = async () => {
    setUser({
      ...user,
      cart: [],
    });
    const upDate = {
      user: { email: user.email },
      update: { cart: [] },
    };
    const res = await updateUser(upDate);
  };

  useEffect(() => {
    console.log("Welcome to the Gamers Den");
  }, []);

  useEffect(() => {}, [user]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              user={user}
              setUser={setUser}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/sign-in"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              user={user}
              setUser={setUser}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          }
        />

        <Route
          path="/admin"
          element={user ? <Admin user={user} /> : <CannotReach />}
        />

        <Route
          path="/checkOut"
          element={
            user ? (
              <CheckOut
                user={user}
                setUser={setUser}
                handlePurchase={handlePurchase}
              />
            ) : (
              <CannotReach />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
