import { render, screen, waitFor } from '@testing-library/react';
import { ChildProps, FormChangeEvent } from './ChildPropTypes';
import SpeciesName from './SpeciesName';

test('component renders and accepts input', async () => {
    // dummy props to pass to component
    const props: ChildProps = {
        value: 'K',
        onChangeValue: (e: FormChangeEvent) => { }
    };

    const { rerender } = render(<SpeciesName {...props} />);

    // check component gets rendered
    const input = screen.getByLabelText(/Species Name/i);
    expect(input).toBeInTheDocument();
});

