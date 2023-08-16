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
          check: 'Mov',
        }
      ],
      message1: 'estrutura: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Sino atrial', 'ondaP'],
            ['Nó atrio ventricular', 'segementoPR'],
            ['Sistema His-Purkinje', 'ondaQRS']
          ]
        }
      ],
      message2: 'efeito elétrico: %1',
      args2: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Estímulo elétrico DISPARANDO ...', 'ondaP'],
            ['Conexão elétrica entre átrios e ventrículos', 'segementoPR'],
            ['Condução rápida dos estímulos elétricos nos ventrículos', 'ondaQRS']
          ]
        }
      ],
      colour: 80,
      tooltip: 'Coração',
      output: 'atvEle',
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
      message1: 'estrutura: %1',
      args1: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Átrio', 'mov1'],
            ['Nó AV', 'mov2'],
            ['Ventrículo', 'mov3']
          ]
        }
      ],
      message2: 'efeito mecânico: %1',
      args2: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Contração atrial', 'mov1'],
            ['Convergência dos estímulos atriais + retardo da condução do estímulo elétrico', 'mov2'],
            ['contração ventricular', 'mov3'],
            ['Relaxamento Ventricular', 'mov4']
          ]
        }
      ],
      message3: 'efeito fisiológico: %1',
      args3: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            ['Envio de sangue sob pressão do átrio para ventrículos', 'mov1'],
            ['Retadrdo de condução para contração atrial antes da contração ventricular', 'segementoPR'],
            ['Envio do sangue para o sistema arterial pulmonar e sistêmico', 'ondaQRS'],
            ['Relaxamento e enchimento dos ventrículos', 'ondaT']
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
      message0: '%1 %2',
      args0: [
        {
          type: 'field_dropdown',
          name: 'entity',
          options: [
            [{src: '1ondaPECG.png', width: 200, height: 200, alt: 'ecg 1'}, 'ecg1'],
            [{src: '2segmentoPRECG.png', width: 200, height: 200, alt: 'ecg 2'}, 'ecg2'],
            [{src: '3ondaQRSECG.png', width: 200, height: 200, alt: 'ecg 3'}, 'ecg3'],
            [{src: '5segmentoSTECG.png', width: 200, height: 200, alt: 'ecg 5'}, 'ecg5'],
            [{src: '4ondaTECG.png', width: 200, height: 200, alt: 'ecg 4'}, 'ecg4']
          ]
        },
        {
          type: 'input_value',
          name: 'atvEle',
          check: 'atvEle',
        }
      ],
        colour: 20,
        tooltip: 'Eletro'
    })
  }
}