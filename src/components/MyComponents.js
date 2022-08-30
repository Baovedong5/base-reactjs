//class component
//function component

import React, { useState } from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserinfo";

// class MyComponet extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "Hoi Dan IT", age: "30" },
//       { id: 2, name: "Phuong", age: "20" },
//       { id: 3, name: "Vu", age: "16" },
//     ],
//   };

//   handleAddNewUser = (userObject) => {
//     this.setState({
//       listUsers: [userObject, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = this.state.listUsers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: listUsersClone,
//     });
//   };

//   //JSX
//   render() {
//     return (
//       <>
//         <br />
//         <div className="a">
//           <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//           <br />
//           <br />
//           <DisplayInfor
//             listUsers={this.state.listUsers}
//             handleDeleteUser={this.handleDeleteUser}
//           />
//         </div>
//         <div className="b"></div>
//       </>
//     );
//   }
// }

const MyComponet = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi Dan IT", age: "30" },
    { id: 2, name: "Phuong", age: "20" },
    { id: 3, name: "Vu", age: "16" },
  ]);

  const handleAddNewUser = (userObject) => {
    setListUsers([userObject, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };
  return (
    <>
      <br />
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
      <div className="b"></div>
    </>
  );
};

export default MyComponet;
