import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

const Index = (props) => {
  return (
    <AuthenticatedLayout
      title="Daftar Pengguna"
      notification={props.notification}
      pageHeadings={{
        title: 'Daftar Pengguna',
        description: 'Kelola pengguna yang terdaftar di aplikasi ini.',
      }}
    ></AuthenticatedLayout>
  );
};

export default Index;
