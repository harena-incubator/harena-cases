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
  > Ir embora.

@Seta_dialogo_ (-) next_talk
@Opcao1-text_ -> Sala_Exames
@Opcao2-text_ -> Recepcao
