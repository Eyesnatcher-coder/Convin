import { logins } from "./customerdata";
// import Button from 'react-bootstrap/Button';
import CustomerGrid from "./customergrid";
import { useState, useEffect, useRef } from 'react';
import "./gridcustomerlist.css";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
// import bucketForm from "../bucket/bucketForm";
import Modal from 'react-bootstrap/Modal';
import React from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import bottom from '../../bottom.svg';
const GridcustomerList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {
            setUsers(await logins);
        }
        getUsers();
    }, [])


    const [show, setShows] = useState(false);
    const target = useRef(null);

    const [show2, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //bucket schema functions
    const [bucket,setBucket] = useState({
        bucketname:"",
        no_of_videos:0,
        videos:[{nameofvideo: null, link: null}]
      })
    
      const handleChange = (event) =>{
        const { name,value } = event.target
        setBucket({
          ...bucket,
          [name]:value
        })
      }

      const makebucket = () => {
        const { bucketname} = bucket;
        console.log(bucket);
        if (bucketname!=="") {
          axios.post("http://localhost:3001/makebucket", bucket)
            .then(res => console.log(res))
            
        }
        else {
          alert("invalid input")
        }
      }


    return (
        <div>
       
            <div style={{ position: "sticky", marginLeft: "80%", marginTop: "8.5%" }}>
                <Button style={{ padding: "10px", borderRadius: "18px", backgroundColor: "orange", border: "0px" }}  onClick={handleShow}  ref={target} onMouseOver={() => setShows(!show)}>

                    <Modal show={show2} onHide={handleClose}>
                        <Modal.Header >
                            <Modal.Title>Name your Bucket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Form.Control name="bucketname" onChange={handleChange} type="text" placeholder="Normal text" /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onMouseLeave={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={makebucket}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <svg className="plussign" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </Button>
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            Click to add<br></br>
                            a Bucket
                        </Tooltip>
                    )}
                </Overlay>
            </div>
            <div style={{paddingTop:"10px", margin: "5px", padding: "0.5%", borderRadius: "10px", display: "block", flexWrap: "wrap", justifyContent: "center", backgroundColor:"rgba(130, 0, 69, 0.8)" }}>
                {
                    users.map((user) => {
                        return <CustomerGrid bucketname={user.bucketname} no_of_videos={user.no_of_videos} />
                    })}

            </div>
            <div><img style={{position:"sticky"}} src={bottom} alt="headerbg" /></div>

        </div>
    );
}
export default GridcustomerList;

