import Headers from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import MyWords from "./component/MyWords";
import RandomTest from "./component/RandomTest";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [watched, setWatched] = useState([]);

  useEffect(() => {
    // Get the saved data from local storage
    const savedData = localStorage.getItem('watched');

    // Check if the saved data exists and parse it back into an array or an object
    const parsedData = savedData ? JSON.parse(savedData) : [];

    // Update the state with the parsed data
    setWatched(parsedData);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/day/:day/quicktest" element={<RandomTest />} />
          <Route path="/mywords" element={<MyWords />}/>
          <Route element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
