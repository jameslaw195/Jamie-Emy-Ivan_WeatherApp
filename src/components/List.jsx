export default function List({ viewList, isGoodWeather }) {
  return (
    <>
      {viewList.lenght === 0 ? (
        <h3>"No activities yet! Add an activity from below list"</h3>
      ) : (
        <h3>
          {isGoodWeather ? "Good weather activities ☀️" : "Bad Weather 🌧️"}
        </h3>
      )}
      <ul>
        {viewList.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}
