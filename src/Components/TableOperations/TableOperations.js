import React, { Component } from "react";
import TableData from "../../Data/TableData.json";
import deleteRow from "../../Icons/deleteRow.svg";
import editRow from "../../Icons/editRow.svg";
import GlobalModal, { changedValues } from "../Modal/GlobalModal";
import {Button} from 'react-bootstrap'

let delRowIcon = deleteRow;
let editRowIcon = editRow;
let editedValues = changedValues;
let modalTitle;
let fNameModal, lNameModal, mailModal, numberModal, cityModal, userIdModal;

export default class TableOperations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserData: TableData,
      modalShow: false,
    };
  }

  deleteRowFunction = (e) => {
    console.log(this.state.UserData);

    for (let index = 0; index < this.state.UserData.length; index++) {
      if (this.state.UserData[index].id === e.target.id) {
        this.state.UserData.splice(index, 1);
      }
    }

    this.setState({
      UserData: this.state.UserData,
    });
    console.log(this.state.UserData);
  };

  editRowFunction = (e) => {
    this.setState({
      modalShow: true,
    });
    modalTitle = "e.target.title";
    for (let index = 0; index < this.state.UserData.length; index++) {
      if (this.state.UserData[index].id === e.target.id) {
        fNameModal = this.state.UserData[index].fName;
        lNameModal = this.state.UserData[index].lName;
        mailModal = this.state.UserData[index].mail;
        numberModal = this.state.UserData[index].Number;
        cityModal = this.state.UserData[index].city;
        userIdModal = this.state.UserData[index].id;
      }
    }
  };

  hideModalFunction = () => {
    this.setState({
      UserData: this.state.UserData,
      modalShow: false,
    },(this. AddData ));
    
  };
  
  AddData=()=>{
    this.setState({
      modalShow: true,
    });
    console.log(editedValues[0].id);

     if(editedValues[0].length >0){
      if((editedValues[0].id) === undefined  ){
        editedValues[0].id = this.state.UserData.length;
        this.state.UserData.push(editedValues[0])
      }
     }
      

     this.setState({
      UserData: this.state.UserData,
     });
    

  }

  editedValFunction = () => {

    this.setState({
      UserData: this.state.UserData.map((data) => {
        if (data.id === editedValues[0].id) {
          return {
            ...data,
            fName: editedValues[0].fName,
            lName: editedValues[0].lName,
            Number: editedValues[0].Number,
            mail: editedValues[0].mail,
            city: editedValues[0].city,
          };
        }
     
        else {
          return data;
        }
      }),
    });
  };

  render() {
    return (
      <>
        {/* <Button clallName="btn-primary" onClick={this.AddData}>Add</Button> */}
      
        {this.state.UserData.map((users) => {
          return (
            <tr>
              <td className="text-table">{users.id}</td>
              <td className="text-table">{users.fName}</td>
              <td className="text-table">{users.lName}</td>
              <td className="text-table">{users.Number}</td>
              <td className="text-table">{users.mail}</td>
              <td className="text-table">{users.city}</td>
              <td className="text-table">
                <img
                  src={editRowIcon}
                  class=" editRowClass "
                  alt="Edit Row"
                  onClick={this.editRowFunction}
                  id={users.id}
                />
                <img
                  src={delRowIcon}
                  class=" deleteRowClass"
                  alt="Delete Row"
                  data-toggle="tooltip"
                  title="Delete"
                  onClick={this.deleteRowFunction}
                  id={users.id}
                />
              </td>
            </tr>
          );
        })}

        <GlobalModal
          show={this.state.modalShow}
          onHide={this.hideModalFunction}
          modalTitle={modalTitle}
          fName={fNameModal}
          lName={lNameModal}
          mail={mailModal}
          number={numberModal}
          city={cityModal}
          userId={userIdModal}
        />
      </>
    );
  }
}
