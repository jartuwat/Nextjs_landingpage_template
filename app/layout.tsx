import './globals.css'

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en" className={typeof window !== 'undefined' && localStorage.theme === 'dark' ? 'dark' : ''}>
          <body className="bg-white dark:bg-gray-900">
            {children}
          </body>
        </html>
      )
    }
