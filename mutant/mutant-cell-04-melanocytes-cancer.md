# Simulador (cell_mutant_sliders) #

~~~html
<dcc-space-cellular-editor id="cellular-space" cell-width="40" cell-height="40" background-color="#dddddd" cover-image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/photo/epidermis-dermis-zoom-crop.jpg" cover-opacity="100" grid analysis>__44_____44_4__444__
44434444433434433344
33333333333333333333
22322222222222322322
57212121275275212121
bbbbbbbbbbbbbbbbbbbb
yyyyyyyyyyyyyyyyyyyy
yypyyyyypyyypyyyyyyy
ypypyyypypypypyyyyyy
yypyyyyypyyypyyyyyyy
</dcc-space-cellular-editor>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
 <div style="flex:20%; max-width:96px; max-height:48px">
    <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
         src="images/icon/clock.svg">
 </div>
 <div style="flex:50%; max-height:48px; margin-right:10px; padding-top: 15px">
   <dcc-input-choice variable="timer_interval" reveal="horizontal" exclusive>
    <dcc-input-option value="1000" checked>1</dcc-input-option>
    <dcc-input-option value="500">2</dcc-input-option>
    <dcc-input-option value="200">3</dcc-input-option>
    <dcc-input-option value="100">4</dcc-input-option>
    <dcc-input-option value="1">5</dcc-input-option>
   </dcc-input-choice>
 </div>
</div>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
 <div style="flex:20%; max-width:96px; max-height:48px">
    <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
         src="images/icon/zoom.svg">
 </div>
 <div style="flex:50%; max-height:48px; margin-right:10px; padding-top: 15px">
   <dcc-input-choice variable="space_scale" reveal="horizontal" exclusive>
    <dcc-input-option checked>1</dcc-input-option>
    <dcc-input-option>2</dcc-input-option>
    <dcc-input-option>3</dcc-input-option>
   </dcc-input-choice>
 </div>
</div>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
 <div style="flex:20%; max-width:96px; max-height:48px">
    <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
         src="images/icon/opacity.svg">
 </div>
 <div style="flex:50%; max-height:48px; margin-right:10px; padding-top: 15px">
   <dcc-input-choice variable="cover_opacity" reveal="horizontal" exclusive>
    <dcc-input-option value="100" checked>1</dcc-input-option>
    <dcc-input-option value="75">2</dcc-input-option>
    <dcc-input-option value="50">3</dcc-input-option>
    <dcc-input-option value="25">4</dcc-input-option>
    <dcc-input-option value="0">5</dcc-input-option>
   </dcc-input-choice>
 </div>
</div>

<dcc-cell-image type="1" label="stage-1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png"></dcc-cell-image>
<dcc-cell-image type="2" label="stage-2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png"></dcc-cell-image>
<dcc-cell-image type="3" label="stage-3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png"></dcc-cell-image>
<dcc-cell-image type="4" label="stage-4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png"></dcc-cell-image>
<dcc-cell-image type="7" label="mut-3" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1.png"></dcc-cell-image>
<dcc-cell-image type="5" label="mut-1" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2.png"></dcc-cell-image>
<dcc-cell-image type="6" label="mut-2" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3.png"></dcc-cell-image>
<dcc-cell-image type="8" label="mut-4" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4.png"></dcc-cell-image>
<dcc-cell-image type="p" label="purple" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-purple.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tile" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-transparent.svg"></dcc-cell-image>
<dcc-cell-image type="y" label="yellow" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-yellow.svg"></dcc-cell-image>
<dcc-cell-image type="b" label="brown" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-brown.svg"></dcc-cell-image>
<dcc-cell-image type="r" label="red" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-red.svg"></dcc-cell-image>
<dcc-cell-image type="z" label="gray-darker" image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-gray-darker.svg"></dcc-cell-image>

<rule-dcc-cell-pair probability="2" transition="4_>_4" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="4_>__" neighbors="_______*_"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="5" transition="44>4_" neighbors="_*_______"></rule-dcc-cell-pair>

<rule-dcc-cell-pair id="c1-duplicates" probability="0" transition="7_>75" neighbors="_*_*_*___"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-duplicates" topic="input/changed/c1duplicates" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair id="c1-dies" probability="0" transition="55>__" neighbors="____*____"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-dies" topic="input/changed/c1dies" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair probability="50" transition="5_>53" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="1_>12" neighbors="_*_*_*___"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="3_>_3" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="34>44" neighbors="___*_*___"></rule-dcc-cell-pair>

