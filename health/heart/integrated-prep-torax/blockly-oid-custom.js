import { Oid } from './lib/oid-full-dev.js'

Oid.customize('boid:blockly', {

cid: 'heart',

toolbox: {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Material',
      'contents': [
/*        {
          'kind': 'block',
          'type': 'gilete'
        },
        {
          'kind': 'block',
          'type': 'luva'
        },
        {
          'kind': 'block',
          'type': 'mascara'
        },
        {
          'kind': 'block',
          'type': 'tesoura'
        },
        {
          'kind': 'block',
          'type': 'algodao'
        },
        {
          'kind': 'block',
          'type': 'gazes'
        },
        {
          'kind': 'block',
          'type': 'cotonete'
        },
        {
          'kind': 'block',
          'type': 'alcool'
        },
        {
          'kind': 'block',
          'type': 'gel'
        },
        {
          'kind': 'block',
          'type': 'rad'
        },
        {
          'kind': 'block',
          'type': 'prepad'
        }*/
        {
          'kind': 'block',
          'type': 'Materiais'
        }
      ],
      'colour': 300
    },
    {
      'kind': 'category',
      'name': 'Ação',
      'contents': [
        {
          'kind': 'block',
          'type': 'acao1'
        },
        {
          'kind': 'block',
          'type': 'acao2'
        },
        {
          'kind': 'block',
          'type': 'acao3'
        },
        {
          'kind': 'block',
          'type': 'acao4'
        },
        {
          'kind': 'block',
          'type': 'acao5'
        },
        {
          'kind': 'block',
          'type': 'acao6'
        },
        {
          'kind': 'block',
          'type': 'acao7'
        },
        {
          'kind': 'block',
          'type': 'acao8'
        },
        {
          'kind': 'block',
          'type': 'acao9'
        },
        {
          'kind': 'block',
          'type': 'acao10'
        },
        {
          'kind': 'block',
          'type': 'acao11'
        },
        {
          'kind': 'block',
          'type': 'acao12'
        },
        {
          'kind': 'block',
          'type': 'acao13'
        },
        {
          'kind': 'block',
          'type': 'acao14'
        },
        {
          'kind': 'block',
          'type': 'acao15'
        },
        {
          'kind': 'block',
          'type': 'acao16'
        },
        {
          'kind': 'block',
          'type': 'acao17'
        },
        {
          'kind': 'block',
          'type': 'acao18'
        },
        {
          'kind': 'block',
          'type': 'acao19'
        },
        {
          'kind': 'block',
          'type': 'acao20'
        },
        {
          'kind': 'block',
          'type': 'acao21'
        },
        {
          'kind': 'block',
          'type': 'acao22'
        },
        {
          'kind': 'block',
          'type': 'acao23'
        },
        {
          'kind': 'block',
          'type': 'acao24'
        },
        {
          'kind': 'block',
          'type': 'acao25'
        },
        {
          'kind': 'block',
          'type': 'acao26'
        },
        {
          'kind': 'block',
          'type': 'acao27'
        }
      ],
      'colour': 350
    }/*,
    {
      'kind': 'category',
      'name': 'Robo',
      'contents': [
        {
          'kind': 'block',
          'type': 'sequence'
        }
      ],
      'colour': 40
    }*/
  ]
},

