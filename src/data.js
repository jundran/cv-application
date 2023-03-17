export default {
	general: [
		{
			id: '0',
			type: 'general',
			firstName: 'Homer',
			lastName: 'Simpson',
			address: '742 Evergreen Terrace, Springfield WK',
			email: 'homer@example.com',
			phone: '(555) 691-7411',
			creationDate: '1'
		}
	],

	education: [
		{
			id: self.crypto.randomUUID(),
			type: 'education',
			school: 'Springfield Elementary School',
			course: 'Reading and Writing',
			startDate: '1980-09-01',
			endDate: '1985-05-31',
			creationDate: '3'
		},
		{
			id: self.crypto.randomUUID(),
			type: 'education',
			school: 'Springfield Middle School',
			course: 'Maths and Science',
			startDate: '1985-09-01',
			endDate: '1990-05-31',
			creationDate: '2'
		},
		{
			id: self.crypto.randomUUID(),
			type: 'education',
			school: 'Springfield High School',
			course: 'Nuclear Physics',
			startDate: '1990-09-01',
			endDate: '1993-05-31',
			creationDate: '1'
		}
	],

	employment: [
		{
			id: self.crypto.randomUUID(),
			type: 'employment',
			companyName: 'Springfield Nuclear Power Plant',
			position: 'Nuclear Engineer',
			duties: 'Avoid meltdown while eating doughnuts and sleeping at my desk. Also, play with radioactive shiny things and annoy Mr. Burns.',
			startDate: '1993-09-01',
			endDate: new Date().toISOString().substring(0, 10),
			creationDate: '1'
		}
	]
}
