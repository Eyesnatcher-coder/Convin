
const Customer = ({ name, email, savings }) => {
    return (
        <div>
            <div style={{ padding: "15px", marginRight: "10%", marginLeft: "10%", paddingLeft: "10%", paddingRight: "10%", display: "grid", gridTemplateColumns: "auto auto auto", backgroundColor: "#FFFFFF32", border: "2px solid black", borderRadius: "10px" }}>
                <div>
                    <h5>{name}</h5>
                </div>
                <div>
                    <h6>{email}</h6>
                </div>
                <div>
                    <h6>₹{savings}</h6>
                </div>
            </div>
        </div>

    );
}


export default Customer;