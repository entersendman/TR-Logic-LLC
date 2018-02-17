import React from 'react'

import classes from './SideDrawer.css'

const sideDrawer = (props) => {
	let attachedClassesLeft = [classes.SideDrawer, classes.CloseLeft]
	let attachedClassesRight = [classes.SideDrawer, classes.CloseRight]
	if (props.openLeft){
		attachedClassesLeft = [classes.SideDrawer, classes.OpenLeft]
	}
	if (props.openRight){
		attachedClassesRight = [classes.SideDrawer, classes.OpenRight]
	}
	return (
		<div>
			<div className={attachedClassesLeft.join(' ')}>
			</div>
			<div className={attachedClassesRight.join(' ')}>
			</div>
		</div>
	);
};

export default sideDrawer;
