import {
  Container,
  Typography,
  Box,
  CircularProgress,
  List,
  ListItem,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { fetchGistsList } from '../../../asyncAction/fetchGistsList';
import { API_URL_PUBLIC } from '../../../constants/constants';

export default function RenderGists(props) {
  const { gistsList, error, status } = props;

  const dispatch = useDispatch();

  if (status === 'failure') {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h3">{error}</Typography>

        <Button
          variant="contained"
          onClick={() => dispatch(fetchGistsList(API_URL_PUBLIC))}
        >
          Retry
        </Button>
      </Container>
    );
  }

  if (status === 'request') {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="chats" align="center">
      <Typography variant="h3" gutterBottom component="header">
        Привет! Тут работа с API!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <List>
          {gistsList?.map((gist) => (
            <ListItem key={gist.id}>{gist.description}</ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}
