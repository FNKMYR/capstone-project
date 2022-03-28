import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function ExpenseUseForm({
  members,
  expenses,
  setExpenses,
  editExpense,
  buttonContent,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: editExpense
      ? {
          id: editExpense.id,
          title: editExpense.title,
          description: editExpense.description,
          amount: editExpense.amount,
          date: editExpense.date,
          paidBy: editExpense.paidBy,
          paidFor: editExpense.paidFor,
        }
      : { date: new Date().toISOString().split('T')[0] },
  });
  const navigate = useNavigate();
  const onSubmit = data => {
    data.id
      ? setExpenses([
          ...expenses.slice(
            0,
            expenses.findIndex(expense => expense.id === data.id)
          ),
          { ...data },
          ...expenses.slice(
            expenses.findIndex(expense => expense.id === data.id) + 1
          ),
        ])
      : setExpenses(prevExpenses => [
          ...prevExpenses,
          { ...data, id: uuidv4() },
        ]);
    navigate(`/`);
  };

  if (members && members.length > 0) {
    return (
      <Wrapper>
        <Form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
          <Error>{errors.title && <p>{errors.title.message}</p>}</Error>
          <Error>{errors.amount && <p>{errors.amount.message}</p>}</Error>
          <Error>{errors.date && <p>{errors.date.message}</p>}</Error>
          <Error>{errors.paidBy && <p>{errors.paidBy.message}</p>}</Error>
          <Error>{errors.paidFor && <p>{errors.paidFor.message}</p>}</Error>

          <InputContainer>
            <StyledInput
              type="text"
              id="title"
              placeholder=" "
              autocomplete="off"
              {...register('title', {
                required: 'Please enter an expense title.',
                maxLength: {
                  value: 30,
                  message:
                    'Title is too long, use the description for more details.',
                },
              })}
            />
            <StyledLabel htmlFor="title">Title</StyledLabel>
          </InputContainer>
          <InputContainer10rem>
            <StyledTextarea
              id="description"
              placeholder=" "
              autocomplete="off"
              {...register('description', {
                required: false,
              })}
            />
            <StyledLabel htmlFor="description">Description</StyledLabel>
          </InputContainer10rem>
          <InputContainer>
            <StyledInput
              id="amount"
              placeholder=" "
              autocomplete="off" //if anyone has any idea why this input still opens an autocomplete window on mobile please let me know
              {...register('amount', {
                required: 'Please enter an amount.',
                pattern: {
                  value: /^\d*(\.\d{0,2})?$/,
                  message: 'Please enter a valid amount.',
                },
                max: {
                  value: 999999.99,
                  message:
                    "Looks like you're too rich to use this app. Maximum amount: 999,999€.",
                },
              })}
            />
            <StyledLabel htmlFor="amount">Amount (€)</StyledLabel>
          </InputContainer>
          <InputContainer>
            <StyledInput
              type="date"
              id="date"
              {...register('date', {
                required: 'Please enter a date.',
              })}
            />
            <StyledLabelDate htmlFor="date">Date</StyledLabelDate>
          </InputContainer>
          <InputContainer>
            <StyledSelect
              {...register('paidBy', {
                required: 'Please select a member.',
                validate: value =>
                  value !== 'default' || 'Please select a member.',
              })}
              id="paidFor"
              defaultValue="default"
            >
              <option value="default" disabled>
                -- Select a member --
              </option>
              {members.map((member, index) => (
                <option key={index} value={member}>
                  {member}
                </option>
              ))}
            </StyledSelect>
            <StyledLabelPaidBy htmlFor="paidFor">Who paid?</StyledLabelPaidBy>
          </InputContainer>
          <InputContainerAuto>
            <p>Who was the expense paid for?</p>
            <CheckboxContainer>
              {members.map((member, index) => (
                <StyledCheckbox key={index}>
                  <StyledCheckboxInput
                    {...register('paidFor', {
                      required: 'Please select atleast one person.',
                    })}
                    type="checkbox"
                    value={member}
                    id={index}
                  />
                  <label htmlFor={index}>{member}</label>
                </StyledCheckbox>
              ))}
            </CheckboxContainer>
          </InputContainerAuto>
          <InputContainer>
            <StyledButton>{buttonContent}</StyledButton>
          </InputContainer>
        </Form>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <MemberError>Please add members on the main page first</MemberError>
    </Wrapper>
  );
}

//Wrappers

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 7.5rem);

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.color.gradientPrimary};

  * {
    font-family: inherit;
  }
`;

const Form = styled.form`
  width: 98%;
  height: 98%;
  padding: 0 2rem 0 2rem;
  border-radius: 3rem;
  overflow-y: scroll;
  background: ${props => props.theme.color.gradientSecondaryMedium};

  // Scrollbar caused issues with the right-side border radius
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::webkit-scrollbar {
    display: none;
  }
