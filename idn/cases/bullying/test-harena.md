# Recepcao (recepcao) #

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal.png)

@Enfermeira_
  ![Enfermeira](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/enfermeira_regular.png)
  > Olá Fernando, vamos entrar.
  * sequence: 1

@Opcoes_
  * sequence: 2

@Pergunta_
  > Como você vai convidá-los para entrar?

@Opcao1_
  > Convidar ambos.

@Opcao2_
  > Convidar só o Fernando.

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Consultorio_Ambos
@Opcao2-text_ -> Consultorio_Sozinho

# Consultorio_Ambos (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Pai_
  ![Pai Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/pai_normal.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal.png)
  > Olá Fernando.
  * sequence: 1

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Olá doutor.
  * sequence: 2

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Puxa Fernando, o que aconteceu?
  * sequence: 3

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando2.png)
  > Eu caí e me machuquei.
  * sequence: 4

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Vamos para a sala de exames.
  * sequence: 5

@Opcoes_
  * sequence: 6

@Pergunta_
  > O que você decide fazer agora?

@Opcao1_
  > Ir para a sala de exames.

@Opcao2_
  > Voltar para a recepção.

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Sala_Exames
@Opcao2-text_ -> Recepcao

# Consultorio_Sozinho (consultorio) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Normal](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_normal.png)
  > Olá Fernando.
  * sequence: 1

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Olá doutor.
  * sequence: 2

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Puxa Fernando, o que aconteceu?
  * sequence: 3

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando2.png)
  > Eu caí e me machuquei.
  * sequence: 4

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Vamos para a sala de exames.
  * sequence: 5

@Opcoes_
  * sequence: 6

@Pergunta_
  > O que você decide fazer agora?

@Opcao1_
  > Ir para a sala de exames.

@Opcao2_
  > Voltar para a recepção.

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Sala_Exames
@Opcao2-text_ -> Recepcao


# Sala_Exames (exames) #

@Fernando_
  ![Medico Triste](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_triste.png)

@Medico_
  ![Medico Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/medico_falando.png)
  > Fernando, tudo bem com você?
  * sequence: 1

@Fernando_
  ![Fernando Falando](https://harena-incubator.github.io/harena-cases/idn/themes/bullying/imagem/personagem/fernando_falando.png)
  > Tudo bem doutor.
  * sequence: 2

@Opcoes_
  * sequence: 3

@Opcao1_
  > Voltar para a recepção

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Recepcao

___ Template ___

* template: plain/case/empty
* theme: https://harena-incubator.github.io/harena-cases/idn/themes/bullying/

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain
