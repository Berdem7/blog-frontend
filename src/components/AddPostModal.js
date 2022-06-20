import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddPostModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center" id="contained-modal-title-vcenter">
          Add post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Control
              className="text-2xl font-bold"
              type="text"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUrl">
            <Form.Control type="text" placeholder="Image URL" />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formDescription">
            <Form.Control
              className="h-48 align-top"
              type="text"
              placeholder="Description"
            />
          </Form.Group>
          <div className="flex justify-between">
            <button
              onClick={props.onHide}
              className="py-2 px-3 rounded-md border-1 bg-white text-base font-bold text-black-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 rounded-md border-1 bg-sky-500 text-base font-bold text-white"
            >
              + Create post
            </button>
            {/* <Button>Cancel</Button> */}
            {/* <Button variant="primary" type="submit">
              + Create post
            </Button> */}
          </div>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
}

export default AddPostModal;
