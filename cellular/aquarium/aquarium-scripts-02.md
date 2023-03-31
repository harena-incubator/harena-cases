# Aquario 2 (cell_editor) #

~~~
<dcc-space-cellular-editor id="cellular-space" rows="38" cols="55"
  cell-width="16" cell-height="16" background-color="#d6f0ff" grid analysis>
</dcc-space-cellular-editor>

<dcc-cell-image type="a" label="alga" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/alga.svg"></dcc-cell-image>
<dcc-cell-image type="p" label="plant" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/alga-02.svg"></dcc-cell-image>
<dcc-cell-image type="g" label="glass" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/glass-block-01.png"></dcc-cell-image>
<dcc-cell-image type="h" label="herbivor1r" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-herbivor-01-right.svg"></dcc-cell-image>
<dcc-cell-image type="i" label="herbivor1l" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-herbivor-01-left.svg"></dcc-cell-image>
<dcc-cell-image type="r" label="carnivor1r" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-carnivor-01-right.svg"></dcc-cell-image>
<dcc-cell-image type="s" label="carnivor1l" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-carnivor-01-left.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="shark1r" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/shark-01-right.svg"></dcc-cell-image>
<dcc-cell-image type="u" label="shark1l" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/shark-01-left.svg"></dcc-cell-image>
<dcc-cell-image type="j" label="jellyu" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/jellyfish-01-up.svg"></dcc-cell-image>
<dcc-cell-image type="k" label="jellyd" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/jellyfish-01-down.svg"></dcc-cell-image>
<dcc-cell-image type="y" label="turtle1r" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/turtle-01-right.png"></dcc-cell-image>
<dcc-cell-image type="z" label="turtle1l" image="https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/turtle-01-left.png"></dcc-cell-image>

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
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/cell-blue.svg
    * width: 25
    * height: 25
  * alga:
    * symbol: a
    * title: alga
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/alga.svg
    * width: 25
    * height: 25
  * plant:
    * symbol: p
    * title: plant
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/alga-02.svg
    * width: 25
    * height: 25
  * glass:
    * symbol: g
    * title: vidro
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/glass-block-01.png
    * width: 25
    * height: 25
  * herbivor1r:
    * symbol: h
    * title: herbívoro
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-herbivor-01-right.svg
    * width: 25
    * height: 25
  * herbivor1l:
    * symbol: i
    * title: herbívoro
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-herbivor-01-left.svg
    * width: 25
    * height: 25
  * carnivor1r:
    * symbol: r
    * title: carnívoro
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-carnivor-01-right.svg
    * width: 25
    * height: 25
  * carnivor1l:
    * symbol: s
    * title: carnívoro
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/fish-carnivor-01-left.svg
    * width: 25
    * height: 25
  * shark1r:
    * symbol: t
    * title: tubarão
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/shark-01-right.svg
    * width: 25
    * height: 25
  * shark1l:
    * symbol: u
    * title: tubarão
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/shark-01-left.svg
    * width: 25
    * height: 25
  * jellyu:
    * symbol: j
    * title: medusa
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/jellyfish-01-up.svg
    * width: 25
    * height: 25
  * jellyd:
    * symbol: k
    * title: medusa
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/jellyfish-01-down.svg
    * width: 25
    * height: 25
  * turtle1r:
    * symbol: y
    * title: tartaruga
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/turtle-01-right.png
    * width: 25
    * height: 25
  * turtle1l:
    * symbol: z
    * title: tartaruga
    * image: https://mc-unicamp.github.io/oficinas/simula/aquarium/harena/scripts/playground/images/cell/turtle-01-left.png
    * width: 25
    * height: 25
* block_types:
  * Regras:
    * transform_horizontal
    * transform_vertical

___ Template ___

* template: compact/case/cell_editor

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
