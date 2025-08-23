# Recepcao (recepcao) #

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Narrador_
  > Fernando, 14 anos, chega à UBS acompanhado do pai.
  * sequence: 1

@Enfermeira_
  ![Enfermeira](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/enfermeira_regular.png)
  > Fernando, o seu nariz está sangrando!
  * sequence: 2

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > O que aconteceu?
  * sequence: 3

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_triste.png)
  * sequence: 4
@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando_2.png)
  >  Ele sofreu um acidente na escola durante o intervalo.
  * sequence: 4

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)
  * sequence: 5
@Enfermeira_
  ![Enfermeira](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/enfermeira_virada.png)
  > A equipe escolar ligou para informar o ocorrido e solicitou que o pai fosse buscá-lo.
  * sequence: 5

@Enfermeira_
 ![Enfermeira](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/enfermeira_regular_virada.png)
  >  Preocupado, ele foi até a escola, pegou o filho e veio diretamente à unidade de saúde em busca de atendimento médico.
  * sequence: 6

@Opcoes_
  * sequence: 7

@Pergunta_
  > Como você vai convidá-los para entrar?

@Opcao1_
  > Fernando e seu acompanhante, venham até o escritório comigo, por gentileza.

@Opcao2_
  > Fernando, pode entrar aqui comigo um momento?

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Consultorio_Ambos_decide
@Opcao2-text_ -> Consultorio_Sozinho 

# Consultorio_Ambos_decide (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Opcoes_
  * sequence: 1

@Pergunta_
  > Com quem falar primeiro?

@Opcao1_
  > Começar falando com Fernando para ouvir a versão dele primeiro.

@Opcao2_
  > Senhor, pode me contar o que aconteceu com o Fernando hoje?

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> fala_fernando
@Opcao2-text_ -> senhor_conte

# senhor_conte (consultorio) #
@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando_2.png)
  >  A diretora da escola dele ligou dizendo que o nariz dele começou a sangrar depois de uma brincadeira no intervalo.
  * sequence: 1

@Pai_
  >Foi só isso. Não tem nada de mais, criança é assim, tá brincando, se machuca, mas logo levanta e volta a brincar de novo. 
  * sequence: 2

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando.png)
  > Não lembra como era na nossa época? É cada história que a gente tem para contar para esses meninos…
  * sequence: 3

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)
  * sequence: 4
@Narrador_
  >Enquanto o pai fala, Fernando permanece quieto, olhando para baixo.
  * sequence: 4


@Opcoes_
  * sequence: 5

@Pergunta_
  > O que fazer?

@Opcao1_
  > Falar com fernando

@Opcao2_
  > Continuar o atendimento apenas com o pai

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> fala_fernando
@Opcao2-text_ -> continuar

# continuar (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Narrador_
  > Você nota que o menino não é convidado a falar e, por respeito à decisão do pai, acaba não o questionando diretamente.
  * sequence: 1

@Narrador_
  > Com base nas informações do pai, você conclui que se trata apenas de um ferimento físico.
  * sequence: 2

@Narrador_
  > Assim, você decide apenas tratar o paciente, apenas fornecendo receita para dor e inchaço e solicitando um raio-X da face.
  * sequence: 3


@Resumo_
  > No entanto, você não encaminha Fernando para acompanhamento psicológico, devido a falta de diálogo entre o Médico e o paciente. Então, embora tenha cuidado da lesão física, o suporte emocional necessário não é providenciado, deixando parte das necessidades do paciente em falta, e não realizando um atendimento pleno.
  * sequence: 4

@Resultados_
  >  Fim de jogo (Final ruim).
  * sequence: 5
@Seta_dialogo_ (-) next_talk


# fala_fernando (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Fernando, queria ouvir um pouco de você, o que aconteceu?
  * sequence: 1

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 2
@Narrador_
  > Você nota que Fernando esta desconfortável e buscando validação do pai para falar.
  * sequence: 2

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Ah… foi no intervalo da escola. Eu tropecei, bati o nariz… e começou a sangrar.
  * sequence: 3

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)
  * sequence: 4

