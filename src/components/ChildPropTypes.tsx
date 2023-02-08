
export type FormChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export interface ChildProps { 
	value: string;
	onChangeValue: (e: FormChangeEvent) => void;
}