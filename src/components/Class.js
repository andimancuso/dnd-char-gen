import React from 'react';

const charClassOptions = ['ancestral guardian barbarian', 'battlerager barbarian', 'barbarian berserker', 'barbarian juggernaut', 'barbarian storm herald', 'totem barbarian', 'zealot barbarian',
'glamour bard', 'lore bard', 'maestro bard', 'bard of swords', 'bard of valor', 'bard of whispers',
'arcana cleric', 'blood cleric', 'death cleric', 'grave cleric', 'forge cleric', 'knowledge cleric', 'life cleric', 'light cleric', 'nature cleric', 'protection cleric', 'tempest cleric', 'travel cleric', 'trickery cleric', 'war cleric',
'druid of the moon', 'druid of the land', 'druid of dreams', 'druid of twilight', 'shepherd druid',
'eldritch knight fighter', 'gunslinger fighter', 'knight fighter', 'monster hunter fighter', 'samurai fighter', 'arcane archer fighter', 'battle master fighter', 'champion fighter',
'drunken master monk', 'monk of the four elements', 'monk of Ioun', 'kensei monk', 'monk of the long death', 'open hand monk', 'sun soul monk', 'shadow monk', 'tranquility monk',
'paladin of devotion', 'paladin of the ancients', 'paladin of conquest', 'paladin of the crown', 'oathbreaker paladin', 'paladin of redemption', 'paladin of treachery', 'vengeance paladin',
'beastmaster ranger', 'ranger of the hunt', 'stalker-ranger',
'rogue assassin', 'arcane trickster rogue', 'inquisition rogue', 'mastermind rogue', 'rogue scout', 'swashbuckler rogue', 'rogue thief',
'dragonsblood sorcerer', 'favored soul sorcerer', 'phoenix sorcerer', 'runechild sorcerer', 'sea sorcerer', 'shadow sorcerer', 'stone sorcerer', 'storm sorcerer', 'wild magic sorcerer',
'warlock of the Archfey', 'warlock of the fiend', 'celestial warlock', 'warlock of the genius locus', 'warlock of the great old one', 'warlock of the hexblade', 'warlock of the Raven Queen', 'warlock of the seeker', 'warlock of the undying one',
'abjuration wizard', 'bladesinger wizard', 'conjuration wizard', 'divination wizard', 'enchantment wizard', 'evocation wizard', 'illusion wizard', 'lore mastery wizard', 'necromantic wizard', 'theurgist-wizard', 'transmutation wizard', 'war wizard',
'artificer alchemist', 'gunsmith artificer',
'ghost slayer blood hunter', 'lycan blood hunter', 'mutant blood hunter', 'profane soul blood hunter', 'vampire blood hunter',
'gold chaos magician', 'grey chaos magician', 'violet chaos magician', 'green chaos magician',
'dragon knight defender', 'dragoon dragon knight', 'warblade dragon knight',
'dragonrider kin', 'dragonrider knight',
'bonded eidolist', 'evolutionary eidolist',
'golem fighter pilot', 'golem pilot-engineer',
'primal inkmonk', 'subtle inkmonk',
'awakened mystic', 'immortal mystic', 'soul knife mystic', 'avatar mystic', 'nomad mystic', 'wu jen mystic',
"death's eyes necromancer", "death's scales necromancer", "death's hands necromancer", "death's scythe necromancer",
'physician of creation', 'physician of purification', 'physician of restoration',
'arena royale pugilist', 'bloodhound bruiser pugilist', 'salt and vinegar pugilist', 'pugilist of the squared circle', 'sweet science pugilist',
'exploration scholar', 'scholar-physician', 'tactician scholar',
'shaman of the winds', 'shaman of the ancestors', 'shaman of dreams', 'shaman of the flames', 'shaman of the stones', 'shaman of the waters',
'animator totemist', 'protector totemist', 'seer totemist',
'truespeaker of the crafted tools', 'truespeaker of the secrets of the world',
'blighted witch', 'clairvoyant witch', 'traditionalist witch'];

export class GetCharClass extends React.Component {
  render() {
    let charClass = charClassOptions[Math.floor(Math.random() * charClassOptions.length)];

    if (charClass[0] === "a" || charClass[0] === "e" || charClass[0] === "i" || charClass[0] === "o" || charClass[0] === "u") {
    return (
      <span>an {charClass}</span>
    );} else {
      return (
        <span>a {charClass}</span>
      );
    }
  };
};
