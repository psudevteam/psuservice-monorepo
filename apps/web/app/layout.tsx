import { AuthProvider, QueryProvider, RecoilProvider } from '@/providers';
import './global.css';

export const metadata = {
  title: 'PSU Service',
  description: 'PSU Service adalah web buat service laptop yang terjangkau',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <QueryProvider>
            <main className="flex items-center justify-center w-full h-screen">
              <RecoilProvider>{children}</RecoilProvider>
            </main>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
