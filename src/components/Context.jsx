import { createContext, useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import reducer from '../reducer'
import { getData } from '../storage'
const data = getData()

const DataContext = createContext()
const DispatchContext = createContext()

export default function DataProvider ({ children }) {
	const [general, updateGeneral] = useImmerReducer(reducer, data.general)
	const [education, dispatchEducation] = useImmerReducer(reducer, data.education)
	const [employment, dispatchEmployment] = useImmerReducer(reducer, data.employment)

	const dataObject = {
		general,
		education,
		employment
	}

	const dispatchObject = {
		general: updateGeneral,
		education: dispatchEducation,
		employment: dispatchEmployment
	}

	return (
		<DataContext.Provider value={dataObject} >
			<DispatchContext.Provider value={dispatchObject} >
				{children}
			</DispatchContext.Provider>
		</DataContext.Provider>
	)
}

export function useData () {
	return useContext(DataContext)
}

export function useDispatch () {
	return useContext(DispatchContext)
}
