import * as React from 'react';
import styled from 'styled-components';
// import Header from '../Header/Header';
// import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import * as Webcam from 'react-webcam';

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

const WebcamGround = styled.div`
  width: 100%;
`;

class Welcome extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activate: false
    };
  }

  componentDidMount() {
    console.log(screen.width);
  }

  _handleWebCam = () => {
    this.setState({
      activate: true
    });
  };

  render() {
    return (
      <Wrapper>
        {/* <Header handleClick={this.openMenu} title="TOP" /> */}

        <MiddleHeading>Welcome</MiddleHeading>

        <div>
          {/* <Button inverted color='green'>
            Green
          </Button> */}
          {this._handleWebCam && (
            <WebcamGround>
              <Webcam audio={false} height={350} screenshotFormat="image/jpeg" width={350} />
              <Button variant="outlined" color="primary">
                Activate WebCam
              </Button>
            </WebcamGround>
          )}
          <div>
            <Button variant="outlined" color="primary" onClick={this._handleWebCam}>
              Activate WebCam
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default Welcome;
