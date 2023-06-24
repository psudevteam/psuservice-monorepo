import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function (req) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*'],
};
