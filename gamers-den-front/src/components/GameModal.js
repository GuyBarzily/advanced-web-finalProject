import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Game from "./Game";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function GameModal(props) {
  const [game, setGame] = useState("");
  const handleClose = () => {
    //setOpen(false);
    props.setClose();
  };

  useEffect(() => {
    setGame(props.game);
  }, [props.open]);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Game game={props.game} />
        </Box>
      </Modal>
    </div>
  );
}

export default GameModal;
