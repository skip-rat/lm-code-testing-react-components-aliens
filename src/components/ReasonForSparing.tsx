import { useState } from "react";
import { ChildProps } from "./ChildPropTypes";
import ErrorField from "./ErrorField";

const ReasonForSparing: React.FC<ChildProps> = ({ value, onChangeValue }: ChildProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>('');

  return (
    <>
      <label htmlFor='reasonForSparing'>Reason for sparing </label>
      <textarea id='reasonForSparing' name='reasonForSparing' rows={10} cols={30} value={value}  onChange={(e) => {
        setErrorMsg(validate(e.target.value));
        onChangeValue(e);
      }} />
      <br />
      <ErrorField msg={errorMsg} />
    </>
  );
};

export default ReasonForSparing;

function validate(value: string): string | undefined {
  if (value.length < 17 || value.length > 153) {
    return 'Must be between 17 and 153 characters';
  } else {
    return undefined;
  }
}