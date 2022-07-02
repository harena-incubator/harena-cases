# Zombie Health 01 (profile,start)
~ points := 100
~ current := 1

![Doctor](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Você é um Médico Girafa que foi chamado para ajudar a curar zumbis que foram picados por animais peçonhentos.

**Você tem ^points^ pontos.**

* Iniciar Jogo -> Flow.Next

# Quiz 1 (Quiz)

Antes de iniciarmos, quero saber o quanto você sabe sobre animais peçonhentos. Vou te apresentar cada um deles e fazer perguntas sobre os sintomas que aparecem quando é picado ou mordido pelo animal.

* Ir para o Quiz -> Flow.Next

# Perguntas Escorpiao 1 (Quiz)

Se você for picado por um **escorpião**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Perguntas Cascavel 1 (Quiz)

Se você for mordido por uma **cobra cascavel**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Perguntas Jararaca 1 (Quiz)

Se você for mordido por uma **cobra jararaca**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Perguntas Aranha 1 (Quiz)

Se você for picado por uma **aranha marrom**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Fase 1 (profile)

![Zumbis](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbis1.png)

<H1>Fase 1</H1>

Descubra o que picou cada Zumbi. Você tem que ser rápido, porque tem que atender 10 zumbis.

* Iniciar Fase 1 -> Flow.Next

# Caso 1 (profile)

![zumbi_1](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_1.png)

Undeadha se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada <-> Mostra Sintoma "sente pouca dor no local da mordida; local levemente inchado"
* Estado do Zumbi <-> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida <-> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos <-> Mostra Sintoma "tem batimentos cardíacos descompassados, num ritmo atrapalhado"

* Realizar Diagnóstico -> Diagnóstico escorpião

# Caso 2 (profile)

![zumbi_2](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_2.png)

Pricensteinia se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente muita dor no local da mordida; local inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida grande, com bordas elevadas e tem uma área preta no meio"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos normais"

* Realizar Diagnóstico -> Diagnóstico aranha marrom

# Caso 3 (profile)

![zumbi_3](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_3.png)

Tor-grr se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente muita dor no local da mordida; o local está mudando para uma coloração azul; local muito inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida grande, com bordas elevadas e tem uma área preta no meio"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos normais"

* Realizar Diagnóstico -> Diagnóstico jararaca

# Caso 4 (profile)

![zumbi_4](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_4.png)

Grrmurray se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente pouca dor no local da mordida; local levemente inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos descompassados, num ritmo atrapalhado"

* Realizar Diagnóstico -> Diagnóstico escorpião

# Caso 5 (profile)

![zumbi_5](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_5.png)

Frankenperez se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente pouca dor no local da mordida; local levemente inchado"
* Estado do Zumbi -> Mostra Sintoma "está cansado para respirar"
* Ferida -> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos descompassados, num ritmo atrapalhado"

* Realizar Diagnóstico -> Diagnóstico escorpião

# Caso 6 (profile)

![zumbi_6](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_6.png)

Sananimated se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente muita dor no local da mordida; local muito inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida grande, com bordas elevadas e tem uma área preta no meio"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos normais"

* Realizar Diagnóstico -> Diagnóstico jararaca

# Caso 7 (profile)

![zumbi_7](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_7.png)

Grrgriffiths se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente pouca dor no local da mordida  "
* Estado do Zumbi -> Mostra Sintoma "está com o olho caído"
* Ferida -> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos normais"

* Realizar Diagnóstico -> Diagnóstico cascavel

# Caso 8 (profile)

![zumbi_8](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_8.png)

Brooks-grr se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente muita dor no local da mordida; local levemente inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos descompassados, num ritmo atrapalhado"

* Realizar Diagnóstico -> Diagnóstico escorpião

# Caso 9 (profile)

![zumbi_9](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_9.png)

Grrreen se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente muita dor no local da mordida; o local está mudando para uma coloração azul; local muito inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos normais"

* Realizar Diagnóstico -> Diagnóstico jararaca

# Caso 10 (profile)

![zumbi_10](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_10.png)

Williarot se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma "sente muita dor no local da mordida; local levemente inchado"
* Estado do Zumbi -> Mostra Sintoma "está com os olhos normais; respira e engole de forma regular"
* Ferida -> Mostra Sintoma "tem uma ferida sem destaques além daqueles já descritos"
* Batimentos -> Mostra Sintoma "tem batimentos cardíacos descompassados, num ritmo atrapalhado"

* Realizar Diagnóstico -> Diagnóstico escorpião

# Mostra Sintoma (note)

O zumbi ^Previous.input1^.

# Diagnóstico jararaca (profile, branch)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Jararaca certo
* Cascavel -> Jararaca errado
* Aranha Marrom -> Jararaca errado
* Escorpião -> Jararaca errado

# Diagnóstico cascavel (profile, branch)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Cascavel errado
* Cascavel -> Cascavel certo
* Aranha Marrom -> Cascavel errado
* Escorpião -> Cascavel errado

# Diagnóstico aranha marrom (profile, branch)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Aranha Marrom errado
* Cascavel -> Aranha Marrom errado
* Aranha Marrom -> Aranha Marrom certo
* Escorpião -> Aranha Marrom errado

# Diagnóstico escorpião (profile, branch)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Escorpião errado
* Cascavel -> Escorpião errado
* Aranha Marrom -> Escorpião errado
* Escorpião -> Escorpião certo

# Fase 2 (profile)

![Zumbis](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen01/zumbis2.png)

<H1>Fase 2</H1>

Leia com atenção cada caso e preste atenção nas pistas que podem te ajudar no diagnóstico.

* Iniciar Fase 2 -> Flow.Next

# Caso 11 (profile)

![zumbi_1](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/1.png)

O paciente chega ao pronto socorro mancando. Ele foi pescar larvas nojentas que moram na lagoa perto de sua casa. Acidentalmente, o paciente pegou o rabo de um bicho, que o mordeu. O que você deseja examinar?

* Local da Picada -> Dor Sangramento Edema
* Estado do Paciente -> Estado normal
* Ferida -> Necrose sim
* Batimentos -> Arritmia não

* Realizar Diagnóstico -> Diagnóstico 11

# Caso 12 (profile)

![zumbi_2](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/2.png)

Um novo paciente se apresentou na clínica para ser atendido. Ele diz que estava planejando assustar umas pessoas e resolveu se esconder dentro de um barril na sua casa. Então, acabou sentando em cima de um bicho que fazia um barulho esquisito com o rabo. O que você deseja examinar?

* Local da Picada -> Dor Edema discreto
* Estado do Paciente -> Olho Deglutição Respiração
* Ferida -> Necrose não
* Batimentos -> Arritmia não

* Realizar Diagnóstico -> Diagnóstico 12

# Caso 13 (profile)

![zumbi_3](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/3.png)

Um novo zumbi apareceu na clínica. O paciente relata que estava atrasado para ir para escola Zumbi para aprender a domesticar zumboscas - moscas que foram para Zumbilândia depois de comerem comida estragada. Então, ele colocou o sapato correndo e sentiu uma dor no dedão do pé. Nesse momento, percebeu que esmagou alguma coisa, mas não deu muita importância. Ao correr, o paciente começou a sentir uma dor muito forte no pé e percebeu que estava com uma ferida no dedão. O que você deseja examinar?

* Local da Picada -> Dor Edema
* Estado do Paciente -> Estado normal
* Ferida -> Necrose sim
* Batimentos -> Arritmia não

* Realizar Diagnóstico -> Diagnóstico 13

# Caso 14 (profile)

![zumbi_4](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/4.png)

Um novo zumbi chegou ao pronto-socorro! Ele conta que estava coletando sucata para fazer um brinquedo novo, e viu um bicho esquisito. Quando ele chegou perto do bicho, levou uma ferroada na mão que doeu tanto que ele pulou igual um macaco. Ele diz ainda que a sua galinha de estimação correu para ajudar, e o bicho esquisito saiu correndo de medo. O que você deseja examinar?

* Local da Picada -> Dor muita Edema discreto
* Estado do Paciente -> Respiração
* Ferida -> Necrose não
* Batimentos -> Arritmia sim

* Realizar Diagnóstico -> Diagnóstico 14

# Caso 15 (profile)

![zumbi_5](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/5.png)

Um novo paciente chegou à clínica! Ele relata que foi passear de barco e parou numa ilha que tinha um farol muito bonito. Quando ele desceu do barco, percebeu que a ilha tinha um monte de Zumbirinhas, um tipo de gaivota da Zumbilândia. Como está sempre com fome, o paciente foi pegar um ovo para fazer uma boquinha, mas sentiu uma dor muito forte na mão. O que você deseja examinar?

* Local da Picada -> Dor Sangramento Edema
* Estado do Paciente -> Estado normal
* Ferida -> Necrose sim
* Batimentos -> Arritmia não

* Realizar Diagnóstico -> Diagnóstico 15

# Caso 16 (profile)

![zumbi_6](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/6.png)

Um zumbi acabou de chegar à clinica! Ele relata que foi pescar na mata. Logo antes de chegar no rio, viu um bicho se que fazia um barulho engraçadinho com o rabo. Então, o paciente saiu atrás do bicho e, quando se abaixou para encostar nele, o animal pulou e lhe deu uma mordida no braço. O que você deseja examinar?

* Local da Picada -> Dor Edema discreto
* Estado do Paciente -> Olho Deglutição Respiração
* Ferida -> Necrose não
* Batimentos -> Arritmia não

* Realizar Diagnóstico -> Diagnóstico 16

# Quiz 2 (Quiz)

Antes de ir embora, eu quero fazer de novo as perguntas do começo para ver o que você aprendeu. Vamos lá?

* Ir para o Quiz -> Flow.Next

# Perguntas Escorpiao 2 (Quiz)

Se você for picado por um **escorpião**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Perguntas Cascavel 2 (Quiz)

Se você for mordido por uma **cobra cascavel**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Perguntas Jararaca 2 (Quiz)

Se você for mordido por uma **cobra jararaca**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Perguntas Aranha 2 (Quiz)

Se você for picado por uma **aranha marrom**, quais os sintomas se apresentam?

> Sente dor?
? dor
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Muita Dor'
    * 'Pouca Dor'

<br><br>

> Possui sangramento?
? sangramento
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Qual estado que a vítima picada por escorpião apresenta?
? estado
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Dificuldade de Respirar'
    * 'Dificuldade de Engolir'
    * 'Olho Caído'

<br><br>

> Ao examinar a ferida ela parece bem feia?
? ferida
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Sim'
    * 'Não'

<br><br>

> Ao verificar o coração da vítima como ele esta?
? coracao
  * type: choice
  * exclusive: true
  * reveal: vertical
  * options:
    * 'Batimentos atrapalhados e descompensados'
    * 'Batimentos Normais'

* Próximo Animal -> Flow.Next

# Final (profile, end)
![Final](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/end.jpg)
Parabéns você chegou ao final do jogo! Foi sugado por um buraco negro e vai começar tudo de novo em outra dimensão!

Você fez o total de ^points^ pontos.

# Dor Sangramento Edema (note)

![Dor_Muita](https://cdn.pixabay.com/photo/2016/03/31/15/31/cry-1293366_640.png)

O paciente está com muita dor no local da mordida, que também está muito inchado e mudando para uma coloração azul.

# Dor Edema discreto (note)

![Dor_Pouca](https://cdn.pixabay.com/photo/2012/04/24/13/27/face-40058_640.png)

O paciente sente pouca dor, e o local da picada tem pouco inchaço.

# Dor muita Edema discreto (note)

![Dor_Muita](https://cdn.pixabay.com/photo/2016/03/31/15/31/cry-1293366_640.png)

O paciente sente muita dor, e o local da picada tem pouco inchaço.

# Dor Edema (note)

![Dor_Pouca](https://cdn.pixabay.com/photo/2012/04/24/13/27/face-40058_640.png)

O local do ferimento apresenta inchaço e o paciente sente dor.

# Estado normal (note)

Não foi observado nada de anormal no paciente.

# Olho Deglutição Respiração (note)

O paciente está com o olho caído, tem dificuldade para engolir e está cansado para respirar.

# Respiração (note)

![Respiracao_Problema](https://cdn.pixabay.com/photo/2014/04/03/11/58/human-312757_640.png)

Ao examinar o paciente, você percebe que ele está cansado para respirar.

# Necrose não (note)

Nada mais a observar na ferida.

# Necrose sim (note)

A ferida é grande, com bordas elevadas e tem uma área preta no meio.

# Arritmia não (note)

![Arritmia_Nao](https://cdn.pixabay.com/photo/2015/07/15/18/15/health-846780_640.png)

Seus batimentos cardíacos estão normais.

# Arritmia sim (note)

![Arritmia_Sim](https://cdn.pixabay.com/photo/2014/04/02/10/39/heartbeat-304130_640.png)

Os batimentos estão descompassados, num ritmo atrapalhado.

# Diagnóstico 11 (quiz, branch)

Use as cores verde (1 clique), azul (2 cliques), amarelo (3 cliques) e vermelho (4 cliques) para indicar:
- verde - foi a informação que mais ajudou você a descobrir o aninal;
- azul - também ajudaram você a descobrir o animal;
- amarelo - nem ajudaram nem atrapalharam a descoberta;
- vermelho - lhe atrapalharam ou confundiram na descoberta do animal.

? contribution to diagnostics
  * type: group select
  * vocabularies: evidence:findingRelevance
  * states: _,+,=,-
  * labels: neutral, corroborate, equal, against

{{symptoms/evidence:findingRelevance/

<p>O paciente chega ao pronto socorro mancando. Ele {foi pescar larvas nojentas}/=/ que moram na lagoa perto de sua casa. Acidentalmente, o paciente {pegou o rabo de um bicho, que o mordeu}/+/. Ele está com {muita dor no local da mordida}/+/ e percebeu que {sua perna está inchada}/+/ e {mudando para uma coloração azul}/+/. Ao examinar o estado do paciente, {você não descobre nada anormal}/=/. Seus {batimentos cardíacos também estão normais}/=/. Porém, ao examinar a ferida, você percebe que ela é {grande, com bordas elevadas e tem uma área preta no meio}/+/.</p>

}}

<p>Então, qual animal peçonhento você acha que picou o paciente?</p>

* Jararaca -> Jararaca certo
* Cascavel -> Jararaca errado
* Aranha Marrom -> Jararaca errado
* Escorpião -> Jararaca errado

# Diagnóstico 12 (quiz, branch)

Use as cores verde (1 clique), azul (2 cliques), amarelo (3 cliques) e vermelho (4 cliques) para indicar:
- verde - foi a informação que mais ajudou você a descobrir o aninal;
- azul - também ajudaram você a descobrir o animal;
- amarelo - nem ajudaram nem atrapalharam a descoberta;
- vermelho - lhe atrapalharam ou confundiram na descoberta do animal.

? contribution to diagnostics
  * type: group select
  * vocabularies: evidence:findingRelevance
  * states: _,+,=,-
  * labels: neutral, corroborate, equal, against

{{symptoms/evidence:findingRelevance/

<p>O paciente diz que {estava planejando assustar umas pessoas}/=/ e resolveu {se esconder dentro de um barril na sua casa}/=/. Então, acabou sentando em cima de {um bicho que fazia um barulho esquisito com o rabo}/+/. O paciente {sente pouca dor}/=/, e {o local da picada tem pouco inchaço}/=/. O paciente também está com o {olho caído}/+/, tem {dificuldade para engolir}/+/ e está {cansado para respirar}/+/. A ferida {não apresenta nenhuma característica marcante}/=/. Além disso, seus {batimentos cardíacos estão normais}/=/.</p>

}}

<p>Então, qual animal peçonhento você acha que picou o paciente?</p>

* Jararaca -> Cascavel errado
* Cascavel -> Cascavel certo
* Aranha Marrom -> Cascavel errado
* Escorpião -> Cascavel errado

# Diagnóstico 13 (quiz, branch)

Use as cores verde (1 clique), azul (2 cliques), amarelo (3 cliques) e vermelho (4 cliques) para indicar:
- verde - foi a informação que mais ajudou você a descobrir o aninal;
- azul - também ajudaram você a descobrir o animal;
- amarelo - nem ajudaram nem atrapalharam a descoberta;
- vermelho - lhe atrapalharam ou confundiram na descoberta do animal.

? contribution to diagnostics
  * type: group select
  * vocabularies: evidence:findingRelevance
  * states: _,+,=,-
  * labels: neutral, corroborate, equal, against

{{symptoms/evidence:findingRelevance/

<p>O paciente relata que {estava atrasado para ir para escola Zumbi para aprender a domesticar zumboscas}/=/ - moscas que foram para Zumbilândia depois de comerem comida estragada. Então, {ele colocou o sapato correndo}/=/ e sentiu uma dor no dedão do pé. Nesse momento, {percebeu que esmagou alguma coisa}/+/, mas não deu muita importância. {Ao correr, o paciente começou a sentir uma dor muito forte no pé}/+/ e percebeu que estava com uma ferida no dedão. O local do ferimento {apresenta inchaço}/+/, e {a ferida é grande, com bordas elevadas e tem uma área preta no meio}/+/. Ao examinar o paciente, {você não descobre nada anormal}/=/. Seus {batimentos cardíacos estão normais}/=/.</p>

}}

<p>Então, qual animal peçonhento você acha que picou o paciente?</p>

* Jararaca -> Aranha Marrom errado
* Cascavel -> Aranha Marrom errado
* Aranha Marrom -> Aranha Marrom certo
* Escorpião -> Aranha Marrom errado

# Diagnóstico 14 (quiz, branch)

Use as cores verde (1 clique), azul (2 cliques), amarelo (3 cliques) e vermelho (4 cliques) para indicar:
- verde - foi a informação que mais ajudou você a descobrir o aninal;
- azul - também ajudaram você a descobrir o animal;
- amarelo - nem ajudaram nem atrapalharam a descoberta;
- vermelho - lhe atrapalharam ou confundiram na descoberta do animal.

? contribution to diagnostics
  * type: group select
  * vocabularies: evidence:findingRelevance
  * states: _,+,=,-
  * labels: neutral, corroborate, equal, against

{{symptoms/evidence:findingRelevance/

<p>O paciente conta que estava {coletando sucata para fazer um brinquedo novo}/=/, e {viu um bicho esquisito}/=/. Quando ele chegou perto do bicho, {levou uma ferroada na mão que doeu tanto}/+/ que ele pulou igual um macaco. Ele diz ainda que a {sua galinha de estimação correu para ajudar}/+/, e o bicho esquisito saiu correndo de medo. Ao chegar na clínica, o paciente {sente muita dor}/+/, e {o local da picada tem pouco inchaço}/=/. Ao examinar o paciente, você percebe que {ele está cansado para respirar}/+/. A ferida {não apresenta nenhuma característica marcante}/=/, mas seus {batimentos cardíacos estão descompassados, num ritmo atrapalhado}/+/.</p>

}}

<p>Então, qual animal peçonhento você acha que picou o paciente?</p>

* Jararaca -> Escorpião errado
* Cascavel -> Escorpião errado
* Aranha Marrom -> Escorpião errado
* Escorpião -> Escorpião certo

# Diagnóstico 15 (quiz, branch)

Use as cores verde (1 clique), azul (2 cliques), amarelo (3 cliques) e vermelho (4 cliques) para indicar:
- verde - foi a informação que mais ajudou você a descobrir o aninal;
- azul - também ajudaram você a descobrir o animal;
- amarelo - nem ajudaram nem atrapalharam a descoberta;
- vermelho - lhe atrapalharam ou confundiram na descoberta do animal.

? contribution to diagnostics
  * type: group select
  * vocabularies: evidence:findingRelevance
  * states: _,+,=,-
  * labels: neutral, corroborate, equal, against

{{symptoms/evidence:findingRelevance/

<p>O paciente relata que {foi passear de barco}/=/ e {parou numa ilha que tinha um farol muito bonito}/=/. Quando ele desceu do barco, {percebeu que a ilha tinha um monte de Zumbirinhas}/=/, um tipo de gaivota da Zumbilândia. Como está sempre com fome, o paciente {foi pegar um ovo para fazer uma boquinha}/=/, mas {sentiu uma dor muito forte na mão}/+/. Ao chegar na clínica, o paciente está com {muita dor no local da mordida}/+/, que também está {muito inchado}/+/ e {mudando para uma coloração azul}/+/. Ao examinar o paciente, {você não descobre nada anormal}/=/. Seus {batimentos cardíacos estão normais}/=/. Entretanto, {a ferida é grande, com bordas elevadas e tem uma área preta no meio}/+/.</p>

}}

<p>Então, qual animal peçonhento você acha que picou o paciente?</p>

* Jararaca -> Jararaca certo
* Cascavel -> Jararaca errado
* Aranha Marrom -> Jararaca errado
* Escorpião -> Jararaca errado

# Diagnóstico 16 (quiz, branch)

Use as cores verde (1 clique), azul (2 cliques), amarelo (3 cliques) e vermelho (4 cliques) para indicar:
- verde - foi a informação que mais ajudou você a descobrir o aninal;
- azul - também ajudaram você a descobrir o animal;
- amarelo - nem ajudaram nem atrapalharam a descoberta;
- vermelho - lhe atrapalharam ou confundiram na descoberta do animal.

? contribution to diagnostics
  * type: group select
  * vocabularies: evidence:findingRelevance
  * states: _,+,=,-
  * labels: neutral, corroborate, equal, against

{{symptoms/evidence:findingRelevance/

<p>O paciente relata que {foi pescar na mata}/=/. Logo antes de chegar no rio, viu {um bicho se que fazia um barulho engraçadinho com o rabo}/+/. Então, o paciente saiu atrás do bicho e, {quando se abaixou para encostar nele}/=/, o animal pulou e lhe {deu uma mordida}/+/ no braço. {olho caído}/+/, tem {dificuldade para engolir}/+/ e está {cansado para respirar}/+/. A ferida {não apresenta nenhuma característica marcante}/=/. Além disso, seus {batimentos cardíacos estão normais}/=/.</p>

}}

<p>Então, qual animal peçonhento você acha que picou o paciente?</p>

* Jararaca -> Cascavel errado
* Cascavel -> Cascavel certo
* Aranha Marrom -> Cascavel errado
* Escorpião -> Cascavel errado

# Jararaca certo (profile_multiple)
~ points := points + 10

<div class="styt-profile-multiple">
<img src="https://cdn.pixabay.com/photo/2019/06/26/20/30/zombie-4301192_640.png">
<img src="https://media.giphy.com/media/26DN0U3SqKDG2fTFe/giphy.gif">

Parabéns! Você diagnosticou corretamente e pôde dar ao paciente um soro contra veneno de <b>Jararaca</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Jararaca errado (profile_multiple)
~ points := points - 10

<div class="styt-profile-multiple">
<img src="https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/treatment-wrong.png">
<img src="https://media.giphy.com/media/26DN0U3SqKDG2fTFe/giphy.gif">

Infelizmente você fez o tratamento incorreto... O paciente foi picado por uma <b>Jararaca</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Cascavel certo (profile_multiple)
~ points := points + 10

<div class="styt-profile-multiple">
<img src="https://cdn.pixabay.com/photo/2019/06/26/20/30/zombie-4301192_640.png">
<img src="https://media.giphy.com/media/dEfPULgo1DYfm/giphy.gif">

Parabéns! Você diagnosticou corretamente, e pôde dar ao paciente um soro contra veneno de <b>Cascavel</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Cascavel errado (profile_multiple)
~ points := points - 10

<div class="styt-profile-multiple">
<img src="https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/treatment-wrong.png">
<img src="https://media.giphy.com/media/dEfPULgo1DYfm/giphy.gif">

Infelizmente você fez o tratamento incorreto... O paciente foi picado por uma <b>Cascavel</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Aranha Marrom certo (profile_multiple)
~ points := points + 10

<div class="styt-profile-multiple">
<img src="https://cdn.pixabay.com/photo/2019/06/26/20/30/zombie-4301192_640.png">
<img src="https://media.giphy.com/media/1k2UWbJCWqvXtq1xDJ/giphy.gif">

Parabéns! Você diagnosticou corretamente, e pôde dar ao paciente um soro contra veneno de <b>Aranha Marrom</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Aranha Marrom errado (profile_multiple)
~ points := points - 10

<div class="styt-profile-multiple">
<img src="https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/treatment-wrong.png">
<img src="https://media.giphy.com/media/1k2UWbJCWqvXtq1xDJ/giphy.gif">

Infelizmente você fez o tratamento incorreto... O paciente foi picado por uma <b>Aranha Marrom</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Escorpião certo (profile_multiple)
~ points := points + 10

<div class="styt-profile-multiple">
<img src="https://cdn.pixabay.com/photo/2019/06/26/20/30/zombie-4301192_640.png">
<img src="https://media.giphy.com/media/QscbCkTeoBb68/giphy.gif">

Parabéns! Você diagnosticou corretamente, e pôde dar ao paciente um soro contra veneno de <b>Escorpião</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

# Escorpião errado (profile_multiple)
~ points := points - 10

<div class="styt-profile-multiple">
<img src="https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/treatment-wrong.png">
<img src="https://media.giphy.com/media/QscbCkTeoBb68/giphy.gif">

Infelizmente você fez o tratamento incorreto... O paciente foi picado por um <b>Escorpião</b>.
<br><br>
<b>Você tem ^points^ pontos.</b>
</div>

* Próximo Caso -> Flow.Next

___ Flow ___

* Sequential:
  * Zombie Health 01
  * Quiz 1
  * Perguntas Escorpiao 1
  * Perguntas Cascavel 1
  * Perguntas Jararaca 1
  * Perguntas Aranha 1
  * Fase 1
  * Caso 1
  * Caso 2
  * Caso 3
  * Caso 4
  * Caso 5
  * Caso 6
  * Caso 7
  * Caso 8
  * Caso 9
  * Caso 10
  * Fase 2
  * Caso 11
  * Caso 12
  * Caso 13
  * Caso 14
  * Caso 15
  * Caso 16
  * Quiz 2
  * Perguntas Escorpiao 2
  * Perguntas Cascavel 2
  * Perguntas Jararaca 2
  * Perguntas Aranha 2
  * Final

___ Template ___

* template: simple/case/quiz_sequence

___ Flow ___

* Sequential:
  * _sequential_

___ Data ___

* theme: simple(purple)
* namespaces:
  * evidence: http://purl.org/versum/evidence/
* templates:
  * categories:
    * quiz:
      * Quiz: simple/knot/quiz
