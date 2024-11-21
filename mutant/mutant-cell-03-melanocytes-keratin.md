# Simulador (cell_mutant_sliders) #

~~~html
<dcc-space-cellular-editor id="cellular-space" cell-width="40" cell-height="40" background-color="#dddddd" cover-image="https://harena-lab.github.io/dcc/dcc/playground/scripts/images/photo/epidermis-dermis-zoom-semi-crop.jpg" cover-opacity="100" grid analysis>__44_____44_4__444__
44444444444444444444
44434444433434433344
33333333333333333333
33333333333333333333
22222222222222222222
22322222222222322322
12212122121212121212
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

<rule-dcc-cell-pair id="c1-duplicates-a" probability="0" transition="4_>_4" neighbors="_*_______"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-duplicates-a" topic="input/changed/c1duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c1-duplicates-b" probability="0" transition="3_>_3" neighbors="_*_______"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-duplicates-b" topic="input/changed/c1duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c1-duplicates-c" probability="0" transition="2_>_2" neighbors="_*_______"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-duplicates-c" topic="input/changed/c1duplicates" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c1-duplicates-d" probability="0" transition="1_>12" neighbors="_*_*_*___"></rule-dcc-cell-pair>
<subscribe-dcc target="c1-duplicates-d" topic="input/changed/c1duplicates" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair id="c2-keratin-a" probability="0" transition="33>44" neighbors="____*____"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-keratin-a" topic="input/changed/c2keratin" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c2-keratin-b" probability="0" transition="34>44" neighbors="___*_*___"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-keratin-b" topic="input/changed/c2keratin" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c2-keratin-c" probability="0" transition="3t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-keratin-c" topic="input/changed/c2keratin" map="probability"></subscribe-dcc>
<rule-dcc-cell-pair id="c2-keratin-d" probability="0" transition="2t>4t" neighbors="_*_______"></rule-dcc-cell-pair>
<subscribe-dcc target="c2-keratin-d" topic="input/changed/c2keratin" map="probability"></subscribe-dcc>

<rule-dcc-cell-pair probability="5" transition="44>4_" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="5" transition="44>__" neighbors="____*____"></rule-dcc-cell-pair>

<rule-dcc-cell-pair probability="20" transition="3t>_t" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="22>23" neighbors="_*_______"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="0" transition="24>44" neighbors="___*_*___"></rule-dcc-cell-pair>
<rule-dcc-cell-pair probability="50" transition="2t>_t" neighbors="_*_______"></rule-dcc-cell-pair>

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
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-4-double-3-after.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60
  * c2keratin:
    * pre_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://harena-lab.github.io/dcc/dcc/playground/scripts/images/cell/cell-2-keratin-8.png
    * pos_width: 96
    * pos_height: 48
    * options:
      * 'nenhum': 0
      * 'baixo': 5
      * 'médio-baixo': 20
      * 'médio': 30
      * 'alto': 60

* script_mode: no-script-no-hide




___ Template ___

* template: compact/case/cell_editor_sliders

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
