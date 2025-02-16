import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useForm } from '@inertiajs/react';

export default function Dashboard(props) {
  console.log(props);
  // const {
  //   auth: { user },
  //   socialAccounts,
  // } = usePage().props; // Ambil data yang dikirim dari controller
  // const [connectedSocialAccounts, setConnectedSocialAccounts] = useState([]);
  //
  const { post } = useForm();
  //
  // useEffect(() => {
  //   setConnectedSocialAccounts(socialAccounts); // Update state dengan akun sosial media terhubung
  // }, [socialAccounts]);
  //
  // const isGoogleConnected = connectedSocialAccounts.some(
  //   (account) => account.provider === 'google',
  // );
  // const isGithubConnected = connectedSocialAccounts.some(
  //   (account) => account.provider === 'github',
  // );
  //
  const handleLogout = () => {
    post('/logout'); // Trigger logout action
  };
  //
  // const handleUnlink = (provider) => {
  //   post(`/account/unlink/${provider}`); // Trigger unlink social media account
  // };

  return (
    <AuthenticatedLayout title="Dashboard" notification={props.notification}>
      sadsdaasd
      {/*<Button>Hello wordl</Button>*/}
      {/*<ThemeToggle /> /!* Tambahkan tombol toggle tema *!/*/}
      {/*<h1 className="text-2xl font-bold">Welcome, {user.name}</h1>*/}
      {/*<div className="mt-4">*/}
      {/*  <h2 className="text-xl font-semibold">Account Details</h2>*/}
      {/*  <p>Email: {user.email}</p>*/}
      {/*  <h3 className="mt-4 text-lg font-semibold">*/}
      {/*    Connected Social Accounts:*/}
      {/*  </h3>*/}
      {/*  <ul className="ml-4 list-disc">*/}
      {/*    {connectedSocialAccounts.length === 0 ? (*/}
      {/*      <li>No social accounts connected.</li>*/}
      {/*    ) : (*/}
      {/*      connectedSocialAccounts.map((account) => (*/}
      {/*        <li key={account.id}>*/}
      {/*          {account.provider} (ID: {account.provider_id}){' '}*/}
      {/*          <button*/}
      {/*            onClick={() => handleUnlink(account.provider)}*/}
      {/*            className="ml-2 text-red-500 hover:underline"*/}
      {/*          >*/}
      {/*            Unlink*/}
      {/*          </button>*/}
      {/*        </li>*/}
      {/*      ))*/}
      {/*    )}*/}
      {/*  </ul>*/}
      {/*  <div className="mt-6">*/}
      {/*    <h3 className="font-semibold">Link More Accounts:</h3>*/}
      {/*    {!isGoogleConnected && (*/}
      {/*      <a*/}
      {/*        href="/auth/google/redirect"*/}
      {/*        className="mr-2 rounded bg-red-600 px-4 py-2 text-white"*/}
      {/*      >*/}
      {/*        Link Google Account*/}
      {/*      </a>*/}
      {/*    )}*/}
      {/*    {!isGithubConnected && (*/}
      {/*      <a*/}
      {/*        href="/auth/github/redirect"*/}
      {/*        className="rounded bg-black px-4 py-2 text-white"*/}
      {/*      >*/}
      {/*        Link GitHub Account*/}
      {/*      </a>*/}
      {/*    )}*/}
      {/*    /!* Jika sudah terhubung dengan akun sosial media *!/*/}
      {/*    {isGoogleConnected && (*/}
      {/*      <span className="text-green-500">Google Account Linked</span>*/}
      {/*    )}*/}
      {/*    {isGithubConnected && (*/}
      {/*      <span className="text-green-500">GitHub Account Linked</span>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*  /!* Logout Button *!/*/}
      {/*  <div className="mt-6">*/}
      {/*  </div>*/}
      {/*</div>*/}
    </AuthenticatedLayout>
  );
}
