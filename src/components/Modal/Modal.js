import React from "react";
import PropTypes from "prop-types";

import "./Modal.scss";

function Modal({ closeButton, text, actions, bodyClickHandler }) {
  return (
    <div className="modal" onClick={bodyClickHandler}>
      <div className="modal__content">
        <div className="modal__header-wrapper">
          <button type="button" className="btn__close" onClick={closeButton}>
            X
          </button>
        </div>
        <p className="modal__text">{text}</p>
        {actions}
      </div>
    </div>
  );
}

// Modal.defaultProps = {
//   product: [],
//   favorites: [],
// };

// Modal.propTypes = {
//   product: PropTypes.array,
//   favorite: PropTypes.array,
//   closeButton: PropTypes.func,
//   text: PropTypes.string,
//   actions: PropTypes.element,
//   bodyClickHandler: PropTypes.func,
// };

export default Modal;
