import TextInput from "./TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'date']
    }
  }
}

export const Default = {
  args: {
    name: 'fname',
    label: 'First Name',
    placeholder: 'Enter your name'
  }
}

export const Password = {
  args: {
    name: 'pwd',
    label: 'password',
    placeholder: 'Enter your password',
    type: 'password'
  }
}