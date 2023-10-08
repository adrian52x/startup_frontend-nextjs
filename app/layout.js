import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';
import Categories from './components/CategoryBox';


const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pasha Site',
  description: 'frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={font.className}>
            <Modal />
            <Navbar/>
            {children}
        
        </body>
    </html>
  )
}
