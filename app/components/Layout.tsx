'use client';

import React from 'react';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold">My IELTS Vocabulary App</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6 text-center">
        <p>© 2025 Ashraf Kamel IELTS Vocabulary App. All rights reserved.</p>
      </footer>
    </div>
  );
}