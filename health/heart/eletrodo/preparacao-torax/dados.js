{
  type: "eletrico";
  user: "";
  image: 1;
  estrutura: "Sino atrial";
  eletrico: "Estímulo elétrico DISPARANDO ..."
}

{
  type: "mecanico";
  user: "";
  image: 1;
  estrutura: "Átrio";
  mecanico: "Contração atrial";
  fisio: "Envio de sangue sob pressão do átrio para ventrículos"
}

{
  type: "onda";
  user: "";
  image: 1
}

{
  type: "conexao";
  user: "";
  onda: 1;
  eletro: 1;
  mec: 1;
  anterior: null;
  proxima: null;
}

{
  type: "exercicio"
  id_usuario: "";
  time: "";
  vez: 1;
  conexoes: 5;
  conexao1:{
    onda: 1;
    eletro: 1;
    mec: 1
  }
  conexao2:{
    onda: 2;
    eletro: 2;
    mec: 2
  }
  conexao3:{
    onda: 3;
    eletro: 3;
    mec: 3
  }
  conexao4:{
    onda: 4;
    eletro: 4;
    mec: 4
  }
  conexao5:{
    onda: 5;
    eletro: 5;
    mec: 5
  }
}

{
  type: "resultado";
  id_usuario: "";
  time: "";
  vez: 1;
  acertou: True;
  tutor: False;
  timeTutor: "";
}

{
  type: "video";
  id_usuario: "";
  time: "";
}
{
  type: "preTeste";
  id_usuario: "";
  time: "";
  nota: 10;
  q1: "E"
  q2: "B"
  q3: "A"
  q4: "C"
  q5: "D"
  q6: "E"
  q7: "A"
  q8: "B"
  q9: "C"
  q10: "D"
}
{
  type: "posTeste";
  id_usuario: "";
  time: "";
  nota: 10;
  q1: "E"
  q2: "B"
  q3: "A"
  q4: "C"
  q5: "D"
  q6: "E"
  q7: "A"
  q8: "B"
  q9: "C"
  q10: "D"
}