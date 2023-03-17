import '../styles/App.sass'
import { useState } from 'react'
import Section from './Section'
import Preview from './Preview'
import DataProvider from './Context'

export default function App () {
	const [showPreview, setShowPreview] = useState(false)

	if (showPreview) return (
		<DataProvider>
			<Preview close={() => setShowPreview(false)} />
		</DataProvider>
	)

	return (
		<DataProvider>
			<div className='App'>
				<h1>CV Creator</h1>
				<PreviewButton onClick={() => setShowPreview(true)} />
				<Section name='general'/>
				<Section name='education'/>
				<Section name='employment'/>
				<PreviewButton onClick={() => setShowPreview(true)} />
			</div>
		</DataProvider>
	)
}

function PreviewButton ({ onClick }) {
	return (
		<button className='preview-button' onClick={onClick} >Preview</button>
	)
}
