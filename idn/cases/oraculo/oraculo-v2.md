# Inicio (inicio) #

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
  > Infelizmente você foi atropelado por um caminhão e morreu...
  * sequence: 1

@Opcoes_
  * sequence: 2

@opcao2-next_ 
  * sequence: 2

@Pergunta_
  > Você fala:

@Opcao1_
  > Chega de conversa! Vamos para o isekai.

@Opcao2_
  > O que esta acontecendo?

@Proximo_ (-) next_talk
@Opcao1-text_ -> isekai
@Opcao2-text_ -> acontecendo

# isekai (inicio) #

@Deusa_
  ![Deusa brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
  > Apressadinho hein! Deveria fazer você reencarnar como uma galinha...
  * sequence: 1

@Deusa_
  > Ninguém iria saber se eu não seguir o script... 
  * sequence: 2

@Deusa_
  > Nah! Você vai reencarnar como um rei de uma realidade futuristica.
  * sequence: 3

@Deusa_
  > Onde você deve tomar as decisões mais sabias para o seu povo.
  * sequence: 4

@Deusa_
  > Mas se tomar as decisões erradas...
  * sequence: 5

@Prox_
  * sequence: 6

@Deusa_
  > Bora reencarnar!
  * sequence: 6

@Prox-next_-> reencarnar
@Proximo_ (-) next_talk

# acontecendo (inicio) #

@Deusa_
  ![Deusa Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
  > Você tá mortinho! Nunca viu anime, não?
  * sequence: 1

@Deusa_
  > Mas como eu gostei de você, eu vou te reencarnar como um rei. 
  * sequence: 2

@Deusa_
  > Onde você deve tomar as melhores decisões para o seu povo.
  * sequence: 3

@Prox_
  * sequence: 4

@Deusa_
  > Bora reencarnar!
  * sequence: 4

@Prox-next_-> reencarnar
@Proximo_ (-) next_talk

# reencarnar (quarto) #

@Servo_
  ![Servo Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo.png)
  > Alteza, seus súditos te esperam no salão real...

@Proximo_ -> quarto0

# quarto0 (quarto2) #

@Porta_ -> corredor
@Janela_ -> musica

# musica (inicio) #
@Bardo_
  ![Bardo Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/bardo.png)
  > Nasci sem nome, sem brilho, sem chama,
  * sequence: 1

@Bardo_
> A sombra me chama, a luz me despreza,
  * sequence: 2

@Bardo_
> A névoa é maldita! Não toque!
  * sequence: 3

@Bardo_
> Mas ouço os ventos que os sábios não ouvem.
  * sequence: 4

@Opcoes_
  * sequence: 5

@Pergunta_
  > Você fala:

@Opcao1_
  > Porque essa música é tão triste...

@Proximo_ (-) next_talk
@Opcao1-text_-> triste


# triste (quarto) #
@Servo_
  ![Servo Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo.png)
  > É apenas um bardo cantado lá fora, meu senhor, não se preocupe.
  * sequence: 1

@Opcoes_
  * sequence: 2

@Pergunta_
  > Você fala:

@Opcao1_
  > Mas porque sua voz é tão triste?

@Proximo_ (-) next_talk
@Opcao1-text_ -> voz

# voz (quarto) #
@Servo_
  ![Servo medo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo-medo.png)
 > Alteza, muitos de seus súditos são perseguidos por nascerem com magia das sombras...
  * sequence: 1

@Prox_
  * sequence: 2

@Servo_
 > O diretor de Arcadia espera vossa majestade no salão real.
  * sequence: 2

@Prox-next_-> quarto0
@Proximo_ (-) next_talk

# corredor (corredor) #
@Porta1_ -> quarto0
@Porta2_ -> gabinete
@Porta3_ -> salao

# gabinete (gabinete) #
@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > Majestade trago nóticias importantes da fronteira do sul!
  * sequence: 1

@General_
  ![General Bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  > Ao anoitecer, estandartes do Reino do Sul foram vistos avançando em formação na direção da fronteira.
  * sequence: 2

@General_
  > O Reino do Sul está testando nossas defesas!
  * sequence: 2

@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > O Reino do Sul está avançando na direção da nossa fronteira.
  * sequence: 3

@General_
  ![General Bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  >  Precisamos fortalecer as fortalezas da fronteira, com tropas e suprimentos.
  * sequence: 4

@Opcoes_
  * sequence: 5

@Pergunta_
  > Você decide:

@Opcao1_
  > Fortalecer as fronteiras e ir para o salão.

@Proximo_ (-) next_talk
@Opcao1-text_ -> salao

# salao (salao) #
@Diretor_
  ![Diretor Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > Majestade, meu nome é Ryze e sou diretor da escola de magia Arcadia.
  * sequence: 1

@Diretor_
  ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  > Venho lhe pedir autorização para a criação de um Oráculo.
  * sequence: 2

@Diretor_
  ![Diretor Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > Ele irá selecionar os melhores alunos que terão o privilégio de estudar em Arcadia.
  * sequence: 3

@Diretor_
  >  O oráculo aprende ouvindo o que esta a sua volta, absorvendo informações...
  * sequence: 4

@Diretor_
  ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  > Os Arquimagos de Silício irão criar essa mente artificial.
  * sequence: 5

@Diretor_
  >  Conjurando bibliotecas com pergaminhos antigos, livros sagrados, canções, profecias, cartas de amor e tratados de guerra. 
  * sequence: 6

@Diretor_
  >  Cada palavra será gravada em cristais de dados, e esses cristais serão fundidos na essência do Oráculo.
  * sequence: 7

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > Como o oráculo funciona?
  * sequence: 8

@Diretor_
  ![Diretor ](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > Ele aprende com padrões.
  * sequence: 9

@Diretor_
  >  Ao absorver um conto de heróis, ele nota que “espada” vem depois de “guerreiro” e que espada e guerreiro tem uma conexão. 
  * sequence: 10

@Diretor_
 ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  >  E a cada novo texto, o Oráculo ajusta seus nós de pensamento.
  * sequence: 11

@Diretor_
  >  Com o tempo, o Oráculo será capaz de prever palavras e construir respostas a partir de milhões de vozes.
  * sequence: 12

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira-falando.png)
  > E porque você precisa de uma ferramenta tão poderosa?
  * sequence: 13

@Diretor_
 ![Diretor bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-bravo.png)
  >  Nossas provas são extremamente longas e elaboradas, e isso tem gerado enorme custo financeiro e até mesmo algumas mortes...
  * sequence: 14

@Opcoes_
  * sequence: 15

@opcao2-next_ 
  * sequence: 15

@opcao3-next_ 
  * sequence: 15

@Pergunta_
  > A assembleia real deseja falar. Quem você quer ouvir:

@Opcao1_
  > Conselheira

@Opcao2_
  > General

@Opcao3_
  > Tesoureiro

@Proximo_ (-) next_talk
@Opcao1-text_ -> conse
@Opcao2-text_ -> general
@Opcao3-text_ -> tesoureiro

# tesoureiro (salao) #

@Tesoureiro_
  ![Tesoureiro Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro.png)
  > Vossa majestade tem 1000 moedas de ouro no cofre real.
   * sequence: 1

@Tesoureiro_
  ![Tesoureiro nervoso](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro-nervoso.png)
  > A criação do oráculo exige um investimento inicial de pelo menos 400 moedas de ouro!
   * sequence: 2

@Opcoes_
  * sequence: 3

@opcao2-next_ 
  * sequence: 3

@opcao3-next_ 
  * sequence: 3

@Pergunta_
  > Você quer:

@Opcao1_
  > Investir no oráculo.

@Opcao2_
  > Falar com general.

@Opcao3_
  > Falar com conselheira.

@Proximo_ (-) next_talk
@Opcao1-text_ -> criar
@Opcao2-text_ -> general
@Opcao3-text_ -> conse

# general (salao) #
@General_
  ![General bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  > O reino do sul vem se fortificando cada vez mais através da magia! 
  * sequence: 1

@General_
  > Sugiro que façamos o mesmo! 
  * sequence: 2

@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > Investir no oráculo irá trazer novos magos muito mais poderosos! 
  * sequence: 3

@General_
  > Devemos sempre estar preparados!
  * sequence: 4

@Opcoes_
  * sequence: 5

@opcao2-next_ 
  * sequence: 5

@opcao3-next_ 
  * sequence: 5

@Pergunta_
  > Você quer:

@Opcao1_
  > Investir no oráculo.

@Opcao2_
  > Falar com tesoureiro.

@Opcao3_
  > Falar com conselheira.

@Proximo_ (-) next_talk
@Opcao1-text_ -> criar
@Opcao2-text_ -> tesoureiro
@Opcao3-text_ -> conse

# conse (salao) #
@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > Talvez vossa majestade devesse se preocupar com outros problemas...
  * sequence: 1

@Conselheira_
  ![Conselheira Nervosa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira-falando.png)
  > Majestade, o Oráculo apesar de eficiente, pode conter preconceitos enraizados.
  * sequence: 2

@Conselheira_
  > Temo que a discriminação contra magos das sombras seja apenas perpetuada!
  * sequence: 3

@Diretor_
 ![Diretor bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-bravo.png)
  >  Mas majestade nós precisamos de ajuda na seleção dos alunos!
  * sequence: 4

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > Eu tenho uma ideia!
  * sequence: 5

@Conselheira_
  > Uma pré-seleção mágica padronizada e segura, com avaliadores treinados de diversas ordens.
  * sequence: 6

@Conselheira_
  > Uma pré-seleção mágica padronizada e segura, com avaliadores treinados de diversas ordens.
  * sequence: 7

@Diretor_
  >  Isso seria impossível!
  * sequence: 8

@Diretor_
 ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  >  A magia não pode ser avaliada por uma prova padronizada!
  * sequence: 9

@Diretor_
  > Cada magia é diferente, podendo não revelar o verdadeiro potencial de cada aluno! 
  * sequence: 10

@Diretor_
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  >  O Oráculo é a única forma de sustentar Arcadia no futuro!
  * sequence: 11

@Opcoes_
  * sequence: 12

@opcao2-next_ 
  * sequence: 12

@opcao3-next_ 
  * sequence: 12

@Pergunta_
  > Você quer:

@Opcao1_
  > Investir no oráculo.

@Opcao2_
  > Falar com general.

@Opcao3_
  > Falar com tesoureiro.

@Proximo_ (-) next_talk
@Opcao1-text_ -> criar
@Opcao2-text_ -> general
@Opcao3-text_ -> tesoureiro

# criar (quarto) #

@Servo_
  ![Servo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo.png)
  > Majestade, seus súditos estão reunidos no portão do castelo...
  * sequence: 1

@Servo_
 ![Servo Medo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo-medo.png)
  > Com a notícia da criação do Oráculo, muitos tem ficado receosos com esse novo artefato...
  * sequence: 2

@Servo_
  > Muitos estão dizendo que o oráculo não será justo em suas decisões...
  * sequence: 3

@Opcoes_
  * sequence: 4

@Pergunta_
  > Parece que você não tem outra opção...

@Opcao1_
  > Convocar Assembleia Real para falar do Oráculo.

@Proximo_ (-) next_talk
@Opcao1-text_ -> convocar

# convocar (salao) #

@General_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)

@Bobo_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/bobo.png)

@tesoureiro_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro.png)

@Conselheira_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)

@Opcoes_
  * sequence: 1

@opcao2-next_ 
  * sequence: 1

@opcao3-next_ 
  * sequence: 1

@opcao4-next_ 
  * sequence: 1

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com conselheira.

@Opcao2_
  > Falar com general.

@Opcao3_
  > Falar com tesoureiro.

@Opcao4_
  > Falar com bobo.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> general2
@Opcao3-text_ -> tesoureiro2
@Opcao4-text_ -> bobo

# tesoureiro2 (salao) #

@Tesoureiro_
  ![Tesoureiro Nervoso](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro-nervoso.png)
  > Majestade, é meu dever lembrar que os cofres reais não são inesgotáveis.
   * sequence: 1

@Tesoureiro_
  ![Tesoureiro Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro.png)
  > Acredito que devemos convidar os arquimagos, criadores do Oráculo...
   * sequence: 2

@Tesoureiro_
  > Para que eles expliquem mais sobre o processo.
   * sequence: 3

@Opcoes_
  * sequence: 4

@opcao2-next_ 
  * sequence: 4

@opcao3-next_ 
  * sequence: 4

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com conselheira.

@Opcao2_
  > Falar com general.

@Opcao3_
  > Falar com arquimago.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> general2
@Opcao3-text_ -> arquimago

# arquimago (salao) #

@Arquimago_
  ![Arquimago](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > Saudações, Majestade! Sou Singed, Arquimago e desevolvedor do Oráculo.
   * sequence: 1

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > O Oráculo pode refletir as imperfeições de quem o ensinou...
   * sequence: 2

@Arquimago_
  ![Arquimago Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > Se as informações usadas para treiná-lo contêm injustiças...
   * sequence: 3

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > O Oráculo replicará essas distorções!
   * sequence: 4

@Arquimago_
  ![Arquimago Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > Mas para que isso não aconteça...
   * sequence: 5

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  >  Os ensinamentos fornecidos ao Oráculo devem vir de fontes diversas.
   * sequence: 6

@Arquimago_
  ![Arquimago Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > O equilíbrio nas memórias é o primeiro passo para justiça.
   * sequence: 7

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > Posso sugerir algumas opções para que o oráculo seja mais justo...
   * sequence: 8

@Arquimago_
  > Por exemplo, buscar mais fontes de informação.
   * sequence: 9

@Opcoes_
  * sequence: 10

@opcao2-next_
  * sequence: 10

@opcao3-next_
  * sequence: 10

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com conselheira.

@Opcao2_
  > Falar com general.

@Opcao3_
  > Buscar mais informação.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> general2
@Opcao3-text_ -> info

# info (inicio,end) #

@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > Você aqui de novo?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Vamos ver o que aconteceu...
   * sequence: 2

@Deusa_
   > Os Arquimagos colheram saberes distantes para alimentar o Oráculo.
   * sequence: 3

@Deusa_
  > Quando os dados retornaram, o Oráculo começou a tomar decisões justas.
   * sequence: 4

@Deusa_
  > Até aqui tudo certo...
   * sequence: 5

@Deusa_
  > Mas você esqueceu daqueles que perderam seus empregos por causa do Oráculo.
   * sequence: 6

@Deusa_
  > E foi assassinado...
   * sequence: 7

@Deusa_
  > Você foi bem até aqui!
   * sequence: 8

@Deusa_
  > Mas o que você poderia ter feito de diferente?
   * sequence: 9

@Proximo_ (-) next_talk

# general2 (salao) #
@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > Majestade, por que não convocar uma audiência com os professores de Arcadia.
  * sequence: 1

@General_
  > Eles estão sendo diretamente afetados pela criação do Oráculo.
  * sequence: 2

@General_
  > Acredito que seus medos estejam se espalhando para o povo.
  * sequence: 3

@Opcoes_
  * sequence: 4

@opcao2-next_ 
  * sequence: 4

@opcao3-next_
  * sequence: 4

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com conselheira.

@Opcao2_
  > Falar com tesoureiro.

@Opcao3_
  > Falar com os professores.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> professor

# professor (salao) #
@Professor_
  ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor.png)
   > Majestade, sou Zilean, mestre das artes arcanas em Arcádia.
   * sequence: 1

@Professor_
  ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > Não quero desafiar a criação do Oráculo.
   * sequence: 2

@Professor_
   > Mas para expressar uma inquietação que compartilho com muitos colegas.
   * sequence: 3

@Professor_
  ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor.png)
   > A magia é mais do que fórmulas e padrões, nem sempre pode ser previstas.
   * sequence: 4

@Professor_
   ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > Proponho, que as decisões tomadas pelo Oráculo sejam examinadas por um conselho de humanos.
   * sequence: 5

@Opcoes_
  * sequence: 6

@opcao2-next_
  * sequence: 6

@opcao3-next_
  * sequence: 6

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com conselheira.

@Opcao2_
  > Falar com tesoureiro.

@Opcao3_
  > Aceitar proposta do professor.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> fim

# fim (inicio,end) #
@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > Você aqui de novo?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Vamos ver o que aconteceu...
   * sequence: 2

@Deusa_
   > Os humanos reavaliavam a decisão do Oráculo...
   * sequence: 3

@Deusa_
  > Até aqui tudo certo...
   * sequence: 4

@Deusa_
  > Mas você se esqueceu dos magos das sombras marginalizados...
   * sequence: 5

@Deusa_
  > E foi assassinado...
   * sequence: 6

@Deusa_
  > Você foi bem!
   * sequence: 7

@Deusa_
  > Mas o que você poderia ter feito de diferente?
   * sequence: 8

@Proximo_ (-) next_talk

# conselheira2 (salao) #

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > Vossa alteza, sugiro uma reflexão sobre os Arquimagos do Círculo.
  * sequence: 1

@Conselheira_
  ![Conselheira Nervosa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira-falando.png)
  >  Se apenas eles moldarem o Oráculo, ele herdará seus preconceitos...
  * sequence: 2

@Conselheira_
  >  E sua crença de que magos das sombras são cruéis.
  * sequence: 3

@Conselheira_
  ![Conselheira](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  >  Sugiro convidar magos das sombras para que eles tragam suas preocupações!
  * sequence: 4

@Opcoes_
  * sequence: 5

@opcao2-next_
  * sequence: 5

@opcao3-next_
  * sequence: 5

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com general.

@Opcao2_
  > Falar com tesoureiro.

@Opcao3_
  > Falar com maga das sombras.

@Proximo_ (-) next_talk
@Opcao1-text_ -> general2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> maga

# maga (salao) #

@Maga_
  ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > Majestade, me chamo Morgana, a maga mais poderosa das sombras.
   * sequence: 1

@Maga_
   > Por eras, os magos das sombras fomos temidos e acusados de crimes que não cometemos.
   * sequence: 2

@Maga_
   >  Mas as sombras não são más…
   * sequence: 3

@Maga_
  ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   >  São apenas partes do mundo!
   * sequence: 4

@Maga_
  ![Maga Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-brava.png)
   >  Arcadia tem barrado magos das sombras...
   * sequence: 5

@Maga_
   > Não por falta de talento, mas por temor.
   * sequence: 6

@Maga_
   > O Oráculo, vai apenas refletir esse preconceito.
   * sequence: 7

@Maga_
 ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > Por isso peço que magos das sombras possam participar da sua criação!
   * sequence: 8

@Maga_
 ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   > Assim impedindo que qualquer injutiça se propague.
   * sequence: 9

@Opcoes_
  * sequence: 10

@opcao2-next_
  * sequence: 10

@opcao3-next_
  * sequence: 10

@Pergunta_
  > Você quer:

@Opcao1_
  > Falar com general.

@Opcao2_
  > Falar com tesoureiro.

@Opcao3_
  > Aceitar proposta da maga.

@Proximo_ (-) next_talk
@Opcao1-text_ -> general2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> fim2

# fim2 (inicio,end) #

@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > Você aqui de novo?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Vamos ver o que aconteceu...
   * sequence: 2

@Deusa_
   > Os magos das sombras finalmente estão se integrando no meio acadêmico...
   * sequence: 3

@Deusa_
  > Até aqui tudo certo...
   * sequence: 4

@Deusa_
  > Mas você esqueceu daqueles que perderam seus empregos por causa do Oráculo.
   * sequence: 5

@Deusa_
  > E foi assassinado...
   * sequence: 6

@Deusa_
  > Você fez boas escolhas!
   * sequence: 7

@Deusa_
  > Mas o que você poderia ter feito de diferente?
   * sequence: 8

@Proximo_ (-) next_talk

# bobo (salao) #
@Bobo_
  ![Bobo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/bobo-inteiro.png)
   > Majestade, eu tenho uma ideia genial!
   * sequence: 1

@Bobo_
   > Por que não fazemos um grande festival!
   * sequence: 2

@Bobo_
   > Poderiamos convidar vários magos inclusive os das sombras, e também nobres e plebeus de diversas regiões!
   * sequence: 3

@Bobo_
   > Com muita bebida, comida, música e claro PALHAÇOS!
   * sequence: 4

@Bobo_
   > Essa festa será apenas um pretesto para conhcer seus súditos e entender a sua preocupações!
   * sequence: 5

@Opcoes_
  * sequence: 6

@opcao2-next_ 
  * sequence: 6

@opcao3-next_ 
  * sequence: 6

@opcao4-next_ 
  * sequence: 6

@Pergunta_
  > Você quer:

@Opcao1_
  > Prender o bobo e falar com general.

@Opcao2_
  > Prender o bobo e falar com tesoureiro.

@Opcao3_
  > Prender o bobo e falar com a conselheira.

@Opcao4_
  > Dar a festa.

@Proximo_ (-) next_talk
@Opcao1-text_ -> general2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> conselheira2
@Opcao4-text_ -> festa

#festa (salao) #

@Professor_
   ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > Majestade, sou o Professor Zilean, mestre das artes arcanas em Arcadia.
   * sequence: 1

@Professor_
   ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor.png)
   > Em todos essas decadas aperfeiçoei meu dom!
   * sequence: 2

@Professor_
   ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-nervoso.png)
   > E agora dizem que um oráculo pode me subistituir?
   * sequence: 3

@Professor_
   ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-nervoso.png)
   > Você está sendo muito injusto com aqueles que detem o conhecimento!
   * sequence: 4

@Professor_
   ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > Eu proponho que as decisões tomadas pelo Oráculo sejam examinadas por um conselho de humanos.
   * sequence: 5

@Maga_
  ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > Majestade, me chamo Morgana, a maga mais poderosa das sombras.
   * sequence: 6

@Maga_
   > Por eras, os magos das sombras fomos temidos e acusados de crimes que não cometemos.
   * sequence: 7

@Maga_
   >  Mas as sombras não são más…
   * sequence: 8

@Maga_
  ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   >  São apenas partes do mundo!
   * sequence: 9

@Maga_
  ![Maga Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-brava.png)
   >  Arcadia tem barrado magos das sombras...
   * sequence: 10

@Maga_
   > Não por falta de talento, mas por temor.
   * sequence: 11

@Maga_
   > O Oráculo, vai apenas refletir esse preconceito.
   * sequence: 12

@Maga_ 
 ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > Por isso peço que magos das sombras possam participar desse conselho!
   * sequence: 13

@Maga_
 ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   > Assim impedindo que qualquer injutiça se propague.
   * sequence: 14

@Opcoes_
  * sequence: 15

@Pergunta_
  > Você quer:

@Opcao1_
  > Criar um conselho.

@Proximo_ (-) next_talk
@Opcao1-text_ -> fim3

# fim3 (inicio,end) #

@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > Você aqui de novo?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Vamos ver o que aconteceu...
   * sequence: 2

@Deusa_
   > Você criou um conselho que revise a decisão do Oráculo com diferentes tipos de magos.
   * sequence: 3

@Deusa_
  > Sua escolha foi perfeita!
   * sequence: 4

@Deusa_
  > Mas você esqueceu de uma regra básica...
   * sequence: 5

@Deusa_
  > Não confie em PALHAÇOS!
   * sequence: 6

@Deusa_
  > E foi assassinado...
   * sequence: 7

@Deusa_
  > Não fique triste! Todo mundo morre um dia!
   * sequence: 8

@Proximo_ (-) next_talk

___ Template ___

* template: plain/case/empty
* theme: https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
