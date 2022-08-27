//class component
//function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserinfo";

class MyComponet extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: "30" },
      { id: 2, name: "Phuong", age: "20" },
      { id: 3, name: "Vu", age: "16" },
    ],
  };

  handleAddNewUser = (userObject) => {
    this.setState({
      listUsers: [userObject, ...this.state.listUsers],
    });
  };

  //JSX
  render() {
    return (
      <>
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfor listUsers={this.state.listUsers} />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponet;
