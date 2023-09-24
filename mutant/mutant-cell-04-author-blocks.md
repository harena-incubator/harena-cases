# Simulador (cell_mutant) #

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
* block_types:
  * Regras:
    * transform
    * single

___ Template ___

* template: compact/case/cell_editor

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
