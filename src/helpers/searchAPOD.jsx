const API_KEY = import.meta.env.VITE_API_KEY;

const searchAPOD = async ({ queryKey }) => {
  const date = queryKey[1];
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status})`);
  }
  return response.json();
};

export default searchAPOD;
