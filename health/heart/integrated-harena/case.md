# Entrada #

Primeiro vamos fazer algumas perguntas para conhecer o seu perfil. Isso será importante para o jogo que você vai jogar.

* Próximo -> Kolb1

# Kolb1 #
> 1) Enquanto aprendo:
? kb1
  * type: choice
  * exclusive
  * options:
    * 'Gosto de lidar com meus sentimentos. '
    * 'Gosto de pensar sobre idéias. '
    * 'Gosto de estar fazendo coisas. '
    * 'Gosto de observar e escutar.'
* Próximo -> Kolb2 

# Kolb2 #
> 2) Aprendo melhor quando:
? kb2
  * type: choice
  * exclusive
  * options:
    * 'Ouço e observo com atenção. '
    * 'Me apoio em pensamento lógico. '
    * 'Confio em meus palpites e impressões. '
    * 'Trabalho com afinco para executar a tarefa. '
* Anterior -> Kolb1
* Próximo -> Kolb3

# Kolb3 #
> 3) Quando estou aprendendo:
? kb3
  * type: choice
  * exclusive
  * options:
    * 'Tendo a buscar as explicações para as coisas. '
    * 'Sou responsável acerca das coisas. '
    * 'Fico quieto e concentrado.'
    * 'Tenho sentimentos e reações fortes.'
* Anterior -> Kolb2
* Próximo -> Kolb4

# Kolb4 #
> 4) Aprendo:
? kb4
  * type: choice
  * exclusive
  * options:
    * 'Sentindo. '
    * 'Fazendo. '
    * 'Observando. '
    * 'Pensando. '
* Anterior -> Kolb3
* Próximo -> Kolb5

# Kolb5 #
> 5) Enquanto aprendo:
? kb5
  * type: choice
  * exclusive
  * options:
    * 'Me abro a novas experiências.'
    * 'Examino todos os ângulos da questão. '
    * 'Gosto de analisar as coisas, desdobrá-las em suas partes. '
    * 'Gosto de testar as coisas. '
* Anterior -> Kolb4
* Próximo -> Kolb6

# Kolb6 #
> 6)  Enquanto estou aprendendo:
? kb6
  * type: choice
  * exclusive
  * options:
    * 'Sou uma pessoa observadora.'
    * 'Sou uma pessoa ativa. '
    * 'Sou uma pessoa intuitiva. '
    * 'Sou uma pessoa lógica. '
* Anterior -> Kolb5
* Próximo -> Kolb7

# Kolb7 #
> 7) Aprendo melhor através de:
? kb7
  * type: choice
  * exclusive
  * options:
    * 'Observação. '
    * 'Interações pessoais. '
    * 'Teorias racionais. '
    * 'Oportunidades para experimentar e praticar. '
* Anterior -> Kolb6
* Próximo -> Kolb8

# Kolb8 #
> 8) Enquanto aprendo:
? kb8
  * type: choice
  * exclusive
  * options:
    * 'Gosto de ver os resultados de meu trabalho.'
    * 'Gosto de idéias e teorias.' 
    * 'Penso antes de agir. '
    * 'Sinto-me pessoalmente envolvido no assunto. '
* Anterior -> Kolb7
* Próximo -> Kolb9

# Kolb9 #
> 9) Aprendo melhor quando:
? kb9
  * type: choice
  * exclusive
  * options:
    * 'Me apoio em minhas observações. '
    * 'Me apoio em minhas impressões. ' 
    * 'Posso experimentar coisas por mim mesmo. '
    * 'Me apoio em minhas idéias. '
* Anterior -> Kolb8
* Próximo -> Kolb10

# Kolb10 #
> 10) Quando estou aprendendo:
? kb10
  * type: choice  
  * exclusive
  * options:
    * 'Sou uma pessoa compenetrada. '
    * 'Sou uma pessoa flexível. '
    * 'Sou uma pessoa responsável. '
    * 'Sou uma pessoa racional. '
* Anterior -> Kolb9
* Próximo -> Kolb11

