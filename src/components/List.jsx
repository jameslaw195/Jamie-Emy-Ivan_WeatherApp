export default function List({ viewList }) {
  return (
    <ul>
      {viewList.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>
  );
}
