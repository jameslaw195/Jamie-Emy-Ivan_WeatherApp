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
    <form onSubmit={handleSubmit} className="form">
      <h3>Add new activity:</h3>
      <div className="activity_container">
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Write your activity ..."
          className="input_activity"
        />
      </div>
      <div className="weather_checkbox_container">
        <label htmlFor="isforGoodWeather">Good Weather Activity:</label>
        <input
          type="checkbox"
          name="isForGoodWeather"
          id="isforGoodWeather"
        ></input>
      </div>
      <button className="form_button" type="submit">
        Add activity 🎉
      </button>
    </form>
  );
}
