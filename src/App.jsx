function handleLocationChange(newLocation) {
  console.log("newlocation", newLocation);
  console.log("set", setLocation(newLocation));
  setLocation(newLocation);
}
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  const [isGoodWeather, setIsGoodWeather] = useState({});
  const [location, setLocation] = useState("");
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/weather/${location}`
      );
      const weatherData = await response.json();

      setIsGoodWeather(weatherData);
    }

    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 5000);

    return () => clearInterval(interval);
  }, [location]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }
  function handleLocationChange(newLocation) {
    setLocation(newLocation);
  }
  return (
    <main>
      <Menu onLocationChange={handleLocationChange}></Menu>
      <Header isGoodWeather={isGoodWeather}></Header>
      <List
        viewList={activities}
        isGoodWeather={isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      ></List>

      <Form onAddActivity={handleAddActivity}></Form>
    </main>
  );
}

export default App;
