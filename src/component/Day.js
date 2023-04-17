import dummy from "../db/vocabulary.json";
import Word from './Word';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';


function Day() {

  const day = useParams().day;
  const wordList = dummy.words.filter((word) => word.day === day);

  return (
    <>
      <Alert key={"warning"} variant={"warning"} style={{textAlign: "center"}}>Day {day}</Alert>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>영단어</th>
            <th>우리말 뜻<br/>(누르면 예문)</th>
            <th>뜻 확인</th>
            <th>저장</th>
          </tr>
        </thead>
        <tbody>
          {wordList.map((word) => (
           <Word word={word} key={word.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;

