export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      name: event.target.elements.name.value,
      isForGoodWeather: event.target.elements.isForGoodWeather.checked,
    };

    // onAddActivity(formData);

    event.target.reset();
    event.target.elements.name.focus();
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
