import './globals.css'

export const metadata = {
  title: 'BinBondhu',
  description: 'AI driven waste management web app for citizens and cleaners.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={'antialiased'}>{children}</body>
    </html>
  )
}
