# Simulador (cell_mutant_sliders) #

~~~
<dcc-space-cellular-editor id="cellular-space" rows="28" cols="40"
  cell-width="20" cell-height="20" background-color="#dddddd" grid analysis>
</dcc-space-cellular-editor>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/icon/clock.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="timer_interval" min="1" max="1000" value="1000" index></dcc-slider>
   </div>
</div>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
           src="images/icon/zoom.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="space_scale" min="1" max="100" value="1" index></dcc-slider>
   </div>
</div>

<dcc-cell-image type="." label="vazio" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-gray.svg"></dcc-cell-image>
<dcc-cell-image type="1" label="cell1" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png"></dcc-cell-image>
<dcc-cell-image type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
<dcc-cell-image type="5" label="cell5" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png"></dcc-cell-image>
<dcc-cell-image type="y" label="yellow" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-yellow.svg"></dcc-cell-image>
<dcc-cell-image type="b" label="brown" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-brown.svg"></dcc-cell-image>

<rule-dcc-cell-pair id="c1-duplicates" label="duplicates" probability="0" transition="1_>11">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<subscribe-dcc target="c1-duplicates" topic="input/changed/c1duplicates" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c1-dies" label="dies" probability="0" transition="11>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c1-dies" topic="input/changed/c1dies" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c1-mutant" label="mutant" probability="0" transition="11>33">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c1-mutant" topic="input/changed/c1mutant" map="probability">
</subscribe-dcc>

<rule-dcc-cell-pair id="c3-duplicates" label="duplicates" probability="0" transition="3_>33">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<subscribe-dcc target="c3-duplicates" topic="input/changed/c3duplicates" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c3-dies" label="dies" probability="0" transition="33>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c3-dies" topic="input/changed/c3dies" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c3-mutant" label="mutant" probability="0" transition="33>55">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c3-mutant" topic="input/changed/c3mutant" map="probability">
</subscribe-dcc>

<rule-dcc-cell-pair id="c5-duplicates" label="duplicates" probability="0" transition="5_>55">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<subscribe-dcc target="c5-duplicates" topic="input/changed/c5duplicates" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c5-dies" label="dies" probability="0" transition="55>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c5-dies" topic="input/changed/c5dies" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c5-barrier" label="barrier" probability="0" transition="5b>55">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair id="c5-moves" label="moves" probability="0" transition="5y>y5">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<subscribe-dcc target="c5-barrier" topic="input/changed/c5moves" map="probability">
</subscribe-dcc>
<subscribe-dcc target="c5-moves" topic="input/changed/c5moves" map="probability">
</subscribe-dcc>

<dcc-timer cycles="100000" interval="1000" topic="state/next">
   <subscribe-dcc topic="timer/start" map="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" map="stop"></subscribe-dcc>
   <subscribe-dcc topic="input/changed/timer_interval" map="interval"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" map="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/reset" map="reset"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="input/changed/space_scale" map="scale"></subscribe-dcc>

~~~

# Final (quiz)

<h2>Antes de ir embora, quero saber o quanto você aprendeu sobre células e células mutantes.</h2>

* Ir para o Quiz -> Flow.Next

# Perguntas 2 (quiz)

> Uma célula é:
? q1
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Pedacinho fundamental de todos os seres vivos'
    * 'Um pedaço do Telefone celular'
    * 'Um componente somente dos vegetais'

<br><br>

> Quantas células existem na pele?
? q2
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Umas 100'
    * 'Milhões'
    * 'Não temos células na pele'

<br><br>

> Desde quando a gente nasce até quando ficamos adultos, a pele tem sempre as células?
? q3
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim, sempre as mesmas'
    * 'Vamos trocando de células à medida que vivemos'
    * 'Paramos de fabricar células depois de adultos'

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

* Encerrar -> Flow.Next

# Mensagem Final (quiz,end) #
<h1>Parabéns, você chegou ao final!</h1>

___ Data ___
* cell_types:
  * empty:
    * symbol: _
    * title: vazio
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-gray.svg
    * width: 25
    * height: 25
  * cell1:
    * symbol: 1
    * title: célula 1
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1.png
    * width: 25
    * height: 25
  * cell3:
    * symbol: 3
    * title: célula 3
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png
    * width: 25
    * height: 25
  * cell5:
    * symbol: 5
    * title: célula 5
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5.png
    * width: 25
    * height: 25
  * yellow:
    * symbol: y
    * title: yellow
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-yellow.svg
    * width: 25
    * height: 25
  * brown:
    * symbol: b
    * title: brown
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-brown.svg
    * width: 25
    * height: 25

* radio:
  * c1duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-double.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'médio-alto': 35
      * 'alto': 60
  * c1dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-dies.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'médio-alto': 35
      * 'alto': 60
  * c1mutant:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 0.5
      * 'médio': 2
      * 'alto': 5
  * c3duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-double.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'médio-alto': 35
      * 'alto': 60
  * c3dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-dies.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'médio-alto': 35
      * 'alto': 60
  * c3mutant:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 0.5
      * 'médio': 2
      * 'alto': 5
  * c5duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-double.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'médio-alto': 35
      * 'alto': 60
  * c5dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-dies.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'médio-alto': 35
      * 'alto': 60
  * c5moves:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-moves.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'baixo': 5
      * 'médio': 30
      * 'alto': 80
* script_mode: no-script-no-hide

___ Template ___

* template: compact/case/cell_editor_sliders

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
