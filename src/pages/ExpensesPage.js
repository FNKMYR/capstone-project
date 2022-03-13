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
  const handleMemberSubmit = event => {
    event.preventDefault();
    const memberArray = inputNames.split(',').map(function (name) {
      return name.trim();
    });
    console.log(memberArray);
    setMembers(memberArray);
  };
  return (
    <Wrapper>
      <Header headerText="SplitPal" backButtonVisibility="hidden" />
      <SubHeader>
        <form onSubmit={handleMemberSubmit} aria-label="Set or edit members">
          <label htmlFor="memberinput">
            Member names, separated by a comma:
          </label>
          <input
            type="text"
            name="memberinput"
            id="memberinput"
            autoComplete="off"
            value={inputNames}
            onChange={event => setInputNames(event.target.value)}
          />
          <button>Submit</button>
        </form>
        <p>
          Current members:{' '}
          <span style={{ fontWeight: 'bold' }}>{members.join(', ')}</span>{' '}
          {/*Using inline styling here as it's only temporary*/}
        </p>
        <hr />
        <Button onClick={() => setExpenses([])}>
          For dev purposes: Delete all expense entries
        </Button>
      </SubHeader>
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

const SubHeader = styled.section`
  height: auto;
  width: 100%;
`;
