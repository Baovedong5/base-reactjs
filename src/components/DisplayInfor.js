import React from "react";

class DisplayInfor extends React.Component {
  render() {
    //props => viet tat propperties
    const { age, name } = this.props;
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfor;
