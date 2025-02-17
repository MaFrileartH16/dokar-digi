import { ScrollToTop } from '@/Components/Index.jsx';
import { Head, usePage } from '@inertiajs/react';
import { Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useEffect } from 'react';

const BaseLayout = (props) => {
  const {
    props: { notification },
  } = usePage();

  useEffect(() => {
    if (notification) {
      notifications.show({
        // icon: (
        //   <ThemeIcon
        //     variant="light"
        //     color={props.notification.status === 'success' ? 'green' : 'red'}
        //   >
        //     {props.notification.status === 'success' ? (
        //       <IconCheck />
        //     ) : (
        //       <IconX />
        //     )}
        //   </ThemeIcon>
        // ),
        withBorder: true,
        title: notification.title,
        message: notification.message,
        color: notification.status === 'success' ? 'green' : 'red',
        autoClose: 2000,
      });
    }

    notifications.cleanQueue();
  }, [notification]);

  return (
    <>
      <Head title={props.title} />

      <Stack gap={0} mih="100vh" bg="gray.2">
        {/*<Flex flex={1} direction="column" py={32} px={16}>*/}
        {props.children}
        {/*</Flex>*/}

        {/*<FloatingBottomNavigationBar />*/}

        {/*<Footer />*/}
      </Stack>

      <ScrollToTop />
    </>
  );
};

export default BaseLayout;
