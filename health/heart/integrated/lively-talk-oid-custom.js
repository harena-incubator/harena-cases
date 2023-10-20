import { css, Oid } from './lib/oid-full-dev.js'

Oid.customize('foid:lively-talk', {
  cid: 'robot',
  style: css`
  .character {
    width: 256px;
  }
  .bubble {
    height: 40vh;
    padding-left: 100px;
  }`,
  process: function(oid, parameters) {
    console.log('=== recebi comandos ===')
    const stm = (oid.statements) ? oid.statements[0] : null
    console.log(stm)
    if (parameters) {
      if (parameters.value == 'simular') {
        if (stm.type == 'eletro') {
          if (stm.image == 'heart1' && stm.estrutura == 'ondaP' && stm.efeito == 'ondaP') {
            oid.handleSend('display', {value: '=== parabéns, você fez a associação correta'})
          } else {
            oid.handleSend('display', {value: '=== infelizmente a associação está incorreta'})
          }
        } else {
          oid.handleSend('display', {value: JSON.stringify(stm)})
        }
      } else if (parameters.value != null && parameters.value.length > 0) {
        console.log('=== guarda parametros')
        console.log(parameters.value)
        const lines = parameters.value.split('\n')
        oid.statements = []
        for (const l of lines)
          oid.statements.push(JSON.parse(l))       
      }
    }
  }
})