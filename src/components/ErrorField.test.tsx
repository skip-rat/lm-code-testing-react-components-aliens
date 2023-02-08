import { render, screen } from '@testing-library/react';
import ErrorField, { ErrorMessage } from './ErrorField';


test('component renders and shows label text', () => {
    const props: ErrorMessage = {
        msg: 'abc'
    };

    render(<ErrorField msg={props.msg} />);

    const error = screen.getByText('' + props.msg);
    expect(error).toBeInTheDocument();
});