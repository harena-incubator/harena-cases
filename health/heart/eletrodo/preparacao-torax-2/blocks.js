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

Blockly.Blocks['acao4'] = {
  init: function () {
    this.jsonInit({
      "message0": "Apresentar-se",
      colour: 499,
      nextStatement: null,
      previousStatement: null

    })
  }
}

Blockly.Blocks['acao5'] = {
  init: function () {
    this.jsonInit({
      "message0": "Explicar o procedimento ao paciente",
      colour: 590,
      nextStatement: null,
      previousStatement: null
    })
  }
}

Blockly.Blocks['acao6'] = {
  init: function () {
    this.jsonInit({
      "message0": "Pedir para o paciente notificar dor/desconforto",
      colour: 234,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao7'] = {
  init: function () {
    this.jsonInit({
      "message0": "Checar prontuário",
      colour: 456,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao8'] = {
  init: function () {
    this.jsonInit({
      "message0": "Checar histórico do paciente",
      colour: 567,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao9'] = {
  init: function () {
    this.jsonInit({
      "message0": "Conferir identificação do paciente",
      colour: 789,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao10'] = {
  init: function () {
    this.jsonInit({
      "message0": "Remover roupas e acessórios necessários",
      colour: 891,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao11'] = {
  init: function () {
    this.jsonInit({
      "message0": "Posicionar o paciente (supina)",
      colour: 911,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao12'] = {
  init: function () {
    this.jsonInit({
      "message0": "Preparar monitor",
      colour: 101,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao13'] = {
  init: function () {
    this.jsonInit({
      "message0": "Conectar eletrodos aos cabos",
      colour: 112,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao14'] = {
  init: function () {
    this.jsonInit({
      "message0": "Avaliar monitor e Documentar",
      colour: 131,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao15'] = {
  init: function () {
    this.jsonInit({
      "message0": "Colocar EPI",
      colour: 259,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao16'] = {
  init: function () {
    this.jsonInit({
      "message0": "Preparar paciente",
      colour: 299,
      nextStatement: null,
      previousStatement: null
    })
  }
}
Blockly.Blocks['acao17'] = {
  init: function () {
    this.jsonInit({
      "message0": "Colocar eletrodos no paciente",
      colour: 412,
      nextStatement: null,
      previousStatement: null
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
