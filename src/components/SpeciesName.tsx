import { useState } from "react";
import { ChildProps } from "./ChildPropTypes";
import ErrorField from "./ErrorField";
import { isAlpha } from "./Utils";

const SpeciesName: React.FC<ChildProps> = ({ value, onChangeValue }: ChildProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>(' ');

  return (
    <>
      <label htmlFor='speciesName'>Species Name </label>
      <input type='text' id='speciesName' name='speciesName' value={value} onChange={(e) => {
        setErrorMsg(validate(e.target.value));
        onChangeValue(e);
      }} />
      <br />
      <ErrorField msg={errorMsg} />
    </>
  );
};

export default SpeciesName;

function validate(value: string): string | undefined {
  if (value.length < 3 || value.length > 23 || isAlpha(value) === false) {
    return 'Must be between 3 and 23 characters. No numbers or special characters allowed!';
  } else {
    return undefined;
  }
}