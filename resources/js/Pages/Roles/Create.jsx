import { Button, TextInput } from '@/Components/Index.jsx';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useForm } from '@inertiajs/react';
import { Paper, Stack } from '@mantine/core';
import { IconCornerDownLeft, IconIdBadge2 } from '@tabler/icons-react';

const Create = () => {
  // Initialize the form with default values
  const form = useForm({
    name: '', // Using 'name' directly for the role
  });

  // Validate Role Name
  const validateRoleName = (name) => {
    const trimmedName = name.trim();
    if (!trimmedName) {
      form.setError('name', 'Nama harus diisi');
    } else {
      form.setError('name', '');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.post(route('roles.store'), {});
  };

  return (
    <AuthenticatedLayout
      title="Buat Peran"
      pageHeadings={{
        description: 'Tambahkan peran baru ke dalam sistem',
        breadcrumbs: [
          {
            title: 'Peran',
            route: 'roles.index',
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
            {/* Role Name */}
            <TextInput
              value={form.data.name}
              onChange={(e) => {
                form.setData('name', e.target.value);
                validateRoleName(e.target.value); // Trigger validation
              }}
              leftSection={<IconIdBadge2 />}
              label="Nama"
              placeholder="Masukkan nama"
              error={form.errors.name}
            />
          </Stack>

          {/* Submit Button */}
          <Button
            fullWidth
            mt={16}
            leftSection={<IconCornerDownLeft />}
            type="submit"
            loading={form.processing} // Show loading state while the form is being processed
            disabled={!form.data.name.trim()}
          >
            Buat
          </Button>
        </form>
      </Paper>
    </AuthenticatedLayout>
  );
};

export default Create;
