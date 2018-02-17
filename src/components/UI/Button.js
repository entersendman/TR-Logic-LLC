import React from 'react'

import classes from './Button.css'

const button = (props) => (
	<div>
		<button
			className={classes.Button}
			onClick={props.clickedLeft}>Left aside
		</button>
		<button
			className={classes.Button}
			onClick={props.clickedRight}>Right aside
		</button>
	</div>
)

export default button
