import { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header.js';
import ExpenseList from './components/ExpenseList.js';

function App() {
  return (
    <Grid>
      <Header />
      <ExpenseList />
    </Grid>
  );
}

const Grid = styled.section`
  display: grid;
`;

export default App;
