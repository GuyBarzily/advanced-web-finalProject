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

  const handleAddToCart = async (item) => {
    setUser({
      ...user,
      cart: [...user.cart, item],
    });
    const upDate = {};
  };

  const handleRemoveFromCart = async (item) => {
    console.log(item);
    const arr = [...user.cart];
    arr.splice(item, 1);
    setUser({
      ...user,
      cart: arr,
    });
  };

  const handlePurchase = async () => {
    setUser({
      ...user,
      cart: [],
    });
  };

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
