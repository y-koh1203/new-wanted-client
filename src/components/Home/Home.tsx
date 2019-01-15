import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Menu from '../Parts/Menu';
import QuestionList from '../Question/QuestionList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const ProfileContainer = styled.div`
  width: 100%;
  margin-top: 3%;

  .avatarGround {
    width: 40%;
    margin 8% auto;
    display: flex;
    justify-content: flex-end;
  }

  .avatarGround .avatar {
    width: 30%;
    min-width: 75px;
    max-width: 140px;
    height: 12vw;
    min-height: 75px;
    max-height: 140px
    border-radius: 50%;
    background: #lightgreen;
    box-shadow: 0 0 0 3px #00b1f4;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .userData {
    width: 60%;
    margin 3% auto;
    backgorund-color: lightgreen;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .userData .userName {
    font-size: 1.4em;
    width: 70%;
    text-align: center;
    margin-right: 20%;
    padding: 1% 0;
  }

  .userData .nickName {
    font-size: 1em;
    width: 70%;
    text-align: center;
    margin-right: 20%;
    padding: 1% 0;
  }
`;

const ActivityContainer = styled.div`
  width: 100%;
  margin-top: 3%;

  .tabWrapper {
    width: 100%;
    margin: 3% auto;
    backgorund-color: #ffffff;
  }

  .tabList {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .tabItem {
    width: 30%;
    padding: 4% 0%;
    text-align: center;
  }

  .selected {
    width: 30%;
    padding: 4% 0%;
    text-align: center;
    border-bottom: 2px solid lightblue;
    animation: fade;
    animation-duration: 2s;
  }

  .tabPanel {
    width: 100%;
    margin: 5% 0 2% 0;
    background-color: #ffffff;
  }
`;

const MiddleHeading = styled.h2`
  width: 74%;
  margin: 0 auto;
  padding: 2.5% 0;
  font-size: 1.2rem;
  border-bottom: 2px solid black;
  text-align: center;
`;

const SmallHeading = styled.h3`
  width: 74%;
  margin: 0 auto;
  padding: 2% 0;
  font-size: 1rem;
  text-align: center;
`;

const Quesitons = [
  {
    question_id: '1',
    question_title: 'Sumple',
    question_body: 'テストの質問です',
    tags: ['算数', '苦手', '克服', '引き算']
  },

  {
    question_id: '1',
    question_title: 'Sumple',
    question_body: 'テストの質問です。',
    tags: ['国語', '漢字', '書き順']
  },

  {
    question_id: '1',
    question_title: 'Sumple',
    question_body: 'テストの質問です。',
    tags: ['国語', '漢字', '書き順']
  },

  {
    question_id: '1',
    question_title: 'Sumple',
    question_body: 'テストの質問です。',
    tags: ['国語', '漢字', '書き順']
  },

  {
    question_id: '1',
    question_title: 'Sumple',
    question_body: 'テストの質問です。',
    tags: ['国語', '漢字', '書き順']
  },

  {
    question_id: '1',
    question_title: 'Sumple',
    question_body: 'テストの質問です。',
    tags: ['国語', '漢字', '書き順']
  }
];

const Quesitons2: any = [];

interface Props {
  activities: Array<Object>;
}
interface State {
  isOpen: boolean;
  tabIndex: number;
}

const menuItem: any = [
  {
    path: '/post',
    title: '質問する'
  },
  {
    path: '/questions',
    title: '質問'
  },
  {
    path: '/top',
    title: 'TOP'
  }
];

class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      tabIndex: 0
    };
  }

  componentDidMount() {
    console.log(screen.width);
  }

  openMenu = () => {
    this.setState({
      isOpen: true
    });
  };

  closeMenu = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Wrapper>
        <Header handleClick={this.openMenu} title="Wanted!!" />
        <ProfileContainer>
          <MiddleHeading onClick={this.openMenu}>
            UserNameさんの{screen.width < 450 && <br />}プロフィール
          </MiddleHeading>
          <Flex>
            <div className="avatarGround">
              {/* <div className="avatar" style={{backgroundImage: `url(${props.imgObj.url})`}}></div> */}
              <div
                className="avatar"
                style={{ backgroundImage: `url('/images/IVOL_STUDIO_010_TP_V4.jpg')` }}
              />
            </div>
            <div className="userData">
              <p className="userName">UserName</p>
              <p className="nickName">NickName</p>
            </div>
          </Flex>
        </ProfileContainer>
        <ActivityContainer>
          <MiddleHeading>UserNameさんの{screen.width < 450 && <br />}アクティビティ</MiddleHeading>
          <div className="tabWrapper">
            <Tabs
              onSelect={(tabIndex) => {
                this.setState({ tabIndex: tabIndex });
              }}
              selectedIndex={this.state.tabIndex}
            >
              <TabList className="tabList">
                <Tab className="tabItem" selectedClassName="selected">
                  教えた
                </Tab>
                <Tab className="tabItem" selectedClassName="selected">
                  聞いた
                </Tab>
              </TabList>

              <TabPanel className="tabPanel">
                <SmallHeading>UserNameさんが答えた質問</SmallHeading>
                <QuestionList question_list={Quesitons} />
              </TabPanel>

              <TabPanel className="tabPanel">
                <SmallHeading>UserNameさんが聞いた質問</SmallHeading>
                <QuestionList question_list={Quesitons2} />
              </TabPanel>
            </Tabs>
          </div>
        </ActivityContainer>
        {this.state.isOpen && <Menu menuItem={menuItem} closeMenu={this.closeMenu} />}
      </Wrapper>
    );
  }
}

export default Home;
