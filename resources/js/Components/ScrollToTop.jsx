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
            label="Gulir ke atas"
            position="top-end"
            offset={8}
            transitionProps={{ transition: 'fade', duration: 200 }}
          >
            <ActionIcon
              color="gray"
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
