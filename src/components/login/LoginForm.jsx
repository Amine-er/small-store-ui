import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('client_id', 'admin-ui');
    formData.append('username', username);
    formData.append('password', password);
    formData.append('grant_type', 'password');

    try {
      const response = await fetch(
        'http://localhost:8080/realms/small-store/protocol/openid-connect/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        }
      );

      if (!response.ok) {
        throw new Error('Invalid credentials or login failed.');
      }

      const data = await response.json();
      const token = data.access_token;

      // Store the token (example: localStorage, or use secure HTTP-only cookie in production)
      localStorage.setItem('admin_token', token);
      console.log('Access Token:', token);

      // Redirect to /home
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded"
            placeholder="Enter admin username"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded"
            placeholder="Enter password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
