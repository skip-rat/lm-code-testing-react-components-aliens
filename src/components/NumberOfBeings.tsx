import { useState } from "react";
import { ChildProps } from "./ChildPropTypes";
import ErrorField from "./ErrorField";

const NumberOfBeings: React.FC<ChildProps> = ({ value, onChangeValue }: ChildProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>('');

  return (
    <>
      <label htmlFor='numberOfBeings'>Number of beings </label>
      <input type='number' id='numberOfBeings' name='numberOfBeings' value={value}  onChange={(e) => {
        setErrorMsg(validate(e.target.value));
        onChangeValue(e);
      }} />
      <br />
      <ErrorField msg={errorMsg} />
    </>
  );
};

export default NumberOfBeings;

function validate(value: string): string | undefined {
  if (value.length < 1000000000) {
    return 'Numbers ONLY. Must be at least 1,000,000,000';
  } else {
    return undefined;
  }
}