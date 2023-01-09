import { useState, useEffect } from 'react';
import { storage } from './historydata';
import Eachtran from './eachtran';


const History = () => {
    const [trans, setTrans] = useState([]);
    useEffect(() => {
        async function getTrans() {
            setTrans(await storage);
        }
        getTrans();
    }, [])
    return (
        <div>
            <div style={{ display: "block" }}>
                <div style={{ marginTop: "20px", height: "50px", backgroundColor: "black", textAlign: "center", borderBottom: "5px solid #FFFFFF56" }}>
                    <h2 style={{ color: "#FFFFFF50" }}>Transaction History</h2>
                </div>
                <div>
                    <div style={{ marginTop: "10px", backgroundColor: "#FFFFFF50", marginLeft: "50px", marginRight: "50px", borderRadius: "15px" }}>
                        <div style={{ display: "block" }}>
                            <div style={{ display: "flex", backgroundColor: "#e27602", borderBottom: " 2px solid black" }}>
                                <div style={{ margin: "auto", marginTop: "30px" }}>
                                    <h6>Sender's <br></br> Account No.</h6>
                                </div>
                                <div style={{ margin: "auto", marginTop: "30px" }}>
                                    <h6>Amount Send</h6>
                                </div>
                                <div style={{ margin: "auto", marginTop: "30px" }}>
                                    <h6> Reciever's Name</h6>
                                </div>
                                <div style={{ margin: "auto", marginTop: "30px" }}>
                                    <h6>Reciever's
                                        <br></br>New Balance</h6>
                                </div>
                            </div>
                            <div>
                            {/* {
                                console.log(trans)

                            } */}
                            {/* <Eachtran accountno={2345} amoundsend={"300"} recievername={"om"} recieverbalance={1000} /> */}
                                {
                                    trans.slice(0).reverse().map((tran)=>{
                                        return <Eachtran senderaccountno={tran.senderaccountno} amountsend={tran.amountsend} recievername={tran.recievername} recieverbalance={tran.recieverbalance}></Eachtran>
                                    })
                                }
                            </div>
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;