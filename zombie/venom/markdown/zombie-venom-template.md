# {numero} (case)

![zumbi_{numero}](https://www.ic.unicamp.br/~santanch/lab/zombie-health/images/gen02/zumbi_{numero}.png)

{nome} se apresentou na clínica reclamando que algum bicho o picou ou mordeu, o que você deseja examinar?

* Local da Picada -> Mostra Sintoma({dor} {sangramento} {inchaco})
* Estado do Zumbi -> Mostra Sintoma({estado})
* Ferida -> Mostra Sintoma({necrose})
* Batimentos -> Mostra Sintoma({arritmia})

* Realizar Diagnóstico -> Diagnóstico {diagnostico}

# Mostra Sintoma (note)

O zumbi <>.

# Diagnóstico jararaca (case)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Jararaca certo
* Cascavel -> Jararaca errado

* Aranha Marrom -> Jararaca errado
* Escorpião -> Jararaca certo

# Diagnóstico cascavel (case)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Cascavel errado
* Cascavel -> Cascavel certo

* Aranha Marrom -> Cascavel errado
* Escorpião -> Cascavel errado

# Diagnóstico aranha marrom (case)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Aranha Marrom errado
* Cascavel -> Aranha Marrom errado

* Aranha Marrom -> Aranha Marrom certo
* Escorpião -> Aranha Marrom errado

# Diagnóstico escorpião (case)

![Treatment](https://www.ic.unicamp.br/~santanch/lab/zombie-health/caseset03/images/doctor.png)

Então, qual animal peçonhento você acha que picou o paciente?

* Jararaca -> Escorpião errado
* Cascavel -> Escorpião errado

* Aranha Marrom -> Escorpião errado
* Escorpião -> Escorpião certo