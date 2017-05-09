// Data for the data-driven tests

export var scenarios = [
  {
    text: 'Darth Vader',
    expectedArchetypes: ['Darth Vader']
  }, {
    text: 'C-3PO',
    race: 'Droid',
    expectedArchetypes: ['C-3PO']
  }, {
    race: 'Human',
    sex: 'Female',
    expectedArchetypes: ['Beru Whitesun lars', 'Leia Organa']
  }, {
    text: 'lars',
    expectedArchetypes: ['Beru Whitesun lars', 'Owen Lars']
  }
];
