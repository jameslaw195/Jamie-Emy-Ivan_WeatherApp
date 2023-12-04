import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
