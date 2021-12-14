import React, { Component } from "react";
import TableData from "../../Data/TableData.json";
import deleteRow from "../../Icons/deleteRow.svg";
import editRow from "../../Icons/editRow.svg";
import GlobalModal from "../Modal/GlobalModal";
import DeleteModal from "../Modal/DeleteModal";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

let delRowIcon = deleteRow;
let editRowIcon = editRow;
let editedValues;
let modalTitle;
let fNameModal,
  lNameModal,
  mailModal,
  numberModal,
  cityModal,
  userIdModal,
  userAction;
let sortingArrow = "▼"
let sortingfNameArrow = "▼"


export default class GlobalTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserData: TableData,
      modalShow: false,
      deleteModalShow: false,
    };
  }
  deleteRowFunction = (delId, e) => {
    for (let index = 0; index < this.state.UserData.length; index++) {
      if (this.state.UserData[index].id === delId) {
        this.state.UserData.splice(index, 1);
      }
    }

    this.setState({
      UserData: this.state.UserData,
    });
  };

  editRowFunction = (e) => {
    this.setState({
      modalShow: true,
    });
    modalTitle = "Edit User";
    userAction = "Edit User";
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

  addDataModal = () => {
    this.setState({
      modalShow: true,
    });
    modalTitle = "Add User";
    fNameModal = "";
    lNameModal = "";
    mailModal = "";
    numberModal = "";
    cityModal = "";
    userIdModal = "";
  };
  editedValFunction = (changedValues) => {
    editedValues = changedValues;
    if (editedValues.length > 0) {
      let keyArray = [];
      this.state.UserData.map((data) => {
        return keyArray.push(data.id);
      });

      if (keyArray.includes(editedValues[0].id)) {
        let data = this.state.UserData;
        data[editedValues[0].id - 1].fName = editedValues[0].fName;
        data[editedValues[0].id - 1].lName = editedValues[0].lName;
        data[editedValues[0].id - 1].Number = editedValues[0].Number;
        data[editedValues[0].id - 1].mail = editedValues[0].mail;
        data[editedValues[0].id - 1].city = editedValues[0].city;

        return this.state.UserData;
      } else {
        this.state.UserData = [
          ...this.state.UserData,
          {
            id: `${this.state.UserData.length + 1}`,
            fName: editedValues[0].fName,
            lName: editedValues[0].lName,
            Number: editedValues[0].Number,
            mail: editedValues[0].mail,
            city: editedValues[0].city,
          },
        ];

        return this.state.UserData;
      }
    }

    this.setState({
      UserData: this.state.UserData,
      modalShow: false,
    });
  
  };

  hideModalFunction = () => {
    this.setState({
      UserData: this.state.UserData,
      modalShow: false,
      deleteModalShow: false,
    });
  };
  showDeleteModalFunction = (e) => {
    this.setState({
      deleteModalShow: true,
    });

    modalTitle = e.target.title;
    for (let index = 0; index < this.state.UserData.length; index++) {
      if (this.state.UserData[index].id === e.target.id) {
        fNameModal = this.state.UserData[index].fName;
        userIdModal = this.state.UserData[index].id;
      }
    }
  };


  shortFunction=()=>{
   if(sortingArrow === "▼"){
    this.setState({
      UserData: this.state.UserData.sort((a, b) => a.id - b.id)
    });

    console.log(">>>>>>>>>>>>",this.state.UserData)

    sortingArrow="▲"

   }

   else{
    this.setState({
      UserData: this.state.UserData.sort((a, b) => b.id - a.id)
    });
    sortingArrow="▼"
   }
   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~",this.state.UserData)
   
  }

  // shortNameFunction=()=>{
   

  //   if(   sortingfNameArrow === "▲"){
  //    this.setState({
  //      UserData: this.state.UserData.sort( (a, b)=> {
  //       if (a.fName > b.fName) {
  //           return -1;
  //       }
  //       if (b.fName < a.fName) {
  //           return 1;
  //       }
  //       return 0;
  //   })
  //    });

  //    sortingfNameArrow="▼"
  //   }
  //   else{
  //     this.setState({
  //       UserData: this.state.UserData.sort( (a, b)=> {
  //        if (a.fName < b.fName) {
  //            return -1;
  //        }
  //        if (b.fName > a.fName) {
  //            return 1;
  //        }
  //        return 0;
  //    })
  //     });
  //     sortingfNameArrow="▲"
      
  //   }
    
  //  }
  render() {
    return (
      <>
        <Button
          clallName="btn-primary position-absolute fixed-top"
          variant="secondary"
          style={{ position: "fixed", top: "1vh", right: "1vw" }}
          onClick={this.addDataModal}
        >
          + Add User
        </Button>

        <Table striped bordered hover variant="dark" responsive="sm">
          <thead>
            <tr Ellipsis>
              <th  onClick={this.shortFunction}># {sortingArrow}</th>
              <th onClick={this.shortNameFunction} >First Name {sortingfNameArrow}</th>
              <th>Last Name</th>
              <th>Number</th>
              <th>Mail</th>
              <th>City</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.state.UserData.map((users, ind) => {
              return (
                <tr>
                  <td className="text-table">{ind+1}</td>
                  <td className="text-table">{users.fName}</td>
                  <td className="text-table">{users.lName}</td>
                  <td className="text-table">{users.Number}</td>
                  <td className="text-table">{users.mail}</td>
                  <td className="text-table">{users.city}</td>
                  <td className="text-table ">
                    <div class="d-flex justify-content-around align-content-center">
                      <img
                        src={editRowIcon}
                        class=" editRowClass "
                        alt="Edit Row"
                        title="Edit Row"
                        onClick={this.editRowFunction}
                        id={users.id}
                      />
                      <img
                        src={delRowIcon}
                        class=" deleteRowClass align-self-center"
                        alt="Delete Row"
                        data-toggle="tooltip"
                        title="Delete Row"
                        onClick={this.showDeleteModalFunction}
                        id={users.id}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <DeleteModal
          show={this.state.deleteModalShow}
          onHide={this.hideModalFunction}
          modalTitle={modalTitle}
          fName={fNameModal}
          userId={userIdModal}
          deleteFun={this.deleteRowFunction}
        />
        <GlobalModal
          editF={this.editedValFunction}
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
