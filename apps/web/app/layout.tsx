import { AuthProvider, QueryProvider, RecoilProvider } from '@/providers';
import './global.css';

export const metadata = {
  title: 'Welcome to web',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex items-center justify-center w-full h-screen">
          <AuthProvider>
            <QueryProvider>
              <RecoilProvider>{children}</RecoilProvider>
            </QueryProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
