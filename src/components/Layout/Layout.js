import React, { Component } from 'react';

import classes from './Layout.css'
import Header from '../Header/Header'
import PageDescription from '../PageDescription/PageDescription'
import RightBlock from '../RightBlock/RightBlock'
import Footer from '../Footer/Footer'
import SideDrawer from '../SideDrawer/SideDrawer'
import LeftBlock from '../LeftBlock/LeftBlock'


class Layout extends Component {

  state = {
    openedLeft: false,
    openedRight: false
  }

  leftSideDrawerClosedHandler = () => {
		this.setState({
			openedLeft: false
		})
	}

  leftSideToggleHandler = () => {
		this.setState( ( prevState ) => {
			return {openedLeft: !prevState.openedLeft}
		})
	}
  rightSideDrawerClosedHandler = () => {
    this.setState({
      openedRight: false
    })
  }

  rightSideToggleHandler = () => {
    this.setState( ( prevState ) => {
      return {openedRight: !prevState.openedRight}
    })
  }

  render() {

    return (
      <div className={classes.Layout}>
        <Header clickedLeft={this.leftSideToggleHandler}
        clickedRight={this.rightSideToggleHandler} />
        <SideDrawer openLeft={this.state.openedLeft}
                    closedLeft={this.leftSideDrawerClosedHandler}/>
        <SideDrawer openRight={this.state.openedRight}
                    closedRight={this.rightSideDrawerClosedHandler}/>
        <PageDescription />
        <div className={classes.Content}>
          <LeftBlock />
          <RightBlock />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
