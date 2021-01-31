import React from 'react';
import db from '../../../db.json';
import Widget from '../Widget';

const LoadingWidgetStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

const LoadingWidget = () => (
  <Widget>
    <img
      style={LoadingWidgetStyle}
      src={db.loadingImages[0]}
      alt="Aguardando Carregar as Questões"
    />
    <Widget.Content>
      Carregando o Quiz...
    </Widget.Content>
  </Widget>
);

export default LoadingWidget;
