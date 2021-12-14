import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";



let changedValues = [
  {
    id: "",
    fName: "",
    lName: "",
    Number: "",
    mail: "",
    city: "",
  },
];

export default class GlobalModal extends Component {
  hideFunction = () => {};

  submitFunction = (e) => {
    e.preventDefault();

    changedValues[0].id = this.props.userId;
    changedValues[0].fName = e.target.fName.value;
    changedValues[0].lName = e.target.lName.value;
    changedValues[0].Number = e.target.number.value;
    changedValues[0].mail = e.target.mail.value;
    changedValues[0].city = e.target.city.value;

    this.props.editF(changedValues);
    this.props.onHide(e);
  };

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          closeVariant="white"
        >
          <form onSubmit={this.submitFunction}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.modalTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body   className="d-flex flex-column " >
            <div className="d-flex flex-column flex-lg-row  justify-content-between w-50 m-3 " >

              <h5>First Name</h5>
              <input
                type="text"
                placeholder="Enter Your First Name"
                defaultValue={this.props.fName}
                required
                name="fName"
              />

              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between w-50 m-3">

              <h5>Last Name</h5>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                defaultValue={this.props.lName}
                required
                name="lName"
              />
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-between w-50 m-3">

              <h5>Mail</h5>
              <input
                type="text"
                placeholder="Enter Your Mail Id"
                defaultValue={this.props.mail}
                name="mail"
              />

</div>
<div className="d-flex flex-column flex-lg-row justify-content-between w-50 m-3">
              <h5>Number</h5>
              <input
                type="text"
                placeholder="Enter Your Number"
                defaultValue={this.props.number}
                required
                name="number"
              />

</div>
<div className="d-flex flex-column flex-lg-row justify-content-between w-50 m-3" >

              <h5>City</h5>
              <input
                type="text"
                placeholder="Enter Your City"
                defaultValue={this.props.city}
                required
                name="city"
              />
            
            </div>   
          </Modal.Body>
          <Modal.Footer>
          <Button class="btn-secondary" type="submit" variant="success">
                {this.props.modalTitle}
              </Button>
            <Button class="btn-warning" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
}

