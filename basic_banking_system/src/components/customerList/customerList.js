import Customer from "./customer";
import {logins} from "./customerdata";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
// import axios from "axios";

const CustomerList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {
            setUsers(await logins);
        }
        getUsers();
    }, [])

    const navigate = useNavigate();

    return (
        <div>

            <div style={{ backgroundColor: "#FFFFFF10", margin: "4%", padding: "0.5%", borderRadius: "100px" }}>
                <div><Button variant="warning" onClick={() => {
                    // logins();
                    navigate("/customerlist")
                }}>
                    <svg style={{ marginBottom: "12px", margin: "8px", transform: "scale(1.2)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    View Each Customer
                </Button></div>
                <div style={{ display: "grid", gridTemplateColumns: "auto auto auto", marginTop: "10px" }}>
                    <div style={{ marginLeft: "80%", color: "white" }}>
                        <h2>Name</h2>
                    </div>
                    <div style={{ color: "white" }}>
                        <h2>Email</h2>
                    </div>
                    <div style={{ marginRight: "70%", color: "white" }}>
                        <h2>Savings</h2>
                    </div>
                </div>
                {
                    users.map((user) => {
                        return <Customer name={user.name} account={user.account} email={user.email} savings={user.savings} />
                    })
                }
            </div>
        </div>
    );
}
export default CustomerList;

