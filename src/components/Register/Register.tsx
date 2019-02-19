import * as React from 'react';
import styled from 'styled-components';
// import Header from '../Header/Header';
// import { CSSTransition } from 'react-transition-group';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import axios from 'axios';

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

const MainContent = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background-color: red;
`;

class Register extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      activate: false,
      name: '',
      body: '',
      age: 0
    }
  }

  componentDidMount() {
    console.log(screen.width);
  }

  // _submit = () =>  {
  //   const url = 'http://localhost/user/register';
  //   const body = JSON.stringify({
  //     name: this.state.name,
  //     body: this.state.body,
  //     age: this.state.age
  //   });
  //   return fetch(url,{
  //       method:'POST',
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       credentials: 'same-origin',
  //       headers:{
  //           "Content-Type":"application/json; charset=utf-8"
  //       },
  //       redirect: 'follow',
  //       referrer: 'no-referrer',
  //       body:body
  //   }).then(
  //       res => {
  //           return res;
  //       }
  //   );
  // }

  render() {
    return (
      <Wrapper>
        {/* <Header handleClick={this.openMenu} title="TOP" /> */}

        <MiddleHeading>Welcome</MiddleHeading>

        <MainContent>
          <div>
            <TextField
              id="standard-name"
              label="Name"
              className={"name"}
              onChange={ e => this.setState({name:e.target.value}) }
              margin="normal"
            />
          </div>
          <div>
          <TextField
            id="standard-password-input"
            label="Password"
            className={"password"}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          </div>        
          <div>
            <Button variant="outlined" color="primary">
              登録する
            </Button>
          </div>
        </MainContent>
      </Wrapper>
    );
  }
}

export default Register;
