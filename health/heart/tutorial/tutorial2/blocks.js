Blockly.Blocks['imagem'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: 'imagem1.png', width: 200, height: 200, alt: 'imagem 1'}, 'imagem1'],
            [{src: 'imagem2.png', width: 200, height: 200, alt: 'imagem 5'}, 'imagem2']
          ]
        }
      ],
        colour: 20,
        tooltip: 'Img',
        output: 'imagens'
    })
  }
}

Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
      message0: 'Imagem 1: %1  Imagem 2: %2  ',
      args0: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'imagens',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'imagens',
        }
      ],
     colour: 500
    })
  }
}
