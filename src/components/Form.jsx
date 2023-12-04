export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1></h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Write your activity ..."
      />

      <label htmlFor="goodWeatherActivities">Good Weather Activity</label>
      <input type="checkbox" name="goodWeatherActivities"></input>

      <button type="submit">Submit</button>
    </form>
  );
}
