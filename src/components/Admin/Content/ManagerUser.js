import ModalCreateUser from "./ModalCreateUser";
import "./ManagerUser.scss";
const ManagerUser = (props) => {
  return (
    <div className="manager-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
        <ModalCreateUser />
      </div>
    </div>
  );
};

export default ManagerUser;
