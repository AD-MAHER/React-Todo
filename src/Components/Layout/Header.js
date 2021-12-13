import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import GlobalModal from '../Modal/GlobalModal'
export default class Header extends Component {


    constructor(props) {
        super(props);
    
        this.state = {
           
            modalShow :false,
        };
      }

showFunction =()=>{
    this.setState({
        modalShow :true,
      });   
}

hideModalFunction =()=>{
    this.setState({
        modalShow :false,
       
      });

}
    render() {
        return (
           <>
<header className='row text-white display-4 bg-dark text-center  mb-1'>
        <div className='col-10'><strong className='text-white display-4 text-center'>User Data </strong></div>
        <div className='coll-1'><Button onClick={this.showFunction} >Add</Button></div>
     </header>

    <GlobalModal
     show={this.state.modalShow} 
     onHide={this.hideModalFunction} 
     modalTitle="Add User Data"
     fName="Enter Your First Name"
          lName="Enter Your Last Name"
          mail="Enter Your Mail"
          number="Enter Your Number"
          city="Enter Your City"
          userId="4"
         
     
     /> 
     </>
        )
    }
}