blocks:
[
  {
    'type': 'Materiais',
    'message0': '%1',
    'args0': [
      {
        'type': 'field_dropdown',
        'name': 'image',
        'options': [
          [{src: 'assets/images/1gitele.jpeg', width: 200, height: 200, alt: 'gilete'}, 'gilete'],
          [{src: 'assets/images/luva.png', width: 200, height: 200, alt: 'luva'}, 'luva'],
          [{src: 'assets/images/mascara2.jpg', width: 200, height: 200, alt: 'mascara'}, 'mascara'],
          [{src: 'assets/images/tesoura.jpg', width: 200, height: 200, alt: 'tesoura'}, 'tesoura'],
          [{src: 'assets/images/3algodao.jpeg', width: 200, height: 200, alt: 'algodao'}, 'algodao'],
          [{src: 'assets/images/5gazes.jpeg', width: 200, height: 200, alt: 'gazes'}, 'gazes'],
          [{src: 'assets/images/4cotonete.jpeg', width: 200, height: 200, alt: 'cotonete'}, 'cotonete'],
          [{src: 'assets/images/2alcool.jpeg', width: 200, height: 200, alt: 'alcool'}, 'alcool'],
          [{src: 'assets/images/7gel.jpeg', width: 200, height: 200, alt: 'gel'}, 'gel'],
          [{src: 'assets/images/8rad.jpeg', width: 200, height: 200, alt: 'rad'}, 'rad'],
          [{src: 'assets/images/6prepad.jpeg', width: 200, height: 200, alt: 'prepas'}, 'prepad']
      ]
      }
    ],
    colour: 290,
    tooltip: 'material',
    output: 'material'
  },
 /* {
    "type": "gilete",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        'name':'gilete',
        "src": "assets/images/1gitele.jpeg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 20,
    tooltip: 'Prod',
    output: 'produto'
  },

  {
    "type": "luva",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/luva.png",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 55,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "mascara",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/mascara2.jpg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 92,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "tesoura",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/tesoura.jpg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 329,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "algodao",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/3algodao.jpeg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 60,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "gazes",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/5gazes.jpeg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 120,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "cotonete",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/4cotonete.jpeg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 200,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "alcool",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/2alcool.jpeg",
        "width": 150,
        "height": 150,
        "alt": "*"
      }
    ],
    colour: 350,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "gel",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/7gel.jpeg",
        "width": 200,
        "height": 200,
        "alt": "*"
      }
    ],
    colour: 500,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "rad",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/8rad.jpeg",
        "width": 200,
        "height": 200,
        "alt": "*"
      }
    ],
    colour: 750,
    tooltip: 'Prod',
    output: 'produto'
  },
  {
    "type": "prepad",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/6prepad.jpeg",
        "width": 200,
        "height": 200,
        "alt": "*"
      }
    ],
    colour: 950,
    tooltip: 'Prod',
    output: 'produto'

  },
*/
  {
    'type': 'acao1',
    "message0": "Raspar com %1",
    "args0": [
        {
          "type": "input_value",
          "name": "material",
          'check': 'material'
        }
    ],
    colour: 10,
    nextStatement: null,
    previousStatement: null
  },

  {
    'type': 'acao2',
    "message0": "Limpar com %1",
      "args0": [
        {
          "type": "input_value",
          "name": "material",
          'check': 'material'
        }
      ],
      colour: 20,
      nextStatement: null,
      previousStatement: null
  },

  {
    'type': 'acao3',
    'message0': 'Limpar com %1 e %2 .',
    'args0': [
      {
      'type': 'input_value',
      'name': "material1",
      'check': 'material'
      },
      {
        'type': 'input_value',
        'name': "material2",
        'check': 'material'
      }
    ],
   colour: 30,
   nextStatement: null,
   previousStatement: null
  },

  {
    'type': 'acao4',
    "message0": "Apresentar-se",
    colour: 40,
    nextStatement: null,
    previousStatement: null
  },

  {
    'type': 'acao5',
    "message0": "Explicar o procedimento ao paciente",
    colour: 50,
    nextStatement: null,
    previousStatement: null
  },

  {
    'type': 'acao6',
    "message0": "Pedir para o paciente notificar dor, palpitação, desconforto",
    colour: 60,
    nextStatement: null,
    previousStatement: null
  },

  {
    'type': 'acao7',
    "message0": "Checar prontuário",
    colour: 70,
    nextStatement: null,
    previousStatement: null
  },

  {
    'type': 'acao8',
    "message0": "Checar histórico do paciente",
    colour: 80,
    nextStatement: null,
    previousStatement: null
  },

  {
    'type': 'acao9',
    "message0": "Conferir identificação do paciente",
    colour: 90,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao10',
    "message0": "Remover roupas que estão cobrindo o tórax",
    colour: 100,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao11',
    "message0": "Posicionar o paciente (supina)",
    colour: 110,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao12',
    "message0": "Posicionar o paciente (supina)",
    colour: 120,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao13',
    "message0": "Checar se cabo não está tensionado",
    colour: 130,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao14',
    "message0": "Descrever as etapas realizadas para monitorização",
    colour: 140,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao15',
    "message0": "Vestir o EPI %1",
    "args0": [
      {
        "type": "input_value",
        "name":  "material",
        'check': 'material'
      }
    ],
    colour: 150,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao16',
    "message0": "Avaliar tórax",
    colour: 160,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao17',
    "message0": "Colocar eletrodos no paciente",
    colour: 170,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao18',
    "message0": "Lavar as mãos",
    colour: 180,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao19',
    "message0": "Dirigir-se ao paciente",
    colour: 190,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao20',
    "message0": "Retirar acessórios",
    colour: 200,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao21',
    "message0": "Remover pelo com gaze",
    colour: 210,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao22',
    "message0": "Conectar o cabo do eletrodo com o adesivo",
    colour: 220,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao23',
    "message0": "Checar no monitor em qual derivação o paciente deve ficar",
    colour: 230,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao24',
    "message0": "Ajustar os alarmes de acordo com a necessidade do paciente (nunca desativá-los)",
    colour: 240,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao25',
    "message0": "Avaliação cardiovascular inicial com documentação da frequência cardíaca e ritmo",
    colour: 250,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao26',
    "message0": "Documentar alterações",
    colour: 260,
    nextStatement: null,
    previousStatement: null
  },
  {
    'type': 'acao27',
    "message0": "Descrever intercorrências",
    colour: 270,
    nextStatement: null,
    previousStatement: null
  },

  {
    "type": "sequence",
    "message0": "%1",
    "args0": [
      {
        "type": "field_image",
        "src": "assets/images/robo.png",
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
  }
],

generator: {
  'Materiais': function (block, generator) {
    const image = block.getFieldValue('image')
    return `${image}`
  },

  'acao1': function (block, generator) {
    const material = generator.statementToCode(block, 'material')
    return `Raspando com ${material} `
  },

  'acao2': function (block, generator) {
    const material = generator.statementToCode(block, 'material')
    return `Limpando com ${material}`
  }
  ,

  'acao3': function (block, generator) {
    const material1 = generator.statementToCode(block, 'material1')
    const material2 = generator.statementToCode(block, 'material2')
    return `Limpando com ${material1} e ${material2}`
  },

  'acao4': function (block, generator) {
    return `Se apresentando ao paciente`
  },

  'acao5': function (block, generator) {
    return `Explicando o procedimento ao paciente`
  },

  'acao6': function (block, generator) {
    return `Pedindo para o paciente notificar dor, palpitação, desconforto`
  },

  'acao7': function (block, generator) {
    return `Checando prontuário `
  },

  'acao8': function (block, generator) {
    return `Checando histórico do paciente `
  },

  'acao9': function (block, generator) {
    return `Conferindo identificação do paciente`
  },

  'acao10': function (block, generator) {
    return `Removendo roupas que estão cobrindo o tórax`
  },

  'acao11': function (block, generator) {
    return `Posicionando o paciente (supina)`
  },

  'acao12': function (block, generator) {
    return `Admitindo o paciente no sistema do monitor`
  },

  'acao13': function (block, generator) {
    return `Checando se cabo não está tensionado `
  },

  'acao14': function (block, generator) {
    return `Descrevendo as etapas realizadas para monitorização`
  },

  'acao15': function (block, generator) {
    const material = generator.statementToCode(block, 'material')
    return `Vestindo o EPI ${material} `
  },

  'acao16': function (block, generator) {
    return `Avaliando tórax `
  },

  'acao17': function (block, generator) {
    return `Colocando eletrodos no paciente `
  },

  'acao18': function (block, generator) {
    return `Lavando as mãos`
  },

  'acao19': function (block, generator) {
    return `Se Dirigindo ao paciente`
  },

  'acao20': function (block, generator) {
    return `Retirando acessórios`
  },

  'acao21': function (block, generator) {
    return `Removendo pelo com gaze`
  },

  'acao22': function (block, generator) {
    return `Conectando o cabo do eletrodo com o adesivo `
  },

  'acao23': function (block, generator) {
    return `Checando no monitor em qual derivação o paciente deve ficar`
  },

  'acao24': function (block, generator) {
    return `Ajustando os alarmes de acordo com a necessidade do paciente (nunca desativá-los)`
  },

  'acao25': function (block, generator) {
    return `Fazendo a avaliação cardiovascular inicial com documentação da frequência cardíaca e ritmo`
  },

  'acao26': function (block, generator) {
    return `Documentando alterações `
  },

  'acao27': function (block, generator) {
    return `Descrevendo intercorrências `
  }
}

})