import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [isGoodWeather, setIsGoodWeather] = useState(true);
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weatherData = await response.json();

      setIsGoodWeather(weatherData);
    }
    fetchWeather();
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  const goodWeatherActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });

  return (
    <>
      {/* <List viewList={activities}></List> */}
      <List
        viewList={goodWeatherActivities}
        isGoodWeather={isGoodWeather}
      ></List>

      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
