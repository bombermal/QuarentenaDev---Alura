function load_form(){
  tag_name = prompt("Qual seu nome");
  tag_birthday = prompt("Quando você nasceu?");
  //tag_age = prompt("Qual sua idade?");
  tag_pre_health_condition = confirm("Possui alguma coindição pré-existente?");
  tag_pre_need_monitoring = confirm("Precisa de acompanhamento?");
  tag_health_condition = tag_pre_health_condition ? "Sim" : "Não";
  tag_need_monitoring = tag_pre_need_monitoring ? "Sim" : "Não";

  your_name.innerHTML = tag_name;
  birthday.innerHTML = tag_birthday;
  age.innerHTML = calc_age(tag_birthday);
  //age.innerHTML = tag_age;
  health_condition.innerHTML = tag_health_condition;
  need_monitoring.innerHTML = tag_need_monitoring;
}

function calc_age(tag_birthday){
  my_age = new Date(age_string);
  dt = new Date

  return(dt.getFullYear() - my_age.getFullYear())
}

function mes(){
  tag_mes = parseInt(prompt("Digite o número de um mês:"));

  if (tag_mes > 0 && tag_mes < 13){
    switch (true) {
      case (tag_mes == 1):
        the_month.innerHTML = "Janeiro";
        break;
      case (tag_mes == 2):
        the_month.innerHTML = "Fevereiro";
        break;
      case (tag_mes == 3):
        the_month.innerHTML = "Março";
        break;
      case (tag_mes == 4):
        the_month.innerHTML = "Abril";
        break;
      case (tag_mes == 5):
        the_month.innerHTML = "Maio";
        break;
      case (tag_mes == 6):
        the_month.innerHTML = "Junho";
        break;
      case (tag_mes == 7):
        mthe_monthes.innerHTML = "Julho";
        break;
      case (tag_mes == 8):
        the_month.innerHTML = "Agosto";
        break;
      case (tag_mes == 9):
        the_month.innerHTML = "Setembro";
        break;
      case (tag_mes == 10):
        the_month.innerHTML = "Outubro";
        break;
      case (tag_mes == 11):
        the_month.innerHTML = "Novembro";
        break;
      case (tag_mes == 12):
        the_month.innerHTML = "Dezembro";
        break;
      default:
        the_month.innerHTML = "Mês não encontrado";
        break;
    }
  } else{
    mes();
  }
}
