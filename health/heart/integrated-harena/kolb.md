# Entrada (demografico) #

Primeiro vamos fazer algumas perguntas para conhecer o seu perfil. Isso será importante para o jogo que você vai jogar.

* Iniciar -> Demografico1

# Demografico1 (demografico) #
> Idade
? idade
<br>
> Anos de formada como enfermeira
? formada
<br>
> Anos atuando como enfermeira em UTI
? atuando

* Próximo -> Demografico2

# Demografico2 (demografico) #

> Tem especialização?
? temesp
  * type: choice
  * exclusive
  * options:
    * 'sim'
    * 'não'
<br>
> Se sim, qual especialização?
? especializacao
<br>
> Mestrado concluído?
? mestrado
  * type: choice
  * exclusive
  * options:
    * 'sim'
    * 'não'
<br>
> Doutorado concluído?
? doutorado
  * type: choice
  * exclusive
  * options:
    * 'sim'
    * 'não'

* Próximo -> IKolb

# IKolb (kolb) #

Agora vamos fazer algumas perguntas sobre o seu perfil de aprendizagem.

* Iniciar -> Kolb1

# Kolb1 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb1"
              publish="update~action/kolb1"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Entrada 
{{
* Próximo -> Kolb2 
}}

# Kolb2 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb2"
              publish="update~action/kolb2"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb1
{{
* Próximo -> Kolb3
}}

# Kolb3 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb3"
              publish="update~action/kolb3"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb2
{{
* Próximo -> Kolb4
}}

# Kolb4 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb4"
              publish="update~action/kolb4"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb3
{{
* Próximo -> Kolb5
}}

# Kolb5 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb5"
              publish="update~action/kolb5"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb4
{{
* Próximo -> Kolb6
}}

# Kolb6 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb6"
              publish="update~action/kolb6"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb5
{{
* Próximo -> Kolb7
}}

# Kolb7 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb7"
              publish="update~action/kolb7"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb6
{{
* Próximo -> Kolb8
}}

# Kolb8 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb8"
              publish="update~action/kolb8"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb7
{{
* Próximo -> Kolb9
}}

# Kolb9 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb9"
              publish="update~action/kolb9"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb8
{{
* Próximo -> Kolb10
}}

# Kolb10 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb10"
              publish="update~action/kolb10"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb9
{{
* Próximo -> Kolb11
}}

# Kolb11 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb11"
              publish="update~action/kolb11"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior -> Kolb10
{{
* Próximo -> Kolb12
}}

# Kolb12 (kolb) #

~~~
<div style="height:60vh;overflow:hidden">
  <blockly-oid custom="kolb12"
              publish="update~action/kolb12"
              subscribe="pane/resize~resize">
  </blockly-oid>
</div>
~~~

* Anterior-> Kolb11
{{
* Finalizar-> Fim
}}

# Fim (kolb,end)
Obrigado por responder as questões sobre o seu perfil de aprendizagem. Agora você está preparado para participar do jogo!

<br>

<span class="styt-button-frame" style="cursor:pointer">
  <a class="styt-button" style="height:60px" href="https://jacinto.harena.org/player/env/index-jacinto-section1.html">Retornar ao Painel Principal</a>
</span>

___ Template ___

* template: sections/basic
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: sections(blue)