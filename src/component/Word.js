import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addList } from "../AddWords";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function Word({ word }) {
  const [isDone, setIsDone] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  // const toggleDone = () => {
  //   setIsDone(!isDone);
  // };

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  let dispatch = useDispatch();

  return (
    <tr id="tableData" className={isDone ? "off" : ""}>
      <td>{word.id}</td>
      <td>
        {word.English} <p style={{ fontSize: "0.7em" }}>{word.undefined}</p>
      </td>
      <td>
        {isShow && (
          <span
            onClick={() => {
              setModalShow(true);
            }}
            style={{ cursor: "pointer", fontSize: "1em" }}
          >
            {word.Meaning}
          </span>
        )}
        <Modal
          className="custom-modal"
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ fontSize: "0.8em" }}>{word.Sentences}</p>
            <p style={{ fontSize: "0.8em" }}>{word.해석}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>닫기</Button>
          </Modal.Footer>
        </Modal>
      </td>
      <td>
        <button onClick={toggleShow}>{isShow ? "숨기기" : "뜻 보기"}</button>
      </td>
      <td>
        <FontAwesomeIcon
          onClick={() => {
            dispatch(addList(word));
          }}
          icon={faBookmark}
          style={{ color: "#1e90ff", cursor: "pointer" }}
        />
        {/* <input type={'checkbox'} checked={isDone} onChange={toggleDone}></input> */}
      </td>
    </tr>
  );
}

export default Word;
