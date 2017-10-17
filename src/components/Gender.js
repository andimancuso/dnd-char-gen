import React from 'react';

const genderOptions = ['female', 'male', 'androgynous', 'female', 'male', 'intersex', 'female', 'male', 'non-binary', 'female', 'male', 'transmasculine', 'female', 'male', 'transfeminine', 'female', 'male', 'genderless', 'female', 'male', 'genderfluid'];

export class GetGender extends React.Component {
  render() {
    let gender = genderOptions[Math.floor(Math.random() * genderOptions.length)];

      if (gender[0] === "a") {
        return (
          <span>an {gender}</span>
        );} else {
          return (
            <span>a {gender}</span>
          );
        };
  };
};
