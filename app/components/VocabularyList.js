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
      <h2 className="text-xl font-bold mb-4">Vocabulary List</h2>
      <ul>
        {vocabulary.map((item) => (
          <li key={item.id} className="p-4 border-b">
            <strong>{item.word}</strong>: {item.meaning}
            {/* Fixed: Escaped double quotes */}
            <p className="text-gray-600 italic mt-1">{`"${item.example}"`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}