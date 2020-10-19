import React, { useState } from 'react'
import {Modal, Button} from "react-bootstrap";

const Add =({addMovie}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const[title, setTitle]=useState("");
const[description, setDescription]=useState("");
const[posterUrl, setPosterUrl]=useState("");
const[rate, setRate]=useState(0);
    return (
<>
<Button style={{margin:"20px"}} variant="primary" onClick={handleShow}>
        Add a Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input className="title" placeholder="Title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
   <input className="description" placeholder="description" type={description}  onChange={(e)=>setDescription(e.target.value)} />
   <input className="posterUrl" placeholder="posterUrl" type="url" value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}/>
   <input className="rate" placeholder="rate"  value={rate} onChange={(e)=>setRate(e.target.value)} />
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> addMovie({title:title, description:description, posterUrl:posterUrl, rate:rate})}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
</>

    )
}

export default Add;




















