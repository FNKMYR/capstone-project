import ExpenseForm from './ExpenseForm.js';
export default {
  title: 'Component/ExpenseForm',
  component: ExpenseForm,
};
const Template = args => <ExpenseForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