`;

const Error = styled.section`
  font-size: 2rem;
  color: ${props => props.theme.color.complementaryDark};

  p {
    margin-top: 0.3rem;
    margin-bottom: 0;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.4rem 2rem 0;
  border-radius: 1.2rem;
  border: 0;
  outline: 0;
  appearance: none;
  font-size: 2rem;
  background-color: ${props => props.theme.color.secondaryDark};
  color: ${props => props.theme.color.textSecondary};
  transition: transform 200ms, color 200ms;

  :focus {
    color: ${props => props.theme.color.complementaryLight};
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  border: 0;
  resize: none;

  font-size: 2rem;
  background-color: ${props => props.theme.color.secondaryDark};
  color: ${props => props.theme.color.textSecondary};
  transition: transform 200ms, color 200ms;

  :focus {
    color: ${props => props.theme.color.complementaryLight};
  }
`;

const MemberError = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  font-weight: bold;
  font-style: italic;
  color: red;
`;

const InputContainer = styled.section`
  width: 100%;
  height: 5rem;
  position: relative;
  margin-top: 2.5rem;
`;

const InputContainer10rem = styled(InputContainer)`
  height: 10rem;
`;

const StyledLabel = styled.label`
  color: ${props => props.theme.color.textSecondaryDark};
  line-height: 1.4rem;
  font-size: 2rem;

  position: absolute;
  top: 1.8rem;
  left: 1rem;
  pointer-events: none;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;

  ${StyledTextarea}:focus + &, ${StyledInput}:focus + &, ${StyledTextarea}:not(:placeholder-shown) + &, ${StyledInput}:not(:placeholder-shown) + & {
    transform: translateY(-3.8rem) translateX(1rem) scale(0.85);
    background-color: ${props => props.theme.color.secondaryDark};
    color: ${props => props.theme.color.textSecondary};
    padding: 1rem;
    border-radius: 1rem;
  }

  ${StyledTextarea}:focus + &, ${StyledInput}:focus + & {
    color: ${props => props.theme.color.complementaryLight};
  }
`;

const StyledLabelDate = styled.label`
  color: ${props => props.theme.color.textSecondary};
  background-color: ${props => props.theme.color.secondaryDark};
  border-radius: 1rem;
  line-height: 1.4rem;
  font-size: 2rem;
  padding: 1rem;

  position: absolute;
  transform: translateY(-3.8rem) scale(0.85);
  top: 1.8rem;
  left: 1.6rem;
  pointer-events: none;

  ${StyledInput}:focus + & {
    color: ${props => props.theme.color.complementaryLight};
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 0.4rem 2rem;
  border: none;
  border-radius: 1rem;

  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F5B440' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1.5rem center;
  background-size: 1em;

  font-size: 2rem;
  background-color: ${props => props.theme.color.secondaryDark};
  color: ${props => props.theme.color.textSecondary};

  :focus {
    color: ${props => props.theme.color.complementaryLight};
  }
`;

const StyledLabelPaidBy = styled.label`
  color: ${props => props.theme.color.textSecondary};
  background-color: ${props => props.theme.color.secondaryDark};
  border-radius: 1rem;
  line-height: 1.4rem;
  font-size: 2rem;
  padding: 1rem;

  position: absolute;
  transform: translateY(-3.8rem) scale(0.85);
  top: 1.8rem;
  left: 1rem;
  pointer-events: none;

  ${StyledSelect}:focus + & {
    color: ${props => props.theme.color.complementaryLight};
  }
`;

const InputContainerAuto = styled(InputContainer)`
  height: auto;
  padding: 1rem;
  margin-top: 4rem;
  background-color: ${props => props.theme.color.secondaryDark};
  border-radius: 1rem;

  * {
    font-size: 2rem;
    user-select: none;
  }

  p {
    color: ${props => props.theme.color.textSecondary};
    background-color: ${props => props.theme.color.secondaryDark};
    border-radius: 1rem;
    line-height: 1.4rem;
    font-size: 2rem;
    padding: 1rem;

    position: absolute;
    transform: translateY(-3.8rem) scale(0.85);
    top: -0.5rem;
    left: -0.2rem;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledCheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;

  width: 3rem;
  height: 3rem;
  margin: auto;

  background: ${props => props.theme.color.gradientPrimary};
  border-radius: 1rem;

  :checked {
    background: ${props => props.theme.color.gradientComplementaryLight};
  }
`;

const StyledCheckbox = styled.div`
  width: 14rem;
  height: 5rem;
  margin: auto;

  display: grid;
  grid-template-columns: 2fr 4fr;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.color.secondaryMedium};
  border-radius: 1rem;

  label {
    color: ${props => props.theme.color.textSecondary};
    max-width: 10rem;
    cursor: pointer;
    word-wrap: break-word;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 4rem;

  background-color: ${props => props.theme.color.secondaryDark};
  color: ${props => props.theme.color.complementaryLight};
  font-family: inherit;
  font-size: 3rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  :hover {
    opacity: 80%;
  }
  :active {
    opacity: 70%;
  }
`;
