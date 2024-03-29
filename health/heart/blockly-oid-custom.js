import { Oid } from './lib/oid-full-dev.js'

Oid.customize('boid:blockly', {

cid: 'heart',

toolbox: {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Componentes',
      'contents': [
        {
          'kind': 'block',
          'type': 'eletro'
        },
        {
          'kind': 'block',
          'type': 'mecanico'
        },
        {
          'kind': 'block',
          'type': 'onda'
        },
        {
          'kind': 'block',
          'type': 'sequence'
        }
      ],
      'colour': 300
    }
  ]
},

blocks:
[
  {
    'type': 'eletro',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'image',
        'options': [
          [{src: 'assets/images/1ondaP.png', width: 200, height: 200, alt: 'heart 1'}, 'ondaP'],
          [{src: 'assets/images/2segmentoPR.png', width: 200, height: 200, alt: 'heart 2'}, 'segmentoPR'],
          [{src: 'assets/images/3ondaQRS.png', width: 200, height: 200, alt: 'heart 3'}, 'ondaQRS'],
          [{src: 'assets/images/4segmentoST.png', width: 200, height: 200, alt: 'heart 4'}, 'segmentoST'],
          [{src: 'assets/images/5ondaT.png', width: 200, height: 200, alt: 'heart 4'}, 'ondaT']
        ]
      }
    ],
    'message1': 'Estrutura: %1',
    'args1': [
      {
        'type': 'field_dropdown',
        'name': 'estrutura',
        'options': [
          ['Sino atrial', 'ondaP'],
          ['Nó atrio ventricular', 'segmentoPR'],
          ['Sistema His-Purkinje', 'ondaQRS'],
          ['Ventrículo', 'segmentoST/OndaT']
        ]
      }
    ],
    'message2': 'Efeito Elétrico: %1',
    'args2': [
      {
        'type': 'field_dropdown',
        'name': 'efeito',
        'options': [
          ['Estímulo disparando a despolarização atrial', 'ondaP'],
          ['Tempo de retardo entre a ativação auricular e ventricular', 'segmentoPR'],
          ['Condução rápida dos estímulos elétricos nos ventrículos', 'ondaQRS'],
          ['Intervalo entre o fim da despolarização e o início da repolarização ventricular', 'segmentoST'],
          ['Repolarização ventricular', 'ondaT']
        ]
      }
    ],
    'colour': 160,
    'tooltip': 'Coração',
    'output': 'atvEle'
  },

  {
    'type': 'mecanico',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'image',
        'options': [
          [{src: 'assets/images/1movimento.png', width: 200, height: 200, alt: 'heart_mov 1'}, 'ondaP'],
          [{src: 'assets/images/2movimento.png', width: 200, height: 200, alt: 'heart_mov 2'}, 'segmentoPR/segmentoST'],
          [{src: 'assets/images/3movimento.png', width: 200, height: 200, alt: 'heart_mov 3'}, 'ondaQRS'],
          [{src: 'assets/images/5movimento.png', width: 200, height: 200, alt: 'heart_mov 4'}, 'ondaT']
        ]
      }
    ],
    'message1': 'Estrutura: %1',
    'args1': [
      {
        'type': 'field_dropdown',
        'name': 'estrutura',
        'options': [
          ['Átrio', 'ondaP'],
          ['Nó AV', 'segmentoPR'],
          ['Ventrículo', 'ondaQRS/segmentoST/OndaT']
        ]
      }
    ],
    'message2': 'Efeito Mecânico: %1',
    'args2': [
      {
        'type': 'field_dropdown',
        'name': 'efeitoMec',
        'options': [
          ['Contração atrial', 'ondaP'],
          ['Convergência dos estímulos atriais + retardo da condução do estímulo elétrico', 'segmentoPR'],
          ['Contração ventricular', 'ondaQRS'],
          ['Não existe atividade mecânica', 'segmentoST'],
          ['Relaxamento Ventricular', 'ondaT']
        ]
      }
    ],
    'message3': 'Efeito Fisiológico: %1',
    'args3': [
      {
        'type': 'field_dropdown',
        'name': 'efeitoFis',
        'options': [
          ['Envio de sangue sob pressão do átrio para ventrículos', 'ondaP'],
          ['Retardo de condução para contração atrial antes da contração ventricular', 'segmentoPR'],
          ['Envio do sangue para o sistema arterial pulmonar e sistêmico', 'ondaQRS'],
          ['Representa o início da repolarização ventricular', 'segmentoST'],
          ['Enchimento dos ventrículos', 'ondaT']
        ]
      }
    ],
    'colour': 20,
    'tooltip': 'eletro',
    'output': 'atvMec'
  },

  {
    'type': 'onda',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'image',
        'options': [
          [{src: 'assets/images/1ondaPECG.png', width: 200, height: 200, alt: 'ecg 1'}, 'ondaP'],
          [{src: 'assets/images/2segmentoPRECG.png', width: 200, height: 200, alt: 'ecg 2'}, 'segmentoPR'],
          [{src: 'assets/images/3ondaQRSECG.png', width: 200, height: 200, alt: 'ecg 3'}, 'ondaQRS'],
          [{src: 'assets/images/4segmentoSTECG.png', width: 200, height: 200, alt: 'ecg 4'}, 'segmentoST'],
          [{src: 'assets/images/5ondaTECG.png', width: 200, height: 200, alt: 'ecg 5'}, 'ondaT']
      ]
      }
    ],
    colour: 290,
    tooltip: 'Eletro',
    output: 'onda'
  },

  {
    'type': 'sequence',
    'message0': '%1 onda %2 elétrico %3 mecânico',
    'args0': [
      {
        'type': 'input_value',
        'name': 'onda',
        'check': 'onda'
      },
      {
        'type': 'input_value',
        'name': 'atvEle',
        'check': 'atvEle'
      },
      {
        'type': 'input_value',
        'name': 'atvMec',
        'check': 'atvMec'
      },
    ],
    colour: 250,
    nextStatement: null,
    previousStatement: null
  }
],

generator: {
  'eletro': function (block, generator) {
    return JSON.stringify({
      type: 'eletro',
      image: block.getFieldValue('image'),
      estrutura: block.getFieldValue('estrutura'),
      efeito: block.getFieldValue('efeito')
    })
  },
  
  'mecanico': function (block, generator) {
    return JSON.stringify({
      type: 'mecanico',
      image: block.getFieldValue('image'),
      estrutura: block.getFieldValue('estrutura'),
      efeitoMec: block.getFieldValue('efeitoMec'),
      efeitoFis: block.getFieldValue('efeitoFis')
    })
  },

  'onda': function (block, generator) {
    return JSON.stringify({
      type: 'onda',
      image: block.getFieldValue('image')
    })
  },
  
  'sequence': function (block, generator) {
    let result = []
    let onda = generator.statementToCode(block, 'onda')
    onda = (onda.length == 0) ? null : JSON.parse(onda)
    let atvEle = generator.statementToCode(block, 'atvEle')
    atvEle = (atvEle.length == 0) ? null : JSON.parse(atvEle)
    let atvMec = generator.statementToCode(block, 'atvMec')
    atvMec = (atvMec.length == 0) ? null : JSON.parse(atvMec)
    result = [{
      type: 'sequence',
      onda: onda,
      atvEle: atvEle,
      atvMec: atvMec
    }]
    const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock()
    if (nextBlock) {
      const nb = generator.blockToCode(nextBlock)
      if (nb.length > 0)
        result = result.concat(JSON.parse(nb))
    }
    return JSON.stringify(result)
  }
}

})