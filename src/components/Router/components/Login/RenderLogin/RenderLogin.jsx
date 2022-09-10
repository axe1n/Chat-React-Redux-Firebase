import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function RenderLogin(props) {
  const {
    handlePassChange,
    handleEmailChange,
    handleSubmit,
    email,
    password,
    error,
  } = props;

  return (
    <Container
      sx={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'grid' }}>
        <Typography>Введите данные для входа</Typography>
        <TextField
          helperText="Введите вашу почту"
          name="email"
          type="email"
          sx={{ width: 200 }}
          onChange={handleEmailChange}
          value={email}
        />
        <TextField
          helperText="Введите вашу пароль"
          name="password"
          type="password"
          sx={{ width: 200 }}
          onChange={handlePassChange}
          value={password}
        />
        {error && (
          <Typography sx={{ border: '1px solid red', m: 1 }}>
            {error}
          </Typography>
        )}
        <Button variant="contained" type="submit" sx={{ width: 200 }}>
          Login
        </Button>
        <Typography sx={{ m: 1 }}>
          Нет аккаунта? <Link to="/signup">Sign Up</Link>
        </Typography>
      </form>
    </Container>
  );
}
