import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import AnimalForm from './AnimalForm';

test('renders AnimalForm', () => {
    render(<AnimalForm />);
})

test('renders AnimalForm', () => {
    render(<AnimalForm />);

    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    fireEvent.change(speciesInput, { target: { value: 'dog' }});
    fireEvent.change(ageInput, { target: {value: '11'}});
    fireEvent.change(notesInput, { target: {value: 'woof'}});

    expect(speciesInput).toHaveValue('dog');
    expect(ageInput).toHaveValue('11');
    expect(notesInput).toHaveValue('woof');

    const button = screen.getByRole("button", { name: /submit!/i});
    fireEvent.click(button);

})