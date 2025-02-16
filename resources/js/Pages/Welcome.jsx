import { router } from '@inertiajs/core';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
  return (
    <div>
      <Head title="Welcome" />
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl">Welcome to the App!</h1>

          {/* Jika user tidak terautentikasi */}
          {!auth.user ? (
            <>
              <Link
                href={route('login')}
                className="mr-2 rounded-lg border bg-blue-600 px-4 py-2 text-white"
              >
                Login Manual
              </Link>
              <Link
                href={route('register')}
                className="ml-2 rounded-lg border bg-green-600 px-4 py-2 text-white"
              >
                Register Manual
              </Link>

              <div className="mt-4">
                <a
                  onClick={() =>
                    router.get(route('social-account.redirect.google'))
                  }
                  className="mr-2 rounded-lg border bg-red-600 px-4 py-2 text-white"
                >
                  Login with Google
                </a>
                <a
                  onClick={() =>
                    router.get(route('social-account.redirect.github'))
                  }
                  className="rounded-lg border bg-black px-4 py-2 text-white"
                >
                  Login with GitHub
                </a>
              </div>
            </>
          ) : (
            <p className="mt-4">Welcome back, {auth.user.name}!</p>
          )}
        </div>
      </div>
    </div>
  );
}
