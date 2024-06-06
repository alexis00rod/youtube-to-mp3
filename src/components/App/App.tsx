import { useState } from "react";

const App = () => {
  const [urlToConverter, setUrlToConverter] = useState<string>("");
  const [urlDownload, setUrlDownload] = useState<string | undefined>(undefined);

  const handleUrlToConverter = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUrlToConverter(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url: string = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${urlToConverter}&quality=320`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f469387336mshdd2a48bd0a882a1p1002b2jsne8836ed405ad",
        "x-rapidapi-host": "youtube-mp3-downloader2.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.dlink) {
        setUrlDownload(result.dlink);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="urlToConverter"
          id="urlToConverter"
          value={urlToConverter}
          onChange={handleUrlToConverter}
        />
        <button type="submit">Convertir</button>
      </form>
      {urlDownload && <a href={urlDownload}>Descargar</a>}
    </div>
  );
};

export default App;
