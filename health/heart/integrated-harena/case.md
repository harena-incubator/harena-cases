# Entrada (pre) #

Iniciaremos com um teste com 5 questões para avaliarmos seu conhecimento sobre a fisiologia do coração.

* Iniciar -> Teste1

# Teste1 (pre) #
> 1) Verdadeiro ou falso: a atividade mecânica do coração precede a sua atividade elétrica.
? ta1
  * type: choice
  * exclusive
  * options:
    * '	A) Verdadeiro'
    * 'B) Falso'
* Próximo -> Teste2

# Teste2 (pre) #
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
{{
* Próximo -> Teste3
}}

# Teste3 (pre) #
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
{{
* Próximo -> Teste4
}}

# Teste4 (pre) #
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
{{
* Próximo -> Teste5
}}

# Teste5 (pre) #
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
{{
* Finalizar -> Videos
}}

# Videos (video) #

Nesta seção, você assistirá alguns vídeos ilustrando o funcionamento do coração.

* Iniciar -> Video1

# Video1 (video) #

<iframe width="560" height="315" src="https://www.youtube.com/embed/bP3DxzY_q8k?si=AE-vhf_-0CpbkxFa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

* Próximo -> Video2

# Video2 (video) #

<iframe width="560" height="315" src="https://www.youtube.com/embed/PIyfkR7RNa4?si=jJb1tVkNMJBDpTl3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

* Anterior -> Video1
{{
* Próximo -> Video3
}}

# Video3 (video) #

<iframe width="560" height="315" src="https://www.youtube.com/embed/svAZ6m1DEVA?si=oXL5KNcg0O1KfxzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

* Anterior -> Video2
{{
* Próximo -> Enunciado
}}

# Enunciado (atividade) #
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

# PostTestes (pos) #

Para finalizarmos iremos refazer o teste com 5 questões para avaliarmos seu conhecimento sobre a fisiologia do coração ápos montar o batimento cardíaco do Robô.

* Iniciar -> PosTeste1

# PosTeste1 (pos) #
> 1) Verdadeiro ou falso: a atividade mecânica do coração precede a sua atividade elétrica.
? tp1
  * type: choice
  * exclusive
  * options:
    * '	A) Verdadeiro'
    * 'B) Falso'
* Próximo -> PosTeste2

# PosTeste2 (pos) #
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
{{
* Próximo -> PosTeste3
}}

# PosTeste3 (pos) #
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
{{
* Próximo -> PosTeste4
}}

# PosTeste4 (pos) #
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
{{
* Próximo -> PosTeste5
}}

# PosTeste5 (pos) #
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
{{
* Finalizar -> Fim
}}

# Fim (conclusao,end) #
![Fim](https://uploaddeimagens.com.br/images/004/645/119/full/fim.png?1698102176)

___ Template ___

* template: sections/basic
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: sections(blue)