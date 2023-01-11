import { useState, useEffect } from 'react';
import { storage } from './historydata';
import LinkClicked from './linkClicked';


const History = () => {
    const [listofvideo, setTrans] = useState([]);
    useEffect(() => {
        async function getTrans() {
            setTrans(await storage);
        }
        getTrans();
    }, [])
    return (
        <div>
            <div style={{ display: "block", position:"relative",}}>
                <div style={{marginTop:"100px", height: "50px", textAlign: "center", borderBottom: "5px solid #FFFFFF56" }}>
                    <h2 style={{ color: "black" }}>Your Video History</h2>
                </div>
                <div>
                    <div style={{ marginTop: "10px", backgroundColor: "rgba(201, 28, 88, 1)", marginLeft: "20px", marginRight: "20px", borderRadius: "15px" }}>
                        <div style={{ display: "block",padding:"10px" }}>
                            <div>
                                {
                                    listofvideo.slice(0).reverse().map((block)=>{
                                        return <LinkClicked nameofvideo={block.nameofvideo} link={block.link} time={block.time} ></LinkClicked>
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