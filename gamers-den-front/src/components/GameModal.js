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
  borderRadius: "30px",
  boxShadow: 24,
  p: 4,
};

function GameModal(props) {
  const handleClose = () => {
    props.setClose();
  };

  useEffect(() => {}, [props.open]);

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
