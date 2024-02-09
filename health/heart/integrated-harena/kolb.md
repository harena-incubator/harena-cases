# Entrada (demografico) #

Primeiro vamos fazer algumas perguntas para conhecer o seu perfil. Isso será importante para o jogo que você vai jogar.

* Iniciar -> Demografico

# Demografico (demografico) #
> Idade
? idade
<br>
> Anos de formada como enfermeira
? formada
<br>
> Anos atuando como enfermeira em UTI
? atuando
<br>
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
> 1) Enquanto aprendo:
? kb1
  * type: choice
  * exclusive
  * options:
    * 'Gosto de lidar com meus sentimentos. '
    * 'Gosto de pensar sobre idéias. '
    * 'Gosto de estar fazendo coisas. '
    * 'Gosto de observar e escutar.'

* Anterior -> Entrada 
{{
* Próximo -> Kolb2 
}}

# Kolb2 (kolb) #
> 2) Aprendo melhor quando:
? kb2
  * type: choice
  * exclusive
  * options:
    * 'Ouço e observo com atenção. '
    * 'Me apoio em pensamento lógico. '
    * 'Confio em meus palpites e impressões. '
    * 'Trabalho com afinco para executar a tarefa. '
* Anterior -> Kolb1
{{
* Próximo -> Kolb3
}}

# Kolb3 (kolb) #
> 3) Quando estou aprendendo:
? kb3
  * type: choice
  * exclusive
  * options:
    * 'Tendo a buscar as explicações para as coisas. '
    * 'Sou responsável acerca das coisas. '
    * 'Fico quieto e concentrado.'
    * 'Tenho sentimentos e reações fortes.'
* Anterior -> Kolb2
{{
* Próximo -> Kolb4
}}

# Kolb4 (kolb) #
> 4) Aprendo:
? kb4
  * type: choice
  * exclusive
  * options:
    * 'Sentindo. '
    * 'Fazendo. '
    * 'Observando. '
    * 'Pensando. '
* Anterior -> Kolb3
{{
* Próximo -> Kolb5
}}

# Kolb5 (kolb) #
> 5) Enquanto aprendo:
? kb5
  * type: choice
  * exclusive
  * options:
    * 'Me abro a novas experiências.'
    * 'Examino todos os ângulos da questão. '
    * 'Gosto de analisar as coisas, desdobrá-las em suas partes. '
    * 'Gosto de testar as coisas. '
* Anterior -> Kolb4
{{
* Próximo -> Kolb6
}}

# Kolb6 (kolb) #
> 6)  Enquanto estou aprendendo:
? kb6
  * type: choice
  * exclusive
  * options:
    * 'Sou uma pessoa observadora.'
    * 'Sou uma pessoa ativa. '
    * 'Sou uma pessoa intuitiva. '
    * 'Sou uma pessoa lógica. '
* Anterior -> Kolb5
{{
* Próximo -> Kolb7
}}

# Kolb7 (kolb) #
> 7) Aprendo melhor através de:
? kb7
  * type: choice
  * exclusive
  * options:
    * 'Observação. '
    * 'Interações pessoais. '
    * 'Teorias racionais. '
    * 'Oportunidades para experimentar e praticar. '
* Anterior -> Kolb6
{{
* Próximo -> Kolb8
}}

# Kolb8 (kolb) #
> 8) Enquanto aprendo:
? kb8
  * type: choice
  * exclusive
  * options:
    * 'Gosto de ver os resultados de meu trabalho.'
    * 'Gosto de idéias e teorias.' 
    * 'Penso antes de agir. '
    * 'Sinto-me pessoalmente envolvido no assunto. '
* Anterior -> Kolb7
{{
* Próximo -> Kolb9
}}

# Kolb9 (kolb) #
> 9) Aprendo melhor quando:
? kb9
  * type: choice
  * exclusive
  * options:
    * 'Me apoio em minhas observações. '
    * 'Me apoio em minhas impressões. ' 
    * 'Posso experimentar coisas por mim mesmo. '
    * 'Me apoio em minhas idéias. '
* Anterior -> Kolb8
{{
* Próximo -> Kolb10
}}

# Kolb10 (kolb) #
> 10) Quando estou aprendendo:
? kb10
  * type: choice  
  * exclusive
  * options:
    * 'Sou uma pessoa compenetrada. '
    * 'Sou uma pessoa flexível. '
    * 'Sou uma pessoa responsável. '
    * 'Sou uma pessoa racional. '
* Anterior -> Kolb9
{{
* Próximo -> Kolb11
}}

# Kolb11 (kolb) #
> 11) Enquanto aprendo:
? kb11
  * type: choice
  * exclusive
  * options:
    * 'Me envolvo todo. '
    * 'Gosto de observar. '
    * 'Avalio as coisas. '
    * 'Gosto de estar ativo. '
* Anterior -> Kolb10
{{
* Próximo -> Kolb12
}}

# Kolb12 (kolb) #
> 12) Aprendo melhor quando:
? kb12
  * type: choice
  * exclusive
  * options:
    * 'Analiso as idéias. '
    * 'Sou receptivo e de mente aberta. '
    * 'Sou cuidadoso. '
    * 'Sou prático. '
* Anterior-> Kolb11
{{
* Finalizar-> Fim
}}

# Fim (kolb,end)
Obrigado por responder as questões sobre o seu perfil de aprendizagem. Agora você está preparado para participar do jogo!

<br>

<a href="https://jacinto.harena.org/player/env/index-jacinto.html">Retornar ao Painel Principal</a>

___ Template ___

* template: sections/basic
___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: sections(blue)