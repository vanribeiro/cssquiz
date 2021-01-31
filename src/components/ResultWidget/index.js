import React from 'react';
import Widget from '../Widget';

const ResultWidget = ({ results }) => (
  <Widget>
    <Widget.Header>
      <h2>
        Tela de Resultado:
      </h2>
    </Widget.Header>
    <Widget.Content>
      <p>
        Você acertou
        {' '}
        {/* eslint-disable-next-line react/prop-types */}
        {results.reduce((currentSummation, curretResult) => {
          const isRights = curretResult === true;
          if (isRights) {
            return currentSummation + 1;
          }
          return currentSummation;
        }, 0)}
        {' '}
        Perguntas
      </p>
      <ul>
        {/* eslint-disable-next-line react/prop-types */}
        {results.map(((result, resultKey) => (
          <li
            key={resultKey}
          >
            {`#${resultKey + 1} Resultado: `}
            {result === true
              ? 'Acertou'
              : 'Errou' }
          </li>
        )))}
      </ul>
    </Widget.Content>
  </Widget>
);

export default ResultWidget;
