import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
// import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
// import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const QuestionWidget = ({
  question,
  totalQuestions,
  questionIndex,
}) => {
  const questionID = `question_${questionIndex}`;
  return (
    <>
      <Widget>
        <Widget.Header>
          <h3>
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3>
        </Widget.Header>
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
            // src="https://placehold.it/400X400"
          src={question.image}
        />
        <Widget.Content>
          <h2>
            {question.title}
          </h2>
          <p>
            {question.description}
          </p>
          <form>
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeID = `alternative_${alternativeIndex}`;
              return (
                <Widget.Topic
                  key={alternativeIndex}
                  htmlFor={alternativeID}
                  as="label"
                >
                  {alternative}
                  <input
                    id={alternativeID}
                    type="radio"
                    name={questionID}
                  />
                </Widget.Topic>
              );
            })}
          </form>
          <Button type="submit">
            Confirmar
          </Button>
        </Widget.Content>
      </Widget>

    </>
  );
};

const QuizPage = () => {
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>CSS - Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vanribeiro" />
    </QuizBackground>
  );
};

export default QuizPage;
