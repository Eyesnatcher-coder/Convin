import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import DeleteCard from './deletecard';
// import { logins } from '../customerList/customerdata';
import { useState} from 'react';
import axios from 'axios';
import Cards from './card';
import DeleteCard from './deletecard';


const Paruser = ({ id, bucketname, no_of_videos, videos }) => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     async function getUsers() {
    //         setUsers(await logins);
    //     }
    //     getUsers();
    // }, [])

    const [show2, setShow] = useState(false);
    const [show3, setDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose3 = () => setDelete(false);
    const handleShow3 = () => setDelete(true);

    const [mycard, setCard] = useState({
        "_id": id,
        nameofvideo: "",
        link: ""
    })


    // const [deleteingcard,deleteingcardfunc] = useState([]);
    const [deleteingcard,deleteingcardfunc] = useState([{
        _id:"",
        nameofvideo:"",
        link:""
    }
    ]
    );



    const handleChange = (event) => {
        const { name, value } = event.target
        setCard({
            ...mycard,
            [name]: value
        })
    }

    const makecard = () => {
        const { _id, nameofvideo, link } = mycard;
        // console.log(bucket);
        if (_id && nameofvideo !== "" && link !== "") {
            axios.post(`http://localhost:3001/customerlist/${_id}`, mycard)
                .then(res => console.log(res))
        }
        else {
            alert("invalid input")
        }
    }


    // const deletebucket = () => {
    //     if(bucketname!==""){
    //     axios.delete("http://localhost:3001/makebucket", {data:{namechange}},)
    //         .then(res => console.log(res));
    //     }
    //   }

    const cardsToBeDeletebyServer = () =>{
        const {_id, nameofvideo} = mycard
        if (deleteingcard.length!==0) {
            console.log(nameofvideo);
            axios.post(`http://localhost:3001/customerlist/d/${_id}`, deleteingcard)
            .then(res => console.log(res))
        }
    }

    return (
        <div>
            <Card style={{ width: "90%", margin: "auto", marginTop: "50px" }}>
                <Card.Body>
                    <Card.Title>{`${bucketname}`}</Card.Title>
                    <div>
                        <svg onClick={handleShow} style={{ border: "10px solid orange", backgroundColor: "orange", borderRadius: "20px", marginLeft: "87%", marginTop: "-50px", position: "relative", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="black" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <Modal show={show2} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Creating a card</Modal.Title>
                            </Modal.Header>
                            <h6 style={{ marginLeft: "20px" }}> Name your Card</h6>
                            <Modal.Body><Form.Control name="nameofvideo" onChange={handleChange} type="text" placeholder="Normal text" /></Modal.Body>
                            <h6 style={{ marginLeft: "20px" }}> URL Link of video</h6>
                            <Modal.Body><Form.Control name="link" onChange={handleChange} type="text" placeholder="Normal text" /></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onMouseLeave={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={makecard}>
                                    Save Changes
                                    {/* {console.log(mycard)} */}
                                </Button>
                            </Modal.Footer>
                        </Modal>



                        <svg onClick={handleShow3} style={{ border: "10px solid black", backgroundColor: "black", borderRadius: "20px", marginLeft: "87%", position: "relative", cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                        <Modal show={show3} onHide={handleClose3}>
                            <Modal.Header >
                                <Modal.Title>Deleting card</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {videos.map((video) => {
                                    if (video.nameofvideo != null) {
                                        return <DeleteCard video={video} deleteingcard={deleteingcard}  deleteingcardfunction={deleteingcardfunc}/>
                                    }
                                    else {
                                        return <></>;
                                    }
                                }
                                )}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onMouseLeave={handleClose3}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={cardsToBeDeletebyServer}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </div>
                    <Card.Text style={{ marginTop: "-56px" }}>
                        No_of_videos: <b> {`${no_of_videos}`}</b>
                    </Card.Text>
                    <Card.Text>
                        Your Id is: <b> {`${id}`}</b>
                    </Card.Text>
                    <Card.Text style={{ display: "flex", flexWrap: "wrap" }}>
                        {videos.map((video) => {
                            if (video.nameofvideo != null)
                                return <Cards video={video} parentid={id} />
                            else return <></>
                        }
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
            <div style={{ height: "100px" }}></div>
        </div>
    );
}


export default Paruser;
