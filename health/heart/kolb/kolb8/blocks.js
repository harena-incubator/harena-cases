Blockly.Blocks['op1'] = {
  init: function () {
    this.jsonInit({
      message0: 'Gosto de ver os resultados de meu trabalho.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op2'] = {
  init: function () {
    this.jsonInit({
      message0: 'Gosto de idéias e teorias.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op3'] = {
  init: function () {
    this.jsonInit({
      message0: 'Penso antes de agir.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}
Blockly.Blocks['op4'] = {
  init: function () {
    this.jsonInit({
      message0: 'Sinto-me pessoalmente envolvido no assunto.',
      colour: 20,
      tooltip: 'op1',
      output: 'op'
    })
  }
}

Blockly.Blocks['pergt'] = {
  init: function () {
    this.jsonInit({
      message0: '8) Enquanto aprendo:  %1 4  %2  3  %3 2  %4 1',
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
