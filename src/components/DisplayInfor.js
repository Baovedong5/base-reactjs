import React from "react";
import "./Displayinfor.scss";
import logo1 from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>> call constructor: 1");
    super(props);
    this.state = {
      isShowLitsUser: true,
    };
  }

  componentDidMount() {
    console.log(">>> call me component  did mount");
    setTimeout(() => {
      document.title = "Phuong";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">>> call me component  did update", this.props, prevProps);
    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length == 5) {
        alert("me");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowLitsUser: !this.state.isShowLitsUser,
    });
  };

  render() {
    console.log(">>> call me render");
    //props => viet tat propperties
    const { listUsers } = this.props;
    // console.log(listUsers);
    return (
      <div className="display-info-container">
        {/* <img src={logo1} /> */}
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
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
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
