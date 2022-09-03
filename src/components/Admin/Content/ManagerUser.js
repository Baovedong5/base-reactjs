import ModalCreateUser from "./ModalCreateUser";
import "./ManagerUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
const ManagerUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);

  return (
    <div className="manager-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary "
            onClick={() => setshowModalCreateUser(true)}
          >
            {" "}
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManagerUser;
