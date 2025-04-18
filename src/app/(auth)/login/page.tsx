'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
    //   const res = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ identifier, password }),
    //   });

    //   if (res.ok) {
    //     const data = await res.json();

    //     // Save token or user info in localStorage (or use cookies)
    //     localStorage.setItem('token', data.token);

    //     // Redirect based on role
    //     if (data.role === 'trainee') {
    //       router.push('/trainee/dashboard');
    //     } else if (data.role === 'trainer') {
    //       router.push('/trainer/dashboard');
    //     }
    //   } else {
    //     const data = await res.json();
    //     setError(data.message || 'Login failed. Try again.');
    //   }
    alert(`Login successful! ${password}, ${identifier}`);
          router.push('/trainer/dashboard');

    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl text-black font-semibold mb-6 text-center">Login</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor='identifier' className="block text-gray-700 mb-1">Matricule or Email</label>
            <input
            title='identifier'
            placeholder='matricule or email'
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full text-black border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor='password' className="block text-gray-700 mb-1">Password</label>
            <input
            title='password'
            placeholder='password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full text-black border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