<rule-dcc-cell-pair id="c1-mutant" probability="0" transition="55>66" neighbors="____*____"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-mutant" topic="input/changed/c1mutant" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair id="c2-duplicates-a" probability="0" transition="65>66" neighbors="_*_*_*_*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-duplicates-a" topic="input/changed/c2duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c2-duplicates-b" probability="0" transition="6_>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-duplicates-b" topic="input/changed/c2duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c2-duplicates-c" probability="0" transition="62>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-duplicates-c" topic="input/changed/c2duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c2-duplicates-d" probability="0" transition="61>66" neighbors="_*_*_*___"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-duplicates-d" topic="input/changed/c2duplicates" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair id="c2-dies" probability="0" transition="66>__" neighbors="____*____"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-dies" topic="input/changed/c2dies" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair probability="50" transition="22>23" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="2_>_2" neighbors="_*_______"></rule-dcc-cell-pair>

<rule-dcc-cell-pair id="c2-mutant" probability="0" transition="66>88" neighbors="____*____"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-mutant" topic="input/changed/c2mutant" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair id="c3-duplicates-a" probability="0" transition="86>88" neighbors="****_*_*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-duplicates-a" topic="input/changed/c3duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c3-duplicates-b" probability="0" transition="82>88" neighbors="_______*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-duplicates-b" topic="input/changed/c3duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c3-duplicates-c" probability="0" transition="81>88" neighbors="_______*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-duplicates-c" topic="input/changed/c3duplicates" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair id="c3-dies" probability="0" transition="88>__" neighbors="____*____"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-dies" topic="input/changed/c3dies" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair probability="100" transition="3t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="100" transition="2t>4t" neighbors="_*_______"></rule-dcc-cell-pair>

<rule-dcc-cell-pair id="c3-moves-a" probability="0" transition="8b>b8" neighbors="___*_*_*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-moves-a" topic="input/changed/c3moves" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c3-moves-b" probability="0" transition="8y>y8" neighbors="___*_*_*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-moves-b" topic="input/changed/c3moves" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c3-moves-c" probability="0" transition="8p>y8" neighbors="___*_*_*_"></rule-dcc-cell-pair>
<subscribe-dcc target="c3-moves-c" topic="input/changed/c3moves" map="probability"></subscribe-dcc>

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
<subscribe-dcc target="cellular-space" topic="input/changed/cover_opacity" map="cover-opacity"></subscribe-dcc>

~~~

# Perguntas 2 (quiz)

<h2>Antes de ir embora, quero saber o quanto você aprendeu sobre células e células mutantes.</h2>

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

* Encerrar -> Flow.Next

# Mensagem Final (quiz,end) #
<h1>Parabéns, você chegou ao final!</h1>

___ Data ___
* cell_types:
  * empty:
    * symbol: _
    * title: empty
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-yellow-green.svg
    * width: 25
    * height: 25
  * stage-1:
    * symbol: 1
    * title: stage-1
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4.png
    * width: 25
    * height: 25
  * stage-2:
    * symbol: 2
    * title: stage-2
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3.png
    * width: 25
    * height: 25
  * stage-3:
    * symbol: 3
    * title: stage-3
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2.png
    * width: 25
    * height: 25
  * stage-4:
    * symbol: 4
    * title: stage-4
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-6.png
    * width: 25
    * height: 25
  * mut-3:
    * symbol: 7
    * title: mut-3
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1.png
    * width: 25
    * height: 25
  * mut-1:
    * symbol: 5
    * title: mut-1
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2.png
    * width: 25
    * height: 25
  * mut-2:
    * symbol: 6
    * title: mut-2
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3.png
    * width: 25
    * height: 25
  * mut-4:
    * symbol: 8
    * title: mut-4
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4.png
    * width: 25
    * height: 25
  * purple:
    * symbol: p
    * title: purple
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-purple.svg
    * width: 25
    * height: 25
  * tile:
    * symbol: t
    * title: tile
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-transparent.svg
    * width: 25
    * height: 25
  * yellow:
    * symbol: y
    * title: yellow
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-yellow.svg
    * width: 25
    * height: 25
  * brown:
    * symbol: b
    * title: brown
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-brown.svg
    * width: 25
    * height: 25
  * red:
    * symbol: r
    * title: red
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-red.svg
    * width: 25
    * height: 25
  * gray-darker:
    * symbol: z
    * title: darker gray
    * image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-gray-darker.svg
    * width: 25
    * height: 25

* radio:
  * c1duplicates:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-1-duplicates-2-after.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c1dies:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2-dies.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c1mutant:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-2-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3-single.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 0.5
      * 'médio': 2
      * 'alto': 5
  * c2duplicates:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3-double-after.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c2dies:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3-dies.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c2mutant:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-single.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 0.5
      * 'médio': 2
      * 'alto': 5
  * c3duplicates:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-double-after.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c3dies:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-dies.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c3moves:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/mela-4-move.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 0.5
      * 'médio': 2
      * 'alto': 5
* script_mode: no-script-no-hide




___ Template ___

* template: compact/case/cell_editor_sliders

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
