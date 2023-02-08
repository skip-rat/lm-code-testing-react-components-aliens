import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName'
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';
import ReasonForSparing from './ReasonForSparing';
import SubmitButton from './SubmitButton';
import OutputField from './OutputField';


const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numOfBeings, setNumOfBeings] = useState('7800000000');
	const [whatIsTwoPlusTwo, setWhatIsTwoPlusTwo] = useState('');
	const [reasonForSparing, setReasonForSparing] = useState('');

	const [output, setOutput] = useState('');

	const formData = new Array<[string, string]>();
	formData.push(['speciesName', speciesName ]);
	formData.push(['planetName', planetName]);
	formData.push(['numOfBeings', numOfBeings]);
	formData.push(['whatIsTwoPlusTwo', whatIsTwoPlusTwo]);
	formData.push(['reasonForSparing', reasonForSparing]);

	const doSubmitForm = () => submitForm(formData, setOutput);

	return (
		<section className='w12MForm'>
			<form>
			<W12MHeader /><br /><br />
			<SpeciesName value={speciesName} onChangeValue={(e) => setSpeciesName(e.target.value)} /><br /><br />
			<PlanetName value={planetName} onChangeValue={(e) => setPlanetName(e.target.value)} /><br /><br />
			<NumberOfBeings value={numOfBeings} onChangeValue={(e) => setNumOfBeings(e.target.value)} /><br /><br />
			<WhatIsTwoPlusTwo value={whatIsTwoPlusTwo} onChangeValue={(e) => setWhatIsTwoPlusTwo(e.target.value)} /><br /><br />
			<ReasonForSparing value={reasonForSparing} onChangeValue={(e) => setReasonForSparing(e.target.value)} /><br /><br />
			<SubmitButton onClick={doSubmitForm} /><br /><br />
			<OutputField value={output} /><br /><br />
			</form>
		</section>
	);
};
// , 
function submitForm(formData : Array<[string, string]>, setOutput : React.Dispatch<React.SetStateAction<string>>) {
	let output = '';
	formData.forEach(s => {
		//output += (s[0] + '=' + s[1] + '<br />');
		output += formatFormParam(s[0], s[1]);
	});

	setOutput(output);
}

function formatFormParam(name : string, value : string) : string {
	return name + ' = ' + value + '\n';
}

export default W12MForm;

