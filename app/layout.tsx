import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Filecoin Grants',
  description: 'Welcome to the Filecoin Grant Platform! The Filecoin Grant Platform connects grant makers with builders and researchers in the Filecoin community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
