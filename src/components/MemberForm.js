import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export default function MemberForm({ members, setMembers }) {
  const [inputNames, setInputNames] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: members ? members : '' });
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
      <p>
        Members: <BoldSpan>{members.join(', ')}</BoldSpan>{' '}
      </p>
      <button onClick={() => setShowPopup(true)}>Edit members</button>
      {showPopup && (
        <PopupWrapper>
          <Popup>
            {' '}
            <form
              onSubmit={handleMemberSubmit}
              aria-label="Set or edit members"
            >
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
              <Button>Submit</Button>
              {inputWarning && <Warning> {inputWarning}</Warning>}
            </form>
          </Popup>
        </PopupWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: auto;
  width: 100%;
`;

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const Popup = styled.section`
  width: 30rem;
  height: 20rem;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -15rem;

  background: ${props => props.theme.color.primaryBgLight};
  border-radius: 1rem;
`;

const Warning = styled.span`
  color: red;
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;
