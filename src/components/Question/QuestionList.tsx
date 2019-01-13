import * as React from 'react';
import styled from 'styled-components';

const QuestionsContainer = styled.div`
    width: 80%;
    margin: 4% auto;
    padding: 4% 2%;
    border-radius: 10px;
    box-shadow:  0 0 7px gray;
    backgorund-color: ababab;

    .tags{
        width: 100%;
        margin: 3% auto 0 1%;
    }

    .tags .tagItem{
        display: inline-block;
        padding: 2% 3%;
        margin: 0 2%;
        background-color: #cdcdcd;
        border-radius: 10px;
    }
`;

const Message = styled.div`
    width: 80%;
    margin: 3% auto;
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
`;

interface Props {
  question_list: any;
}

const QuestionList = (props:Props) => (
    props.question_list.length > 0 ? 
    props.question_list.map( (v:any) => {
        return(
            <QuestionsContainer>
                <h3>{v.question_title}</h3>
                <p>{v.question_body}</p>
                <div className="tags">
                {v.tags.map((v:any)=>{
                        return(
                            <span className="tagItem">
                                {v}
                            </span>
                        );
                    })
                }
                </div>
            </QuestionsContainer>
        );
    })
    :
    <Message>まだ投稿がありません</Message>
);

export default QuestionList;
