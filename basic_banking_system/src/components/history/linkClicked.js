

const LinkClicked = ({ nameofvideo, link, time }) => {
    return (
        <div style={{display:"flex",marginBottom:"10px"}}>
            <div style={{paddingLeft:"10px", width: "105px", display: "grid", backgroundColor: "#0296ED", borderTopLeftRadius: "15px", borderBottomLeftRadius: "10px", marginLeft: "10px"}}>
                <div style={{  marginTop: "20px", textAlign: "left"}}>
                    <h6>VideoName</h6>
                </div>
                <div style={{  textAlign: "left" }}>
                    <h6>Link</h6>
                </div>
                <div style={{   textAlign: "left"}}>
                    <h6> Time & Date</h6>
                </div>
            </div>
            <div style={{ display: "block", marginRight: "10px", backgroundColor: "#FFFFFF80", padding: "10px", borderTopRightRadius: "10px", overflow: "hidden", borderBottomRightRadius: "10px",width:"100%" }}>
                <div style={{ color: "black", textAlign: "left", margin: "10px" }}>
                    {nameofvideo}
                </div>
                <div style={{ color: "black", textAlign: "left", margin: "10px" }}>
                    <strong>
                        {link}
                    </strong>
                </div>
                <div style={{ color: "black", textAlign: "left", margin: "10px" }}>
                    {time}
                </div>
            </div>
        </div>
    );
}

export default LinkClicked;