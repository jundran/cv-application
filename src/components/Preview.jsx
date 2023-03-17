import { formatFieldName } from '../util'
import { useData } from './Context'

export default function Preview ({ close}) {
	const data = useData()

	return (
		<div className='Preview'>
			<Actions close={close}/>
			<h1>{data.general[0].firstName + ' ' + data.general[0].lastName}</h1>
			<Section name='General' data={data.general}/>
			<Section name='Education' data={data.education}/>
			<Section name='Employment' data={data.employment}/>
			<Actions close={close}/>
		</div>
	)
}

function Actions ({ close }) {
	return (
		<div className='actions'>
			<button onClick={close}>Return to edit</button>
			<button onClick={() => window.print()}>Print / Save PDF</button>
		</div>
	)
}

const omittedFields = ['id', 'type', 'creationDate']
function Section ({ name, data }) {
	return (
		<section>
			{data.map((entry, index) =>
				<div key={entry.id} className='item'>
					{/* Ensure <h2> stays with first item and not on different page
					when printing by using "page-break-inside: avoid" in CSS on .item */}
					{index === 0 && <h2>{name}</h2>}
					<ul className='columns'>
						{Object.entries(entry).map(([fieldName, value]) => {
							if (omittedFields.includes(fieldName)) return
							return <Field key={fieldName} fieldName={fieldName} value={value}/>
						})}
					</ul>
				</div>
			)}
		</section>
	)
}

function Field ({ fieldName, value }) {
	return (
		<li>
			<span className='field-name' >{`${formatFieldName(fieldName)}: `} </span>
			<span>{value}</span>
		</li>
	)
}
