import { useState } from "react";
import { ChildProps } from "./ChildPropTypes";
import ErrorField from "./ErrorField";
import { isAlphaNumeric } from "./Utils";

const PlanetName: React.FC<ChildProps> = ({ value, onChangeValue }: ChildProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>('');

  return (
    <>
      <label htmlFor='planetName'>Planet Name </label>
      <input type='text' id='planetName' name='planetName' value={value} onChange={(e) => {
        setErrorMsg(validate(e.target.value));
        onChangeValue(e);
      }} />
      <br />
      <ErrorField msg={errorMsg} />
    </>
  );
};

export default PlanetName;

function validate(value: string): string | undefined {
  if (value.length < 2 || value.length > 49 || isAlphaNumeric(value) === false) {
    return 'Must be between 2 and 49 characters. Numbers are allowed, but no special characters';
  } else {
    return undefined;
  }
}