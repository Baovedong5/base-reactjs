import React from "react";
import "./Displayinfor.scss";
import logo1 from './../logo.svg'

class DisplayInfor extends React.Component {
  state = {
    isShowLitsUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowLitsUser: !this.state.isShowLitsUser,
    });
  };

  render() {
    //props => viet tat propperties
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div className="display-info-container">
        <img src={logo1}/>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowLitsUser === true
              ? "Hide list user"
              : "Show list user"}
          </span>
        </div>
        {this.state.isShowLitsUser && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
        {/* <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr />
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr />
        <div>My name is {name}</div>
        <div>My age is {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfor;
