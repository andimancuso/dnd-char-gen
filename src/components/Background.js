import React from 'react';

const backgroundOptions = ['acolyte', 'charlatan', 'criminal', 'spy', 'entertainer', 'gladiator', 'folk hero', 'guild artisan', 'guild merchant', 'hermit', 'noble', 'knight', 'outlander', 'sage', 'sailor', 'pirate', 'soldier', 'urchin', 'city watchperson', 'clan crafter', 'cloistered scholar', 'courtier', 'faction agent', 'far traveler', 'inheritor', 'knight of the order', 'mercenary veteran', 'urban bounty hunter', 'recovering cultist', 'clansperson', 'doctor', 'harvester', 'naturalist', 'refugee', 'seeker', 'rider', 'servant', 'tinkerer', 'tomb raider', 'translator', 'unfortunate soul'];

export class GetBackground extends React.Component {
  render() {
    let background = backgroundOptions[Math.floor(Math.random() * backgroundOptions.length)];

    if (background[0] === "a") {
      return (
        <span>an {background}</span>
      );} else {
        return (
        <span>a {background}</span>
      );};
  };
};
