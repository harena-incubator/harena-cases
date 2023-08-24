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
            [{src: 'imagem2.png', width: 200, height: 200, alt: 'imagem 2'}, 'imagem2']
          ]
        }
      ],
      message1: 'Numero da imagem: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['UM', 'img1'],
            ['Dois', 'img2']
          ]
        }
      ],
      colour: 80,
      tooltip: 'Img',
      output: 'imagens'
    })
  }
}


Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 Imagem  %2 Imagem  ',
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
