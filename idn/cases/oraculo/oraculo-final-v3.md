# Inicio (inicio) #

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
  > Unfortunately you were run over by a truck and died...
  * sequence: 1

@Opcoes_
  * sequence: 2

@opcao2-next_ 
  * sequence: 2

@Pergunta_
  > You say:

@Opcao1_
  > Enough talk! Let's go to the isekai.

@Opcao2_
  > What is happening?

@Proximo_ (-) next_talk
@Opcao1-text_ -> isekai
@Opcao2-text_ -> acontecendo

# isekai (inicio) #

@Deusa_
  ![Deusa brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
  > Eager beaver, huh! I should make you reincarnate as a chicken...
  * sequence: 1

@Deusa_
  > No one would know if I didn't follow the script... 
  * sequence: 2

@Deusa_
  > Nah! You will reincarnate as a king of a futuristic reality.
  * sequence: 3

@Deusa_
  > Where you must make the wisest decisions for your people.
  * sequence: 4

@Deusa_
  > But if you make the wrong decisions...
  * sequence: 5

@Prox_
  * sequence: 6

@Deusa_
  > Let's go reincarnate!
  * sequence: 6

@Prox-next_-> reencarnar
@Proximo_ (-) next_talk

# acontecendo (inicio) #

@Deusa_
  ![Deusa Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
  > You are dead! Haven't you ever watched anime?
  * sequence: 1

@Deusa_
  > But since I like you, I will reincarnate you as a king. 
  * sequence: 2

@Deusa_
  > Where you must make the best decisions for your people.
  * sequence: 3

@Prox_
  * sequence: 4

@Deusa_
  > Let's go reincarnate!
  * sequence: 4

@Prox-next_-> reencarnar
@Proximo_ (-) next_talk

# reencarnar (quarto) #

@Servo_
  ![Servo Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo.png)
  > Your Highness, your subjects await you in the royal hall...

@Proximo_ -> quarto0

# quarto0 (quarto2) #

@Porta_ -> corredor
@Janela_ -> musica

# musica (inicio) #
@Bardo_
  ![Bardo Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/bardo.png)
  > I was born without a name, without shine, without flame,
  * sequence: 1

@Bardo_
> The shadow calls me, the light despises me,
  * sequence: 2

@Bardo_
> The fog is cursed! Don't touch it!
  * sequence: 3

@Bardo_
> But I hear the winds that the wise do not hear.
  * sequence: 4

@Opcoes_
  * sequence: 5

@Pergunta_
  > You say:

@Opcao1_
  > Why is this song so sad...

@Proximo_ (-) next_talk
@Opcao1-text_-> triste


# triste (quarto) #
@Servo_
  ![Servo Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo.png)
  > It is just a bard singing outside, my lord, do not worry.
  * sequence: 1

@Opcoes_
  * sequence: 2

@Pergunta_
  > You say:

@Opcao1_
  > But why is his voice so sad?

@Proximo_ (-) next_talk
@Opcao1-text_ -> voz

# voz (quarto) #
@Servo_
  ![Servo medo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo-medo.png)
 > Your Highness, many of your subjects are persecuted for being born with shadow magic...
  * sequence: 1

@Prox_
  * sequence: 2

@Servo_
 > The director of Arcadia awaits your majesty in the royal hall.
  * sequence: 2

@Prox-next_-> quarto0
@Proximo_ (-) next_talk

# corredor (corredor) #
@Porta1_ -> quarto0
@Porta2_ -> gabinete
@Porta3_ -> salao

# gabinete (gabinete) #
@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > Your Majesty, I bring important news from the southern border!
  * sequence: 1

@General_
  ![General Bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  > At dusk, banners of the Southern Kingdom were seen advancing in formation towards the border.
  * sequence: 2

@General_
  > The Southern Kingdom is testing our defenses!
  * sequence: 2

@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > The Southern Kingdom is advancing towards our border.
  * sequence: 3

@General_
  ![General Bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  >  We need to reinforce the border fortresses, with troops and supplies.
  * sequence: 4

@Opcoes_
  * sequence: 5

@Pergunta_
  > You decide:

@Opcao1_
  > Strengthen the borders and go to the hall.

@Proximo_ (-) next_talk
@Opcao1-text_ -> salao

# salao (salao) #
@Diretor_
  ![Diretor Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > Your Majesty, my name is Ryze and I am the director of the Arcadia school of magic.
  * sequence: 1

@Diretor_
  ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  > I come to ask for your authorization for the creation of an Oracle.
  * sequence: 2

@Diretor_
  ![Diretor Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > It will select the best students who will have the privilege of studying at Arcadia.
  * sequence: 3

@Diretor_
  >  The oracle learns by listening to what is around it, absorbing information...
  * sequence: 4

@Diretor_
  ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  > The Archmagi of Silicon will create this artificial mind.
  * sequence: 5

@Diretor_
  >  Conjuring libraries with ancient scrolls, sacred books, songs, prophecies, love letters, and war treatises. 
  * sequence: 6

@Diretor_
  >  Every word will be engraved on data crystals, and these crystals will be fused into the essence of the Oracle.
  * sequence: 7

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > How does the oracle work?
  * sequence: 8

@Diretor_
  ![Diretor ](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > It learns with patterns.
  * sequence: 9

@Diretor_
  >  When absorbing a tale of heroes, it notes that “sword” comes after “warrior” and that sword and warrior have a connection. 
  * sequence: 10

@Diretor_
 ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  >  And with each new text, the Oracle adjusts its thought nodes.
  * sequence: 11

@Diretor_
  >  Over time, the Oracle will be capable of predicting words and constructing answers from millions of voices.
  * sequence: 12

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira-falando.png)
  > And why do you need such a powerful tool?
  * sequence: 13

@Diretor_
 ![Diretor bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-bravo.png)
  >  Our trials are extremely long and elaborate, and this has generated enormous financial cost and even some deaths...
  * sequence: 14

@Opcoes_
  * sequence: 15

@opcao2-next_ 
  * sequence: 15

@opcao3-next_ 
  * sequence: 15

@Pergunta_
  > The royal assembly wishes to speak. Who do you want to hear:

@Opcao1_
  > Advisor

@Opcao2_
  > General

@Opcao3_
  > Treasurer

@Proximo_ (-) next_talk
@Opcao1-text_ -> conse
@Opcao2-text_ -> general
@Opcao3-text_ -> tesoureiro

# tesoureiro (salao) #

@Tesoureiro_
  ![Tesoureiro Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro.png)
  > Your majesty has 1000 gold coins in the royal vault.
   * sequence: 1

@Tesoureiro_
  ![Tesoureiro nervoso](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro-nervoso.png)
  > The creation of the oracle requires an initial investment of at least 400 gold coins!
   * sequence: 2

@Opcoes_
  * sequence: 3

@opcao2-next_ 
  * sequence: 3

@opcao3-next_ 
  * sequence: 3

@Pergunta_
  > You want to:

@Opcao1_
  > Invest in the oracle.

@Opcao2_
  > Speak with the general.

@Opcao3_
  > Speak with the advisor.

@Proximo_ (-) next_talk
@Opcao1-text_ -> criar
@Opcao2-text_ -> general
@Opcao3-text_ -> conse

# general (salao) #
@General_
  ![General bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general-bravo.png)
  > The Southern Kingdom is strengthening itself more and more through magic! 
  * sequence: 1

@General_
  > I suggest we do the same! 
  * sequence: 2

@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > Investing in the oracle will bring new, much more powerful mages! 
  * sequence: 3

@General_
  > We must always be prepared!
  * sequence: 4

@Opcoes_
  * sequence: 5

@opcao2-next_ 
  * sequence: 5

@opcao3-next_ 
  * sequence: 5

@Pergunta_
  > You want to:

@Opcao1_
  > Invest in the oracle.

@Opcao2_
  > Speak with the treasurer.

@Opcao3_
  > Speak with the advisor.

@Proximo_ (-) next_talk
@Opcao1-text_ -> criar
@Opcao2-text_ -> tesoureiro
@Opcao3-text_ -> conse

# conse (salao) #
@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > Perhaps your majesty should worry about other problems...
  * sequence: 1

@Conselheira_
  ![Conselheira Nervosa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira-falando.png)
  > Your Majesty, the Oracle, although efficient, may contain deeply rooted prejudices.
  * sequence: 2

@Conselheira_
  > I fear that the discrimination against shadow mages will only be perpetuated!
  * sequence: 3

@Diretor_
 ![Diretor bravo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-bravo.png)
  > But your majesty, we need help in selecting students!
  * sequence: 4

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > I have an idea!
  * sequence: 5

@Conselheira_
  > A standardized and safe magical pre-selection, with trained evaluators from various orders.
  * sequence: 6

@Conselheira_
  > A standardized and safe magical pre-selection, with trained evaluators from various orders.
  * sequence: 7

@Diretor_
  > That would be impossible!
  * sequence: 8

@Diretor_
 ![Diretor falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor-falando.png)
  > Magic cannot be evaluated by a standardized test!
  * sequence: 9

@Diretor_
  > Each magic is different, and may not reveal the true potential of each student!
  * sequence: 10

@Diretor_
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/diretor.png)
  > The Oracle is the only way to sustain Arcadia in the future!
  * sequence: 11

@Opcoes_
  * sequence: 12

@opcao2-next_ 
  * sequence: 12

@opcao3-next_ 
  * sequence: 12

@Pergunta_
  > You want to:

@Opcao1_
  > Invest in the oracle.

@Opcao2_
  > Speak with the general.

@Opcao3_
  > Speak with the treasurer.

@Proximo_ (-) next_talk
@Opcao1-text_ -> criar
@Opcao2-text_ -> general
@Opcao3-text_ -> tesoureiro

# criar (quarto) #

@Servo_
  ![Servo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo.png)
  > Your Majesty, your subjects are gathered at the castle gate...
  * sequence: 1

@Servo_
 ![Servo Medo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/servo-medo.png)
  > With the news of the Oracle's creation, many have become apprehensive about this new artifact...
  * sequence: 2

@Servo_
  > Many are saying that the oracle will not be fair in its decisions...
  * sequence: 3

@Opcoes_
  * sequence: 4

@Pergunta_
  > It seems you have no other option...

@Opcao1_
  > Summon the Royal Assembly to discuss the Oracle.

@Proximo_ (-) next_talk
@Opcao1-text_ -> convocar

# convocar (salao) #

@General_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)

@Bobo_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/bobo.png)

@tesoureiro_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro.png)

@Conselheira_ 
 ![Diretor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)

@Opcoes_
  * sequence: 1

@opcao2-next_ 
  * sequence: 1

@opcao3-next_ 
  * sequence: 1

@opcao4-next_ 
  * sequence: 1

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the advisor.

@Opcao2_
  > Speak with the general.

@Opcao3_
  > Speak with the treasurer.

@Opcao4_
  > Speak with the jester.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> general2
@Opcao3-text_ -> tesoureiro2
@Opcao4-text_ -> bobo

# tesoureiro2 (salao) #

@Tesoureiro_
  ![Tesoureiro Nervoso](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro-nervoso.png)
  > Your Majesty, it is my duty to remind you that the royal coffers are not inexhaustible.
   * sequence: 1

@Tesoureiro_
  ![Tesoureiro Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/tesoureiro.png)
  > I believe we should invite the archmagi, creators of the Oracle...
   * sequence: 2

@Tesoureiro_
  > So that they may explain more about the process.
   * sequence: 3

@Opcoes_
  * sequence: 4

@opcao2-next_ 
  * sequence: 4

@opcao3-next_ 
  * sequence: 4

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the advisor.

@Opcao2_
  > Speak with the general.

@Opcao3_
  > Speak with the archmagus.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> general2
@Opcao3-text_ -> arquimago

# arquimago (salao) #

@Arquimago_
  ![Arquimago](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > Greetings, Your Majesty! I am Singed, Archmagus and developer of the Oracle.
   * sequence: 1

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > The Oracle can reflect the imperfections of those who taught it...
   * sequence: 2

@Arquimago_
  ![Arquimago Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > If the information used to train it contains injustices...
   * sequence: 3

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > The Oracle will replicate those distortions!
   * sequence: 4

@Arquimago_
  ![Arquimago Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > But so that this does not happen...
   * sequence: 5

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > The teachings provided to the Oracle must come from diverse sources.
   * sequence: 6

@Arquimago_
  ![Arquimago Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago.png)
  > Balance in memories is the first step toward justice.
   * sequence: 7

@Arquimago_
  ![Arquimago Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/arquimago-falando.png)
  > I can suggest some options to make the oracle fairer...
   * sequence: 8

@Arquimago_
  > For example, seeking more sources of information.
   * sequence: 9

@Opcoes_
  * sequence: 10

@opcao2-next_
  * sequence: 10

@opcao3-next_
  * sequence: 10

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the advisor.

@Opcao2_
  > Speak with the general.

@Opcao3_
  > Seek more information.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> general2
@Opcao3-text_ -> info

# info (inicio,end) #

@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > You here again?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Let's see what happened...
   * sequence: 2

@Deusa_
   > The Archmagi gathered distant knowledge to feed the Oracle.
   * sequence: 3

@Deusa_
  > When the data returned, the Oracle started making fair decisions.
   * sequence: 4

@Deusa_
  > So far so good...
   * sequence: 5

@Deusa_
  > But you forgot about those who lost their jobs because of the Oracle.
   * sequence: 6

@Deusa_
  > And you were assassinated...
   * sequence: 7

@Deusa_
  > You did well so far!
   * sequence: 8

@Deusa_
  > But what could you have done differently?
   * sequence: 9

@Proximo_ (-) next_talk

# general2 (salao) #
@General_
  ![General Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/general.png)
  > Your Majesty, why not summon an audience with the professors of Arcadia.
  * sequence: 1

@General_
  > They are being directly affected by the creation of the Oracle.
  * sequence: 2

@General_
  > I believe their fears are spreading to the people.
  * sequence: 3

@Opcoes_
  * sequence: 4

@opcao2-next_ 
  * sequence: 4

@opcao3-next_
  * sequence: 4

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the advisor.

@Opcao2_
  > Speak with the treasurer.

@Opcao3_
  > Speak with the professors.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> professor

# professor (salao) #
@Professor_
  ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor.png)
   > Your Majesty, I am Zilean, master of the arcane arts at Arcadia.
   * sequence: 1

@Professor_
  ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > I do not want to challenge the creation of the Oracle.
   * sequence: 2

@Professor_
   > But to express a concern that I share with many colleagues.
   * sequence: 3

@Professor_
  ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor.png)
   > Magic is more than formulas and patterns, it cannot always be predicted.
   * sequence: 4

@Professor_
   ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > I propose that the decisions made by the Oracle be examined by a council of humans.
   * sequence: 5

@Opcoes_
  * sequence: 6

@opcao2-next_
  * sequence: 6

@opcao3-next_
  * sequence: 6

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the advisor.

@Opcao2_
  > Speak with the treasurer.

@Opcao3_
  > Accept the professor's proposal.

@Proximo_ (-) next_talk
@Opcao1-text_ -> conselheira2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> fim

# fim (inicio,end) #
@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > You here again?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Let's see what happened...
   * sequence: 2

@Deusa_
   > The humans were reevaluating the Oracle's decision...
   * sequence: 3

@Deusa_
  > So far so good...
   * sequence: 4

@Deusa_
  > But you forgot about the marginalized shadow mages...
   * sequence: 5

@Deusa_
  > And you were assassinated...
   * sequence: 6

@Deusa_
  > You did well!
   * sequence: 7

@Deusa_
  > But what could you have done differently?
   * sequence: 8

@Proximo_ (-) next_talk

# conselheira2 (salao) #

@Conselheira_
  ![Conselheira Normal](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > Your Highness, I suggest a reflection on the Archmagi of the Circle.
  * sequence: 1

@Conselheira_
  ![Conselheira Nervosa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira-falando.png)
  > If only they shape the Oracle, it will inherit their prejudices...
  * sequence: 2

@Conselheira_
  > And their belief that shadow mages are cruel.
  * sequence: 3

@Conselheira_
  ![Conselheira](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/conselheira.png)
  > I suggest inviting shadow mages so that they can bring their concerns!
  * sequence: 4

@Opcoes_
  * sequence: 5

@opcao2-next_
  * sequence: 5

@opcao3-next_
  * sequence: 5

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the general.

@Opcao2_
  > Speak with the treasurer.

@Opcao3_
  > Speak with the shadow mage.

@Proximo_ (-) next_talk
@Opcao1-text_ -> general2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> maga

# maga (salao) #

@Maga_
  ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > Your Majesty, my name is Morgana, the most powerful shadow mage.
   * sequence: 1

@Maga_
   > For ages, we shadow mages have been feared and accused of crimes we did not commit.
   * sequence: 2

@Maga_
   > But the shadows are not evil...
   * sequence: 3

@Maga_
  ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   > They are just parts of the world!
   * sequence: 4

@Maga_
  ![Maga Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-brava.png)
   > Arcadia has been barring shadow mages...
   * sequence: 5

@Maga_
   > Not for lack of talent, but out of fear.
   * sequence: 6

@Maga_
   > The Oracle will only reflect this prejudice.
   * sequence: 7

@Maga_
 ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > That's why I ask that shadow mages be able to participate in its creation!
   * sequence: 8

@Maga_
 ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   > Thus preventing any injustice from propagating.
   * sequence: 9

@Opcoes_
  * sequence: 10

@opcao2-next_
  * sequence: 10

@opcao3-next_
  * sequence: 10

@Pergunta_
  > You want to:

@Opcao1_
  > Speak with the general.

@Opcao2_
  > Speak with the treasurer.

@Opcao3_
  > Accept the mage's proposal.

@Proximo_ (-) next_talk
@Opcao1-text_ -> general2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> fim2

# fim2 (inicio,end) #

@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > You here again?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Let's see what happened...
   * sequence: 2

@Deusa_
   > The shadow mages are finally integrating into the academic environment...
   * sequence: 3

@Deusa_
  > So far so good...
   * sequence: 4

@Deusa_
  > But you forgot about those who lost their jobs because of the Oracle.
   * sequence: 5

@Deusa_
  > And you were assassinated...
   * sequence: 6

@Deusa_
  > You made good choices!
   * sequence: 7

@Deusa_
  > But what could you have done differently?
   * sequence: 8

@Proximo_ (-) next_talk

# bobo (salao) #
@Bobo_
  ![Bobo](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/bobo-inteiro.png)
   > Your Majesty, I have a brilliant idea!
   * sequence: 1

@Bobo_
   > Why don't we have a great festival!
   * sequence: 2

@Bobo_
   > We could invite several mages, including shadow mages, and also nobles and commoners from various regions!
   * sequence: 3

@Bobo_
   > With lots of drink, food, music, and of course CLOWNS!
   * sequence: 4

@Bobo_
   > This party will be just a pretext to meet your subjects and understand their concerns!
   * sequence: 5

@Opcoes_
  * sequence: 6

@opcao2-next_ 
  * sequence: 6

@opcao3-next_ 
  * sequence: 6

@opcao4-next_ 
  * sequence: 6

@Pergunta_
  > You want to:

@Opcao1_
  > Arrest the jester and speak with the general.

@Opcao2_
  > Arrest the jester and speak with the treasurer.

@Opcao3_
  > Arrest the jester and speak with the advisor.

@Opcao4_
  > Throw the party.

@Proximo_ (-) next_talk
@Opcao1-text_ -> general2
@Opcao2-text_ -> tesoureiro2
@Opcao3-text_ -> conselheira2
@Opcao4-text_ -> festa

#festa (salao) #

@Professor_
   ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > Your Majesty, I am Professor Zilean, master of the arcane arts at Arcadia.
   * sequence: 1

@Professor_
   ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor.png)
   > In all these decades I have perfected my gift!
   * sequence: 2

@Professor_
   ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-nervoso.png)
   > And now they say an oracle can replace me?
   * sequence: 3

@Professor_
   ![Professor](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-nervoso.png)
   > You are being very unfair to those who hold the knowledge!
   * sequence: 4

@Professor_
   ![Professor Falando](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/professor-falando.png)
   > I propose that the decisions made by the Oracle be examined by a council of humans.
   * sequence: 5

@Maga_
  ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > Your Majesty, my name is Morgana, the most powerful shadow mage.
   * sequence: 6

@Maga_
   > For ages, we shadow mages have been feared and accused of crimes we did not commit.
   * sequence: 7

@Maga_
   > But the shadows are not evil...
   * sequence: 8

@Maga_
  ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   > They are just parts of the world!
   * sequence: 9

@Maga_
  ![Maga Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-brava.png)
   > Arcadia has been barring shadow mages...
   * sequence: 10

@Maga_
   > Not for lack of talent, but out of fear.
   * sequence: 11

@Maga_
   > The Oracle will only reflect this prejudice.
   * sequence: 12

@Maga_ 
 ![Maga](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga.png)
   > That's why I ask that shadow mages be able to participate in this council!
   * sequence: 13

@Maga_
 ![Maga Feliz](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/maga-feliz.png)
   > Thus preventing any injustice from propagating.
   * sequence: 14

@Opcoes_
  * sequence: 15

@Pergunta_
  > You want to:

@Opcao1_
  > Create a council.

@Proximo_ (-) next_talk
@Opcao1-text_ -> fim3

# fim3 (inicio,end) #

@Deusa_
  ![Deusa Brava](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa-brava.png)
   > You here again?
   * sequence: 1

@Deusa_
  ![Deusa](https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/images/deusa.png)
   > Let's see what happened...
   * sequence: 2

@Deusa_
   > You created a council to revise the Oracle's decision with different types of mages.
   * sequence: 3

@Deusa_
  > Your choice was perfect!
   * sequence: 4

@Deusa_
  > But you forgot a basic rule...
   * sequence: 5

@Deusa_
  > Don't trust CLOWNS!
   * sequence: 6

@Deusa_
  > And you were assassinated...
   * sequence: 7

@Deusa_
  > Don't be sad! Everyone dies one day!
   * sequence: 8

@Proximo_ (-) next_talk

___ Template ___

* template: plain/case/empty
* theme: https://harena-incubator.github.io/harena-cases/idn/themes/oraculo/

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: plain