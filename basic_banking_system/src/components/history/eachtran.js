

const Eachtran = ({ senderaccountno, amountsend, recievername, recieverbalance }) => {
    return (
        <div>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", margin: "10px", backgroundColor: "#FFFFFF80", padding: "20px", borderRadius:"10px" }}>
                <div style={{ color: "blue" }}>
                    <strong>
                        {`${senderaccountno}`}
                    </strong>
                </div>
                <div style={{ color: "red",fontWeight:"500"  }}>
                    {`₹ ${amountsend}`}
                </div>
                <div style={{ color: "black" }}>
                    <strong>
                        {`${recievername}`}
                    </strong>
                </div>
                <div style={{ color: "green",fontWeight:"500" }}>
                    {`₹ ${recieverbalance}`}
                </div>
            </div>
        </div>
    );
}

export default Eachtran;