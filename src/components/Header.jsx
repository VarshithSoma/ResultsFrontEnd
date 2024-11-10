import logo from "../assets/logo.png";
import snist from "../assets/clg.png";
import "./header.css";
function Header() {
  return (
    <div className="container-nav">
      <div className="nav">
        <img src={snist} className="snist" />
      </div>
    </div>
  );
}
export default Header;
