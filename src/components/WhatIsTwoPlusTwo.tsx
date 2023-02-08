import { useState } from "react";
import { ChildProps } from "./ChildPropTypes";
import ErrorField from "./ErrorField";

const WhatIsTwoPlusTwo: React.FC<ChildProps> = ({ value, onChangeValue }: ChildProps) => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>('');

    return (
        <>
            <label htmlFor='whatIsTwoPlusTwo'>What is 2 + 2 </label>
            <select id='whatIsTwoPlusTwo' name='whatIsTwoPlusTwo' onChange={(e) => {
                setErrorMsg(validate(e.target.value));
                onChangeValue(e);
            }}>
                <option value="4">4</option>
                <option value="Not 4">Not 4</option>
            </select>
            <br />
            <ErrorField msg={errorMsg} />
        </>
    );
};

export default WhatIsTwoPlusTwo;

function validate(value: string): string | undefined {
    if (value !== '4') {
        return 'Incorrect answer';
    } else {
        return undefined;
    }
}