import { useState } from 'react'
import { useDispatch } from './Context'
import { capitalize, formatFieldName } from '../util'
import { GeneralForm, EducationForm, EmploymentForm } from './Forms'

export default function Item ({ index, data }) {
	const [isEditable, setIsEditable] = useState(true)
	const dispatch = useDispatch()[data.type]

	function handleDelete () {
		dispatch({
			type: 'deleted',
			id: data.id
		})
	}

	function handleSubmit (e) {
		e.preventDefault()
		setIsEditable(false)
		const formData = {}
		new FormData(e.target).forEach((value, key) => formData[key] = value)
		dispatch({
			type: 'changed',
			id: data.id,
			formData
		})
	}

	let form = <GeneralForm data={data} onSubmit={handleSubmit} handleDelete={handleDelete} />
	if (data.type === 'education') {
		form = <EducationForm data={data} onSubmit={handleSubmit} handleDelete={handleDelete} />
	}	else if (data.type === 'employment') {
		form = <EmploymentForm data={data} onSubmit={handleSubmit} handleDelete={handleDelete} />
	}

	return (
		<div className='item'>
			<h3>{`${capitalize(data.type)} ${index ? index : ''}`}</h3>
			{isEditable ?
				form :
				<UneditableItem data={data} handleClick={() => setIsEditable(true)}/>
			}
		</div>
	)
}

function UneditableItem ({ data, handleClick }) {
	const omittedFields = ['id', 'type', 'creationDate']
	const parsedFields = Object.fromEntries(
		Object.entries(data).filter(([key]) => !omittedFields.includes(key))
	)
	return (
		<>
			<ul className='columns'>
				{Object.entries(parsedFields).map(([key, value]) =>
					<li key={key} className='columns'>
						<span className='field-name' >{formatFieldName(key)} </span>
						<span>{value}</span>
					</li>
				)}
			</ul>
			<button onClick={handleClick}>Edit</button>
		</>
	)
}
