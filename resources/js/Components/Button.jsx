import { Button as ButtonMantine } from '@mantine/core';

const Button = (props) => (
  <ButtonMantine
    {...props}
    styles={{
      label: {
        marginLeft: props.leftSection && 16,
        marginRight: props.rightSection && 16,
      },
    }}
  />
);

export default Button;
