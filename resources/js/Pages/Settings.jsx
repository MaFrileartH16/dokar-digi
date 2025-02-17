import { PasswordInput, TextInput } from '@/Components/Index.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { router, usePage } from '@inertiajs/react';
import { Button, Fieldset, Stack } from '@mantine/core';
import {
  IconBrandGoogle,
  IconIdBadge2,
  IconMail,
  IconPassword,
  IconUser,
} from '@tabler/icons-react';

const Settings = (props) => {
  const { auth, social_accounts: socialAccounts } = usePage().props;
  const user = auth.user;
  console.log(props);

  // Periksa apakah akun Google sudah tertaut
  const isGoogleLinked = socialAccounts.some(
    (acc) => acc.provider === 'google',
  );

  // const handleSocialLink = () => {
  //   router.get(route('social.link.redirect', { provider: 'google' }));
  // };

  const handleSocialUnlink = () => {
    router.post(route('oauth.unlink', { provider: 'google' }));
  };

  return (
    <AuthenticatedLayout
      title="Pengaturan"
      pageHeadings={{ description: 'Pengaturan akun pengguna' }}
    >
      <Stack gap={32}>
        <Fieldset p={32} m={0} bg="#f8f9fa" legend="Data Pribadi">
          <Stack gap={32}>
            <TextInput
              leftSection={<IconIdBadge2 />}
              label="Nama Lengkap"
              value={user.full_name}
              disabled
            />
            <TextInput
              leftSection={<IconMail />}
              label="Alamat Surel"
              value={user.email}
            />
            <TextInput
              leftSection={<IconUser />}
              label="Nama Pengguna"
              value={user.username}
            />
            <PasswordInput
              leftSection={<IconPassword />}
              label="Kata Sandi"
              placeholder="Isi jika ingin diganti"
            />
          </Stack>
        </Fieldset>

        <Fieldset p={32} m={0} bg="#f8f9fa" legend="Media Sosial">
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
