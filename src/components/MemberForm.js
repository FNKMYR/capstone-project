import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ReactComponent as EditPen } from '../images/editPen.svg';

export default function MemberForm({ members, setMembers }) {
  const [showPopup, setShowPopup] = useState(false);
  const [inputWarning, setInputWarning] = useState('');
  const {
    register,
    handleSubmit,
    reset,
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
      reset();
    } else {
      setInputWarning('Invalid input');
    }
  };

  const onDoneSubmit = () => {
    setShowPopup(false);
  };

  return (
    <Wrapper>
      <MemberSection>
        <MemberSectionNames>
          <BoldSpanLeft>Members</BoldSpanLeft>
          <BoldSpanRight>{members.join(', ')}</BoldSpanRight>{' '}
        </MemberSectionNames>
        <EditButton onClick={() => setShowPopup(true)}>
          <EditPen />
          <p>Add or edit members</p>
        </EditButton>
      </MemberSection>
      {showPopup && (
        <PopupWrapper>
          <Popup>
            <StyledForm
              onSubmit={handleSubmit(onSubmit)}
              aria-label="Add new members"
            >
              <label htmlFor="memberinput">
                Member names, separated by a comma:
              </label>
              <div>
                <input
                  type="text"
                  placeholder="John, Jane, ..."
                  {...register('memberinput')}
                />
                <button type="submit">Submit</button>
              </div>
            </StyledForm>
            <Error>{errors.title && <p>{errors.title.message}</p>}</Error>
            <Error>{inputWarning && <p>{inputWarning}</p>}</Error>
            <CurrentMemberSection>
              <span>Members:</span>
              <NameArea>
                {members ? (
                  members.map((member, index) => (
                    <MemberName key={index}>
                      {member}
                      <DeleteButton
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
                      </DeleteButton>
                    </MemberName>
                  ))
                ) : (
                  <p>Currently none</p>
                )}
              </NameArea>
            </CurrentMemberSection>
            <DoneButton onClick={onDoneSubmit}>Done</DoneButton>
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
  height: auto;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -15rem;

  display: flex;
  flex-direction: column;

  background: ${props => props.theme.color.primaryBgLight};
  color: ${props => props.theme.color.textPrimaryDark};
  border-radius: 1rem;
`;

const StyledForm = styled.form`
  margin: 1rem;

  label {
    font-weight: bold;
    color: inherit;
  }

  div {
    display: flex;
  }

  input {
    padding: 1rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.color.gradientPrimary};
  }

  button {
    appearance: none;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.color.complementaryDark};
    color: ${props => props.theme.color.textSecondary};
  }
`;

const MemberSection = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 8rem;
  gap: 2rem;
`;

const MemberSectionNames = styled.div`
  border: 0.2rem solid ${props => props.theme.color.secondaryDark};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: columns;
`;
const BoldSpanLeft = styled.span`
  background: ${props => props.theme.color.secondaryDark};
  color: ${props => props.theme.color.textSecondary};
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const BoldSpanRight = styled.span`
  font-weight: bold;
  margin: 0.5rem;
  color: ${props => props.theme.color.textPrimaryDark};
`;

const EditButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  font-size: 1.2rem;

  color: ${props => props.theme.color.textSecondary};
  background: ${props => props.theme.color.secondaryDark};

  svg {
    height: 3rem;
    width: 3rem;
    margin-top: 0.5rem;
  }

  p {
    margin: 0 0 0.5rem 0;
  }
`;

const CurrentMemberSection = styled.section`
  border-radius: 1rem;

  > span {
    font-weight: bold;
    margin: 1rem;
  }
`;

const NameArea = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const MemberName = styled.div`
  background: ${props => props.theme.color.secondaryMedium};
  color: ${props => props.theme.color.textSecondary};
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;

  ::first-letter {
    text-transform: capitalize;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  color: ${props => props.theme.color.complementaryDark};
  border: 0.1rem solid ${props => props.theme.color.textSecondary};
  border-radius: 50rem;
  margin-left: 1rem;
`;

const Error = styled.section`
  font-size: 2rem;
  color: ${props => props.theme.color.complementaryDark};

  p {
    margin: 0 0 1rem 1rem;
  }
`;

const DoneButton = styled.button`
  appearance: none;
  cursor: pointer;
  width: 50%;
  margin: 1rem;
  padding: 1rem;
  align-self: center;
  border: none;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.color.complementaryDark};
  color: ${props => props.theme.color.textSecondary};
  font-weight: bold;
  font-size: 2rem;
`;
