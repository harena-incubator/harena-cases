#Start#
~~~html
<div class="styt-pul-main">
    <p>
      <dcc-compute id='dcc1' expression='total_quantity:=0;cost:=2;quantity:=0;sold := 0;profit:= 0;input_price := 2;last_sold := 0;last_price := 0;money := 100;rodada:= 0' autorun></dcc-compute>
    </p>
    <div class="row">
      <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
        <dcc-markdown id='dcc2'>
            <p>
              Custo: R$ <dcc-expression id='cost' expression='cost' active></dcc-expression><br />
            </p>
          </dcc-markdown>
        <p>
          Vendas: <dcc-expression id='quantity-sold-display' expression='sold' active></dcc-expression>
          <dcc-space-cellular id="cellular-space" rows="14" cols="16" cell-width="32" cell-height="32" background-color="#ebeba2" grid>wwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwww
            wwwwwwwwwwwwwwww
            vvvvv...........
            .......v........
            ...v....v....v..
            ...vvv....v...v.
            .vv...v.h..v....
            .vv...v..vv.....
            .v.vv...v..v...v
            ...v....vvv...v.
            ..vvvv....v.....
            .......vvvv..v..</dcc-space-cellular>
          <subscribe-dcc target="cellular-space" topic="type/#"></subscribe-dcc>
          <subscribe-dcc target="cellular-space" topic="state/next" map="next"></subscribe-dcc>
          <dcc-cell-image id="dcc24" type="." label="sand" image="https://mc-unicamp.github.io/oficinas/simula/business/image/cell-yellow-green-black.png"></dcc-cell-image>
          <dcc-cell-image id="dcc26" type="h" label="icecream" image="https://mc-unicamp.github.io/oficinas/simula/business/image/icecream-cart-green.png"></dcc-cell-image>
          <dcc-cell-image id="dcc28" type="v" label="umbrella" image="https://mc-unicamp.github.io/oficinas/simula/business/image/beach-umbrella_project_orange.png"></dcc-cell-image>
          <dcc-cell-image id="dcc33" type="u" label="umbrella2" image="https://mc-unicamp.github.io/oficinas/simula/business/image/beach-umbrella_project.png"></dcc-cell-image>
          <dcc-cell-image id="dcc30" type="w" label="waves" image="https://mc-unicamp.github.io/oficinas/simula/contagion/harena/scripts/playground/images/cell/waves.svg"></dcc-cell-image>
          <rule-dcc-cell-pair id="dcc32" label="icecream moves" probability="100" transition="h.>.h">***
            *_*
            ***</rule-dcc-cell-pair>
          <rule-dcc-cell-pair id="dcc38" label="icecream sold" probability="90" transition="u.>v.">
            _*_
            *_*
            _*_</rule-dcc-cell-pair>
          <rule-dcc-cell-pair id="dcc34" label="icecream sold" probability="80" transition="vh>uh" topic="icecream/sold">_*_
            *_*
            _*_</rule-dcc-cell-pair>
          <dcc-compute id="sold-increment" expression="sold:=sold+1"></dcc-compute>
          <subscribe-dcc target="sold-increment" topic="icecream/sold" map="update"></subscribe-dcc>
          <dcc-compute id="stop-simulation" condition="sold>0 and sold>=quantity"active expression="stop:=1"></dcc-compute>
          Vendas totais : <dcc-expression id='total-quantity' expression='round(total_quantity)' active></dcc-expression>

        </p>
      </div>
      
        <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
        <p>------------Rodada <dcc-expression id='rodada-display' expression='rodada' active></dcc-expression>------------<br />
        Preço: <dcc-expression id='last_price' expression='last_price' active></dcc-expression><br />
        Quantidade Vendida: <dcc-expression id='last_quantity' expression='last_sold' active></dcc-expression><br />
        <b>Lucro: R$ <dcc-expression id='profit' expression='last_profit' active></dcc-expression></b><br /><br />
        Dinheiro: R$ <dcc-expression id='money-display' expression='money' active></dcc-expression><br />
    </p>
        <p>----------Preço----------<br /></p>
         <p>
              <dcc-compute id="plus-price" condition="input_price<=15" expression="input_price:=input_price+0.25"></dcc-compute>
              <dcc-compute id="minus-price" condition="input_price>0" expression="input_price:=input_price-0.25"></dcc-compute></p>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <dcc-button id="minus-price-button" label="- 0,25" class="btn btn-md"></dcc-button>
              <connect-dcc from="minus-price-button" trigger="click" to="minus-price" topic="update"></connect-dcc>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <p>R$ <dcc-expression id='price-display' expression='input_price' active></dcc-expression></p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-6">
              <dcc-button id="plus-price-button" label="+ 0,25" class="btn btn-md"></dcc-button>
              <connect-dcc from="plus-price-button" trigger="click" to="plus-price" topic="update"></connect-dcc>
            </div>
          </div>
        
        <p>
          <dcc-compute id="calculate-demand" expression="price:=input_price;arch_sold:=sold;quantity := round(45 - 3.5 * price);total_income := round(quantity * price*100)/100;total_cost := quantity * cost;profit := round((total_income - total_cost)*100)/100"></dcc-compute>
          <dcc-compute id="check-quantity" condition="quantity<0" active expression="quantity := 0"></dcc-compute>
          <dcc-compute id="update-rodada"
            expression="money := round((money + profit)*100)/100;rodada:=rodada+1;last_profit  := profit; last_sold := sold; sold:=0; last_price := price;total_quantity:=total_quantity+quantity">
          </dcc-compute>

          <dcc-button id="vender" topic="timer/start" label="Vender"></dcc-button>
          <connect-dcc from="vender" trigger="click" to="calculate-demand" topic="update"></connect-dcc>
        </p>
        <p>
          <dcc-timer id="clock" cycles="100000" interval="150" topic="state/next"></dcc-timer>
          <subscribe-dcc target="clock" topic="timer/start" map="start"></subscribe-dcc>
          <subscribe-dcc target="clock" topic="var/set/stop" map="stop"></subscribe-dcc>
          <subscribe-dcc target="update-rodada" topic="var/set/stop" map="update"></subscribe-dcc>
          <dcc-message topic="session/round" subscribe="var/set/stop:publish"></dcc-message>
        </p>
      </div>
    </div>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <p>100 vendas: <br \>
              <dcc-compute id="dcc100" expression="test:=total_quantity<100" active></dcc-compute>
              <dcc-dhtml connect="retrieve:dcc100:compute/calculate" subscribe="compute/updated/dcc100:update" autoupdate>
                {{@if test}} <img src="https://jacinto.harena.org/manager/resources/artifacts/cases/db59c9c0-f328-4b59-bd4c-aa2f7412a17b/d2cc94c9-631a-432d-abda-ecb4b7b33d7a.jpg" alt="&quot;100 quantidades vendidas&quot;" title="100 quantidades vendidas"
                  width="50%" height="50%" />{{@endif}}
              </dcc-dhtml>
              <dcc-compute id="dcc6" expression="test:=total_quantity>=100" active></dcc-compute>
              <dcc-dhtml connect="retrieve:dcc6:compute/calculate" subscribe="compute/updated/dcc6:update" autoupdate>
                {{@if test}} <img src="https://jacinto.harena.org/manager/resources/artifacts/cases/db59c9c0-f328-4b59-bd4c-aa2f7412a17b/25b71f1a-22c9-4895-8a9c-7bc5aa2cdecb.jpg" alt="&quot;100 quantidades vendidas&quot;" title="100 quantidades vendidas"
                  width="50%" height="50%" />{{@endif}}
              </dcc-dhtml>
            </p>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <p>300 vendas: <br \>
              <dcc-compute id="dcc11" expression="test:=total_quantity<300" active></dcc-compute>
              <dcc-dhtml connect="retrieve:dcc11:compute/calculate" subscribe="compute/updated/dcc11:update" autoupdate>
                {{@if test}} <img src="https://jacinto.harena.org/manager/resources/artifacts/cases/db59c9c0-f328-4b59-bd4c-aa2f7412a17b/5e32e03b-4353-4421-bf7a-98df606b2d59.jpg" alt="&quot;500 quantidades vendidas&quot;" title="500 quantidades vendidas"
                  width="50%" height="50%" />{{@endif}}
              </dcc-dhtml>
              <dcc-compute id="dcc16" expression="test:=total_quantity>=300" active></dcc-compute>
              <dcc-dhtml connect="retrieve:dcc16:compute/calculate" subscribe="compute/updated/dcc16:update" autoupdate>
                {{@if test}} <img src="https://jacinto.harena.org/manager/resources/artifacts/cases/db59c9c0-f328-4b59-bd4c-aa2f7412a17b/e9aafcab-a51a-4ebd-becb-dcc2157b6922.jpg" alt="&quot;500 quantidades vendidas&quot;" title="500 quantidades vendidas"
                  width="50%" height="50%" />{{@endif}}
              </dcc-dhtml>
            </p>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <p>600 vendas: <br \>
              <dcc-compute id="dcc21" expression="test:=total_quantity<600" active></dcc-compute>
              <dcc-dhtml connect="retrieve:dcc21:compute/calculate" subscribe="compute/updated/dcc21:update" autoupdate>
                {{@if test}} <img src="https://jacinto.harena.org/manager/resources/artifacts/cases/db59c9c0-f328-4b59-bd4c-aa2f7412a17b/533766b9-91d7-42a1-b779-7a0042b302c5.jpg" alt="&quot;1000 quantidades vendidas&quot;" title="1000 quantidades vendidas"
                  width="50%" height="50%" />{{@endif}}
              </dcc-dhtml>
              <dcc-compute id="dcc26" expression="test:=total_quantity>=600" active></dcc-compute>
              <dcc-dhtml connect="retrieve:dcc26:compute/calculate" subscribe="compute/updated/dcc26:update" autoupdate>
                {{@if test}} <img src="https://jacinto.harena.org/manager/resources/artifacts/cases/db59c9c0-f328-4b59-bd4c-aa2f7412a17b/d52dd0ba-f4a5-403d-b3ef-99ae070b9f90.jpg" alt="&quot;1000 quantidades vendidas&quot;" title="1000 quantidades vendidas"
                  width="50%" height="50%" />{{@endif}}
              </dcc-dhtml>
            </p>
          </div>
        </div>

  </div>


~~~



___ Template ___

* template: plain/case/empty
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
