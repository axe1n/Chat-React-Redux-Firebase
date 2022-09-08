import { Container, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function RenderSignUp(props) {
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
        <Typography>Зарегистрируйтесь</Typography>
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
          Уже есть аккаунт? <Link to="/login">Sign In</Link>
        </Typography>
      </form>
    </Container>
  );
}
