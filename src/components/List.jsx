export default function List({ viewList }) {
  return (
    <ul>
      <h3>{"heading"}</h3>

      {viewList.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
