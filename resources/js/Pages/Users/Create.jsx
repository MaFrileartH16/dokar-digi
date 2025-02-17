import {
  Button,
  PasswordInput,
  Select,
  TextInput,
} from '@/Components/Index.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useForm, usePage } from '@inertiajs/react';
import { Paper, Stack } from '@mantine/core';
import {
  IconCornerDownLeft,
  IconIdBadge2,
  IconMail,
  IconPassword,
  IconUser,
} from '@tabler/icons-react';

const Create = () => {
  const { roles } = usePage().props;

  // Initialize the form with default values
  const form = useForm({
    full_name: '',
    email: '',
    username: '',
    role: '',
    password: '',
  });

  // Validate Full Name
  const validateFullName = (fullName) => {
    const trimmedFullName = fullName.trim();
    if (!trimmedFullName) {
      form.setError('full_name', 'Nama lengkap harus diisi');
    } else {
      form.setError('full_name', '');
    }
  };

  // Validate Email
  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      form.setError('email', 'Alamat surel harus diisi');
    } else if (!/\S+@\S+\.\S+/.test(trimmedEmail)) {
      form.setError('email', 'Alamat surel tidak sah');
    } else {
      form.setError('email', '');
    }
  };

  // Validate Username
  const validateUsername = (username) => {
    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      form.setError('username', 'Nama pengguna harus diisi');
    } else {
      form.setError('username', '');
    }
  };

  // Validate Password
  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    if (!trimmedPassword) {
      form.setError('password', 'Kata sandi harus diisi');
    } else {
      form.setError('password', '');
    }
  };

  // Validate Role
  const validateRole = (role) => {
    if (!role) {
      form.setError('role', 'Peran harus dipilih');
    } else {
      form.setError('role', '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.post(route('users.store'), {});
  };

  return (
    <AuthenticatedLayout
      title="Buat Pengguna"
      pageHeadings={{
        description: 'Tambahkan pengguna baru ke dalam sistem',
        breadcrumbs: [
          {
            title: 'Pengguna',
            route: 'users.index',
          },
          {
            title: 'Buat',
          },
        ],
      }}
    >
      <Paper p={32}>
        <form onSubmit={handleSubmit}>
          <Stack>
            {/* Full Name */}
            <TextInput
              value={form.data.full_name}
              onChange={(e) => {
                form.setData('full_name', e.target.value);
                validateFullName(e.target.value); // Trigger validation
              }}
              leftSection={<IconIdBadge2 />}
              label="Nama Lengkap"
              placeholder="Masukkan nama lengkap"
              error={form.errors.full_name}
            />

            {/* Email */}
            <TextInput
              value={form.data.email}
              onChange={(e) => {
                form.setData('email', e.target.value);
                validateEmail(e.target.value); // Trigger validation
              }}
              leftSection={<IconMail />}
              label="Alamat Surel"
              placeholder="Masukkan alamat surel"
              error={form.errors.email}
            />

            {/* Username */}
            <TextInput
              value={form.data.username}
              onChange={(e) => {
                form.setData('username', e.target.value);
                validateUsername(e.target.value); // Trigger validation
              }}
              leftSection={<IconUser />}
              label="Nama Pengguna"
              placeholder="Masukkan nama pengguna"
              error={form.errors.username}
            />

            {/* Role */}
            <Select
              value={form.data.role}
              onChange={(value) => {
                form.setData('role', value);
                validateRole(value); // Trigger validation
              }}
              leftSection={<IconUser />}
              label="Peran"
              data={roles}
              placeholder="Pilih peran"
              error={form.errors.role}
            />

            {/* Password */}
            <PasswordInput
              value={form.data.password}
              onChange={(e) => {
                form.setData('password', e.target.value);
                validatePassword(e.target.value); // Trigger validation
              }}
              leftSection={<IconPassword />}
              label="Kata Sandi"
              placeholder="Masukkan kata sandi"
              error={form.errors.password}
            />
          </Stack>

          {/* Submit Button */}
          <Button
            fullWidth
            mt={16}
            leftSection={<IconCornerDownLeft />}
            type="submit"
            loading={form.processing} // Show loading state while the form is being processed
            disabled={
              !form.data.full_name.trim() ||
              !form.data.email.trim() ||
              !form.data.username.trim() ||
              !form.data.password.trim() ||
              !form.data.role.trim()
            }
          >
            Buat
          </Button>
        </form>
      </Paper>
    </AuthenticatedLayout>
  );
};

export default Create;
