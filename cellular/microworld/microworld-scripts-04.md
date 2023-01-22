# Caso 04 (cell_editor) #

~~~
<dcc-dhtml subscribe="dcc/analysis/data:update">
<span style="color:green">Alga: {{alga}}</span>,
<span style="color:red">Nematode: {{nematode}}</span>,
<span style="color:blue">Tardigrado: {{tardigrade}}</span>
</dcc-dhtml>

<dcc-chart style="width:600px" min="0,0" max="300,1120" series="alga:green,nematode:red,tardigrade:blue"
           subscribe="dcc/analysis/data:action/include" slide>
</dcc-chart>

<dcc-space-cellular-editor id="cellular-space" rows="28" cols="40"
  cell-width="32" cell-height="32" background-color="#d6f0ff" grid analysis>
</dcc-space-cellular-editor>

<dcc-cell-image type="a" label="alga" image="https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/alga.svg"></dcc-cell-image>
<dcc-cell-image type="g" label="glass" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/glass-block-01.png"></dcc-cell-image>
<dcc-cell-image type="n" label="nematode" image="https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/nematode.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tardigrade" image="https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/tardigrade.svg"></dcc-cell-image>

<dcc-timer cycles="100000" interval="1000" topic="state/next">
   <subscribe-dcc topic="timer/start" map="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" map="stop"></subscribe-dcc>
</dcc-timer>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
           src="https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/icon/zoom.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="space_scale" min="1" max="100" value="1" index></dcc-slider>
   </div>
</div>

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
    * image: https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/cell-blue.svg
    * width: 25
    * height: 25
  * glass:
    * symbol: g
    * title: vidro
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/glass-block-01.png
    * width: 25
    * height: 25
  * alga:
    * symbol: a
    * title: alga
    * image: https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/alga.svg
    * width: 25
    * height: 25
  * nematode:
    * symbol: n
    * title: nematóide
    * image: https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/nematode.svg
    * width: 25
    * height: 25
  * tardigrade:
    * symbol: t
    * title: tardígrado
    * image: https://mc-unicamp.github.io/oficinas/simula/micromundos/harena/scripts/playground/images/cell/tardigrade.svg
    * width: 25
    * height: 25
* block_types:
  * Regras:
    * transform_horizontal
    * transform_vertical
  * Ser:
    * entity
    * entity_movement
    * entity_growth
    * entity_mortality
    * entity_eat

___ Template ___

* template: compact/case/cell_editor

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
