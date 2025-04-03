'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

export default function VocabularyList() {
  const [vocabulary, setVocabulary] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'vocabulary'), orderBy('word'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const words = [];
      querySnapshot.forEach((doc) => {
        words.push({ id: doc.id, ...doc.data() });
      });
      setVocabulary(words);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-secondary mb-4">Vocabulary List</h2>
      <ul className="space-y-4">
        {vocabulary.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
          >
            <strong className="text-primary">{item.word}</strong>: {item.meaning}
            <p className="text-gray-600 italic mt-1">'{item.example}'</p>
          </li>
        ))}
      </ul>
    </div>
  );
}