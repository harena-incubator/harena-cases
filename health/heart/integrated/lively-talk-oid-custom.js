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
        let erro = 0
        let existe = 'OK'//existe um coração
        oid.smExiste = 'O coração existe! Verifique se há erro em algum outro lugar.'
        let instrucoes = 'OK'// não há blocos soltas
        oid.sminstrucoes = 'Não existem instruções soltas! Verifique se há erro em algum outro lugar.'
        let ciclo = 'OK' //existe 5 ciclos
        oid.smciclo = 'A quantidade de ciclos do meu coração está correta!'
        let vazio = 'OK' //bloco roxo escuro não tem campos vazios
        oid.smvazio = 'Nenhum campo esta vazio! Verifique se há erro em algum outro lugar.'
        let textoEle = 'OK' //associação entre texto e imagem atv. eletrica
        oid.smtextoEle = 'Associação entre texto e imagem correta no bloco da atividade elétrica.'
        let textoMec = 'OK' //associação entre texto e imagem atv. mec
        oid.smtextoMec = 'Associação entre texto e imagem correta no bloco da atividade mecânica.'
        let ordemEletrica = 'OK' //ordem das atv. eletrica
        oid.smordemEle = 'Ordem das atividades elétrica corretas.'
        let ordemMec = 'OK' //ordem das atv. mec
        oid.smordemMec = 'Ordem das atividades mecânica correta.'
        let ordemOnda = 'OK' //ordem das ondas
        oid.smordemOnda = 'Ordem das ondas do ECG correta.'
        let ordem = 'OK' //ordem de todos os blocos
        let asEleMec = 'OK' //associacao das atv. eletrica com atv mec
        oid.smasEleMEc = 'Associação da atividades elétrica e da atividade mecânica corretas.'
        let asMecOnda = 'OK' //associacao das atv. mec com onda
        oid.smasMecOnda = 'Associação das ondas ECG e da atividade mecânica corretas.'
        let asEleOnda = 'OK' //associacao das atv eletrica com ondas
        oid.smasEleOnda = 'Associação da atividades elétrica e das ondas ECG corretas.'
        let associacao = 'OK' //associacao de qualquer bloco
        //oid.txt = '<table><tr><th>Análise</th><th>Erro</th><th></th></tr>'
        oid.txt = '<table><tr><th>Erro</th><th></th></tr>'
        oid.know = ''
        console.log('=== simular')
        console.log(oid.statements)
        if (oid.statements == null || oid.statements.length == 0){
          //oid.handleSend('display', {value: '-> Nada a ser processado'})
          existe = 'X'
          oid.smExiste = 'Vá em componetes e escolha um bloco para começar!'
          erro++
        }
        else {
          if (oid.statements.length > 1 || !Array.isArray(oid.statements[0])){
            //oid.handleSend('display', {value: '-> Ainda há instruções soltas, não posso processar'})
            instrucoes = 'X'
            oid.sminstrucoes = 'Algum bloco está sozinho. Utilize bloco roxo escuro para fazer a conecção dos blocos!'
            erro++
          }
          else{
            let feedback = ''
            const vstm = oid.statements[0]
            if (vstm.length < 5){
              //feedback += '-> Estão faltando ciclos no meu pobre coração\n'
              ciclo = 'X'
              oid.smciclo = 'Ops, estão faltando ciclos no meu coração!'
              erro++
            }
            else if (vstm.length > 5){
              //feedback += '-> Há muitos ciclos no meu coração, ele está fora de controle\n'
              ciclo = 'X'
              oid.smciclo = 'Ops, estão tem muitos ciclos no meu coração!'
              erro++
            }
            let empty = false
            for (const stm of vstm) {
              if (stm.onda == null || stm.atvEle == null || stm.atvMec == null)
                empty = true
            }
            if (empty) {
              //feedback += '-> Há uma ou mais instruções incompletas\n'
              vazio = 'X'
              oid.smvazio = 'Está faltando algo! A associação entre o ECG, aAtvidade elétrica e a atividade mecânica não está completa! '
              erro++
            }
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
              //feedback += `-> O texto que você escolheu em uma das imagens em algum dos blocos não descreve adequadamente a atividade ilustrada. (detalhes em Saiba mais)\n`
              textoEle = 'X'
              oid.smtextoEle = `Associação entre textos e imagens inconsistente em ${pEle} blocos na atividade elétrica`
              //oid.know += `-> Associação entre textos e imagens inconsistente em ${pEle} blocos na atividade elétrica\n`
              erro++
            }
            // analisando consistencia entre texto e imagem atividade mecanica
            let pMec = 0
            for (const stm of vstm) {
              const mec = stm.atvMec
              if (mec != null &&
                  (!mec.estrutura.includes(mec.efeitoMec) || !mec.image.includes(mec.efeitoMec) || mec.efeitoMec != mec.efeitoFis))
                  pMec++
            }
            if (pMec > 0) {
              //feedback += `-> O texto que você escolheu em uma das imagens em algum dos blocos não descreve adequadamente a atividade ilustrada. (detalhes em Saiba mais)\n`
              //oid.know += `-> Associação entre textos e imagens inconsistente em ${pMec} blocos na atividade mecânica\n`
              textoMec = 'X'
              oid.smtextoMec = `Associação entre textos e imagens inconsistente em ${pMec} blocos na atividade mecânica`
              erro++
            }

            //if(pMec > 0 || pEle > 0)
            //  feedback += `-> O texto que você escolheu em uma das imagens em algum dos blocos não descreve adequadamente a atividade ilustrada. (detalhes em Saiba mais)\n`
            // analisando a ordem das células atividade elétrica
            const ordemEle = ['ondaP', 'segmentoPR', 'ondaQRS', 'segmentoST', 'ondaT']
            const max = (vstm.length < 5) ? vstm.length : 5
            let iEle = false
            for (let i = 0; i < max; i++) {
              const eletro = vstm[i].atvEle
              if (eletro != null && eletro.image != ordemEle[i])
                iEle = true
            }
            if (iEle) {
              //feedback += `-> Alguma coisa está fora de ordem. (detalhes em Saiba mais)\n`
              //oid.know += `-> Revise a ordem em que o pulso elétrico segue. Do jeito que está, o impulso não segue uma sequência contínua.\n`
              ordemEletrica = 'X'
              oid.smordemEle = `Ordem da atividade elétrico incorreta.\n`
              erro++
            }
            // analisando a ordem das Ondas ECG 
            let iOnda = false
            for (let i = 0; i < max; i++) {
              const onda = vstm[i].onda
              if (onda != null && onda.image != ordemEle[i])
                iOnda = true
            }
              
            if (iOnda){
              //feedback += `-> Alguma coisa está fora de ordem. (detalhes em Saiba mais)\n`
              //oid.know += `-> Revise a ordem da onda do ECG. Do jeito que está a onda não segue uma sequência contínua.\n`
              ordemOnda = 'X'
              oid.smordemOnda = `Ordem da onda do ECG incorreta.\n`
              erro++
            }
            // analisando a ordem da atividade mecanica
            let iMec = false
            for (let i = 0; i < max; i++) {
              const onda = vstm[i].atvMec
              if (onda != null && onda.efeitoFis != ordemEle[i])
              iMec = true
              }
            if (iMec){
              //feedback += `-> Alguma coisa está fora de ordem. (detalhes em Saiba mais)\n`
              //oid.know += `-> Revise a ordem da atividade mecânica. Do jeito que está, o movimento não permite bombear sangue na sequência correta.\n`
              ordemMec = 'X'
              oid.smordemMec = `Ordem da atividade mecânica incorreta.\n`
              erro++
            }
            if(iMec || iEle || iOnda){
              //feedback += `-> Alguma coisa está fora de ordem. (detalhes em Saiba mais)\n`
              ordem = 'X'
            }
              
            // verifica compatibilidade entre as células das três colunas
            let incompatOndaEle = false
            let incompatOndaMec = false
            let incompatEleMec = false
            for (let i = 0; i < max; i++) {
              if (vstm[i].onda != null && vstm[i].atvEle != null &&
                  vstm[i].onda.image != vstm[i].atvEle.image)
                incompatOndaEle = true
              if (vstm[i].onda != null && vstm[i].atvMec != null &&
                vstm[i].onda.image != vstm[i].atvMec.efeitoFis)
                incompatOndaMec = true
              if (vstm[i].atvEle != null && vstm[i].atvMec != null &&
                  vstm[i].atvEle.image != vstm[i].atvMec.efeitoFis)
                  incompatEleMec = true
            }
            if (incompatOndaEle){
              //oid.know += `-> Uma ou mais atividades elétricas não geram às ondas do ECG que foram associadas.\n`
              oid.asEleOnda = 'Uma ou mais atividades elétricas não geram às ondas do ECG.\n'
              asEleOnda = 'X'
              erro++
            }
            if (incompatEleMec){
              //oid.know += `-> Uma ou mais atividades elétricas não disparam às atividades mecânicas que foram associadas.\n`
              oid.asEleMec = 'Uma ou mais atividades elétricas não disparam às atividades mecânicas.\n'
              asEleMec = 'X'
              erro++
            }
            if (incompatOndaMec){
              //oid.know += `-> Uma ou mais ondas do ECG não corresponde às atividades mecânicas associadas.\n`
              oid.asMecOnda = 'Uma ou mais ondas do ECG não corresponde às atividades mecânicas associadas.\n'
              asMecOnda = 'X'
              erro++
            }
            if (incompatOndaEle || incompatOndaMec || incompatEleMec){
              //feedback += '-> Há incompatibilidade entre as colunas (detalhes em Saiba mais).\n'
              associacao = 'X'
            }
            if(erro==0){
              feedback = '-> Parabéns! Meu coração esta funcionando!\n'
            }
            oid.handleSend('display', {value: feedback})

          }
        }        
 /*       oid.txt += '<tr><td>Existe coração</td><td>'+existe+'</td><td><button>Saiba Mais</button></td></tr>'
        if(existe!='X'){
          oid.txt += '<tr><td>Blocos soltos</td><td>'+instrucoes+'</td><td><button>Saiba Mais</button></td></tr>'
          if(instrucoes!='X'){
            oid.txt += '<tr><td>Quantidade de ciclos</td><td>'+ciclo+'</td><td><button>Saiba Mais</button></td></tr>'
            oid.txt += '<tr><td>Campo vazio</td><td>'+vazio+'</td><td><button>Saiba Mais</button></td></tr>'
            oid.txt += '<tr><td>Descrição da atividade elétrica</td><td>'+textoEle+'</td><td><button>Saiba Mais</button></td></tr>'
            oid.txt += '<tr><td>Descrição da atividade mecânica</td><td>'+textoMec+'</td><td><button>Saiba Mais</button></td></tr>'
            oid.txt += '<tr><td>Ordem dos ciclos</td><td>'+ordem+'</td><td><button>Saiba Mais</button></td></tr>'
            oid.txt += '<tr><td>Conexão entre blocos</td><td>'+associacao+'</td><td><button>Saiba Mais</button></td></tr>'
            //oid.txt += '<tr><td>Ordem da atividade mecânica</td><td>'+ordemMec+'</td><td><button>Saiba Mais</button></td></tr>'
            //oid.txt += '<tr><td>Ordem da onda ECG</td><td>'+ordemOnda+'</td><td><button>Saiba Mais</button></td></tr>'
          }
        }*/

        if(existe =='X'){
          oid.txt += '<tr><td>Não existe coração</td><td><button-oid label="Saiba mais" value="sem-coracao" publish="click~action/robot"></button-oid></td></tr>'
        }else{
          if(instrucoes =='X'){
            oid.txt += '<tr><td>Blocos soltos</td><td><button>Saiba Mais</button></td></tr>'
          }else{
            if(ciclo =='X'){
              oid.txt += '<tr><td>Quantidade de ciclos incorreta</td><td><button-oid label="Saiba mais" value="ciclos-incorreta" publish="click~action/robot"></button-oid></td></tr>'
            }
            if(vazio =='X'){
              oid.txt += '<tr><td>Campo vazio</td><td><button>Saiba Mais</button></td></tr>'
            }
            if(textoEle =='X'){
              oid.txt += '<tr><td>Descrição da atividade elétrica incorreta</td><td><button>Saiba Mais</button></td></tr>'
            }
            if(textoMec =='X'){
              oid.txt += '<tr><td>Descrição da atividade mecânica incorreta</td><td><button>Saiba Mais</button></td></tr>'
            }
            if(ordem =='X'){
              oid.txt += '<tr><td>Ordem incorreta</td><td><button>Saiba Mais</button></td></tr>'
            }
            if(associacao =='X'){
              oid.txt += '<tr><td>Associação incorreta</td><td><button>Saiba Mais</button></td></tr>'
            }
          }
        }


        oid.txt += '</table>'
        if(erro==0){
          oid.txt = 'Parabéns! Meu coração esta funcionando!'
        }
        oid.handleSend('display', {value: oid.txt})
      }
      else if (parameters.value == 'saiba') {
        oid.handleSend('display',
          {value: (oid.know == null || oid.know.length == 0) ? '-> Não há nova informações...' : oid.know})
      } else if (parameters.value == 'sem-coracao') {
        oid.handleSend('display',
          {value: 'Não existe um coração. Arraste um bloco coração para começar!'})
      } else if (parameters.value == 'ciclos-incorreta') {
        oid.handleSend('display',
          {value: oid.smciclo})
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