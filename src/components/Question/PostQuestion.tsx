import * as React from 'react';
// import styled from 'styled-components';
// import { CSSTransition } from 'react-transition-group';


interface Props {
  title: string;
  click(): void;
}

class PostQuestion extends React.Component<Props>{
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <div>
                {/* <CSSTransition classNames="animation">
                    <div></div>
                </CSSTransition> */}
            </div>
        )
    }
}

export default PostQuestion;
