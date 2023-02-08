import { ChildProps } from "./ChildPropTypes";

export interface FormDataOutput { 
	value: string;
}

const OutputField : React.FC<FormDataOutput> = ({ value }: FormDataOutput) => {
    return (
    <>
    <label htmlFor='output'>Form Data </label>
    <textarea id='output' name='output' rows={6} cols={40} value={value} readOnly={true} />
    </>
    );
  };
  
  export default OutputField;