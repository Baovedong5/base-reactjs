//class component
//function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./Userinfo";

class MyComponet extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan IT", age: "30" },
      { id: 2, name: "Phuong", age: "20" },
      { id: 3, name: "Vu", age: "19" },
    ],
  };

  //JSX
  render() {
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponet;
