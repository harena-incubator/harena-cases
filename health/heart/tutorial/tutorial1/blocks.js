Blockly.Blocks['imagem1'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image_1",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "imagem1.png",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 60,
        tooltip: 'Prod',
        output: 'example_image_1'
    })
  }
}

Blockly.Blocks['imagem2'] = {
  init: function () {
    this.jsonInit({
        "type": "example_image",
        "message0": "%1",
        "args0": [
          {
            "type": "field_image",
            "src": "imagem2.png",
            "width": 200,
            "height": 200,
            "alt": "*"
          }
        ],
        colour: 120,
        tooltip: 'Prod',
        output: 'example_image_2'
    })
  }
}
Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
      message0: 'Imagem 1: %1 Imagem 2: %2',
      args0: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'example_image_1',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'example_image_2',
        }
      ],
     colour: 500
    })
  }
}
