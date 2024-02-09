import '../styles/globals.scss'


export const metadata = {
    initialScale: 1,
    width: 'device-width',
  title: 'ClubHouse',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