# Kolb11 #
> 11) Enquanto aprendo:
? kb11
  * type: choice
  * exclusive
  * options:
    * 'Me envolvo todo. '
    * 'Gosto de observar. '
    * 'Avalio as coisas. '
    * 'Gosto de estar ativo. '
* Anterior -> Kolb10
* Próximo -> Kolb12

# Kolb12 #
> 12) Aprendo melhor quando:
? kb12
  * type: choice
  * exclusive
  * options:
    * 'Analiso as idéias. '
    * 'Sou receptivo e de mente aberta. '
    * 'Sou cuidadoso. '
    * 'Sou prático. '
* Anterior-> Kolb11
* Finalizar-> Teste1

# Testes #

Agora iremos iniciar um teste com 5 questões para avaliarmos seu conhecimento sobre a fisiologia do coração.

* Iniciar -> Teste1

# Teste1 #
> 1) Verdadeiro ou falso: a atividade mecânica do coração precede a sua atividade elétrica.
? ta1
  * type: choice
  * exclusive
  * options:
    * '	A) Verdadeiro'
    * 'B) Falso'
* Próximo -> Teste2

# Teste2 #
> 2) O impulso elétrico que se movimenta pelo coração pode ser visualizado por meio de eletrocardiografia, cujo produto final é um eletrocardiograma (ECG). Cada fase do ciclo cardíaco é refletida em forma de ondas, de complexos, de segmentos e de intervalos na tela de um monitor cardíaco ou no eletro. Sabemos que o impulso elétrico se inicia no Nó sinoatrial e percorre átrio e ventrículos. Assinale a alternativa CORRETA que representa no ECG a repolarização ventricular.
? ta2
  * type: choice
  * exclusive
  * options:
    * 'A) Trecho entre complexo QRS e fim da onda T.'
    * 'B) Trecho entre onda P e início do QRS.'
    * 'C) Onda T.'
    * 'D) Onda U.'
* Anterior -> Teste1
* Próximo -> Teste3

# Teste3 #
> 3) No eletrocardiograma, a onda P representa:
? ta3
  * type: choice
  * exclusive
  * options:
    * 'A) A repolarização dos átrios.'
    * 'B) A contração dos ventrículos.'
    * 'C) A repolarização dos ventrículos.'
    * 'D) A despolarização dos átrios.'
    * 'E) A despolarização dos ventrículos'
* Anterior -> Teste2
* Próximo -> Teste4

# Teste4 #
> 4) Qual das alternativas abaixo descreve corretamente o resultado da passagem do estímulo elétrico pelos átrios:
? ta4
  * type: choice
  * exclusive
  * options:
    * 'A) Onda P - Repolarização atrial.'
    * 'B) Onda P - Despolarização atrial.'
    * 'C) Onda T - Despolarização atrial.'
    * 'D) Intervalo PR - Repolarização atrial.'
    * 'E) Onda T- Repolarização atrial.'
* Anterior -> Teste3
* Próximo -> Teste5

# Teste5 #
> 5) A Monitorização cardíaca avalia a atividade elétrica do coração por meio de eletrodos fixados na pele. Por meio da monitorização é possível avaliar o ritmo cardíaco. Em relação ao complexo QRS, é correto afirmar que:
? ta5
  * type: choice
  * exclusive
  * options:
    * 'A) Mostra o impulso atrial desde os átrios até o nódulo AV.'
    * 'B) Representa o período refratário relativo à repolarização ou pico de recuperação ventricular.'
    * 'C) Representa a despolarização ao longo do septo e paredes ventriculares.'
    * 'D) Representa a repolarização do sistema His-Purkinje.'
* Anterior -> Teste4
* Finalizar -> Enunciado

