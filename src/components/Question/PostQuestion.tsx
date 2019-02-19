import * as React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
// import { CSSTransition } from 'react-transition-group';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
// import WebCam from '../Parts/Webcam';

// interface Props {}

// interface State {
//   isOpen: boolean;
// }

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

const Forms = styled.div`
  width: 100%;

  .formContent {
    width: 90%;
    padding: 3% 0;
    margin: 3% auto;
    text-align: center;
  }

  .formContent > .inputText {
    width: 90%;
    margin: 0 auto;
  }

  .formContent > .inputTextArea {
    width: 90%;
    margin: 0 auto;
  }
`;

class PostQuestion extends React.Component<any, any> {
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
        <Header handleClick={this.openMenu} title="質問の投稿" />

        <MiddleHeading>あ</MiddleHeading>

        <Forms>
          <div className="formContent">
            <h3>aaaa</h3>
            <Select
              // value={state.age}
              // onChange={handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple'
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className="formContent">
            <h3>aaaa</h3>
          </div>
        </Forms>

        <div>
          {/* <Button inverted color='green'>
            Green
          </Button> */}
          <div>
            <Button variant="outlined" color="primary">
              Activate WebCam
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default PostQuestion;
