import { Container, Typography, Box } from '@mui/material';

import ChatsList from './components/ChatsList/ChatsList';
import MessageList from './components/MessageList/MessageList';
import GetMessage from './components/WriteMessage/WriteMessage';

export default function Chats() {
  return (
    <Container maxWidth="lg" className="chats" align="center">
      <Typography variant="h3" gutterBottom component="header">
        Привет! Напиши нам что-нибудь!
      </Typography>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box>
          <ChatsList />
        </Box>
        <Typography component="div">
          <MessageList />
          <GetMessage />
        </Typography>
      </Box>
    </Container>
  );
}
