function adicionarLike(){
  likes = document.getElementById("botao").innerHTML.split(" ");

  document.getElementById("botao").innerHTML = (parseInt(likes[0])+1)+" Likes";
}
