import ExpenseList from './ExpenseList.js';

export default {
  title: 'Component/ExpenseList',
  component: ExpenseList,
};
const Template = args => <ExpenseList {...args} />;

export const Default = Template.bind({});

Default.args = {
  expenses: [
    { title: 'Restaurant visit', amount: 71.5 },
    { title: 'Cinema', amount: 42.0 },
  ],
};
