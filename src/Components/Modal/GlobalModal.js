import React,{Component} from "react";
import {Modal , Button } from "react-bootstrap"



// let fname,lName,mail,city,number,userIds

let changedValues = [{
    "id" : "",
    "fName": "",
    "lName":"",
    "Number" : "",
    "mail" : "",
    "city" : ""
}];


 
  
export default class GlobalModal  extends Component {
    constructor(props) {
      super(props);

    
      this.state = {
      
      };
    }
  




submitFunction=(e)=>{
    e.preventDefault()


        changedValues[0].id = this.props.userId
        changedValues[0].fName = e.target.fName.value
        changedValues[0].lName = e.target.lName.value
        changedValues[0].Number = e.target.number.value
        changedValues[0].mail = e.target.mail.value
        changedValues[0].city = e.target.city.value
    
        // console.log(changedValues);
  
    
    }
  
    render() {
  
      return (

        <>
  
           <Modal
           show={this.props.show} onHide={this.props.onHide}
      
                 size="lg"
                 aria-labelledby="contained-modal-title-vcenter"
                 centered
               >
                 <Modal.Header closeButton >
                   <Modal.Title id="contained-modal-title-vcenter">
                    {this.props.modalTitle}
                   </Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <form  onSubmit={this.submitFunction} >
                   <h4>{this.props.fName}</h4>
                 <input type="text" placeholder={this.props.fName} name="fName"/>
                 <h6>Last Name</h6>
                 <input type="text" placeholder={this.props.lName}  name="lName"/>
                 <h6>Mail</h6>
                 <input type="text" placeholder={this.props.mail}   name="mail" />
                 <h6>Number</h6>
                 <input type="text" placeholder={this.props.number}  name="number" />
                 <h6>City</h6>
                 <input type="text" placeholder={this.props.city}   name="city"  />
                 <Button class="btn-secondary" type="submit" onClick={this.props.onHide} >Add Data</Button>
                 </form>
                 </Modal.Body>
                 <Modal.Footer>
                

                   <Button class="btn-warning"  onClick={this.props.onHide}>Close</Button>
                 </Modal.Footer>
               </Modal>
               </>
      );
    }
  }

  export {changedValues}
  

  
















