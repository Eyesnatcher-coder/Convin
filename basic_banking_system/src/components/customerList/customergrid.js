// import mobilegif from "./mobile.gif"
// import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import undraw from '../undraw.png';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CustomerGrid = ({ bucketname, no_of_videos }) => {
    const navigate = useNavigate();

    const [show2, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [namechange,setName] = useState({
        bucketname:bucketname,
        newname:""
      })

    const handleChange = (event) =>{
        const { name,value } = event.target
        setName({
          ...namechange,
          [name]:value
        })
      }

      const updatebucket = () => {
        const {bucketname,newname} = namechange;
        // console.log(namechange);
        if (newname && bucketname) {
          axios.put("http://localhost:3001/makebucket", namechange)
            .then(res => console.log(res));
        }
        else {
          alert("invalid input")
        }
      }

      const deletebucket = () => {
        if(bucketname!==""){
        axios.delete("http://localhost:3001/makebucket", {data:{namechange}},)
            .then(res => console.log(res));
        }
      }

      const gettingid = async() => {
        await axios.post("http://localhost:3001/g/makebucket",namechange)
            .then(res => navigate(res.data._id))
            // .then(res => console.log(res));
      }


    return (
        <div>
            <div style={{ backgroundColor: "rgba(228, 228, 228, 1)", marginLeft: "20px", marginRight: "20px", marginTop: "10px", padding: "10px", height: "auto", border: "2px solid black", borderRadius: "20px", display: "flex", flexWrap: "wrap", minWidth: "300px" }}>
                <div>
                    <img style={{ maxWidth: "220px", minWidth: "40px", marginRight: "20px", boxShadow: "0px 0px 10px #000000", borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px" }} src={undraw} alt="mobileimage" /></div>
                <div style={{ margin: "20px", display: "block", textAlign: "left" }}>
                    <div>
                        <h5>{bucketname}</h5>
                    </div>
                    <div>
                        <h6 style={{ marginTop: "20px" }}>Number of videos:{no_of_videos}</h6>
                    </div>
                    {/* onClick={()=>navigate(`/customerlist/${account}`)} */}
                    <Button onClick={gettingid} style={{ marginTop: "20px" }} variant="dark" >View {bucketname}</Button>
                </div>
                <div style={{ marginLeft: "90%", marginTop: "-30px" }}>
                    <svg onClick={handleShow} style={{ backgroundColor: "black", border: "10px solid black", borderRadius: "10px", cursor:"pointer" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                    <Modal show={show2} onHide={handleClose}>
                        <Modal.Header >
                            <Modal.Title>Name your Bucket</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Form.Control name="newname" onChange={handleChange} type="text" placeholder="Normal text" /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onMouseLeave={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={updatebucket}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>


                    <svg onClick={deletebucket} style={{ backgroundColor: "black", border: "10px solid black", borderRadius: "10px", margin:"5px",cursor:"pointer" }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}


export default CustomerGrid;