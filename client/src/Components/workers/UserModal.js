import React from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import '../css/UserModal.css';

const UserModal = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
            >
            {
                props.data.map((element,key) =>{
                    return(
                        <><Col key={key}>
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                            {element.email}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Centered Modal</h4>
                            <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                            </p>
                        </Modal.Body>
                        </Col>
                        </>
                    )
                })
            }
          <Modal.Footer>
            <Button onClick={props.onHide}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      );
}

export default UserModal