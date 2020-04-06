function calcular(){
  var distancia = document.getElementById("distancia").value;
  var tempo = document.getElementById("tempo").value;

  document.getElementById("result").innerHTML=2+(distancia*1.4) + (tempo*0.26);
}
