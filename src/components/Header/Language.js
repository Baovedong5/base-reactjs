import NavDropdown from "react-bootstrap/NavDropdown";
const Language = (props) => {
  return (
    <>
      <NavDropdown
        title="Viet Nam"
        id="basic-nav-dropdown2"
        className="languages"
      >
        <NavDropdown.Item>English</NavDropdown.Item>
        <NavDropdown.Item>Viet Nam</NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Language;
