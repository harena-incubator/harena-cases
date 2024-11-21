# Quiz 1 (quiz)

<h2>Antes de iniciarmos, quero saber o quanto você sabe sobre células e células mutantes.</h2>

* Ir para o Quiz -> Flow.Next

# Perguntas 1 (quiz)

> Quantas células existem na pele?
? q1
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Umas 100'
    * 'Milhões'
    * 'Não temos células na pele'

<br><br>

> Desde quando a gente nasce até quando ficamos adultos:
? q2
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'As células da pele são sempre as mesmas'
    * 'Vamos trocando de células à medida em que vivemos'
    * 'Paramos de fabricar células depois de adultos'

<br><br>

> As células da superfície da pele:
? q3
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'São todas vivas'
    * 'São todas mortas'
    * 'Não há células na superfície'

<br><br>

> Uma célula mutante é:
? q4
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Somente células do Wolverine'
    * 'Uma célula que têm poderes'
    * 'Uma célula que sofre uma modificação interna'

<br><br>

> O nosso organismo consegue curar-se de células mutantes?
? q5
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim, matando-as'
    * 'Não, não é possível curar-se'

<br><br>

> Células mutantes:
? q6
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Nunca se movem'
    * 'Sempre se movem'
    * 'Algumas podem se mover'

* Iniciar -> Flow.Next

# Scene 1 (detailed_cell) #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Progenitora de Células da Pele
        <dcc-space-cellular id="cellular-space" rows="8" cols="8" cell-width="32" cell-height="32" background-color="#ebeba2" grid>.1...11.
          ..1...1.
          ......1.
          1.......
          ..1.....
          1......1
          ......1.
          ..1....1</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair id="dcc32" label="mutant1" probability="5" transition="1.>12">***
          *_*
          ***</rule-dcc-cell-pair>
        <rule-dcc-cell-pair id="dcc33" label="mutant2" probability="3" transition="22>..">___
          _*_
          ___</rule-dcc-cell-pair>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou uma célula progenitora de células da pele (queratinócitos).​​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como eu gero queratinócitos"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next


# Scene 2 (detailed_cell) #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Queratinização
        <dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#ebeba2" grid>__44_____44_4__444__
44444444444444444444
44434444433434433344
33333333333333333333
33333333333333333333
22222222222222222222
22322222222222322322
12212122121212121212</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="_" label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair probability="50" transition="4_>_4" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="5" transition="44>4_" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="3_>_3" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="34>44" neighbors="___*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="3t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="2_>_2" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="22>23" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="24>44" neighbors="___*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="2t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="1_>12" neighbors="_*_*_*___"></rule-dcc-cell-pair>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou um queratinócito (célula da pele).​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como acontece a queratinização"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Scene 3 (detailed_cell) #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Progenitora de Melanócitos
        <dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#ebeba2" grid>__44_____44_4__444__
44434444433434433344
33333333333333333333
22322222222222322322
57212121275275212121
</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png"></dcc-cell-image>
        <dcc-cell-image type="7" label="mut-3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1.png"></dcc-cell-image>
        <dcc-cell-image type="5" label="mut-1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2.png"></dcc-cell-image>
        <dcc-cell-image type="6" label="mut-2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3.png"></dcc-cell-image>
        <dcc-cell-image type="8" label="mut-4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4.png"></dcc-cell-image>
        <rule-dcc-cell-pair probability="2" transition="4_>_4" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="4_>__" neighbors="_______*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="5" transition="44>4_" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="7_>75" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="5_>53" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="1_>12" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="3_>_3" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="34>44" neighbors="___*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="22>23" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="2_>_2" neighbors="_*_______"></rule-dcc-cell-pair>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou uma célula progenitora de melanócitos.​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como eu gero melanócitos"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Scene 4 (detailed_cell) #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Cancerígena
        <dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#ebeba2" grid>__44_____44_4__444__
44434444433434433344
33333333333333333333
22322222222222322322
57212121275275212121
</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png"></dcc-cell-image>
        <dcc-cell-image type="7" label="mut-3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1.png"></dcc-cell-image>
        <dcc-cell-image type="5" label="mut-1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2.png"></dcc-cell-image>
        <dcc-cell-image type="6" label="mut-2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3.png"></dcc-cell-image>
        <dcc-cell-image type="8" label="mut-4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4.png"></dcc-cell-image>
        <rule-dcc-cell-pair probability="2" transition="4_>_4" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="4_>__" neighbors="_______*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="5" transition="44>4_" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="7_>75" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="5_>53" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="1_>12" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="3_>_3" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="34>44" neighbors="___*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="20" transition="65>66" neighbors="_*_*_*_*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="6_>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="62>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="61>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="0.5" transition="55>66" neighbors="____*____"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="22>23" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="2_>_2" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="3t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="2t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Sou uma célula que sofreu mutações e se tornou cancerígena.​​​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como acontece"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Scene 5 (detailed_cell) #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Mutante
        <dcc-space-cellular id="cellular-space" cell-width="32" cell-height="32" background-color="#ebeba2" grid>__44_____44_4__444__
44434444433434433344
33333333333333333333
22322222222222322322
57212121275275212121
bbbbbbbbbbbbbbbbbbbb
yyyyyyyyyyyyyyyyyyyy
yypyyyyypyyypyyyyyyy
ypypyyypypypypyyyyyy
yypyyyyypyyypyyyyyyy
</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png"></dcc-cell-image>
        <dcc-cell-image type="7" label="mut-3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1.png"></dcc-cell-image>
        <dcc-cell-image type="5" label="mut-1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2.png"></dcc-cell-image>
        <dcc-cell-image type="6" label="mut-2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3.png"></dcc-cell-image>
        <dcc-cell-image type="8" label="mut-4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4.png"></dcc-cell-image>
        <dcc-cell-image type="p" label="purple" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-purple.svg"></dcc-cell-image>
        <dcc-cell-image type="y" label="yellow" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-yellow.svg"></dcc-cell-image>
        <dcc-cell-image type="b" label="brown" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-brown.svg"></dcc-cell-image>
        <rule-dcc-cell-pair probability="2" transition="4_>_4" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="4_>__" neighbors="_______*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="5" transition="44>4_" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="7_>75" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="5_>53" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="1_>12" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="3_>_3" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="34>44" neighbors="___*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="20" transition="65>66" neighbors="_*_*_*_*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="6_>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="62>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="61>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="1" transition="55>66" neighbors="____*____"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="22>23" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="50" transition="2_>_2" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="86>88" neighbors="****_*_*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="82>88" neighbors="_______*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="4" transition="81>88" neighbors="_______*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="0.5" transition="66>88" neighbors="____*____"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="3t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="100" transition="2t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="0.5" transition="8b>_8" neighbors="___*_*_*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="10" transition="8y>_8" neighbors="___*_*_*_"></rule-dcc-cell-pair>
        <rule-dcc-cell-pair probability="10" transition="8p>_8" neighbors="___*_*_*_"></rule-dcc-cell-pair>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou um estágio mais avançado da célula cancerígena, que tem capacidade de invadir outras partes do corpo​.​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja sou capaz de me deslocar ao mutar"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Mensagem Final (quiz,end) #
<h1>Parabéns, você concluiu a introdução!</h1>

___ Template ___

* template: compact/case/cell_editor_sliders
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
