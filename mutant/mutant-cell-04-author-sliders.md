# Simulador (cell_mutant_sliders) #

~~~
<dcc-space-cellular-editor id="cellular-space" rows="28" cols="40"
  cell-width="16" cell-height="16" background-color="#dddddd" grid analysis>
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
<dcc-cell-image type="2" label="cell2" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png"></dcc-cell-image>
<dcc-cell-image type="3" label="cell3" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png"></dcc-cell-image>
<dcc-cell-image type="4" label="cell4" image="https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png"></dcc-cell-image>
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
<rule-dcc-cell-pair id="c1-mutant" label="mutant" probability="0" transition="11>22">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c1-mutant" topic="input/changed/c1mutant" map="probability">
</subscribe-dcc>

<rule-dcc-cell-pair id="c2-duplicates" label="duplicates" probability="0" transition="2_>22">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<subscribe-dcc target="c2-duplicates" topic="input/changed/c2duplicates" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c2-dies" label="dies" probability="0" transition="22>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c2-dies" topic="input/changed/c2dies" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c2-mutant" label="mutant" probability="0" transition="22>33">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c2-mutant" topic="input/changed/c2mutant" map="probability">
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
<rule-dcc-cell-pair id="c3-mutant" label="mutant" probability="0" transition="33>44">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c3-mutant" topic="input/changed/c3mutant" map="probability">
</subscribe-dcc>

<rule-dcc-cell-pair id="c4-duplicates" label="duplicates" probability="0" transition="4_>44">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<subscribe-dcc target="c4-duplicates" topic="input/changed/c4duplicates" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c4-dies" label="dies" probability="0" transition="44>__">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c4-dies" topic="input/changed/c4dies" map="probability">
</subscribe-dcc>
<rule-dcc-cell-pair id="c4-mutant" label="mutant" probability="0" transition="44>55">
   ___
   _*_
   ___
</rule-dcc-cell-pair>
<subscribe-dcc target="c4-mutant" topic="input/changed/c4mutant" map="probability">
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

# Final (input,end) #
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
  * cell2:
    * symbol: 2
    * title: célula 2
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2.png
    * width: 25
    * height: 25
  * cell3:
    * symbol: 3
    * title: célula 3
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3.png
    * width: 25
    * height: 25
  * cell4:
    * symbol: 4
    * title: célula 4
    * image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4.png
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

* sliders:
  * c1duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-double.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c1dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-dies.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c1mutant:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-1-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2-single.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c2duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2-double.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c2dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2-dies.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c2mutant:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-2-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c3duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-double.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c3dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-dies.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c3mutant:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-3-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4-single.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c4duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4-double.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c4dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4-dies.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c4mutant:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-4-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c5duplicates:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-double.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c5dies:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-dies.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
  * c5moves:
    * pre_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-single.png
    * pre_width: 96
    * pre_height: 48
    * pos_image: https://mc-unicamp.github.io/oficinas/simula/mutant/image/cell-5-moves.png
    * pos_width: 96
    * pos_height: 48
    * initial: 0
* script_mode: no-script-no-hide

___ Template ___

* template: compact/case/cell_editor_sliders

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
