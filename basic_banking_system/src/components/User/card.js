import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import videoimage from './videoimage.png';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Cards(props) {

    const [show2, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [namechange,setName] = useState({
        nameofvideo:props.video.nameofvideo,
        newname:""
      })

      const handleChange = (event) =>{
        const { name,value } = event.target
        setName({
          ...namechange,
          [name]:value
        })
      }

    const changecardname = () =>{
        const {nameofvideo,newname} = namechange;
        // console.log(namechange);
        if (newname && nameofvideo) {
          axios.put(`http://localhost:3001/cardname/${props.parentid}`, namechange)
            .then(res => console.log(res));
        }
        else {
          alert("invalid input")
        }
    }

  return (
    <Card style={{ width:"auto", maxWidth:"18rem",margin:"10px"}}>
      <Card.Img variant="top" src={videoimage} />
      <Card.Body>
        <Card.Title>{props.video.nameofvideo}</Card.Title>
        <Card.Text>
          {props.video.link}
        </Card.Text>
        <svg onClick={handleShow} style={{ backgroundColor: "black", border: "10px solid black", borderRadius: "10px", cursor:"pointer" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
        </svg>
        <Modal show={show2} onHide={handleClose}>
                        <Modal.Header >
                            <Modal.Title>Rename you card</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Form.Control name="newname" onChange={handleChange} type="text" placeholder="Normal text" /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onMouseLeave={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={changecardname}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
      </Card.Body>
    </Card>
  );
}

export default Cards;