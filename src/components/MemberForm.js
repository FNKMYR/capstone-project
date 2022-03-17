import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export default function MemberForm({ members, setMembers }) {
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
      {' '}
      <form onSubmit={handleMemberSubmit} aria-label="Set or edit members">
        <label htmlFor="memberinput">Member names, separated by a comma:</label>
        <input
          type="text"
          name="memberinput"
          id="memberinput"
          autoComplete="off"
          minLength={1}
          value={inputNames}
          onChange={event => setInputNames(event.target.value)}
        />
        <Button>Submit</Button>
        {inputWarning && <Warning> {inputWarning}</Warning>}
      </form>
      <p>
        Current members: <BoldSpan>{members.join(', ')}</BoldSpan>{' '}
      </p>
      <hr />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: auto;
  width: 100%;
`;

const Warning = styled.span`
  color: red;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;
