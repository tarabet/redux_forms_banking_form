import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const SubmitModal = ({ showModal, hideModal, result }) => {
  return (
    <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Submit status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{result ? 'SUCCESS' : 'FAILED'}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
