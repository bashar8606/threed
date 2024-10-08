import { Poppins, Almarai } from 'next/font/google';
import Header from "@/widgets/Header";
import Footer from '@/widgets/Footer';
import '../style/global.scss';
import GlobalProviders from '@/components/GlobalProviders';

const fontPrimary = Poppins({
  subsets: ['latin'],
  variable: '--ff-primary',
  weight: ['300', '400', '500', '600', '700']
})


const fontSecondary = Almarai({
  subsets: ['arabic'],
  variable: '--ff-secondary',
  weight: ['300', '400', '700', '800']
})
export const metadata = {
  title: 'Aetheria | Landing page',
  description: 'Dive into a visually stunning future with our AI-powered VR. Personalized experiences that push the boundaries of what is possible.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontPrimary.variable} ${fontSecondary.variable}`} >
        <GlobalProviders>
          <Header />
          {children}
          <Footer />
        </GlobalProviders>
      </body>
    </html>
  )
}

