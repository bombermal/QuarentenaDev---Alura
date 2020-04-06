function calcular(){
  var high = document.getElementById("high").value;
  var weight = document.getElementById("weight").value;
  var calcIMC = weight/((high/100)**2);
  switch (true){
    case (calcIMC < 17):
      document.getElementById("result").innerHTML="Muito abaixo do peso";
      break;
    case (calcIMC >= 17 && calcIMC < 18.5):
      document.getElementById("result").innerHTML="Abaixo do peso";
      break;
    case (calcIMC >= 18.5 && calcIMC < 25):
      document.getElementById("result").innerHTML="Peso normal";
      break;
    case (calcIMC >= 25 && calcIMC < 30):
      document.getElementById("result").innerHTML="Acima do peso";
      break;
    case (calcIMC >= 30 && calcIMC < 35):
      document.getElementById("result").innerHTML="Obesidade I";
      break;
    case (calcIMC >= 35 && calcIMC < 40):
      document.getElementById("result").innerHTML="Obesidade II";
      break;
    defalt:
      document.getElementById("result").innerHTML="Cálculo inconsistente";
      break;
  }
}

function mediaCalc(){
  document.getElementById("result2").innerHTML="A média de idades é: "+(30+20+15+10)/4;
}

function idadeAvo(){
  dt = new Date;
  ano_atual = dt.getFullYear();
  document.getElementById("result3").innerHTML="A avó da amiga de Maria possui: "+(ano_atual-1904)+" anos.";

}
