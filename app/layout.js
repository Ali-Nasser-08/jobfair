import './globals.css'

export const metadata = {
  title: 'Ali Alghamdi - Full Stack Developer',
  description: 'Portfolio showcasing AI-powered applications and innovative projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: 'Inter, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
