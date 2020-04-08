function sorteio(){
  num = parseInt(prompt("Digite um número da sorte: (1 - 10)"));
  rand = Math.floor(Math.random() * 10) + 1;

  if ( num > 10 || num < 1){
    alert("Por favor, digite um número dentro do intervalo pedido.");
    sorteio();
  } else {
    //if (num == rand){
    if (true){
      paragrafoResultado.innerHTML = "Parabéns, você ganhou uma viagem.";
      document.getElementById("win").style.display = "block";
      document.getElementById("lost").style.display = "none";

    } else {
      paragrafoResultado.innerHTML = "Que pena, infelizmente não foi dessa vez";
      document.getElementById("win").style.display = "none";
      document.getElementById("lost").style.display = "block";
    }
  }
}
