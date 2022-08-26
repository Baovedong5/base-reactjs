//class component
//function component

import React from "react";

class MyComponet extends React.Component {
  state = {
    name: "Phuong",
    address: "Hoi Dan IT",
    age: 26,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponet;
