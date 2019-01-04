/**
 * @author kuuneruchannel
 */

window.onload = function(){

  var data = location.href.split("?")[1];
  var nowQ = data.substr(0,2);
  var allQ = data.substr(2,2);
  var okQ = data.substr(4,2);
  var nowA = data.substr(6,2);

  if(nowA == "01"){
  	okQ = ("00" + (Number(okQ) + 1)).slice(-2);
  	document.getElementById("result").innerHTML = "お見事、正解です！！";
  }else{
  	document.getElementById("result").innerHTML = "残念、不正解です！！";
  }

  if(nowQ == allQ){
    document.getElementById("question_next").value = "最終結果発表へ";
    document.getElementById("question_next").onclick = function(){
      location.href = "result.html?" + nowQ + allQ + okQ;
  　　}
  }else{
  	nowQ = ("00" + (Number(nowQ) + 1)).slice(-2);
  	document.getElementById("question_next").value = "次の問題へ";
    document.getElementById("question_next").onclick = function(){
      location.href = "question" + nowQ + ".html?" + nowQ + allQ + okQ;
  　　}
  }
}

