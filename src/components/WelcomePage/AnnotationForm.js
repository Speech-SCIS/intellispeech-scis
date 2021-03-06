import { React, useContext, useEffect, useState } from 'react';

import { LanguageContext } from '../../context/LanguageContext';
import { AnnotationFormText } from '../../assets/ViewTexts/AnnotationFormText';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, IconButton, makeStyles, TextField } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import './AnnotationForm.css';

import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			display: 'flex',
			margin: theme.spacing(1),
			width: '25ch',
		},
		color: 'white',
		textDecorationColor:  'white',
	},
	formElement: {
		margin: theme.spacing(1),
	}
}));


const AnnotationForm = ({ nextPage }) => {
	let language = useContext(LanguageContext);

	// styling for form
	const classes = useStyles();

	// uid generator
	const [uid, setUid] = useState();

	// hooks
	const [genderValue, setGenderValue] = useState('female');
	const [ageValue, setAgeValue] = useState(0);

	useEffect(() => {
		// uid = uuidv4();
		setUid(uuidv4());
	}, []);

	const handleGenderChange = (event) => {
		setGenderValue(event.target.value);
		// console.log(genderValue);
	};

	const handleAgeChange = (event) => {
		setAgeValue(event.target.value);
		// console.log(genderValue);
	};
	const writeFormData = () => {
		localStorage.setItem('uid', uid);
		localStorage.setItem('genderVal', genderValue);
		localStorage.setItem('ageVal', ageValue);
		// console.log(localStorage.getItem('uid'));
		console.log({uid, genderValue, ageValue});
	}
   // document.getElementById('annotation-form-text').style.color = "white"
	return (
		<div className = 'home'>
			<Link to='/'>
				<IconButton>
					<HomeIcon />
				</IconButton>
			</Link>
			<h4>
				{AnnotationFormText.uid[language.toString()]} : {uid}
			</h4>
			<form className={classes.root} noValidate autoComplete="off">
				{/* Gender */}
				<FormControl className={classes.formElement}>
					<FormLabel className = {classes.root}> {AnnotationFormText.yourGender[language.toString()]} </FormLabel>
					<RadioGroup className = {classes.root} aria-label="gender" name="gender" value={genderValue} onChange={handleGenderChange}>
						<FormControlLabel
							value="female"
							control={<Radio />}
							label={AnnotationFormText.text.female[language.toString()]} />

						<FormControlLabel
							value="male"
							control={<Radio />}
							label={AnnotationFormText.text.male[language.toString()]} />
					</RadioGroup>
				</FormControl>

				{/* Age */}
				<FormControl className={classes.formElement}>
					<FormLabel className = {classes.root}>
						{AnnotationFormText.yourAge[language.toString()]}
					</FormLabel>
					<TextField
						required
						className = {classes.root}
						id="standard-number"
						label={AnnotationFormText.text.number[language.toString()]}
						type="number"
						name="age"
						onChange={handleAgeChange}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</FormControl>
				<Link to={`${nextPage}`} >
					<Button
					    className = {classes.root}
						onClick={() => writeFormData()}
					> {AnnotationFormText.submit[language.toString()]} </Button>
				</Link>
			</form>
		</div>
	);
}

export default AnnotationForm;