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

Blockly.Blocks['sequence'] = {
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
      message1: 'A %1 B %2 C %3 D %4 E %5 F %6 G %7 H %8 I %9 J %10 K %11 L %12',
      args1: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'eletrodo',
        }
      ],
     colour: 500
    })
  }
}
