import { Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { getAuth } from 'firebase/auth';

export default function Logout() {
  const auth = getAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    auth.signOut();
    alert('Вы вышли');
  };

  if (auth.currentUser) {
    return (
      <Container sx={{ width: '150px', m: 0, p: 1, display: 'grid' }}>
        <Box>{auth.currentUser.email}</Box>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    );
  }
}
