Blockly.Blocks['imagem_eletro'] = {
  init: function () {
    this.jsonInit({
      message0: '%1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1ondaP.png', width: 200, height: 200, alt: 'heart 1'}, 'heart1'],
            [{src: '2segmentoPR.png', width: 200, height: 200, alt: 'heart 2'}, 'heart2'],
            [{src: '3ondaQRS.png', width: 200, height: 200, alt: 'heart 3'}, 'heart3'],
            [{src: '4ondaT.png', width: 200, height: 200, alt: 'heart 4'}, 'heart4']
          ]
        },
        {
          type: 'input_value',
          name: 'mov',
          check: 'Mov'
        }
      ],
      message1: 'local: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Sino atrial', 'ondaP'],
            ['Nodo AV', 'segementoPR'],
            ['feixe de His purKinje', 'ondaQRS'],
            ['Ventrículo', 'ondaT']
          ]
        }
      ],
      message2: 'descricao: %1',
      args2: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Estímulo elétrico gerando a despolarização atrial', 'ondaP'],
            ['Condução de estimulo elétrico do átrio para os ventrículos', 'segementoPR'],
            ['Condução dos impulsos elétricos para as câmaras inferiores', 'ondaQRS'],
            ['Repolarização ventricular', 'ondaT']
          ]
        }
      ],
      message3: 'ECG: %1',
      args3: [
        {
          type: 'input_value',
          name: 'onda',
          check: 'Onda'
        }
      ],
      // message3: 'ECG: %1',
      //   args3: [
          // {
          //   type: 'input_value',
          //   name: 'onda',
          //   check: 'Onda',
          // }
      //   ],
      // message4: 'físico: %1',
      // args4: [
        // {
        //   type: 'input_value',
        //   name: 'mov',
        //   check: 'Mov',
        // }
      // ],
      colour: 80,
      tooltip: 'Coração',
      nextStatement: null,
      previousStatement: null
    })
  }
}

Blockly.Blocks['imagem_mov'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1movimento.png', width: 200, height: 200, alt: 'heart_mov 1'}, 'heart_mov1'],
            [{src: '2movimento_segmentoPR.png', width: 200, height: 200, alt: 'heart_mov 2'}, 'heart_mov2'],
            [{src: '2movimento.png', width: 200, height: 200, alt: 'heart_mov 3'}, 'heart_mov3'],
            [{src: '3movimento.png', width: 200, height: 200, alt: 'heart_mov 4'}, 'heart_mov4']
          ]
        }
      ],
      message1: 'local: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Átrio: Contração atrial/despolarização atrial', 'mov1'],
            ['Saída do sangue venoso do ventrículo direito pela artéria pulmonar e saída de sangue arterial do ventrículo esquerdo para a aorta', 'mov2'],
            ['TEXTO A DEFINIR', 'mov3'],
            ['TEXTO A DEFINIR', 'mov4']
          ]
        }
      ],
      message2: 'descrição: %1',
      args2: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Envio do sangue venoso do átrio direito para o ventrículo direito e envio do sangue arterial do átrio esquerdo para o ventrículo esquerdo', 'mov1'],
            ['Ventrículos: contração ventricular/despolarização ventricular', 'mov2'],
            ['Ventrículo: repolarização ventricular', 'mov3'],
            ['TEXTO A DEFINIR', 'mov4']
          ]
        }
      ],
        colour: 300,
        tooltip: 'Eletro',
        output: 'Mov'
    })
  }
}

Blockly.Blocks['imagem_onda'] = {
  init: function () {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1ondaPECG.png', width: 200, height: 200, alt: 'ecg 1'}, 'ecg1'],
            [{src: '2segmentoPRECG.png', width: 200, height: 200, alt: 'ecg 2'}, 'ecg2'],
            [{src: '3ondaQRSECG.png', width: 200, height: 200, alt: 'ecg 3'}, 'ecg3'],
            [{src: '4ondaTECG.png', width: 200, height: 200, alt: 'ecg 4'}, 'ecg4']
          ]
        }
      ],
        colour: 20,
        tooltip: 'Eletro',
        output: 'Onda'
    })
  }
}