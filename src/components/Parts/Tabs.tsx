import * as React from 'react';
// import styled from 'styled-components';

// const TabGround = styled.div`
//   width: 100%;
// `;

interface Props {}
interface State {}

class Tab extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: false
    }
  }

  componentDidMount(){
    console.log('mounted');
  }

  render(){
      return(
        <div></div>
      );
  }
}

export default Tab;
