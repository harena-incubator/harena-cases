Blockly.Blocks['imagem_produto'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1gitele.jpeg', width: 200, height: 200, alt: 'prod 1'}, 'prod1'],
            [{src: '2alcool.jpeg', width: 200, height: 200, alt: 'prod 2'}, 'prod2'],
            [{src: '3algodao.jpeg', width: 200, height: 200, alt: 'prod 3'}, 'prod3'],
            [{src: '4cotonete.jpeg', width: 200, height: 200, alt: 'prod 4'}, 'prod4'],
            [{src: '5gazes.jpeg', width: 200, height: 200, alt: 'prod 5'}, 'prod5']
          ]
        }
      ],
        colour: 20,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}
Blockly.Blocks['imagem_gilete'] = {
  init: function () {
    this.jsonInit({
        "type": "gilete",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "1gitele.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 20,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}

Blockly.Blocks['imagem_algodao'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "3algodao.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 60,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}

Blockly.Blocks['imagem_gazes'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "5gazes.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 120,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}

Blockly.Blocks['imagem_cotonete'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "4cotonete.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 200,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}

Blockly.Blocks['imagem_alcool'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "2alcool.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 350,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}
Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
      message0: '1 Produto: %1  2 Produto: %2  3 Produto: %3 4 Produto: %4 5 Produto: %5',
      args0: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'produto',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'produto',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'produto',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'produto',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'produto',
        }
      ],
     colour: 500
    })
  }
}
