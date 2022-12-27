import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
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
      </Routes>
    </Router>
  );
}

export default App;
