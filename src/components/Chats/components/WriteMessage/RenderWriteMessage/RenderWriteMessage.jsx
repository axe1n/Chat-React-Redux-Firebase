import { TextField, Button, FormControl } from '@mui/material';

export default function RenderWriteMessage(props) {
  const { inputRef, onSubmitHandle, setText } = props;
  return (
    <>
      <FormControl align="left">
        <TextField
          helperText="Введите cообщение"
          type="text"
          ref={inputRef}
          autoFocus
          multiline
          sx={{ width: 600 }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </FormControl>
      <Button variant="contained" onClick={onSubmitHandle} sx={{ margin: 1 }}>
        Отправить
      </Button>
    </>
  );
}
