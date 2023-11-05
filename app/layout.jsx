import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import Providers from './components/Providers';


const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pasha Site',
  description: 'frontend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={font.className}>
          <Providers> 
            <ToasterProvider/>
            <RegisterModal/>
            <LoginModal/>
            <Navbar/>
            
           
            <div className="pb-20 pt-28">
              {children}
            </div>
          </Providers>
        </body>
    </html>
  )
}
