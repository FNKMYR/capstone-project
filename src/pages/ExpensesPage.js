import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Header from '../components/Header.js';
import ExpenseList from '../components/ExpenseList.js';

export default function ExpensesPage({
  expenses,
  setExpenses,
  members,
  setMembers,
}) {
  const [inputNames, setInputNames] = useState('');
  const [inputWarning, setInputWarning] = useState('');

  const handleMemberSubmit = event => {
    event.preventDefault();
    const memberArray = inputNames
      .split(',')
      .map(function (name) {
        return name.trim();
      })
      .filter(name => {
        return name !== '';
      });
    console.log(memberArray);
    if (memberArray.length > 0) {
      setMembers(memberArray);
      setInputWarning('');
    } else {
      setMembers([]);
      setInputWarning('Invalid input');
    }
  };
  return (
    <Wrapper>
      <Header headerText="SplitPal" backButtonVisibility="hidden" />
      <MemberForm>
        {/*Will source this out as a component later on*/}
        <form onSubmit={handleMemberSubmit} aria-label="Set or edit members">
          <label htmlFor="memberinput">
            Member names, separated by a comma:
          </label>
          <input
            type="text"
            name="memberinput"
            id="memberinput"
            autoComplete="off"
            minLength={1}
            value={inputNames}
            onChange={event => setInputNames(event.target.value)}
          />
          <button>Submit</button>
          {inputWarning && <Warning> {inputWarning}</Warning>}
        </form>
        <p>
          Current members: <BoldSpan>{members.join(', ')}</BoldSpan>{' '}
        </p>
        <hr />
        <Button onClick={() => setExpenses([])}>
          For dev purposes: Delete all expense entries
        </Button>
      </MemberForm>
      <ExpenseList
        expenses={expenses}
        setExpenses={value => setExpenses(value)}
      />
      <StyledButton as={Link} to="/add">
        +
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  height: 4rem;
  width: 4rem;
  border: 5px solid black;
  border-radius: 2rem;
  font-size: 4rem;
  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1rem;
  left: calc(50% - 2rem);
`;

const MemberForm = styled.section`
  height: auto;
  width: 100%;
`;

const Warning = styled.span`
  color: red;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;
