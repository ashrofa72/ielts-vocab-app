'use client';

import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export default function VocabularyForm() {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [example, setExample] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'vocabulary'), { word, meaning, example });
      alert('Vocabulary added successfully!');
      setWord('');
      setMeaning('');
      setExample('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold text-secondary">Add New Vocabulary</h2>
      <input
        type="text"
        placeholder="Word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <textarea
        placeholder="Meaning"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <textarea
        placeholder="Example Sentence"
        value={example}
        onChange={(e) => setExample(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded shadow-md hover:bg-indigo-700 transition-colors"
      >
        Add Vocabulary
      </button>
    </form>
  );
}