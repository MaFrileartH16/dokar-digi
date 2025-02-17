import { PasswordInput, TextInput } from '@/Components/Index.jsx';
import BaseLayout from '@/Layouts/BaseLayout.jsx';
import { useForm } from '@inertiajs/react';
import {
  ActionIcon,
  Button,
  Center,
  Divider,
  Paper,
  Stack,
  Title,
} from '@mantine/core';
import {
  IconArchive,
  IconBrandGoogle,
  IconIdBadge2,
  IconLock,
  IconLockOpen2,
  IconPassword,
} from '@tabler/icons-react';

const Login = (props) => {
  console.log(props);
  const form = useForm({
    identity: '',
    password: '',
  });

  const validateIdentity = (identity) => {
    const trimmedIdentity = identity.trim();
    switch (true) {
      case !trimmedIdentity:
        form.setError(
          'identity',
          'Alamat surel atau nama pengguna harus diisi',
        );
        break;
      case !/\S+@\S+\.\S+/.test(trimmedIdentity) && trimmedIdentity.length < 3:
        form.setError('identity', 'Nama pengguna atau alamat surel tidak sah');
        break;
      default:
        form.setError('identity', '');
    }
  };

  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    switch (true) {
      case !trimmedPassword:
        form.setError('password', 'Kata sandi harus diisi');
        break;
      default:
        form.setError('password', '');
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.post(route('login'));
      }}
    >
      <BaseLayout title="Masuk Akun">
        <Center flex={1} p={16}>
          <Paper bg="gray.0" shadow="none" withBorder p={32} w={480}>
            <Center>
              <ActionIcon variant="transparent">
                <IconArchive size={48} />
              </ActionIcon>
            </Center>

            <Title align="center" order={2}>
              Masuk Akun
            </Title>

            <Stack gap={16} my={16}>
              <TextInput
                autoFocus
                value={form.data.identity}
                label="Alamat Surel / Nama Pengguna"
                placeholder="Masukkan alamat surel atau nama pengguna"
                leftSection={<IconIdBadge2 />}
                onChange={(e) => {
                  form.setData('identity', e.target.value);
                  validateIdentity(e.target.value);
                }}
                error={form.errors.identity}
              />

              <PasswordInput
                value={form.data.password}
                leftSection={<IconPassword />}
                label="Kata Sandi"
                placeholder="Masukkan kata sandi"
                onChange={(e) => {
                  form.setData('password', e.target.value);
                  validatePassword(e.target.value);
                }}
                error={form.errors.password}
              />
            </Stack>

            <Button
              type="submit"
              leftSection={
                !form.data.password.trim() || !form.data.identity.trim() ? (
                  <IconLock />
                ) : (
                  <IconLockOpen2 />
                )
              }
              loading={form.processing}
              disabled={
                !form.data.password.trim() || !form.data.identity.trim()
              }
              fullWidth
            >
              Masuk
            </Button>

            <Divider my={16} label="Atau" labelPosition="center" />

            <Button
              component="a"
              fullWidth
              leftSection={<IconBrandGoogle />}
              color="gray"
              variant="outline"
              href={route('social-account.redirect', {
                provider: 'google',
              })}
            >
              Masuk Google
            </Button>
          </Paper>
        </Center>
      </BaseLayout>
    </form>
  );
};

export default Login;
