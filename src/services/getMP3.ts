export const getMP3 = async (url: string) => {
  const urlBase: string =
    "https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom";
  const urlToConverter: string = url;
  const urlQuality: string = "320";

  const urlFetch: string = `${urlBase}/?url=${urlToConverter}&quality=${urlQuality}`;

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiHost = import.meta.env.VITE_API_HOST;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": apiHost,
    },
  };

  try {
    const response = await fetch(urlFetch, options);
    const result = await response.json();
    return result.dlink;
  } catch (err) {
    console.log(err);
  }
};
