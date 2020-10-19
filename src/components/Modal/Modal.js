import React from "react";
import { Button } from "antd";
import "./Modal.css";

const Modal = ({ visible, book, onClose }) => {
  return visible ? (
    <>
      <section className="modal">
        <h1>Title: {book.title}</h1>
        <h1>Genre: {book.genre}</h1>
        <h1>ISBN: {book.isbn}</h1>
        <p>Summary: {book.summary}</p>
        <div className="buttonRow">
          <Button onClick={() => onClose()}>Close</Button>
        </div>
      </section>
    </>
  ) : null;
};

export default Modal;
