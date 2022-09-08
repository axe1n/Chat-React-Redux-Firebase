import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

import RenderLogin from './RenderLogin/RenderLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth();
  const history = useHistory();

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      history.push('/profile');
      alert('Вы успешно вошли');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <RenderLogin
      handlePassChange={handlePassChange}
      handleEmailChange={handleEmailChange}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      error={error}
    />
  );
}
