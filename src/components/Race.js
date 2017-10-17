import React from 'react';

const raceOptions = ['aarakocra', 'fallen aasimar', 'protector aasimar', 'scourge aasimar', 'centaur', 'dragonborn', 'drakonka', 'duergar (gray dwarf)', 'hill dwarf', 'mountain dwarf', 'drow', 'dark elf', 'eladrin elf', 'high elf', 'sea elf', 'avariel (sky elf)', 'star elf', 'wild elf', 'lythari elf', 'wood elf', 'entling', 'felitaur', 'firbolg', 'air genasi', 'earth genasi', 'fire genasi', 'water genasi', 'githyanki', 'githzerai', 'flint gnoll', 'spotted gnoll', 'deep gnome', 'forest gnome', 'rock gnome', 'green goblin', 'grey goblin', 'goliath', 'half-high-elf', 'half-wood-elf', 'half-dark-elf', 'half-sea-elf', 'elemental half-giant', 'feyborn half-giant', 'firmament half-giant', 'half-orc', 'lightfoot halfling', 'stout halfling', 'human', 'kenku', 'kindred', 'kitsune', 'common kobold', 'urd kobold', 'scalesinger kobold', 'lesser illithid', 'lizardfolk', 'constrictor naga', 'racer naga', 'rattler naga', 'satyr', 'shahaling', 'starseed', 'half-starseed', 'tabaxi', 'triton', 'abyssal tiefling', 'infernal (Asmodean) tiefling', 'infernal (Baalzebul) tiefling', 'infernal (Dispater) tiefling', 'infernal (Fierna) tiefling', 'infernal (Glasya) tiefling', 'infernal (Levistus) tiefling', 'infernal (Mammon) tiefling', 'infernal (Mephistopheles) tiefling', 'infernal (Zariel) tiefling', 'feral tiefling'];

export class GetRace extends React.Component {
  render() {
    let race = raceOptions[Math.floor(Math.random() * raceOptions.length)];

    return (
      <span>{race}</span>
    );
  };
};
