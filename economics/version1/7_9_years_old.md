# Introduction #
**INTRODUÇÃO:**


O trabalho de vendedor(a) de picolés não é uma tarefa fácil.

Além do esforço físico, é um trabalho que requer planejamento.

!\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/b576ec1f-8c4e-481a-912a-c4c56dc365b0/e56ef877-c1ac-489a-b10b-dc0afe2c76aa.jpg>)

Nesta simulação mostraremos um pouco do que é necessário para administrar um negócio próprio, como é o caso da venda de picolés.
* Jogar! -> Round.Start

# Round #


## Start ##
~ rodada := 0
~ avaiable := 100
~ cost := 2
**Missão:**
* Você deve vender picolés na praia.
* Você começará com R$^avaiable^,00 para comprar os picolés no supermercado.
* Depois de comprar os picolés, você deverá vendê-los na praia.
* A decisão de quantos picolés comprar e o preço de venda do picolé é sua.

**Regras:**
* O dinheiro que não for gasto acumula para o dia seguinte.
* Os picolés que não forem vendidos no final do dia serão descartados pois estarão derretidos.
* Você deve jogar no mínimo 7 dias.
* A partir do sétimo dia, você poderá finalizar a simulação a qualquer momento.
* O máximo de dias da simulação serão 20. Depois você terá que finalizá-la.


* Vamos nessa! -> Flow.Next

## Buy_Item ##


### Index ###
~ rodada := rodada+1
~ stock := 0
$ (rodada<4) ~ weather := 1
$ (rodada>=4) ~ weather := 2
$ (rodada>=7) ~ weather := 1
$ (rodada>=10) ~ weather := 2
$ (rodada>=13) ~ weather := 1
$ (rodada>=16) ~ weather := 2
**Dia:** ^rodada^
**Disponível:** R$ ^avaiable^
**Estoque:** ^stock^ picolés
$ (weather=1)
  **Clima:** Ensolarado
$ (weather=1)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/36ea9762-dced-4149-9eb9-13c1ba97821f.gif> =20%x20%)
$ (weather=2)
  **Clima:** Chuvoso
$ (weather=2)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/476da3de-1a1e-452a-ac6f-d5d1a2b3d31e.gif> =25%x25%)
$ (rodada<21)
  * Comprar picolés -> Buy_Item.Buy
$ (rodada=21)
  * Finalizar Simulação -> Sure_End

### Buy ###
**SUPERMERCADO**
<dcc-lively-talk duration="0.2s" character="https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/789cdef2-7f20-443b-b620-3e0c642111f0.jpg" speech="Cada picolé custa R$^cost^,00. Quantos picolés você gostaria de comprar?">
</dcc-lively-talk>

> Quantidade picolés:
? quantidade
* Comprar -> Flow.Next


### Be_Sure ###
~ qtd := 0
$ (Round.Buy_Item.Buy.quantidade > 0) ~ qtd := round(Round.Buy_Item.Buy.quantidade)
~ custo := qtd * cost
~ avaiable_temp:= avaiable - custo
$ (qtd<0) ~ qtd:=0
$ (avaiable_temp>=0) ~ stock := stock + qtd
$ (avaiable_temp>=0) ~ avaiable := avaiable_temp

**SUPERMERCADO**
<dcc-lively-talk duration="0.2s" character="https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/789cdef2-7f20-443b-b620-3e0c642111f0.jpg" speech="O total ficou R$^custo^,00. ">
</dcc-lively-talk>

$ (avaiable_temp < 0)
  * Beleza! -> Round.Buy_Item.Oops
$ (avaiable_temp >=  0)
  * Beleza! -> Round.Buy_Item.Transition


### Oops ###
**Você não tem dinheiro para comprar esta quantidade de picolés!**
**Dia**: ^rodada^
**Disponível:** R$^avaiable^
**Estoque:** ^stock^ picolés
$ (weather=1)
  **Clima:** Ensolarado
$ (weather=1)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/36ea9762-dced-4149-9eb9-13c1ba97821f.gif> =20%x20%)
$ (weather=2)
  **Clima:** Chuvoso
$ (weather=2)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/476da3de-1a1e-452a-ac6f-d5d1a2b3d31e.gif> =25%x25%)
$ (rodada<21)
  * Comprar picolés -> Round.Buy_Item.Buy



### Transition ###
**Dia**: ^rodada^
**Disponível:** R$ ^avaiable^
**Estoque:** ^stock^ picolés
$ (weather=1)
  **Clima:** Ensolarado
