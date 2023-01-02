import React, { useEffect, useState } from "react";

function CartTotal(props) {
  const [amount, setAmount] = useState(0);

  const sumGames = () => {
    let sum = 0;
    Object.values(props.user.cart).forEach((elemnt) => {
      sum += elemnt.price;
    });
    setAmount(sum);
  };
  useEffect(() => {
    if (props.user) {
      sumGames();
    }
  }, [props.user]);
  return (
    <div>
      <h1>{"Your cart total amount is: " + amount + "$"}</h1>
    </div>
  );
}

export default CartTotal;
