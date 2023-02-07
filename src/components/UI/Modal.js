import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  const { onClose } = props;

  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('modal');

const Modal = (props) => {
  const { onClose } = props;

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
