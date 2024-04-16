import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../Images/logo.svg";
import hamburger from "../../Images/icon-hamburger.svg";
import close from "../../Images/icon-close.svg";

function Navbar(props) {
    const navigate=useNavigate();
    const {active}=props;
    return <div className="Navbar">
        <div>
            <img className="Logo" src={logo} alt="Logo" onClick={()=>{navigate("/")}}/>
        </div>
        <hr className="rule" />
        <div className="Right">
            <button className={"links"+(active===0?" active":"")} onClick={() => {navigate("/")}}> <span className="number">00</span> HOME</button>
            <button className={"links"+(active===1?" active":"")} onClick={() => {navigate("/Destination")}}> <span className="number">01</span> DESTINATION</button>
            <button className={"links"+(active===2?" active":"")} onClick={() => {navigate("/Crew")}}> <span className="number">02</span> CREW</button>
            <button className={"links"+(active===3?" active":"")} onClick={() => {navigate("/Technology")}}> <span className="number">03</span> TECHNOLOGY</button>
        </div>
        <button className="hamburger-button btn"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img className="hamburger" src={hamburger} alt="sidebar" />
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                <img src={close} alt="close sidebar" />
            </button>
        </div>
        <div className="offcanvas-body">
            <div className="sidebar-right">
                <button className={"links"+(active===0?" active":"")} onClick={() => {navigate("/")}}> <span className="number">00</span> HOME</button>
                <button className={"links"+(active===1?" active":"")} onClick={() => {navigate("/Destination")}}> <span className="number">01</span> DESTINATION</button>
                <button className={"links"+(active===2?" active":"")} onClick={() => {navigate("/Crew")}}> <span className="number">02</span> CREW</button>
                <button className={"links"+(active===3?" active":"")} onClick={() => {navigate("/Technology")}}> <span className="number">03</span> TECHNOLOGY</button>
            </div>
        </div>
        </div>
    </div>
}

export default Navbar;