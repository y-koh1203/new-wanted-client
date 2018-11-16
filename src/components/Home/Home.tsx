import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Menu from '../Parts/Menu';
import Button from '../Parts/Button';
//import Button from '../Parts/Button';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const ProfileContainer = styled.div`
  width: 100%;
  background-color: lightblue;
  margin-top: 2%;
`;

const ActivityContainer = styled.div`
  width: 100%;
  background-color: lightblue;
  margin-top: 2%;
`;

const Heading = styled.h2`
  width: 60%;
  margin: 0 auto;
  padding: 2.5% 0;
  font-size: 1.5rem;
  border-bottom: 2px solid black;
  text-align: center;
`;

interface Props {}
interface State {
  isOpen:boolean
}

class Home extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    console.log('active');
  }

  openMenu = () => {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <ProfileContainer>
          <Heading>UserNameさんのプロフィール</Heading>
          <Button title="Open" click={this.openMenu} />
        </ProfileContainer>

        <ActivityContainer>
          <Heading>UserNameさんのアクティビティ</Heading>
        </ActivityContainer>
        {this.state.isOpen && <Menu />}
      </Wrapper>
    );
  }
}

export default Home;
