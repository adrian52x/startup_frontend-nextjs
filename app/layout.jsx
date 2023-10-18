import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import Modal from './components/modals/Modal';


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
            
            <div className="pb-20 pt-28">
              {children}
            </div>
        
        </body>
    </html>
  )
}