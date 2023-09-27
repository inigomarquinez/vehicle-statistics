import './globals.css'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline';

import Navigation from '../components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '🚗 Your vehicle statistics',
  description: 'Keep track of your vehicles\' statistics',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline />

      <body className={inter.className}>
        {children}
        <Navigation />
      </body>
    </html>
  )
}
