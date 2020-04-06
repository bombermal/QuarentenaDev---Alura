function calcular(){
  var idade = document.getElementById("age").value;
  var calcMin = idade*365*70;
  var calcMax = idade*365*75;
  var resp = "Seu coração bateu entre "+calcMin+" a "+calcMax+" vezes até hoje.";
  document.getElementById("result").innerHTML=resp;


}
