import './globals.css'

export const metadata = {
  title: 'Romantic Dating App',
  description: 'A sweet and simple dating page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
