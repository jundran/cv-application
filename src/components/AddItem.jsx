import { useDispatch } from './Context'
import AddIcon from '/add-icon.svg'
import { capitalize } from '../util'
export default function AddItem ({ sectionName }) {
	const dispatch = useDispatch()[sectionName]

	function handleAdd () {
		dispatch({
			type: 'added',
			sectionName
		})
	}

	return (
		<div className='add-item'>
			<span>Add {capitalize(sectionName)}</span>
			<button className='icon-button' type='button' onClick={handleAdd}>
				<img src={AddIcon} alt='Add item' />
			</button>
		</div>
	)
}
