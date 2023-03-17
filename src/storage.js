import defaultData from './data'

function populateDefaultData () {
	localStorage.setItem('cv-storage-set', 'true')
	for (let section of Object.values(defaultData)) {
		for (let item of section) {
			setItem(item)
		}
	}
	return defaultData
}

export function getData () {
	if (!localStorage.getItem('cv-storage-set')) return populateDefaultData()

	const data = {
		general: [],
		education: [],
		employment: []
	}

	forEachKey(key => {
		if (key.startsWith('cv-')) {
			if (key.match(/general/)) data.general.push(JSON.parse(localStorage.getItem(key)))
			else if (key.match(/education/)) data.education.push(JSON.parse(localStorage.getItem(key)))
			else if (key.match(/employment/)) data.employment.push(JSON.parse(localStorage.getItem(key)))
			else if (key !== 'cv-storage-set') console.log('Invalid cv key found')
		}
	})

	// Sort by last created
	for (const key of Object.keys(data)) {
		data[key].sort((a, b) => a.creationDate - b.creationDate)
	}
	return data
}

function forEachKey (callback) {
	for (let i = 0; i < localStorage.length; i++) {
		callback(localStorage.key(i))
	}
}

export function setItem (item) {
	localStorage.setItem(`cv-${item.type}-${item.id}`, JSON.stringify(item))
}

export function deleteItem (item) {
	if (!item) return
	localStorage.removeItem(`cv-${item.type}-${item.id}`)
}
