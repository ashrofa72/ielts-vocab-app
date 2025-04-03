'use client'; // Required for using hooks in the App Router

import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/navigation'; // Updated import
import VocabularyForm from './components/VocabularyForm';
import VocabularyList from './components/VocabularyList';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth); // Get the current user's authentication state
  const router = useRouter(); // Use the updated useRouter hook

  // Redirect logic
  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); // Redirect to login page if no user is logged in
    }
  }, [user, loading, router]);

  // Show a loading message while checking authentication state
  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  // Render the dashboard for authenticated users
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email}</h1>
      <p className="mb-8">Start adding vocabulary and idioms below!</p>
      <VocabularyForm />
      <VocabularyList />
    </div>
  );
}