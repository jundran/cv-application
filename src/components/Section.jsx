import Item from './Item'
import AddItem from './AddItem'
import { useData } from './Context'
import { capitalize } from '../util'

export default function Section ({ name }) {
	const data = useData()[name]

	return (
		<section>
			<h2>{capitalize(name)}</h2>
			{data.map((itemData, index) =>
				<Item
					key={itemData.id}
					index={index + 1}
					data={itemData}
				/>
			)}
			{name !== 'general' && <AddItem sectionName={name} />}
		</section>
	)
}
