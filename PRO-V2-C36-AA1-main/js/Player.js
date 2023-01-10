class Player {
  constructor() {
  this.nome = null;
  this.positionX = width/ 2 -100; 
  this.positionY = height -500;
  this.windex = null;
  this.ganhadores = 0;
  }

  pegaquantijogadores(){
  database.ref("quantjogadores").on("value",function(data){quantijogadores = data .val()})
  }
  atualizarquantjogadores(quantijogadores){
  database.ref("/").update({quantjogadores:quantijogadores
  })
  }
  adcjogadores(){
  
  var jogadores = "jogadores/player"+this.windex;
  if (this.windex == 1){
  this.positionX = width/2 + 100;
  }
  if (this.windex == 2){
  this.positionX = width/2 - 100;
  }
  database.ref(jogadores).set({
  nome:this.nome, positionX: this.positionX, positionY: this.positionY,
  });
  }
  atualizarposiçao(){
  var jogadores = "jogadores/player"+this.windex;
  database.ref(jogadores).update({
  positionX: this.positionX, positionY: this.positionY, ganhadores: this.ganhadores,
  });
  }
  static jogadoresinfobancodedados(){
  database.ref("jogadores").on("value",function(data){infojogadoresdobancodedados = data .val()})
  }
}
