import React from 'react';

export interface SubmitButtonProps { 
	onClick: () => void;
}

const SubmitButton : React.FC<SubmitButtonProps> = (arg : SubmitButtonProps) => (
  <>
    <input type='button' id='submit' name='submit' value='Submit' onClick={arg.onClick} />
  </>
)

export default SubmitButton;