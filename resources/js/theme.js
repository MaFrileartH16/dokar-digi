import {
  ActionIcon,
  Avatar,
  Button,
  Checkbox,
  createTheme,
  Image,
  Menu,
  Modal,
  MultiSelect,
  Notification,
  Pagination,
  PasswordInput,
  Select,
  Table,
  TextInput,
  ThemeIcon,
} from '@mantine/core';

const theme = createTheme({
  colors: {
    // 'japanese-indigo': generateColors('#2D3748'),
  },
  fontFamily: 'Fredoka, serif',
  // primaryColor: 'japanese-indigo',
  headings: {
    // fontFamily: 'Plus Jakarta Sans, serif',
    sizes: {
      h1: { fontSize: '44px', fontWeight: '700', lineHeight: '56px' },
      h2: { fontSize: '34px', fontWeight: '600', lineHeight: '48px' },
      h3: { fontSize: '26px', fontWeight: '600', lineHeight: '36px' },
      h4: { fontSize: '20px', fontWeight: '500', lineHeight: '28px' },
      h5: { fontSize: '16px', fontWeight: '500', lineHeight: '24px' },
      h6: { fontSize: '14px', fontWeight: '400', lineHeight: '20px' },
    },
  },
  // white: '#f2f2f2',
  // black: '#0d0d0d',
  autoContrast: true,
  radius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
  },
  defaultRadius: 'md',
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
  },
  components: {
    Button: Button.extend({
      styles: {
        root: {
          padding: '0 16px',
          height: 48,
        },
        label: {
          fontSize: 16,
          // marginLeft: 16,
        },
        section: {
          margin: 0,
        },
      },
    }),
    TextInput: TextInput.extend({
      styles: {
        // section: { width: 24, margin: '0 16px' },
        wrapper: { marginBottom: 0 },
        input: {
          // padding: '0 16px 0px 56px',
          height: 48,
        },
      },
    }),
    PasswordInput: PasswordInput.extend({
      styles: {
        // section: { width: 24, margin: '0 16px' },
        wrapper: { marginBottom: 0 },
        // innerInput: {
        // padding: '0 56px',
        // },
        input: { height: 48 },
      },
    }),
    Textarea: TextInput.extend({
      styles: {
        section: { width: 24, margin: '0 16px' },
        input: {
          padding: '12px 16px 12px 56px',
          height: 96,
        },
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        size: 48,
      },
    }),
    ThemeIcon: ThemeIcon.extend({
      defaultProps: {
        size: 48,
      },
    }),
    Select: Select.extend({
      defaultProps: {
        checkIconPosition: 'right',
        comboboxProps: { shadow: 'none' },
        // searchable: true,
        // allowDeselect: false,
        // nothingFoundMessage: 'Nothing found...',
      },
      styles: {
        root: {
          margin: 0,
        },
        // section: { width: 24, margin: '0 16px' },
        input: {
          // padding: '0 16px 0px 56px',
          height: 48,
        },
        option: {
          height: 48,
          padding: 16,
        },
        dropdown: {
          padding: 0,
        },
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        withCloseButton: false,
      },
    }),
    Pagination: Pagination.extend({
      defaultProps: {},
      styles: {
        control: {
          height: 48,
          width: 48,
          borderRadius: 16,
        },
      },
    }),
    Avatar: Avatar.extend({
      defaultProps: {
        radius: 16,
        size: 48,
      },
    }),
    MultiSelect: MultiSelect.extend({
      defaultProps: {
        clearable: true,
        searchable: true,
        checkIconPosition: 'right',
        hidePickedOptions: true,
        comboboxProps: { shadow: 'xs' },
      },
      styles: {
        input: {
          display: 'flex',
          padding: '10px 16px 10px 56px',
          minHeight: 48, // Tinggi input
        },
        dropdown: {
          padding: 0,
        },
        section: { width: 24, margin: '0 16px' },
        option: {
          height: 48,
          padding: 16,
        },
      },
    }),
    Image: Image.extend({
      defaultProps: {
        radius: 16,
      },
    }),
    Notification: Notification.extend({
      styles: {
        icon: {
          padding: 0,
          margin: 0,
          width: 48,
          height: 48,
        },
        body: {
          margin: '0 16px',
        },
        root: {
          padding: 16,
        },
        title: {
          fontSize: 16,
        },
        description: {
          fontSize: 16,
        },
      },
    }),
    Menu: Menu.extend({
      styles: {
        label: {
          // padding: 0,
        },
        dropdown: {
          padding: 8,
        },
        item: {
          // padding: 0,
          height: 48,
        },
        itemLabel: {
          fontSize: 16,
          fontWeight: 500,
          marginLeft: 16,
        },
        itemSection: {
          margin: 0,
        },
      },
    }),
    Checkbox: Checkbox.extend({
      defaultProps: {
        size: 24,
      },
    }),
    Table: Table.extend({
      defaultProps: {
        horizontalSpacing: 16,
        verticalSpacing: 16,
        striped: true,
        highlightOnHover: true,
        withTableBorder: true,
        withColumnBorders: true,
      },
    }),
  },
});

export default theme;
