import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Debitcard from './debitcard.gif';
import Transfer from './transfer.gif';
import Tick from './transactionCompleted.gif'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { logins } from '../customerList/customerdata';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Paruser = ({ name, email, account, savings }) => {
    const [users, setUsers] = useState([]);
    var [valueofperson, setvalues] = useState({
        nameofperson: "",
        savingvalue: 0
    })
    const savinginitial = savings;


    useEffect(() => {
        async function getUsers() {
            setUsers(await logins);
        }
        // selectedperson()

        getUsers();
    }, [])

    const [latestSavings, setSavings] = useState(savings);



    const [change, setchange] = useState({
        name: name,
        account: account,
        email: email,
        savings: savings
    })

    const buttonenable = () => {
        // console.log(document.getElementsByTagName("Button")[2].disabled=false)
        document.getElementsByTagName("Button")[2].disabled = false
    }


    const handlechange = (event) => {
        const { name, value } = event.target
        const savings = change.savings;
        // valueofperson.valuetochange=value;

        // console.log(document.getElementsByTagName("Button")[2].disabled=true)
        document.getElementsByTagName("Button")[2].disabled = true
        if (savings >= value) {
            window.setTimeout(() => {
                setchange({
                    ...change,
                    [name]: savings - value
                })
                // console.log(savings, value);
                buttonenable()
            }, 1000)
        }
        else {
            alert("you dont have enough balance");
            event.target.value=0;
        }

    }

    const putting = () => {
        axios.put(process.env.REACT_APP_API_URL + `/customerlist/${account}`, change).then(() => {
            setSavings(change.savings)
            console.log("successfully updated")
        })
    }

    const selectedperson = (e) => {
        // var e = document.getElementById("person_name");
        var name_person = e.target.options[e.target.selectedIndex].text;
        const savingfinal = change.savings;
        const new_value = {
            nameofperson: name_person,
            savingvalue: savinginitial - savingfinal
        };
            setvalues(new_value)
            // console.log(new_value)
    }

    const reciever = () => {
        console.log(valueofperson)
         // eslint-disable-next-line
        axios.post(process.env.REACT_APP_API_URL +"/customerlist/", valueofperson)
    }


    const transactiondone = () => {
        document.getElementById("imagetop").src = Tick;
    }
    const transaction = () => {
        document.getElementById("imagetop").src = Transfer;
        setTimeout(() => {
            transactiondone();
        }, 3000)
    }


    return (
        <div>
        <Card style={{ width: "40%", margin: "auto", marginTop: "100px" }}>
            <img id='imagetop' style={{ width: "30%", margin: "auto" }} variant="top" src={Debitcard} alt="debitcard" />
            <Card.Body>
                <Card.Title>Hello, {`${name}`}</Card.Title>
                <Card.Text>
                    Your Accout No is: <b> {`${account}`}</b>
                </Card.Text>
                <Card.Text>
                    Email registered to your account is <b>{`${email}`}</b>
                </Card.Text>
                <Card.Text>
                    Amount left in your Account is: ₹<b>{`${latestSavings}`}</b>
                </Card.Text>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Press To Transfer Money</Accordion.Header>
                        <Accordion.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Amount</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>₹</InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" name={"savings"} onChange={handlechange} />
                                </InputGroup>
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                <Form.Check type="checkbox" label="Check to confirm amount" onClick={selectedperson} />
                            </Form.Group> */}
                            <Form.Group className="mb-3">
                                <Form.Label>Transfer to</Form.Label>
                                <Form.Select id="person_name" onChange={selectedperson} >
                                    {
                                        users.map((user) => {
                                            return <option>{`${user.name}`}</option>
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br></br>
                <Button className="transferbutton" variant="success" onClick={() => {
                    document.getElementById("imagetop").src = Transfer;
                    putting();
                    reciever();
                    setTimeout(() => {
                        transaction();
                    }, 1)

                }}>Transfer Money</Button>
            </Card.Body>
        </Card>
        <div style={{height:"100px"}}></div>
        </div>
    );
}


export default Paruser;
