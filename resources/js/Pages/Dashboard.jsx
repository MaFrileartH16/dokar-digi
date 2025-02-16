import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';

const Dashboard = (props) => {
  return (
    <AuthenticatedLayout
      title="Dashboard"
      notification={props.notification}
    ></AuthenticatedLayout>
  );
};

export default Dashboard;