@Narrador_
  > Você percebe que a resposta é curta demais, sem detalhes. Algo na entonação dele indica que não é toda a história.
  * sequence: 4

@Opcoes_
  * sequence: 5

@Pergunta_
  > O que fazer?

@Opcao1_
  > Interrogar Fernando diretamente

@Opcao2_
  > Fazer perguntas abertas

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Interrogar_Fernando
@Opcao2-text_ -> perguntas_abertas

# perguntas abertas (consultorio) #
@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Narrador_
  > Você decide manter a calma e dar a Fernando uma oportunidade de se abrir.
  * sequence: 1

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Entendi. E antes disso, estava fazendo o quê? Brincando? Conversando com alguém?
  * sequence: 2

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 3
@Narrador_
  > Fernando hesita e respira fundo.
  * sequence: 3


@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Tava… perto da quadra. Uns meninos chegaram, começaram a empurrar… aí eu caí.
  * sequence: 4


@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)
  * sequence: 5
@Narrador_
  > O pai fica surpreso.
  * sequence: 5

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando_2.png)
  > Empurrar? Como assim? Você nunca falou nada disso pra mim!
  * sequence: 6

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)
  * sequence: 7

@Narrador_
  > Fernando fica visivelmente desconfortável. Você percebe que, se deixar, a conversa pode virar um confronto entre os dois. É hora de intervir.
  * sequence: 7

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Olha, essas coisas podem ser difíceis de falar, principalmente quando a gente não quer preocupar quem a gente gosta. O importante é que você está seguro agora, e podemos pensar juntos em como lidar com isso.
  * sequence: 8

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 9

@Narrador_
  > Você mantém um tom tranquilo e faz pequenas perguntas. Aos poucos, Fernando vai contando mais detalhes: que alguns colegas fazem piadas, que ele evita determinados lugares na escola e que já houve empurrões antes.
  * sequence: 9

@Narrador_
  > O pai escuta, ainda processando.
  * sequence: 10

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando_2.png)
  >  Fernando, você devia ter me contado antes…
  * sequence: 11

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)
  * sequence: 12

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando2.png)
  > Não queria dar problema…
  * sequence: 12

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)
  * sequence: 13

@Narrador_
  > Apesar de ter conseguido informações importantes, você percebe que ele ainda guarda algo. Sabe que, se estivessem sozinhos, talvez ele confiasse o restante.
  * sequence: 13

@Opcoes_
  * sequence: 14

@Pergunta_
  > O que fazer?

@Opcao1_
  > Tentar separar os dois para descobrir mais informações

@Opcao2_
  > Seguir atendimento com as informações que tem

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> tentar_separar
@Opcao2-text_ -> seguir

#tentar_separar (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Narrador_
  > Você pensa em um jeito de falar com Fernando sem seu pai, sem comprometer a confiança que ambos têm em você.
  * sequence: 1


@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Bom, agora que já conversamos um pouco sobre o ocorrido, precisamos pesar e medir a altura de Fernando
  * sequence: 2


@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Como nesse consultório não há balança, vamos na sala ao lado para verificar.
  * sequence: 3


@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Enquanto isso, você não quer ir até a recepção marcar o retorno? Assim já vamos adiantando, porque a unidade está um pouco cheia hoje.
  * sequence: 4


@Opcoes_
  * sequence: 5

@Pergunta_
  > Decida

@Opcao1_
  > Ir para a sala ao lado

@Opcao2_
  > Desistir

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> pai_concorda
@Opcao2-text_ -> seguir


# seguir (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Narrador_
  > Você decide agir com o que conseguiu descobrir, prescrevendo um medicamento para aliviar a dor e reduzir o inchaço.
  * sequence: 1


@Narrador_
  > Além disso, marca uma nova consulta daqui a um mês e encaminha Fernando para o psicólogo da unidade.
  * sequence: 2


@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_feliz.png)
  * sequence: 3

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando.png)
  * sequence: 3

