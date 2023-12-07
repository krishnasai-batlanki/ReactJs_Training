import React, { Component } from 'react'

type SamplePropType ={}
type SampleStateType ={}
class Sample extends Component<SamplePropType,SampleStateType> {
  render() {
    return (
      <div>Sample</div>
    )
  }
  componentDidMount(): void {
      window.alert('componentDidMount')
  }
}

export default Sample
