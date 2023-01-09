import mobilegif from "./mobile.gif"
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';



const CustomerGrid = ({ name, account ,email, savings }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{backgroundColor:"#FFFFFF89",margin:"10px",padding:"50px",minWidth:"350px",height:"220px",border:"2px solid black",borderRadius:"20px",display:"flex"}}>
                <div><img style={{maxWidth:"120px",marginRight:"20px",borderRadius:"60px",boxShadow:"0px 0px 10px #000000"}} src={mobilegif} alt="mobileimage" /></div>
                <div style={{ display: "block",textAlign:"left"}}>
                    <div>
                        <h5>{name}</h5>
                    </div>
                    <div>
                        <h6>{email}</h6>
                    </div>
                    <div>
                        <h6>₹{savings}</h6>
                    </div>
                    <Button onClick={()=>navigate(`/customerlist/${account}`)} variant="dark" >View {name}</Button>
                </div>
            </div>
        </div>
    );
}


export default CustomerGrid;