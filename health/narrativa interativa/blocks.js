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

Blockly.Blocks['inicio'] = {
  init: function () {
    this.jsonInit({
      message0: 'Início',
      args0: [  
      ],
     colour: 500,
     nextStatement: null
    })
  }
}

Blockly.Blocks['fim'] = {
  init: function () {
    this.jsonInit({
      message0: 'Fim',
      args0: [  
      ],
     colour: 500,
     previousStatement: null
    })
  }
}
Blockly.Blocks['t'] = {
  init: function () {
    this.jsonInit({
      message0: 'Dr. Bolinha esta iniciando um novo atendeimento clínico.',
      args0: [  
      ],
     colour: 10,
     nextStatement: null,
     previousStatement: null
    })
  }
}
Blockly.Blocks['t1'] = {
  init: function () {
    this.jsonInit({
      message0: 'Ao olhar os exames o Dr. Bolinha acredita que Chico tenha asma.',
      args0: [  
      ],
     colour: 10,
     nextStatement: null,
     previousStatement: null
    })
  }
}

Blockly.Blocks['escolha'] = {
  init: function () {
    this.jsonInit({
      message0: 'Dr. Bolinha: %1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Chama o paciente para a sala', 'escolha1'],
            ['Olha exames do paciente', 'escolha2']
          ]
        }
      ],
      colour: 40,
      nextStatement: null,
      previousStatement: null
    })
  }
}

Blockly.Blocks['fala'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 diz: %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Dr. Bolinha', 'personagem1'],
            ['Paciente', 'personagem2']
          ]
        },
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Boa tarde, me chamo Dr. Bolinha, Qual seu nome?', 'fala1'],
            ['Já olhei sua ficha, você tem asma.', 'fala2'],
            ['Você terá que usar Aerolin para o resto de sua vida.', 'fala3'],
            ['Prazer Dr. Bolinha, me chamo Chico.', 'fala4'],
            ['Eu não tenho asma!', 'fala5'],
            ['Boa tarde Doutor, tudo bem?', 'fala6'],
            ['Estou sentindo cansado e com falta de ar...', 'fala7']
          ]
        }
      ],
      colour: 60,
      nextStatement: null,
      previousStatement: null
    })
  }
}

Blockly.Blocks['sente'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 sente %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Dr. Bolinha', 'personagem1'],
            ['Paciente', 'personagem2']
          ]
        },
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['que pode se abrir com o Dr. Bolinha.', 'sente1'],
            ['medo, pois não sabe o que é asma.', 'sente2'],
            ['desconfortável e preocupado que esteja muito doente.', 'sente3']
          ]
        }
      ],
      colour: 60,
      nextStatement: null,
      previousStatement: null
    })
  }
}