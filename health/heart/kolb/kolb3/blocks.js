Blockly.Blocks['op1'] = {
  init: function () {
    this.jsonInit({
      message0: 'Tendo a buscar as explicações para as coisas.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op2'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sou responsável acerca das coisas.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op3'] = {
  init: function () {
    this.jsonInit({
      message0: 'Fico quieto e concentrado.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op4'] = {
  init: function () {
    this.jsonInit({
      message0: 'Tenho sentimentos e reações fortes.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}

Blockly.Blocks['pergt'] = {
  init: function () {
    this.jsonInit({
      message0: '3) Quando estou aprendendo:  %1 4  %2  3  %3 2  %4 1',
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
