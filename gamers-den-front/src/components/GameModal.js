import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Game from "./Game";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "80vh",
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
          <Game game={props.game} user={props.user} setUser={props.setUser} />
        </Box>
      </Modal>
    </div>
  );
}

export default GameModal;
