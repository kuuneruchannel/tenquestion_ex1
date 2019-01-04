/**
 * @author kuuneruchannel
 */

window.onload = function(){

  var data = location.href.split("?")[1];
  var nowQ = data.substr(0,2);
  var allQ = data.substr(2,2);
  var okQ = data.substr(4,2);
  var result = (Number(okQ) / Number(allQ)) * 100;

  if(result == 100){
  	document.getElementById("result").innerHTML = "すばらしい！！　100点です。";
  }else if(result >= 80){
  	document.getElementById("result").innerHTML = "おしい！！　もう1回チャレンジしてね。　" + result + "点です。";
  }else{
  	document.getElementById("result").innerHTML = "残念！！　あと3回チャレンジすれば、満点とれるかも。　" + result + "点です。";
  }
}

