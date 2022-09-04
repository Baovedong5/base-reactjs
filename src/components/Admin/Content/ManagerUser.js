import ModalCreateUser from "./ModalCreateUser";
import "./ManagerUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

const ManagerUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [dataUpdate, setDataUpdate] = useState({});

  useEffect(() => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

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
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
        />
      </div>
    </div>
  );
};

export default ManagerUser;