@Narrador_
  > Ao saírem, Fernando e o pai agradecem a atenção e parecem mais aliviados. Ainda assim, você sente que uma parte essencial da história continua oculta, sendo crucial para ajudá-lo de verdade.
  * sequence: 3

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/vazio.png)
  * sequence: 4
@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/vazio.png)
  * sequence: 4

@Resumo_
  > O caso foi tratado fisicamente, com cuidados necessários para a lesão. Houve encaminhamento para apoio psicológico, oferecendo suporte emocional ao paciente.
  * sequence: 4

@Resumo_
  >  No entanto, Fernando poderia ter compartilhado mais informações pessoais, o que impediu uma compreensão completa do caso. 
  * sequence: 5

@Resumo_
  > Então, parte das necessidades do paciente não foram atendidas.
  * sequence: 6

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/vazio.png)
  * sequence: 7
@Resultado_
  > Fim de jogo (Resultado médio)
  * sequence: 7

@Seta_dialogo_ (-) next_talk

# Interrogar_Fernando (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Fernando, me diz a verdade: tem algo acontecendo na escola que você não está querendo contar? Não precisa ter medo, é importante para eu poder te ajudar.
  * sequence: 1

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 2
@Narrador_
  > Fernando engole seco, parecendo cada vez mais tenso. Ele responde que não, que foi só um acidente mesmo, que apenas tropeçou e bateu o nariz.
  * sequence: 2

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Você não acha que está escondendo alguma coisa? Essas lesões não aparecem do nada.
  * sequence: 3
@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 4
@Narrador_
  > Fernando balança a cabeça, a voz ficando mais baixa e rápida. Fernando insiste que não, que não aconteceu nada, que está bem, de verdade.
  * sequence: 4

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Se você não falar, não tem como eu saber como te ajudar direito.
  * sequence: 5
@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 6
@Narrador_
  > Fernando se mantém firme na negativa, pedindo para o médico parar, reforçando que não aconteceu nada.
  * sequence: 6

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Você não acha que está escondendo alguma coisa? Essas lesões não aparecem do nada.
  * sequence: 7
@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 8
@Narrador_
  > O clima fica pesado, e você percebe que pressionar mais só vai fechar a comunicação.
  * sequence: 8

@Resumo
  > O paciente não se sentiu à vontade para compartilhar detalhes importantes sobre sua vida.
  * sequence: 9

@Resumo
  > Dessa forma, você não conseguiu investigar o caso de maneira completa e não obteve as informações necessárias para realizar encaminhamentos além do tratamento físico.
  * sequence: 10

@Resumo
  > Como resultado, aspectos essenciais do bem-estar emocional do paciente permaneceram sem cuidado.
  * sequence: 11

@Resultado
  > Final ruim.
  * sequence: 12

@Seta_dialogo_ (-) next_talk

# tratar (consultorio)#
  > Assim, você decide apenas tratar o paciente, fornecendo receita para dor e inchaço, solicitando um raio-X da face e marcando retorno com o ortopedista pediátrico para avaliação da lesão.

# Consultorio_Sozinho (consultorio)#

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Narrador_
   > Você decide chamar apenas o menino para o consultório..
   * sequence: 1

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando_2.png)
   > Como assim só ele? Eu quero estar junto não vou deixar meu filho sozinho com o senhor.
   * sequence: 2

@Pai_
  ![Pai normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)
  * sequence: 3

@Medico_
 ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
   > Entendo sua preocupação. Às vezes, conversar a sós ajuda o paciente a se sentir mais à vontade para falar sobre o que aconteceu.
   * sequence: 3

@Medico_
 ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
   * sequence: 4

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_falando_2.png)
   > Não, doutor. Ele é menor de idade, e eu quero acompanhar.
   * sequence: 4

@Pai_
  ![Pai normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)
  * sequence: 5

@Narrador_
   > O clima fica um pouco tenso. O médico percebe que, se insistir agora, a conversa pode se tornar ainda mais difícil.
   * sequence: 5

