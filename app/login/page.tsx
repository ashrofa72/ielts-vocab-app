'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-primary">Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
           className="w-full bg-blue-500 text-white py-3 rounded shadow-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
          <p className="text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-accent hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}