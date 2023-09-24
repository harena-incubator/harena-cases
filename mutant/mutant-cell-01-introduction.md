# Scene 1 #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Mutante
        <dcc-space-cellular id="cellular-space" rows="8" cols="8" cell-width="32" cell-height="32" background-color="#ebeba2" grid>.1...11.
          ..1...1.
          ..1.1.1.
          11....1.
          ..111.1.
          111...11
          ..1...1.
          1.1..11.</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair id="dcc32" label="mutant1" probability="1" transition="1.>11">***
          *_*
          ***</rule-dcc-cell-pair>
        <subscribe-dcc target="sold-increment" topic="cell1/sold" map="update"></subscribe-dcc>
        <rule-dcc-cell-pair id="dcc33" label="mutant2" probability="1" transition="11>..">___
          _*_
          ___</rule-dcc-cell-pair>
        <subscribe-dcc target="sold-increment" topic="cell1/sold" map="update"></subscribe-dcc>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou uma célula saudável!​​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como eu me multiplico e morro"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next


# Scene 2 #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Mutante
        <dcc-space-cellular id="cellular-space" rows="8" cols="8" cell-width="32" cell-height="32" background-color="#ebeba2" grid>.1...11.
          ..1...1.
          ..1.1.1.
          11....1.
          ..111.1.
          111...11
          ..1...1.
          1.1..11.</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair id="dcc32" label="mutant1" probability="1" transition="11>22">___
          _*_
          ___</rule-dcc-cell-pair>
        <subscribe-dcc target="sold-increment" topic="cell1/sold" map="update"></subscribe-dcc>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou uma célula mutante, tenho uma chance pequena de me tornar cancerígena​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como acontece"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Scene 3 #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Mutante
        <dcc-space-cellular id="cellular-space" rows="8" cols="8" cell-width="32" cell-height="32" background-color="#ebeba2" grid>.1...12.
          ..2...1.
          ..1.1.2.
          12....1.
          ..122.1.
          111...11
          ..1...1.
          2.1..12.</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair id="dcc32" label="mutant1" probability="1" transition="22>33">___
          _*_
          ___</rule-dcc-cell-pair>
        <subscribe-dcc target="sold-increment" topic="cell1/sold" map="update"></subscribe-dcc>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou o segundo estágio de mutação e  tenho uma chance maior de me tornar uma célula cancerígena​​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como acontece"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Scene 4 #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Mutante
        <dcc-space-cellular id="cellular-space" rows="8" cols="8" cell-width="32" cell-height="32" background-color="#ebeba2" grid>.1...12.
          ..2...1.
          .31.1.2.
          32....1.
          ..123.1.
          111...11
          ..1...1.
          2.1..13.</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair id="dcc32" label="mutant1" probability="1" transition="33>44">___
          _*_
          ___</rule-dcc-cell-pair>
        <subscribe-dcc target="sold-increment" topic="cell1/sold" map="update"></subscribe-dcc>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou o terceiro estágio de mutação - me tornei uma célula cancerígena​​​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja como acontece"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

# Scene 5 #
~~~html
<div class="styt-pul-main">
  <div class="row">
    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
      <p>
        Célula Mutante
        <dcc-space-cellular id="cellular-space" rows="8" cols="8" cell-width="32" cell-height="32" background-color="#ebeba2" grid>.1...234
          ..2...1.
          .34.1.2.
          34....1.
          ..123.1.
          111...11
          ..1...1.
          2.1..134</dcc-space-cellular>
        <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
        <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
        <dcc-cell-image id="dcc24" type="." label="back" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="1" label="cell1" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png"></dcc-cell-image>
        <dcc-cell-image id="dcc28" type="2" label="cell2" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png"></dcc-cell-image>
        <dcc-cell-image id="dcc33" type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
        <dcc-cell-image id="dcc30" type="4" label="cell4" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png"></dcc-cell-image>
        <dcc-cell-image id="dcc26" type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
        <rule-dcc-cell-pair id="dcc32" label="mutant1" probability="1" transition="44>55">___
          _*_
          ___</rule-dcc-cell-pair>
        <rule-dcc-cell-pair id="dcc33" label="mutant2" probability="10" transition="5.>.5">***
          *_*
          ***</rule-dcc-cell-pair>
        <subscribe-dcc target="sold-increment" topic="cell1/sold" map="update"></subscribe-dcc>
      </p>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
      <dcc-lively-talk character="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png" subscribe="action/speech"></dcc-lively-talk>

      <dcc-button label="Quem é você?" topic="action/speech" message="Eu sou um estágio mais avançado da célula cancerígena, que tem capacidade de invadir outras partes do corpo​​">
      </dcc-button>

      <dcc-button id="start" topic="timer/start" label="Veja sou capaz de me deslocar ao mutar"></dcc-button>

      <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
      <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
    </div>
  </div>

</div>
~~~

* Próxima Página -> Flow.Next

___ Template ___

* template: plain/case/empty
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
