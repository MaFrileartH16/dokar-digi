import { ActionIcon, Affix, Tooltip, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconChevronUp } from '@tabler/icons-react';

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix
      position={{ bottom: 16, right: 16 }}
      style={{
        zIndex: 2,
      }}
    >
      <Transition transition="fade" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Tooltip
            label="Scroll to top"
            position="top-end"
            offset={4}
            transitionProps={{ transition: 'fade', duration: 200 }}
          >
            <ActionIcon
              shadow="sm"
              onClick={() => scrollTo({ y: 0 })}
              style={transitionStyles}
            >
              <IconChevronUp />
            </ActionIcon>
          </Tooltip>
        )}
      </Transition>
    </Affix>
  );
};

export default ScrollToTop;
