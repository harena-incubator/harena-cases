# Knot (gabinete) #

@General_
  ![General](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  > Olá você chegou.
  * sequence: 1

@Plebeu_
  > Por quê?
  * sequence: 2

@General_
  > Porque você está atrasado.
  * sequence: 3

@Proximo_ (-) next_talk

@Porta_ -> Saida_Casa
@Janela_ -> Abre_Janela
@General-image_ -> Fala_General

# Saida_Casa #

Você clicou na porta e saiu da casa.

# Abre_Janela #

Você clicou na janela e abriu a janela.

# Fala_General #

Você clicou no general e vai falar com ele.

___ Template ___

* template: plain/case/empty
* theme: https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
