import React, { Component } from "react";
import { Modal, Button , Alert } from "react-bootstrap";


export default class DeleteModal extends Component {


     
ConfirmDeleteUser =(e)=>{
    
   
let delId = e.target.id
    this.props.deleteFun(delId);
    this.props.onHide(e)

}

  render() {
    return (
      <>
  
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.modalTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="display-6" >
         <h5>Are You Sure You want to delete user <strong >{this.props.fName}</strong></h5>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="danger" id={this.props.userId} onClick={this.ConfirmDeleteUser}>
                Delete User
              </Button>
            <Button class="btn-warning" onClick={this.props.onHide}>
              Cancle
            </Button>
          </Modal.Footer>
          
        </Modal>


      </>
    );
  }
}

