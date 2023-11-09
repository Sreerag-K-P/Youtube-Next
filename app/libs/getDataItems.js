export default async function getDataItems(selected) {
  const response = await fetch(
    `https://youtube-v31.p.rapidapi.com/${selected}`,

    {
      method: "GET",
      params: {
        maxResults: "50",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    }
  );
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  return await response.json();
}
