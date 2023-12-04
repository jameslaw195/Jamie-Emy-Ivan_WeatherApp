import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  return (
    <>
      <List viewList={activities}></List>
      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
