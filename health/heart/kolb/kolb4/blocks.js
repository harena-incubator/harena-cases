Blockly.Blocks['op1'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sentindo.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op2'] = {
  init: function () {
    this.jsonInit({
      message0: 'Fazendo.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op3'] = {
  init: function () {
    this.jsonInit({
      message0: 'Observando.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op4'] = {
  init: function () {
    this.jsonInit({
      message0: 'Pensando.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}

Blockly.Blocks['pergt'] = {
  init: function () {
    this.jsonInit({
      message0: '4) Aprendo:  %1 4  %2  3  %3 2  %4 1',
      args0: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'op',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'op',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'op',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'op',
        }
      ],
     colour: 500
    })
  }
}
