import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux/es/exports';
import { getMessageAuthor } from '../../store/selectors';

export default function Home(props) {
  const { authenticated } = props;

  const { name } = useSelector(getMessageAuthor, shallowEqual);

  return (
    <Container
      maxWidth="lg"
      sx={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container align="center">
        <Typography variant="h3">Home Page</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: 250,
            marginTop: 5,
            marginLeft: 0.75,
          }}
        >
          {authenticated ? (
            <Typography>Привет, {name}!</Typography>
          ) : (
            <>
              <Button variant="contained" sx={{ textDecoration: 'none' }}>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Sign In
                </Link>
              </Button>
              <Button variant="contained">
                <Link
                  to="/signup"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </Box>
      </Container>
    </Container>
  );
}
