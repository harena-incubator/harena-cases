# Foguetes (cell_agent) #

~~~
<dcc-space-cellular-editor id="cellular-space" rows="38" cols="55"
  cell-width="16" cell-height="16" background-color="#d6f0ffff" grid analysis>
</dcc-space-cellular-editor>

<dcc-cell-image type="b" label="balloon" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/balloon01.svg"></dcc-cell-image>
<dcc-cell-image type="1" label="plane1" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/plane01.svg"></dcc-cell-image>
<dcc-cell-image type="2" label="plane2" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/plane02.svg"></dcc-cell-image>
<dcc-cell-image type="3" label="plane3" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/plane03.svg"></dcc-cell-image>
<dcc-cell-image type="r" label="rocket" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/rocket01.svg"></dcc-cell-image>
<dcc-cell-image type="f" label="flagr" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/flag-red.svg"></dcc-cell-image>
<dcc-cell-image type="c" label="cloud" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/cloud01.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tree" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/tree01.svg"></dcc-cell-image>
<dcc-cell-image type="#" label="cloudb" image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/cloud01-black.svg"></dcc-cell-image>

<dcc-cell-ruler image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/icon/target.svg" proportion="10" unit="m">
   <subscribe-dcc topic="ruler/activate" map="activate"></subscribe-dcc>
   <subscribe-dcc topic="ruler/reset" map="reset"></subscribe-dcc>
</dcc-cell-ruler>

<dcc-timer cycles="100000" interval="1000" topic="state/next">
   <subscribe-dcc topic="timer/start" map="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" map="stop"></subscribe-dcc>
   <subscribe-dcc topic="input/changed/timer_interval" map="interval"></subscribe-dcc>
</dcc-timer>

<subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" map="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/reset" map="reset"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="space/edit" map="edit"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="space/view" map="view"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="input/changed/space_scale" map="scale"></subscribe-dcc>

<div style="flex:48px; max-height:48px; display:flex; flex-direction:row; border:2px">
   <div style="flex:20%; max-width:96px; max-height:48px; margin-right:10px">
      <dcc-button label="Régua" topic="ruler/activate"
                   image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/ruler.svg">
      </dcc-button>
   </div>
   <div style="flex:20%; max-width:96px; max-height:48px; margin-right:10px">
      <dcc-button label="Apagar Régua" topic="ruler/reset"
                   image="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/ruler-reset.svg">
      </dcc-button>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
           src="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/icon/clock.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="timer_interval" min="1" max="10" value="1" index></dcc-slider>
   </div>
</div>
<div style="flex:48px; max-height:48px; display:flex; flex-direction:row">
   <div style="flex:20%; max-width:96px; max-height:48px">
      <img style="max-width:48px; max-height:48px; margin-left:24px; margin-right:24px"
           src="https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/icon/zoom.svg">
   </div>
   <div style="flex:50%; max-height:48px; margin-right:10px">
      <dcc-slider variable="space_scale" min="1" max="100" value="1" index></dcc-slider>
   </div>
</div>
~~~

# Final (input,end) #
<h1>Parabéns, você chegou ao final!</h1>

___ Data ___
* cell_types:
  * empty:
    * symbol: _
    * title: vazio
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/cell-blue.svg
    * width: 25
    * height: 25
  * balloon:
    * symbol: b
    * title: balão
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/balloon01.svg
    * width: 25
    * height: 25
  * plane1:
    * symbol: 1
    * title: avião 1
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/plane01.svg
    * width: 25
    * height: 25
  * plane2:
    * symbol: 2
    * title: avião 2
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/plane02.svg
    * width: 25
    * height: 25
  * plane3:
    * symbol: 3
    * title: avião 3
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/plane03.svg
    * width: 25
    * height: 25
  * rocket:
    * symbol: r
    * title: foguete
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/rocket01.svg
    * width: 25
    * height: 25
  * flagr:
    * symbol: f
    * title: bandeira vermelha
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/flag-red.svg
    * width: 25
    * height: 25
  * cloud:
    * symbol: #
    * title: nuvem
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/cloud01.svg
    * width: 25
    * height: 25
  * tree:
    * symbol: t
    * title: árvore
    * image: https://datasci4health-incubator.github.io/harena-cases/cellular/rocket/harena/scripts/playground/images/cell/tree01.svg
    * width: 25
    * height: 25
* block_types:
  * Regras:
    * condition
    * velocity
    * acceleration
    * action_agent

___ Template ___

* template: compact/case/cell_agent

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: compact(green)
