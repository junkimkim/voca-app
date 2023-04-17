import dummy from "../db/vocabulary.json";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "./Modal";

function DayList() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleClick = (day) => {
    setShowModal(true);
    setModalContent(
      <div>
        <div>
          <Link to={`/day/${day}`} onClick={handleClose}>
            <button className="choice">셀프 암기 테스트</button>
          </Link>
        </div>
        <div>
          <Link to={`/day/${day}/quicktest`} onClick={handleClose}>
            <button className="choice">랜덤 어휘 테스트</button>
          </Link>
        </div>
        <div style={{ textAlign: "center" }}>
          <Link to="/" onClick={handleClose}>
            <button className="choice">닫기</button>
          </Link>
        </div>
      </div>
    );
  };

  const handleClose = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <>
      <div className="list_day">
        {dummy.days.map((day) => (
          <div key={day.id}>
            <Link onClick={() => handleClick(day.day)}>Day {day.day}</Link>
          </div>
        ))}
      </div>

      <Modal show={showModal} onClose={handleClose}>
        {modalContent}
      </Modal>
    </>
  );
}

export default DayList;
