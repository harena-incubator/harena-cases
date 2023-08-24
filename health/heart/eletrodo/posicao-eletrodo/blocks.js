Blockly.Blocks['imagem_eletrodo'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: 'eletrodo1.png', width: 200, height: 200, alt: 'eletrodo 1'}, 'eletrodo1'],
            [{src: 'eletrodo2.png', width: 200, height: 200, alt: 'eletrodo 2'}, 'eletrodo2'],
            [{src: 'eletrodo3.png', width: 200, height: 200, alt: 'eletrodo 3'}, 'eletrodo3'],
            [{src: 'eletrodo4.png', width: 200, height: 200, alt: 'eletrodo 4'}, 'eletrodo4'],
            [{src: 'eletrodo5.png', width: 200, height: 200, alt: 'eletrodo 5'}, 'eletrodo5']
          ]
        }
      ],
        colour: 20,
        tooltip: 'Eletro',
        output: 'eletrodo'
    })
  }
}

Blockly.Blocks['acao'] = {
  init: function () {
    this.jsonInit({
      message0: 'Colocar eletrodo %1 na posição %2 .',
      args0: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'eletrodo',
        },
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [            
            ['A', 'posA'],
            ['B', 'posB'],
            ['C', 'posC'],
            ['D', 'posD'],
            ['E', 'posE'],
            ['F', 'posF'],
            ['G', 'posG'],
            ['H', 'posH'],
            ['I', 'posI'],
            ['J', 'posJ'],
            ['K', 'posK'],
            ['L', 'posL']
        ]
        }
      ],
     colour: 17,
     nextStatement: null,
     previousStatement: null
    })
  }
}
Blockly.Blocks['homem'] = {
  init: function () {
    this.jsonInit({
      "type": "torax",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": "1toraxM.jpg",
          "width": 400,
          "height": 400,
          "alt": "*"
        }
      ],
     colour: 500
    })
  }
}

Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
      "type": "sequence",
      "message0": "%1",
      "args0": [
        {
          "type": "field_image",
          "src": "robo.png",
          "width": 150,
          "height": 150,
          "alt": "*"
        }
      ],
        "message1": "%1",
        "args1": [
          {"type": "input_statement", "name": "DO"}
        ],
        "colour": 120
    })
  }
}