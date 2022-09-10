import { Typography, Box } from '@mui/material';

export default function RenderMessageList(props) {
  const { allMessages, chatId } = props;

  return allMessages.messageList[chatId]?.map((message) => {
    const { author, text, id } = message;

    return (
      <Box
        key={id}
        sx={{
          display: 'flex',
          justifyContent: 'start',
          border: 1,
          borderRadius: 1,
          padding: 0.2,
          margin: 0.06,
        }}
      >
        <Typography component="span" sx={{ fontWeight: 'bold' }}>
          {author} написал:
        </Typography>
        <Typography component="span" sx={{ fontWeight: 'italic' }}>
          "{text}"
        </Typography>
      </Box>
    );
  });
}
