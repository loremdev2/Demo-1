import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata = {
  title: 'desgy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
