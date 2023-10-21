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
    if (parameters) {
      if (parameters.value == 'simular') {
        oid.know = ''
        console.log('=== simular')
        console.log(oid.statements)
        if (oid.statements == null || oid.statements.length == 0)
          oid.handleSend('display', {value: '-> nada a ser processado'})
        else {
          if (oid.statements.length > 1 || !Array.isArray(oid.statements[0]))
            oid.handleSend('display', {value: '-> ainda há instruções soltas, não posso processar'})
          else {
            let feedback = ''
            const vstm = oid.statements[0]
            if (vstm.length < 5)
              feedback += '-> estão faltando ciclos no meu pobre coração\n'
            else if (vstm.length > 5)
              feedback += '-> há muitos ciclos no meu coração, ele está fora de controle\n'
            let empty = false
            for (const stm of vstm) {
              if (stm.onda == null || stm.atvEle == null || stm.atvMec == null)
                empty = true
            }
            if (empty) feedback += '-> há uma ou mais instruções incompletas\n'

            // analisando consistencia entre texto e imagem de cada célula
            let pEle = 0
            for (const stm of vstm) {
              // analisando a coluna eletro
              const eletro = stm.atvEle
              if (eletro != null &&
                  (!eletro.estrutura.includes(eletro.image) || eletro.image != eletro.efeito))
                pEle++
            }
            if (pEle > 0) {
              feedback += `-> associação entre textos e imagens inconsistente (detalhes em Saiba mais)\n`
              oid.know += `-> associação entre textos e imagens inconsistente em ${pEle} blocos na atividade elétrica\n`
            }

            // analisando a ordem das células
            const ordemEle = ['ondaP', 'segmentoPR', 'ondaQRS', 'segmentoST', 'OndaT']
            const max = (vstm.length < 5) ? vstm.length : 5
            let iEle = false
            for (let i = 0; i < max; i++) {
              const eletro = vstm[i].atvEle
              if (eletro != null && eletro.image != ordemEle[i])
                iEle = true
            }
            if (iEle) 
              feedback += `-> ordem incorreta na atividade elétrica\n`

            // verifica compatibilidade entre as células das três colunas
            let incompat = false
            for (let i = 0; i < max; i++) {
              if (vstm[i].onda != null && vstm[i].atvEle != null &&
                  vstm[i].onda.image != vstm[i].atvEle.image)
                incompat = true
              if (vstm[i].onda != null && vstm[i].atvMec != null &&
                vstm[i].onda.image != vstm[i].atvMec.efeitoFis)
                incompat = true
              if (vstm[i].atvEle != null && vstm[i].atvMec != null &&
                  vstm[i].atvEle.image != vstm[i].atvMec.efeitoFis)
                incompat = true
            }
            if (incompat) feedback += '-> há incompatibilidade entre as colunas\n'

            oid.handleSend('display', {value: feedback})
          }
        }
      }
      else if (parameters.value == 'saiba') {
        oid.handleSend('display',
          {value: (oid.know == null || oid.know.length == 0) ? '-> não há nada a ser dito' : oid.know})
      } else if (parameters.value.length == 0)
        oid.statements = null
      else if (parameters.value != null) {
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