import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component {

  // sushiList = () => {
  //   return this.state.sushi.map( soosh => {
  //     return <li>{soosh.name}</li>
  //   })
  // }

  render(){
  return (
    <Fragment>
      <div className="belt">

        <MoreButton />
      </div>
    </Fragment>
  )
  }
}

export default SushiContainer
