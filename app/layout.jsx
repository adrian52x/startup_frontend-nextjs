import './globals.css';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './components/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import Providers from './components/Providers';
import getCurrentUser from './actions/getCurrentUser';


const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pasha Site',
  description: 'frontend',
}

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
        <body className={font.className}>
          <Providers> 
            <ToasterProvider/>
            <RegisterModal/>
            <LoginModal/>
            <Navbar currentUser = {currentUser}/>
            
           
            <div className="pb-20 pt-28">
              {children}
            </div>
          </Providers>
        </body>
    </html>
  )
}
