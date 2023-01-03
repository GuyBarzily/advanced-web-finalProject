import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

function CheckOutItem(props) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    setItem(props.game);
  }, [props.game]);
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {item && (
        <>
          <Box>
            <h1>{item.title}</h1>
          </Box>
          <Box>
            <h1>{item.price + "$"}</h1>
          </Box>
        </>
      )}
    </Box>
  );
}

export default CheckOutItem;
