Blockly.Blocks['op1'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sou uma pessoa intuitiva.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op2'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sou uma pessoa observadora.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op3'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sou uma pessoa ativa.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op4'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sou uma pessoa lógica.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}

Blockly.Blocks['pergt'] = {
  init: function () {
    this.jsonInit({
      message0: 'Enquanto estou aprendendo: 4 %1 3  %2  2  %3 1  %4 .',
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