$ (weather=1)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/36ea9762-dced-4149-9eb9-13c1ba97821f.gif> =20%x20%)
$ (weather=2)
  **Clima:** Chuvoso
$ (weather=2)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/476da3de-1a1e-452a-ac6f-d5d1a2b3d31e.gif> =25%x25%)
$ (rodada<21)
  * Vender picolés -> Sell.Index

## Sell ##


### Index ###
<dcc-lively-talk duration="0.2s" character="https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/2c225f14-6a52-4deb-a4ea-4e6f794fb8e5.jpg" speech="Olá, quanto custa cada picolé?">
</dcc-lively-talk>
>Preço de venda:
? price
* Vender -> Sell.Calculator_sell




### Calculator_sell ###
~ stop := 0
~ input_price := round(Round.Sell.Index.price*100)/100
$ (weather=1) ~ demand := round(45 - 3.5 * input_price)
$ (weather=2) ~ demand := round(35 - 3.5 * input_price)
$ (demand<0) ~ demand := 0
$ (demand < stock) ~ quantity_sold :=  demand
$ (demand >= stock) ~ quantity_sold :=  stock

~ total_income := round(quantity_sold * input_price*100)/100
~ total_cost := stock * cost
~ profit := round((total_income - total_cost)*100)/100
~ avaiable := round((avaiable + total_income)*100)/100
~ melted_stock := stock - quantity_sold
~ stock_backup := stock
~ stock := stock - quantity_sold
Vamos começar a simulação!
$ (weather=1)
  * Vamos nessa! -> Sell.Simulation_Sunny
$ (weather=2)
  * Vamos nessa! -> Sell.Simulation_Rain






### Simulation_Sunny  ###
$ (quantity_sold=0)
  **VOCÊ NÃO VENDEU NENHUM PICOLÉ HOJE**
~~~html
<div id="action-panels" class="d-flex h-100 mb-3">
<div class="d-flex col-6 flex-column align-items-stretch">
   <div id="render-panel">

<dcc-space-cellular-editor id="cellular-space" rows="14" cols="20"
  cell-width="32" cell-height="32" background-color="#ebeba2" grid>
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
..vvv............v..
...v...v.........v..
...v......vvvv......
..v.....v......v....
..vv....h..v...v....
...v......v.....v...
........v....v......
...v..........v.....
........v..........v
....................
</dcc-space-cellular-editor>


<dcc-cell-image type="." label="sand" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png""></dcc-cell-image>
<dcc-cell-image type="h" label="healthy" image="https://mc-unicamp.github.io/oficinas/simula/business/image/icecream-cart-green.png"></dcc-cell-image>
<dcc-cell-image type="v" label="vaccinated" image="https://mc-unicamp.github.io/oficinas/simula/business/image/beach-umbrella.png"></dcc-cell-image>
<dcc-cell-image type="d" label="disease" image="https://mc-unicamp.github.io/oficinas/simula/business/image/relaxing-walk.png"></dcc-cell-image>
<dcc-cell-image type="r" label="recovered" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/person-recovered.svg"></dcc-cell-image>
<dcc-cell-image type="n" label="nurse" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/nurse.svg"></dcc-cell-image>
<dcc-cell-image type="g" label="ghost" image="https://mc-unicamp.github.io/oficinas/simula/business/image/waves_espuma2.png"></dcc-cell-image>
<dcc-cell-image type="w" label="wall" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/waves.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tombstone" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/tombstone.svg"></dcc-cell-image>

<rule-dcc-cell-pair label="healthy moves" probability="100" transition="h.>.h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="icecream sold" probability="80" transition="vh>vh"
                    topic="icecream/sold">
   _*_
   *_*
   _*_
</rule-dcc-cell-pair>

<dcc-compute id="sold-reset" expression='sold:=0' active></dcc-compute>
<dcc-compute expression='sold:=sold+1' subscribe="icecream/sold:update"></dcc-compute>
<dcc-compute expression='stop:=1' condition="sold>=quantity_sold"  dependency="sold-reset" active></dcc-compute>
Quantidade Vendida: <dcc-expression expression='sold' active></dcc-expression> 

<dcc-timer cycles="100000" interval="125" topic="state/next" autostart>
   <subscribe-dcc topic="timer/start" map="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" map="stop"></subscribe-dcc>
   <subscribe-dcc topic="var/set/stop" map="stop"></subscribe-dcc>
</dcc-timer>


<subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" map="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/reset" map="reset"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="input/changed/space_scale" map="scale"></subscribe-dcc>
</div>
</div>

<div class="d-flex col-6 flex-column align-items-stretch">
   <div id="types-panel" class="h-100 w-100">
O carrinho para quando vender todos os picolés possíveis no dia.



<subscribe-dcc target="contagion" topic="input/changed/contagion" map="probability">
</subscribe-dcc>
<subscribe-dcc target="contagion-vaccinated" topic="input/changed/contagion_vaccinated" map="probability">
</subscribe-dcc>
<subscribe-dcc target="contagion-vaccinated" topic="input/changed/contagion_recovered" map="probability">
</subscribe-dcc>
<subscribe-dcc target="nurse-vaccinate" topic="input/changed/nurse_vaccinate" map="probability">
</subscribe-dcc>
<subscribe-dcc target="sick-cured" topic="input/changed/sick_cured" map="probability">
</subscribe-dcc>
<subscribe-dcc target="sick-dies" topic="input/changed/sick_dies" map="probability">
</subscribe-dcc>

</div></div>
</div>
~~~
*  Prosseguir -> Sell.Results


### Simulation_Rain  ###
$ (quantity_sold=0)
  **VOCÊ NÃO VENDEU NENHUM PICOLÉ HOJE**
~~~html
<div id="action-panels" class="d-flex h-100 mb-3">
<div class="d-flex col-6 flex-column align-items-stretch">
   <div id="render-panel">

<dcc-space-cellular-editor id="cellular-space" rows="14" cols="20"
  cell-width="32" cell-height="32" background-color="#ebeba2" grid>
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
wwwwwwwwwwwwwwwwwwww
....................
.......v.........v..
...v................
....................
........h...........
................v...
........v...........
...v..........v.....
...................v
....................
</dcc-space-cellular-editor>


<dcc-cell-image type="." label="sand" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png""></dcc-cell-image>
<dcc-cell-image type="h" label="healthy" image="https://mc-unicamp.github.io/oficinas/simula/business/image/icecream-cart-green.png"></dcc-cell-image>
<dcc-cell-image type="v" label="vaccinated" image="https://mc-unicamp.github.io/oficinas/simula/business/image/beach-umbrella.png"></dcc-cell-image>
<dcc-cell-image type="d" label="disease" image="https://mc-unicamp.github.io/oficinas/simula/business/image/relaxing-walk.png"></dcc-cell-image>
<dcc-cell-image type="r" label="recovered" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/person-recovered.svg"></dcc-cell-image>
<dcc-cell-image type="n" label="nurse" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/nurse.svg"></dcc-cell-image>
<dcc-cell-image type="g" label="ghost" image="https://mc-unicamp.github.io/oficinas/simula/business/image/waves_espuma2.png"></dcc-cell-image>
<dcc-cell-image type="w" label="wall" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/waves.svg"></dcc-cell-image>
<dcc-cell-image type="t" label="tombstone" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/tombstone.svg"></dcc-cell-image>

<rule-dcc-cell-pair label="healthy moves" probability="100" transition="h.>.h">
   ***
   *_*
   ***
</rule-dcc-cell-pair>
<rule-dcc-cell-pair label="icecream sold2" probability="100" transition="vh>vh"
                    topic="icecream/sold2">
   _*_
   *_*
   _*_
</rule-dcc-cell-pair>

<dcc-compute id="sold2-reset" expression='sold2:=0' active></dcc-compute>
<dcc-compute expression='sold2:=sold2+1' subscribe="icecream/sold2:update"></dcc-compute>
<dcc-compute expression='stop:=1' condition="sold2>=quantity_sold"  dependency="sold2-reset" active></dcc-compute>
Quantidade Vendida: <dcc-expression expression='sold2' active></dcc-expression> 

<dcc-timer cycles="100000" interval="125" topic="state/next" autostart>
   <subscribe-dcc topic="timer/start" map="start"></subscribe-dcc>
   <subscribe-dcc topic="timer/stop" map="stop"></subscribe-dcc>
   <subscribe-dcc topic="var/set/stop" map="stop"></subscribe-dcc>
</dcc-timer>


<subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/save" map="save"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="state/reset" map="reset"></subscribe-dcc>
<subscribe-dcc target="cellular-space" topic="input/changed/space_scale" map="scale"></subscribe-dcc>
</div>
</div>

<div class="d-flex col-6 flex-column align-items-stretch">
   <div id="types-panel" class="h-100 w-100">
