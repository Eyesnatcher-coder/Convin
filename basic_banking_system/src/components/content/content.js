import "../../Home.css"
import mainicon from "./mainicon.png";
import bottom from "../../bottom.svg";



const Content = () => {
    return (
        <div>
        <div className='frontview'>
            <div>
                <img style={{position:"sticky", border: "none", boxShadow: "0px 0px 0px" }} className="frontimage" src={mainicon} alt="bankimage" />
            </div>
            <div style={{marginTop:"20vw",color:"black", paddingRight:"10%",paddingLeft:"10%"}}>
            <h3>Stream your favorite videos non-stop with PlayMe ! </h3>
            <p style={{paddingLeft:"20%",paddingRight:"20%"}}>Welcome to the world of endless video streaming! Our video playlist app is the perfect destination for all your entertainment needs. Create your own personalized playlists today. Happy watching!</p>
            </div>
        </div>
        <div><img style={{position:"sticky"}} src={bottom} alt="headerbg" /></div>
        </div>
    );
}

export default Content;