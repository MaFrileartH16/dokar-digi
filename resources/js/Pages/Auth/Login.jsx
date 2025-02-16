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
  IconLock,
  IconLockOpen2,
  IconMail,
  IconPassword,
} from '@tabler/icons-react';

const Login = (props) => {
  console.log(props);

  const form = useForm({
    email: '',
    password: '',
  });

  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    switch (true) {
      case !trimmedEmail:
        form.setError('email', 'Alamat surel harus diisi');
        break;
      case !/\S+@\S+\.\S+/.test(trimmedEmail):
        form.setError('email', 'Alamat surel tidak sah');
        break;
      default:
        form.setError('email', '');
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
      <BaseLayout title="Masuk Akun" notification={props.notification}>
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
                value={form.data.email}
                label="Alamat Surel"
                placeholder="Masukkan alamat surel"
                leftSection={<IconMail />}
                onChange={(e) => {
                  form.setData('email', e.target.value);
                  validateEmail(e.target.value);
                }}
                error={form.errors.email}
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
                !form.data.password.trim() || !form.data.email.trim() ? (
                  <IconLock />
                ) : (
                  <IconLockOpen2 />
                )
              }
              loading={form.processing}
              disabled={!form.data.password.trim() || !form.data.email.trim()}
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
