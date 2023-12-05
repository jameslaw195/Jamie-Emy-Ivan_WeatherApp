import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [isGoodWeather, setIsGoodWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather/rainforest"
      );
      const weatherData = await response.json();

      setIsGoodWeather(weatherData);
    }
    fetchWeather();
  }, []);

  console.log(isGoodWeather.condition);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  const goodWeatherActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });
  return (
    <>
      <Header isGoodWeather={isGoodWeather}></Header>
      <List
        viewList={activities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      ></List>

      <Form onAddActivity={handleAddActivity}></Form>
    </>
  );
}

export default App;
