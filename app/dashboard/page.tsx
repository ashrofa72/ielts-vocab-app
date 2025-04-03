'use client';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import VocabularyForm from '../components/VocabularyForm';
import VocabularyList from '../components/VocabularyList';
import Layout from '../components/Layout';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unknown error occurred.');
      }
    }
  };

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-primary">Welcome, {user?.email}</h1>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded shadow-md hover:bg-red-600 transition-colors"
>
          Sign Out
        </button>
      </div>
      <p className="mb-8 text-gray-600">Start adding vocabulary and idioms below!</p>
      <VocabularyForm />
      <VocabularyList />
    </Layout>
  );
}