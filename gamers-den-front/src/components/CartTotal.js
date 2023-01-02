import React, { useCallback, useEffect, useState } from "react";

function CartTotal(props) {
  const [amount, setAmount] = useState(0);

  const sumGames = useCallback(() => {
    let sum = 0;
    Object.values(props.user.cart).forEach((elemnt) => {
      sum += elemnt.price;
    });
    setAmount(sum);
  }, [props.user]);
  useEffect(() => {
    if (props.user) {
      sumGames();
    }
  }, [props.user, sumGames]);
  return (
    <div>
      <h1>{"Your cart total amount is: " + amount + "$"}</h1>
    </div>
  );
}

export default CartTotal;
