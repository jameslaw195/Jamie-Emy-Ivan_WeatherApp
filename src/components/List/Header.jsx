export default function Header({ isGoodWeather }) {
  return (
    <>
      <h1>
        {isGoodWeather.condition}
        {isGoodWeather.temperature} °C
      </h1>
      <p>{isGoodWeather.location}</p>
    </>
  );
}
