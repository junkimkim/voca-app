import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteList } from '../AddWords';
import { useDispatch } from 'react-redux';

function WordDelete({ word }) {
  const [isDone, setIsDone] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  
  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteList(word.id));
  };

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>{word.id}</td>
      <td>
        {word.English} <p style={{fontSize: "0.7em" }}>{word.undefined}</p>
      </td>
      <td>
        {isShow && (
          <span
            onClick={() => {
              setModalShow(true);
            }}
            style={{ cursor: 'pointer', fontSize: "0.8em" }}
          >
            {word.Meaning}
          </span>
        )}
        <Modal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{fontSize: "0.8em" }}>{word.Sentences}</p>
            <p style={{fontSize: "0.8em" }}>{word.해석}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>닫기</Button>
          </Modal.Footer>
        </Modal>
      </td>
      <td>
        <button onClick={toggleShow}>
           {isShow ? '숨기기' : '뜻 보기'}
        </button>
      </td>
      <td>
        <button onClick={handleDelete}>삭제</button>
      </td>
    </tr>
  );
}

export default WordDelete;
