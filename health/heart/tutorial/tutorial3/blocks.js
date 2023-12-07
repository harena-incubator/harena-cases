Blockly.Blocks['numero'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1n.png', width: 200, height: 200, alt: 'imagem 1'}, 'imagem1'],
            [{src: '2n.png', width: 200, height: 200, alt: 'imagem 2'}, 'imagem2'],
            [{src: '3n.png', width: 200, height: 200, alt: 'imagem 3'}, 'imagem3']
          ]
        }
      ],
      colour: 20,
      tooltip: 'num',
      output: 'numero'
    })
  }
}

Blockly.Blocks['imagem'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1star.png', width: 200, height: 200, alt: 'imagem 1'}, 'imagem1'],
            [{src: '2star.png', width: 200, height: 200, alt: 'imagem 2'}, 'imagem2'],
            [{src: '3star.png', width: 200, height: 200, alt: 'imagem 3'}, 'imagem3']
          ]
        }
      ],
      message1: 'Cor da estrela: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Amarelo', 'img1'],
            ['Vermelho', 'img2'],
            ['Azul', 'img2']
          ]
        }
      ],
      colour: 40,
      tooltip: 'Img',
      output: 'imagens'
    })
  }
}

Blockly.Blocks['texto'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1t.png', width: 200, height: 200, alt: 'imagem 1'}, 'imagem1'],
            [{src: '2t.png', width: 200, height: 200, alt: 'imagem 2'}, 'imagem2'],
            [{src: '3t.png', width: 200, height: 200, alt: 'imagem 3'}, 'imagem3']
          ]
        }
      ],
      colour: 80,
      tooltip: 'txt',
      output: 'texto'
    })
  }
}
Blockly.Blocks['sequence'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 Número  %2 Estrela %3 Texto',
      args0: [
        {
        type: 'input_value',
        name: 'VAR',
        check: 'numero',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'imagens',
        },
        {
          type: 'input_value',
          name: 'VAR',
          check: 'texto',
        }
      ],
     colour: 500,
     nextStatement: null,
     previousStatement: null
    })
  }
}
