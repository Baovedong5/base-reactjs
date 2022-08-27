//class component
//function component

import React from "react";
import DisplayInfor from "./DisplayInfor";
import UserInfor from "./Userinfo";

class MyComponet extends React.Component {
  //JSX
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor name="Hoi Dan IT" age="30" />
        <hr />
        <DisplayInfor name="Phuong" age={20} myInfor={myInfor} />
      </div>
    );
  }
}

export default MyComponet;
