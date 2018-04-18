async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/people/')
  const data = await response.json();
  console.log(data);
}
window.fetchStarship();