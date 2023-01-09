import "../../Home.css"
import banking from "./banking.gif";



const Content = () => {
    return (
        <div className='frontview'>
            <div>
                <div style={{ paddingTop: "10%" }}>
                    <div>
                        <img className="frontimage"  src={banking} alt="bankimage" />
                    </div>
                </div>
            </div>
            <div style={{margin:"auto"}}>
                <h1>
                    Make Your banking Easy with <br></br><div style={{backgroundColor:"#00000078",width:"50%",padding:"10px",borderRadius:"20px"}}><p >Mera Bank</p></div>
                </h1>
            </div>
        </div>
    );
}

export default Content;