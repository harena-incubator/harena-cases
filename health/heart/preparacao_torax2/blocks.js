Blockly.Blocks['imagem_gilete'] = {
  init: function () {
    this.jsonInit({
        "type": "gilete",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "1gitele.jpeg",
            "width": 150,
            "height": 150,
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
            "width": 150,
            "height": 150,
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
            "width": 150,
            "height": 150,
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
            "width": 150,
            "height": 150,
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
            "width": 150,
            "height": 150,
            "alt": "*"
          }
        ],
        colour: 350,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}


Blockly.Blocks['imagem_gel'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "7gel.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 500,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}
Blockly.Blocks['imagem_rad'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "8rad.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 750,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}
Blockly.Blocks['imagem_prepad'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "6prepad.jpeg",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 950,
        tooltip: 'Prod',
        output: 'produto'
    })
  }
}

Blockly.Blocks['acao1'] = {
  init: function () {
    this.jsonInit({
      "message0": "Raspar com %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      colour: 415,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao2'] = {
  init: function () {
    this.jsonInit({
      "message0": "Limpar com %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      colour: 1025,
      nextStatement: null,
      previousStatement: null
    })
  }
}

Blockly.Blocks['acao3'] = {
  init: function () {
    this.jsonInit({
      message0: 'limpar com %1 e %2 .',
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
        }
      ],
     colour: 17,
     nextStatement: null,
     previousStatement: null
    })
  }
}

Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
        "message0": "%1",
        "args0": [
          {"type": "input_statement", "name": "DO"}
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120
    })
  }
}
