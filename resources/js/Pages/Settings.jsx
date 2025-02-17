import { PasswordInput, TextInput } from '@/Components/Index.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useForm, usePage } from '@inertiajs/react';
import { Button, Fieldset, Stack } from '@mantine/core';
import {
  IconBrandGoogle,
  IconIdBadge2,
  IconMail,
  IconPassword,
  IconUser,
} from '@tabler/icons-react';

const Settings = () => {
  const { auth, social_accounts: socialAccounts } = usePage().props;
  const user = auth.user;

  // Periksa apakah akun Google sudah tertaut
  const isGoogleLinked = socialAccounts.some(
    (acc) => acc.provider === 'google',
  );

  // Using useForm from Inertia.js to handle form data
  const { data, setData, put, processing } = useForm({
    full_name: user.full_name,
    email: user.email,
    username: user.username,
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim spaces and convert email and username to lowercase
    const updatedData = {
      ...data,
      email: data.email.trim().toLowerCase(),
      username: data.username.trim().toLowerCase(),
      password: data.password.trim(), // Trim password as well
    };

    // Send the form data to the server for updating
    put(route('users.update', user), {
      data: updatedData,
      onSuccess: () => {
        // Handle success (you can show a success message if needed)
      },
    });
  };

  return (
    <AuthenticatedLayout
      title="Pengaturan"
      pageHeadings={{ description: 'Pengaturan akun pengguna' }}
    >
      <Stack gap={16}>
        <form onSubmit={handleSubmit}>
          <Fieldset
            p={32}
            m={0}
            bg="#f8f9fa"
            legend="Data Pribadi"
            styles={{
              legend: {
                background: '#f8f9fa',
                padding: '8px 16px',
                borderRadius: 16,
                fontSize: 20,
                fontWeight: 500,
              },
            }}
          >
            <Stack gap={16}>
              <TextInput
                leftSection={<IconIdBadge2 />}
                label="Nama Lengkap"
                value={data.full_name}
                disabled
              />
              <TextInput
                leftSection={<IconMail />}
                label="Alamat Surel"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
              />
              <TextInput
                leftSection={<IconUser />}
                label="Nama Pengguna"
                value={data.username}
                onChange={(e) => setData('username', e.target.value)}
              />
              <PasswordInput
                leftSection={<IconPassword />}
                label="Kata Sandi"
                placeholder="Isi jika ingin diganti"
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
              />
            </Stack>

            <Button
              mt={16}
              type="submit"
              variant="filled"
              disabled={processing}
              loading={processing}
            >
              Simpan Perubahan
            </Button>
          </Fieldset>
        </form>

        <Fieldset
          p={32}
          m={0}
          bg="#f8f9fa"
          legend="Media Sosial"
          styles={{
            legend: {
              background: '#f8f9fa',
              padding: '8px 16px',
              borderRadius: 16,
              fontSize: 20,
              fontWeight: 500,
            },
          }}
        >
          <Stack gap={32}>
            {isGoogleLinked ? (
              <Button
                component="a"
                leftSection={<IconBrandGoogle />}
                color="red"
                variant="filled"
                href={route('oauth.unlink', {
                  provider: 'google',
                })}
              >
                Lepaskan Google
              </Button>
            ) : (
              <Button
                component="a"
                leftSection={<IconBrandGoogle />}
                color="gray"
                variant="outline"
                href={route('oauth.redirect', {
                  provider: 'google',
                  flow: 'link',
                })}
              >
                Tautkan Google
              </Button>
            )}
          </Stack>
        </Fieldset>
      </Stack>
    </AuthenticatedLayout>
  );
};

export default Settings;