# Enunciado #
![Robô](https://uploaddeimagens.com.br/images/004/645/077/full/enunciado.png?1698097943)
* Ajudar Robô -> Jogo

# Jogo #

~~~
  <div style="width:100%;height:100vh">
  <split-pane-oid proportion = 40% publish="resize~pane/resize">
    <div slot="side-a">
      <lively-talk-oid
        custom="robot"
        character="assets:images/robot.svg"
        publish="update~talk/robot"
        subscribe="action/robot~process">
      </lively-talk-oid>
      <button-oid label="Simular"
                  value="simular"
                  publish="click~action/robot">
      </button-oid>
      <button-oid label="Saiba mais"
                  value="saiba"
                  publish="click~action/robot">
      </button-oid>
      <dcc-input-typed variable="notes" rows="5">Anotações:</dcc-input-typed>
      <dcc-input
      <br>
      <br>
      <br>
      <br>
      <br>
      <button-oid label="-->Finalizar<--"
                  publish="click~flow/navigate/>">
      </button-oid>
    </div>
    <div slot="side-b">
      <blockly-oid custom="heart"
                   publish="update~action/robot"
                   subscribe="pane/resize~resize">
      </blockly-oid>
    </div>
  </split-pane-oid>
  </div>
~~~

# PostTestes #

Para finalizarmos iremos refazer o teste com 5 questões para avaliarmos seu conhecimento sobre a fisiologia do coração ápos montar o batimento cardíaco do Robô.

* Iniciar -> PosTeste1

# PosTeste1 #
> 1) Verdadeiro ou falso: a atividade mecânica do coração precede a sua atividade elétrica.
? tp1
  * type: choice
  * exclusive
  * options:
    * '	A) Verdadeiro'
    * 'B) Falso'
* Próximo -> PosTeste2

# PosTeste2 #
> 2) O impulso elétrico que se movimenta pelo coração pode ser visualizado por meio de eletrocardiografia, cujo produto final é um eletrocardiograma (ECG). Cada fase do ciclo cardíaco é refletida em forma de ondas, de complexos, de segmentos e de intervalos na tela de um monitor cardíaco ou no eletro. Sabemos que o impulso elétrico se inicia no Nó sinoatrial e percorre átrio e ventrículos. Assinale a alternativa CORRETA que representa no ECG a repolarização ventricular.
? tp2
  * type: choice
  * exclusive
  * options:
    * 'A) Trecho entre complexo QRS e fim da onda T.'
    * 'B) Trecho entre onda P e início do QRS.'
    * 'C) Onda T.'
    * 'D) Onda U.'
* Anterior -> PosTeste1
* Próximo -> PosTeste3

# PosTeste3 #
> 3) No eletrocardiograma, a onda P representa:
? tp3
  * type: choice
  * exclusive
  * options:
    * 'A) A repolarização dos átrios.'
    * 'B) A contração dos ventrículos.'
    * 'C) A repolarização dos ventrículos.'
    * 'D) A despolarização dos átrios.'
    * 'E) A despolarização dos ventrículos'
* Anterior -> PosTeste2
* Próximo -> PosTeste4

# PosTeste4 #
> 4) Qual das alternativas abaixo descreve corretamente o resultado da passagem do estímulo elétrico pelos átrios:
? tp4
  * type: choice
  * exclusive
  * options:
    * 'A) Onda P - Repolarização atrial.'
    * 'B) Onda P - Despolarização atrial.'
    * 'C) Onda T - Despolarização atrial.'
    * 'D) Intervalo PR - Repolarização atrial.'
    * 'E) Onda T- Repolarização atrial.'
* Anterior -> PosTeste3
* Próximo -> PosTeste5

# PosTeste5 #
> 5) A Monitorização cardíaca avalia a atividade elétrica do coração por meio de eletrodos fixados na pele. Por meio da monitorização é possível avaliar o ritmo cardíaco. Em relação ao complexo QRS, é correto afirmar que:
? tp5
  * type: choice
  * exclusive
  * options:
    * 'A) Mostra o impulso atrial desde os átrios até o nódulo AV.'
    * 'B) Representa o período refratário relativo à repolarização ou pico de recuperação ventricular.'
    * 'C) Representa a despolarização ao longo do septo e paredes ventriculares.'
    * 'D) Representa a repolarização do sistema His-Purkinje.'
* Anterior -> PosTeste4
* Finalizar -> Fim

# Fim (end)
![Fim](https://uploaddeimagens.com.br/images/004/645/119/full/fim.png?1698102176)

___ Template ___

* template: plain/case/empty
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
