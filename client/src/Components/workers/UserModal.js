import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, Modal } from 'react-bootstrap';
import Axios from 'axios'
import '../css/UserModal.css';

const UserModal = (props) => {
  const [index, setIndex] = useState(0);
  const [ projectsData, setProjectsData ] = useState([])


  if(props.data.length > 0){
    const username = props.data[0].email
    const token = localStorage.getItem('accessToken');
    Axios.get("http://52.91.196.215:3001/api/image/user-projects",{username})
      .then((result) => {
          if(result.status === 200){
            setProjectsData(result.data)
          }
      }).catch(error => {
            setProjectsData(error.response.status)
      });
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                          />

                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                          />

                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                      </Modal.Body>
                      </Col>
                      </>
                  )
              })
          }
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default UserModal