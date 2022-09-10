import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  TextField,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function RenderChatList(props) {
  const {
    chatsList,
    chatId,
    handleClickDeleteChat,
    match,
    handleClickBack,
    handleOpen,
    handleClickChats,
    visible,
    handleClose,
    newChatName,
    handleChange,
    onAddChat,
  } = props;

  return (
    <Box
      component="div"
      sx={{
        border: 1,
        borderRadius: 1,
        mr: 1,
        padding: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        Список чатов
      </Typography>
      <List>
        {chatsList.map((chat) => {
          const { name, id } = chat;
          return (
            <Box key={id}>
              <ListItem
                id={id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: 1,
                  borderRadius: 1,
                }}
                style={{ background: chatId === id ? 'lightGray' : '' }}
              >
                <ListItemText
                  align="left"
                  sx={{
                    padding: 0.2,
                    cursor: 'pointer',
                  }}
                >
                  <Link to={`/chat/${id}`} style={{ textDecoration: 'none' }}>
                    Чат {id} - {name}
                  </Link>
                </ListItemText>
                <Button variant="contained" onClick={handleClickDeleteChat}>
                  X
                </Button>
              </ListItem>
            </Box>
          );
        })}
      </List>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        {match.url !== '/chats' && (
          <button onClick={handleClickBack}>Назад</button>
        )}
        {match.url !== '/chats' && (
          <button onClick={handleClickChats}>Все чаты</button>
        )}
      </Box>
      <Button className="add-chat" variant="contained" onClick={handleOpen}>
        Добавить чат
      </Button>
      <Dialog open={visible} onClose={handleClose}>
        <DialogTitle>Введите название чата</DialogTitle>
        <TextField value={newChatName} onChange={handleChange} />
        <Button onClick={onAddChat} disabled={!newChatName}>
          Отправить
        </Button>
      </Dialog>
    </Box>
  );
}