O carrinho para quando vender todos os picolés possíveis no dia.
<subscribe-dcc target="contagion" topic="input/changed/contagion" map="probability">
</subscribe-dcc>
<subscribe-dcc target="contagion-vaccinated" topic="input/changed/contagion_vaccinated" map="probability">
</subscribe-dcc>
<subscribe-dcc target="contagion-vaccinated" topic="input/changed/contagion_recovered" map="probability">
</subscribe-dcc>
<subscribe-dcc target="nurse-vaccinate" topic="input/changed/nurse_vaccinate" map="probability">
</subscribe-dcc>
<subscribe-dcc target="sick-cured" topic="input/changed/sick_cured" map="probability">
</subscribe-dcc>
<subscribe-dcc target="sick-dies" topic="input/changed/sick_dies" map="probability">
</subscribe-dcc>

</div></div>
</div>
~~~
*  Prosseguir -> Sell.Results



### Results ###
$ (profit>0)
  Parabéns! Você ganhou dinheiro vendendo os picolés!
$ (profit<0)
   Ohhh não! Você perdeu dinheiro vendendo picolés! 
$ (profit=0)
  Você terminou o dia com a mesma quantidade de dinheiro que tinha antes.
$ (profit>0)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/8cf832c9-5401-4e99-9ac3-8da3c2701a24.png> =25%x25%)
$ (profit<0)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/aaf707a9-d384-4cbc-a1d4-e1c81e36bc26.png> =25%x25%)
$ (profit=0)
  !\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/e5fd325f-bfb4-4efb-9afb-7fc5fca2c7b6/0bf791aa-00db-45b3-837e-8573afec6557.png> =25%x25%)
**Lucro do dia: R$ ^profit^**
$ (melted_stock = 0)
  Parabéns! Você vendeu todo o seu estoque!
$ (melted_stock >0)
  ^melted_stock^ picolés derreteram.
$ (avaiable<2)
  *  Começar novo dia -> Game_over
$ (avaiable>=2)
  *  Começar novo dia -> Round.Buy_Item.Index
* Ver detalhes -> Sell.Details
$ (rodada>=21)
  *  Finalizar simulação -> Sure_End

### Details ###
* Você comprou ^stock_backup^ picolés e vendeu ^quantity_sold^
* Você comprou picolés por R$^cost^ e vendeu por R$^input_price^
* O seu custo foi a quantidade que comprou vezes o preço de compra, ou seja, ^stock_backup^ picolés x  R$^cost^ = R$^total_cost^
* A sua receita foi a quantidade vendida vezes o preço de venda, ou seja, ^quantity_sold^ picolés x  R$^input_price^ = R$^total_income^
* Voltar -> Sell.Results

# Sure_End #
Você gostaria de finalizar a simulação?
* Sim -> Strategy_adopted
* Não -> Round.Sell.Results






# Strategy_adopted
> Você usou alguma estratégia? Se sim, qual?
? strategy
  * type: text
* Fechar -> End

# End (end)#
**PARABÉNS! Você finalizou a simulação!**
!\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/8cf832c9-5401-4e99-9ac3-8da3c2701a24.png> =25%x25%)
Você pode fechar esta aba do seu navegador.

# Game_over#
**Você Perdeu**

!\[null\](<https://dev.jacinto.harena.org/manager/resources/artifacts/cases/4abd90b2-48a1-4bbb-9aea-44acb74f693f/affcca08-5a00-41bc-9a2d-eff95d2e0f18.png> =25%x25%)

Você ficou sem dinheiro.
* Reiniciar jogo -> Start_from_game_over

# Start_from_game_over #
~ avaiable := 100
**Missão:**
* Você deve vender picolés na praia.
* Você começará com R$^avaiable^,00 para comprar os picolés no supermercado.
* Depois de comprar os picolés, você deverá vendê-los na praia.
* A decisão de quantos picolés comprar e o preço de venda do picolés é sua.

**Regras:**
* O dinheiro que não for gasto acumula para o dia seguinte.
* Os picolés que não forem vendidos no final do dia serão descartados pois estarão derretidos.
* Você deve jogar no mínimo 7 dias.
* A partir do sétimo dia, você poderá finalizar a simulação a qualquer momento.
* O máximo de dias da simulação serão 20. Depois você terá que finalizá-la.

* Vamos nessa! -> Round.Buy_Item.Index



___ Template ___

* template: plain/case/empty
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain

](10_12_years_old.md)