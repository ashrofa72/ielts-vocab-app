'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh]">
        <form
          onSubmit={handleSignup}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-3xl font-bold text-center text-secondary">Sign Up</h2>
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
            Sign Up
          </button>
          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-accent hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}