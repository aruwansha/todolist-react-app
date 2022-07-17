import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const portalOverlays = document.getElementById("overlays");

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <h2 className={classes.modalHeader}>{props.title}</h2>
      <hr />
      <div className={classes.modalContent}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalOverlays
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title}>{props.children}</ModalOverlay>,
        portalOverlays
      )}
    </Fragment>
  );
};

export default Modal;
