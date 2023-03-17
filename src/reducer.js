import { setItem, deleteItem } from './storage'

export default function reducer (draft, action) {
	const all = {
		id: self.crypto.randomUUID(),
		startDate: '',
		endDate: '',
		creationDate: Date.now()
	}
	const items = {
		education: {
			type: 'education',
			school: '',
			course: ''
		},
		employment: {
			type: 'employment',
			companyName: '',
			position: '',
			duties: ''
		}
	}

	switch (action.type) {
		case 'added': {
			draft.push({
				id: self.crypto.randomUUID(),
				...items[action.sectionName],
				...all
			})
			break
		}
		case 'changed': {
			const index = draft.findIndex(item => item.id === action.id)
			draft[index] = {
				...draft[index],
				...action.formData
			}
			setItem(draft[index])
			break
		}
		case 'deleted': {
			const index = draft.findIndex(item => item.id === action.id)
			deleteItem(draft[index])
			draft.splice(index, 1)
			break
		}
		default: {
			throw Error('Unknown action: ' + action.type)
		}
	}
}
