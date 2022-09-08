import { Container, Typography, Box } from '@mui/material';

import ChatsList from '../ChatsList/ChatsList';
import MessageList from '../MessageList/MessageList';
import GetMessage from '../GetMessage/GetMessage';

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
