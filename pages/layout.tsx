import NavBar from '../components/NavBar';
export const metadata = {
    title: 'Frenchmen Art Bazaar',
    description: 'The Frenchmen Art Bazaar is located at 619 Frenchmen street in the Marigny of New Orleans. They offer an exciting creative venue for artist to vend which can be transformed into an event space.',
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body>
            <NavBar />
              {children}</body>
        </html>
    );
}