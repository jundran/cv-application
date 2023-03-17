import TrashIcon from '/trash.svg'

export function GeneralForm ({ data, onSubmit }) {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<ul className='columns'>
					<li>
						<label htmlFor='firstName'>First Name</label>
						<input name='firstName' defaultValue={data.firstName} required />
					</li>
					<li>
						<label htmlFor='lastName'>Last Name</label>
						<input name='lastName' defaultValue={data.lastName} required />
					</li>
					<li>
						<label htmlFor=''>Address</label>
						<input name='address' defaultValue={data.address} required />
					</li>
					<li>
						<label htmlFor='email'>Email</label>
						<input name='email' defaultValue={data.email} type='email' required />
					</li>
					<li>
						<label htmlFor='phone'>Phone</label>
						<input name='phone' defaultValue={data.phone} required />
					</li>
				</ul>
				<Footer />
			</form>
		</div>
	)
}

export function EducationForm ({ data, onSubmit, handleDelete }) {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<ul className='columns'>
					<li>
						<label htmlFor='school'>School</label>
						<input name='school' defaultValue={data.school} required />
					</li>
					<li>
						<label htmlFor='course'>Course</label>
						<input name='course' defaultValue={data.course} required />
					</li>
					<li>
						<label htmlFor=''>Start Date</label>
						<input name='startDate' defaultValue={data.startDate} type='date' required />
					</li>
					<li>
						<label htmlFor='endDate'>End Date</label>
						<input name='endDate' defaultValue={data.endDate} type='date' required />
					</li>
				</ul>
				<Footer handleDelete={handleDelete} />
			</form>
		</div>
	)
}

export function EmploymentForm ({ data, onSubmit, handleDelete }) {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<ul className='columns'>
					<li>
						<label htmlFor='companyName'>Company Name</label>
						<input name='companyName' defaultValue={data.companyName} required />
					</li>
					<li>
						<label htmlFor='position'>Position</label>
						<input name='position' defaultValue={data.position} required />
					</li>
					<li>
						<label htmlFor='duties'>Duties</label>
						<textarea name='duties' defaultValue={data.duties} required />
					</li>
					<li>
						<label htmlFor=''>Start Date</label>
						<input name='startDate' defaultValue={data.startDate} type='date' required />
					</li>
					<li>
						<label htmlFor='endDate'>End Date</label>
						<input name='endDate' defaultValue={data.endDate} type='date' required />
					</li>
				</ul>
				<Footer handleDelete={handleDelete} />
			</form>
		</div>
	)
}

function Footer ({ handleDelete }) {
	return (
		<div className='item-footer'>
			<button>Save</button>
			{handleDelete &&
				<button className='icon-button' type='button' onClick={handleDelete}>
					<img src={TrashIcon} alt='delete button' />
				</button>
			}
		</div>
	)
}
