import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import AddTransaction from './components/AddTransaction/AddTransaction';
import ExpenseListing from './components/ExpenseListing'
import { fireEvent } from '@testing-library/react'

// test('renders learn react link', () => {
//   render(<App />);
//   // const linkElement = screen.getByText(Expense Manager);
//   // expect(linkElement).toBeInTheDocument();
// });

test('Amount header', () => {
  render(<App />);
  const linkElement = screen.getByText("Amount (Rs)");
  expect(linkElement).toBeInTheDocument();
});

test('Click Add Expense button', async () => {
  render(<App/>);
  const button = screen.getByText('Add Expense');
  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText('Add your expense')).toBeInTheDocument()
  });
  
  const contentInput = screen.getByTestId("amount-input");
   fireEvent.change(contentInput, {
  target: { value: 5000 }
});

  const input1 = screen.getByTestId('select-input');
  fireEvent.change(input1, {target: {value: 'Health'}});

  const input2 = screen.getByTestId('desc-input');
  fireEvent.change(input2, {target: {value: 'Test'}});

  const button1 = screen.getByTestId('add-button');
  fireEvent.click(button1);
  await waitFor(() => {
    const linkElement = screen.getByText("Amount (Rs)");
    expect(linkElement).toBeInTheDocument();
  });
})
// test('render AddTransaction', () => {
//   render(<ExpenseListing/>);

// });

