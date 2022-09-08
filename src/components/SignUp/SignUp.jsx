import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import RenderSignUp from './RenderSignUp/RenderSignup';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth();

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
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      alert('Регистрация прошла успешно');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <RenderSignUp
      handlePassChange={handlePassChange}
      handleEmailChange={handleEmailChange}
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      error={error}
    />
  );
}
