
'use client';
import React from 'react';
import Navbar from '../components/navbar'; // Adjust the path as necessary
import './global.css'; // Import global styles if needed
import Footer from '../components/footer'; // Adjust the path as necessary
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children} {/* this is where page.js content gets rendered */}
        <Footer />
      <style jsx global>{`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
        `}</style>
      </body>
    </html>
  )
}

