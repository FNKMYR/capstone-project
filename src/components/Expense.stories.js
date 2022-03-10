import Expense from './Expense.js';
export default {
  title: 'Component/Expense',
  component: Expense,
};
const Template = args => <Expense {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Restaurant visit',
  amount: 100.54,
};
