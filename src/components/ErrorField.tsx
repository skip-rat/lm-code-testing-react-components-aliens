
export interface ErrorMessage {
    msg: string | undefined;
}

const ErrorField: React.FC<ErrorMessage> = ({ msg }: ErrorMessage) => (
    <label id='errorField' data-testid='errorField' style={{ color: "red" }}>{msg}</label>
);

export default ErrorField;