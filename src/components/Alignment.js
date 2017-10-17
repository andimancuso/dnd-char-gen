import React from 'react';

const alignmentOptions = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'true neutral', 'chaotic neutral', 'lawful evil', 'neutral evil', 'chaotic evil'];

export class GetAlignment extends React.Component {
  render() {
    let alignment = alignmentOptions[Math.floor(Math.random() * alignmentOptions.length)];

    return (
      <span>{alignment}</span>
    );
  };
};
