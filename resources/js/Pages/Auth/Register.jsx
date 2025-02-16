import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head, useForm } from '@inertiajs/react'; // Import useState
import { useState } from 'react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const submit = (e) => {
    e.preventDefault();

    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  const handleOAuthRedirect = (url) => {
    setLoading(true); // Set loading to true when redirecting to OAuth
    window.location.href = url; // Trigger OAuth redirect
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        {/* Name, email, password, and confirm password fields */}
      </form>

      <div className="mt-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <a
              href="#"
              onClick={() => handleOAuthRedirect('/auth/google/redirect')}
              className="mr-2 rounded-lg border bg-red-600 px-4 py-2 text-white"
            >
              Register with Google
            </a>
            <a
              href="#"
              onClick={() => handleOAuthRedirect('/auth/github/redirect')}
              className="rounded-lg border bg-black px-4 py-2 text-white"
            >
              Register with GitHub
            </a>
          </>
        )}
      </div>
    </GuestLayout>
  );
}