@Opcoes_
   * sequence: 6

@Pergunta_
   > Escolha a seguir sua próxima ação:

@Opcao1_
   > Conversar com ambos

@Opcao2_
   > Mudar a estratégia e pensar em outra forma de falar com Fernando a sós.

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Consultorio_Ambos_decide
@Opcao2-text_ -> mudar_estrategia

# mudar_estrategia (consultorio)#

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)

@Medico_
   > Tudo bem, faz sentido. De qualquer forma, precisamos pesar ele e verificar a altura
   * sequence: 1

@Medico_
   > Como nesse consultório não há balança, vou com o Fernando na sala ao lado. Enquanto isso, você não quer ir até a recepção marcar o retorno?
   * sequence: 2

@Medico_
 ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 3

@Opcoes_
  * sequence: 3

@Pergunta_
  > Qual seu próximo passo?

@Opcao1_
  > Continuar no consultório ao lado

@Opcao2_
  > Desistir e falar com ambos

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> pai_concorda
@Opcao2-text_ -> seguir

# pai_concorda (exames)#

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Narrador_
   > O pai do paciente concorda. Você vai para o consultório ao lado pesar e medir Fernando. No momento, estão apenas vocês dois na sala.
   * sequence: 1

@Opcoes_
   * sequence: 2

@Pergunta_
   > O que você faz em seguida?

@Opcao1_
   >  Interrogar Fernando diretamente

@Opcao2_
   > Tentar puxar assunto

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Interrogar_Paciente
@Opcao2-text_ -> puxar_assunto

# Interrogar_Paciente (exames) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Fernando, me diz a verdade: tem algo acontecendo na escola que você não está querendo contar? Não precisa ter medo, é importante para eu poder te ajudar.
  * sequence: 1

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 2
@Narrador_
  > Fernando engole seco, parecendo cada vez mais tenso. Ele responde que não, que foi só um acidente mesmo, que apenas tropeçou e bateu o nariz.
  * sequence: 2

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Você não acha que está escondendo alguma coisa? Essas lesões não aparecem do nada.
  * sequence: 3
@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 4
@Narrador_
  > Fernando balança a cabeça, a voz ficando mais baixa e rápida. Fernando insiste que não, que não aconteceu nada, que está bem, de verdade.
  * sequence: 4

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando_2.png)
  > Se você não falar, não tem como eu saber como te ajudar direito.
  * sequence: 5
@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 6
@Narrador_
  > Fernando se mantém firme na negativa, pedindo para o médico parar, reforçando que não aconteceu nada.
  * sequence: 6

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Você não acha que está escondendo alguma coisa? Essas lesões não aparecem do nada.
  * sequence: 7
@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
  * sequence: 8
@Narrador_
  > O clima fica pesado, e você percebe que pressionar mais só vai fechar a comunicação.
  * sequence: 8

@Resumo
  > O paciente não se sentiu à vontade para compartilhar detalhes importantes sobre sua vida.
  * sequence: 9

@Resumo
  > Dessa forma, você não conseguiu investigar o caso de maneira completa e não obteve as informações necessárias para realizar encaminhamentos além do tratamento físico.
  * sequence: 10

@Resumo
  > Como resultado, aspectos essenciais do bem-estar emocional do paciente permaneceram sem cuidado.
  * sequence: 11

@Resultado
  > Final ruim.
  * sequence: 12

@Seta_dialogo_ (-) next_talk

# puxar_assunto (exames) #

@Fernando_
  ![Fernando Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)


@Medico_
  > Fernando, você comentou que essa é a terceira ou quarta vez que seu nariz sangra na escola.
  * sequence: 1

@Medico_
   > Seu pai disse que seu desempenho caiu e que você anda mais quieto em casa. Você acha que tudo isso pode estar ligado?
   * sequence: 2

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
   * sequence: 3

@Fernando_
  ![Fernando falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Não, não acho.
  * sequence: 3

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)
  * sequence: 4

