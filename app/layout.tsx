import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} border-box m-0 p-0 antialiased`}>
        {children}
      </body>
    </html>
  );
}
