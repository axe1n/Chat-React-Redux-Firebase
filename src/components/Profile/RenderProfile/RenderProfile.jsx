import { Container, Typography, Button, TextField } from '@mui/material';

export default function RenderProfile(props) {
  const { name, handleChange, setName, value } = props;

  return (
    <Container maxWidth="lg" className="chats" align="center">
      <Typography variant="h3" sx={{ mt: 10 }}>
        Profile
      </Typography>
      <Container
        sx={{
          width: '400px',
          display: 'grid',
          justifyContent: 'center',
          alignContent: 'center',
          marginBottom: '15px',
        }}
      >
        <TextField type="text" value={value} onChange={handleChange} />
        <Button variant="contained" onClick={setName} sx={{ m: 1 }}>
          Change Name
        </Button>
      </Container>
      <Typography>Сейчас ваше имя: "{name}"</Typography>
    </Container>
  );
}
