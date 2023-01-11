import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CenterModal(props) {
    var urls = props.src;
    var newurl = urls.replace('watch?v=','embed/');
    // console.log(newurl);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Video {props.nameofcard} is ready to play ....
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        <iframe style={{margin:"auto", height:"25vw" , minHeight:"200px"}} width="100%" src={newurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CenterModal;
