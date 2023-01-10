import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';

function DeleteCard(props) {
    const deleteingcard = props.deleteingcard;
    const tempfunc = props.deleteingcardfunction;
    useEffect(() => {
        tempfunc(deleteingcard);
    }, []);
    return (
        <Card style={{ width: "auto" }}>
            <Card.Body style={{ display: "flex" }}>
                <Card.Title>{props.video.nameofvideo}</Card.Title>
                <div style={{ marginLeft: "auto", display: "flex" }}>
                    <Button onClick={() => {
                        const _id = props.video._id;
                        var m= false;
                        for(var i=0;i<deleteingcard.length;i++)
                        if (deleteingcard[i]._id===_id && m===false){
                            m=true;
                            break;
                        }       
                        if(m!==true){
                            deleteingcard.push({"_id":props.video._id,"nameofvideo":props.video.nameofvideo,"link":props.video.link});
                        }
                        console.log(deleteingcard);
                        // props.deleteingcardfunc(deleteingcard);

                    }} variant="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-lg" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                        </svg></Button>
                    <Button onClick={() => {
                        const _id = props.video._id;
                        for(var i=0;i<deleteingcard.length;i++)
                            if(deleteingcard[i]._id === _id){
                                deleteingcard.splice(i, 1);
                                break;
                            }
                            console.log(deleteingcard);
                            // props.deleteingcardfunc(deleteingcard);
                        }
                    } variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg></Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default DeleteCard;