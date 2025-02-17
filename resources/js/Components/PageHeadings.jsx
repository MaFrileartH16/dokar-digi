import { router } from '@inertiajs/core';
import { Anchor, Breadcrumbs, Text, Title } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

const PageHeadings = ({ title, breadcrumbs = [], description }) => (
  <>
    {breadcrumbs.length > 0 && (
      <Breadcrumbs
        styles={{
          separator: {
            margin: '0 4px',
          },
        }}
        separator={<IconChevronRight />}
      >
        {breadcrumbs.map((item, index) => {
          const isCurrent = index === breadcrumbs.length - 1;

          return (
            <Anchor
              underline={isCurrent ? 'never' : 'hover'}
              onClick={() => !isCurrent && router.get(route(item.route))}
              key={index}
              c={isCurrent ? 'gray' : 'blue'}
            >
              {item.title}
            </Anchor>
          );
        })}
      </Breadcrumbs>
    )}

    <Title fw={600} order={2} mb={description ? 0 : 32}>
      {title}
    </Title>

    {description && (
      <Text c="gray" mb={description ? 32 : 0}>
        {description}
      </Text>
    )}
  </>
);

export default PageHeadings;
