import { ReactNode } from 'react';

export const metadata = {
  title: 'Rodas Addis - Portfolio',
  description: 'Portfolio of Rodas Addis',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
