import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export default function MemberForm({ members, setMembers }) {
  const [showPopup, setShowPopup] = useState(false);
  const [inputWarning, setInputWarning] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { memberinput: '' } });

  const onSubmit = data => {
    console.log(members);
    console.log(data.memberinput);
    const memberArray = data.memberinput
      .split(',')
      .map(function (name) {
        return name.trim();
      })
      .filter(name => {
        return name !== '';
      });
    if (memberArray.length > 0) {
      setMembers(prevMembers => [...prevMembers, ...memberArray]);
      setInputWarning('');
      setShowPopup(false);
    } else {
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="memberinput">
                Member names, separated by a comma:
              </label>
              <input type="text" {...register('memberinput')} />
              <button type="submit">Submit</button>
            </form>
            <Error>{errors.title && <p>{errors.title.message}</p>}</Error>
            <Error>{inputWarning && <p>{inputWarning}</p>}</Error> Members:{' '}
            <NameArea>
              {members
                ? members.map((member, index) => (
                    <StyledSpan key={index}>
                      {member}
                      <StyledButton //This is a delete button
                        onClick={() =>
                          setMembers(
                            members
                              .slice(0, index)
                              .concat(
                                members.slice(index + 1, members.length + 1)
                              )
                          )
                        }
                      >
                        X
                      </StyledButton>
                    </StyledSpan>
                  ))
                : ''}
            </NameArea>
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

const Error = styled.section`
  font-size: 2rem;
  color: ${props => props.theme.color.complementaryDark};

  p {
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
`;

const BoldSpan = styled.span`
  font-weight: bold;
`;

const NameArea = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  background: ${props => props.theme.color.secondaryMedium};
  color: ${props => props.theme.color.textSecondary};
  padding: 0.5rem;

  ::first-letter {
    text-transform: capitalize;
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
`;
