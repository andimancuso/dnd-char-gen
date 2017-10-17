import React from 'react';
import { GetAlignment } from './Alignment.js';
import { GetGender } from './Gender.js';
import { GetRace } from './Race.js';
import { GetBackground } from './Background.js';
import { GetCharClass } from './Class.js';

export class GetCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasChar: false };
    this.toggleState = this.toggleState.bind(this);
  };

  toggleState() {
    const newState = this.state.hasChar ? false : true;
    this.setState({
      hasChar: newState
    })
  };

  render() {
    return (
        <div>
            <h2 className="book-title">
              Need a new character?
            </h2>
            <div className="book-desc">
              Try <GetGender /> <GetRace />, maybe <GetAlignment />,<br />who started out as <GetBackground /> but is now <GetCharClass />.
            </div>
            <button id="button" onClick={this.toggleState}>
              That sounds boring. Give me something else!
            </button>
        </div>
    );
  };
};
