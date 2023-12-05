import { uid } from "uid";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const newActivity = {
      id: uid(),
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };

    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(newActivity);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1></h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Write your activity ..."
      />

      <label htmlFor="isforGoodWeather">Good Weather Activity</label>
      <input
        type="checkbox"
        name="isForGoodWeather"
        id="isforGoodWeather"
      ></input>

      <button type="submit">Submit</button>
    </form>
  );
}
