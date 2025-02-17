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

const Edit = () => {
  const { user, roles } = usePage().props;
  console.log(user);
  // Initialize the form with existing user data
  const form = useForm({
    full_name: user.full_name || '',
    email: user.email || '',
    username: user.username || '',
    role: user.roles[0] || '',
    password: '', // Leave password empty since it's not required for update unless changing it
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

  // Validate Password (only if it's changed)
  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    if (password && !trimmedPassword) {
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
    form.put(route('users.update', user.id), {
      onSuccess: () => {
        // Handle success (redirect, show success message, etc.)
      },
      onError: () => {
        // Handle error (show error messages, etc.)
      },
    });
  };

  return (
    <AuthenticatedLayout
      title="Ubah Pengguna"
      pageHeadings={{
        description: 'Ubah detail pengguna',
        breadcrumbs: [
          {
            title: 'Pengguna',
            route: 'users.index',
          },
          {
            title: user.full_name,
          },
          {
            title: 'Ubah',
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
              defaultValue={form.data.role}
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

            {/* Password (optional for edit) */}
            <PasswordInput
              value={form.data.password}
              onChange={(e) => {
                form.setData('password', e.target.value);
                validatePassword(e.target.value); // Trigger validation
              }}
              leftSection={<IconPassword />}
              label="Kata Sandi (kosongkan jika tidak ingin mengubah)"
              placeholder="Masukkan kata sandi baru"
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
              !form.data.role.trim()
            }
          >
            Simpan
          </Button>
        </form>
      </Paper>
    </AuthenticatedLayout>
  );
};

export default Edit;
