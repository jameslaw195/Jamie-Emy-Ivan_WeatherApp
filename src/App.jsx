import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const isGoodWeather = true;
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  const goodWeatherActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  return (
    <>
      {/* <List viewList={activities}></List> */}
      <List viewList={goodWeatherActivities}></List>

      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
