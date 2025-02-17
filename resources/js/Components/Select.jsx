import { Select as SelectMantine, Text } from '@mantine/core';

const Select = ({ label, description, error, ...props }) => {
  return (
    <>
      {label && (
        <Text fw={500} mb={description ? 0 : 8}>
          {label}
        </Text>
      )}

      {description && (
        <Text c="gray" mb={8}>
          {description}
        </Text>
      )}

      <SelectMantine
        {...props}
        styles={{
          input: {
            padding:
              props.leftSection || (props.rightSection && '0 16px 0px 56px'),
            borderColor: error ? 'red' : undefined,
          },
          section: (props.leftSection || props.rightSection) && {
            width: 24,
            margin: '0 16px',
          },
        }}
      />

      {error && (
        <Text c="red" mt={8}>
          {error}
        </Text>
      )}
    </>
  );
};

export default Select;
