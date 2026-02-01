import { ReactNode } from 'react'
import './Fieldset.scss'

interface FieldsetProps {
	legend: string
	children: ReactNode
}

const Fieldset = ({ legend, children }: FieldsetProps) => {
	return (
		<div className='fieldset'>
			<span className='fieldset__legend'>{legend}</span>
			{children}
		</div>
	)
}

export default Fieldset
