import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const useModal = () => {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [modal, setModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("thinking");
  const [modalTitle, setModalTitle] = useState('...');
  const content = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{modalTitle}</h2>
      <p id="simple-modal-description">
      {modalContent}
      </p>
    </div>
  );
//
//  let handleModal = (content = false) => {
//    setModal(!modal);
//    if (content) {
//      setModalContent(content);
//    }
//  };

  const handleOpenModal = () =>{
    setModal(true);
  }

  const handleCloseModal = () =>{
      setModal(false);
  }

  return {
    modal,
    handleOpenModal,
    handleCloseModal,
    setModalContent,
    setModalTitle,
    modalContent: content
  };
};

export default useModal;
