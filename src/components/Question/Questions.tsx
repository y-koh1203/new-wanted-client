import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import QuestionList from './QuestionList';
// import { CSSTransition } from 'react-transition-group';
// import { TextArea, Input, Button } from 'semantic-ui-react';

interface Props {}

interface State {
  isOpen: boolean;
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MiddleHeading = styled.h2`
  padding: 2% 0;
  font-size: 1.2em;
  width: 100%;
  background-color: #4ead4b;
  color: #ffffff;
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

class Questions extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
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
        <Header handleClick={this.openMenu} title="質問一覧" />

        <MiddleHeading>あ</MiddleHeading>

        <div>
          <QuestionList question_list={Quesitons} />
        </div>
      </Wrapper>
    );
  }
}

export default Questions;
