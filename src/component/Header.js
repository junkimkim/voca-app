import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="header">
      {/* <img className="logo" src={require('../img/logo.png')}/> */}
      {/* <h1 style={{marginTop: "5px", marginBottom: "0"}}> */}
      <Link to="/">
        <img className="vocalogo" src={require("../img/vocalogo.png")} />
      </Link>

      {/* </h1> */}
      <div className="menu">
        <Link to="/mywords">
          {" "}
          <FontAwesomeIcon
            icon={faBookBookmark}
            size="2xl"
            style={{ color: "#007bc1" }}
          />{" "}
          내 단어장
        </Link>
      </div>
    </div>
  );
}
