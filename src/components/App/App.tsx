import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { getMP3 } from "../../services";

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
    const url = await getMP3(urlToConverter);
    if (url) {
      setUrlDownload(url);
    }
  };

  const styles = {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    height: "100vh",
  };

  return (
    <Container maxWidth="sm" sx={styles}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="urlToConverter"
          value={urlToConverter}
          onChange={handleUrlToConverter}
          label="Url"
          variant="outlined"
          size="small"
        />
        <Button type="submit" variant="contained">
          Convertir
        </Button>
      </form>
      {urlDownload && (
        <Button href={urlDownload} variant="contained" color="success">
          Descargar
        </Button>
      )}
    </Container>
  );
};

export default App;
