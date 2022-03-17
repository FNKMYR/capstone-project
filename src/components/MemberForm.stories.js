import MemberForm from './MemberForm.js';
export default {
  title: 'Component/MemberForm',
  component: MemberForm,
};
const Template = args => <MemberForm {...args} />;

export const Default = Template.bind({});
Default.args = { members: ['Jens', 'Max', 'Peter'] };
