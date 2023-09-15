export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '5658209429mshb0c0ea13e60f6d9p16b99bjsncc1ca05e452a',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
  const response = await fetch(url, {headers: headers});
  const result = await response.json();

  return result;
}