@Medico_
 ![medico falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Na educação física, jogaram uma bola no seu rosto. Acha que foi de propósito?
  * sequence: 4

@Fernando_
  ![Fernando falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Acho que sim… Foi o Guilherme e uns colegas. Da outra vez também foi por causa deles.
  * sequence: 5

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)
  * sequence: 6

@Medico_
   > Entendo… E você sabe por que estão te perseguindo?
   * sequence: 6

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
   * sequence: 7

@Fernando_
 ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Eu sou.....
  * sequence: 7

@Fernando_
  > Gay
  * sequence: 8

@Fernando_
  > Minha família não sabe, mas me assumi na escola faz uns dois anos. Ai eles começaram a me bater.
  * sequence: 9

@Fernando_
  > Mas, por favor, não conta pra ninguém, doutor.
  * sequence: 10

@Seta_navega_aparece_
  * sequence: 10

@Seta_dialogo_ (-) next_talk
@Seta_navega_ -> Fernando_abre

# Fernando_abre (exames) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal.png)

@Medico_
  > Fernando, sinto muito pelo que você está passando e quero te ajudar..
  * sequence: 1

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
   > Nada do que conversamos precisa ser contado ao seu pai se você não quiser, mas ele pode te proteger, e eu estarei lá para te apoiar. 
   * sequence: 2

@Medico_
  > Sobre sua orientação sexual, não precisa contar se não quiser, podemos relatar o bullying sem mencionar isso.
  * sequence: 3

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)
   * sequence: 4

@Seta_navega_aparece_
  * sequence: 4

@Seta_dialogo_ (-) next_talk
@Seta_navega_ -> tratar_apenas

# tratar_apenas (consultorio) #

@Medico_
 ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Fernando_
  ![Fernando normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
 ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)

@Narrador_
 > Depois da conversa com Fernando, ele se sente confortável para contar ao pai, com sua ajuda, sobre a violência que vem sofrendo na escola.
 * sequence: 1

@Narrador_
 > O paciente decide não revelar nada sobre sua orientação sexual, mas você agora tem conhecimento desse conflito que ele enfrenta.
 * sequence: 2

@Opcoes_
 * sequence: 3

@Pergunta_
 > Na posição de médico, qual seria a sua conduta?

@Opcao1_
 > Focar apenas no atendimento físico imediato

@Opcao2_
 > Cuidar do ferimento e, ao mesmo tempo, investigar se há outros fatores emocionais envolvidos

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Tratar
@Opcao2-text_ -> Tratar_encaminhar

# Tratar_encaminhar (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal_2.png)

@Pai_
 ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_serio.png)

@Narrador_
  > Você decide cuidar não apenas do ferimento, mas também do bem-estar emocional de Fernando.
  * sequence: 1

@Narrador_
  > Receita um medicamento para aliviar a dor e reduzir o inchaço. 
  * sequence: 2

@Narrador_
  > Além disso, agenda um retorno e encaminha Fernando à psicóloga da unidade, para que ele possa receber apoio emocional e conversar sobre o que aconteceu.
  * sequence: 3
  
@Resultado_
  > Você estabeleceu um vínculo de confiança com Fernando, o que permitiu compreender a fundo o caso dele.
  * sequence: 4

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_feliz.png)
  * sequence: 5
@Pai_
 ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)
  * sequence: 5

@Resultado_
  > Ao final, Fernando e seu pai saíram gratos pela atenção e cuidado. 
  * sequence: 5

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/vazio.png)
  * sequence: 6

@Pai_
 ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/vazio.png)
  * sequence: 6

@Resultado_
  > Graças a sua abordagem multiprofissional, ele receberá um tratamento completo, físico e emocional, aumentando as chances de uma recuperação plena.
  * sequence: 6

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/vazio.png)
  * sequence: 7

@Resultado_
  > Fim de jogo :)
  * sequence: 7

@Seta_dialogo_ (-) next_talk









___ Template ___

* template: plain/case/empty
* theme: https://harena-incubator.github.io/harena-cases/idn/themes/bullying/

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
