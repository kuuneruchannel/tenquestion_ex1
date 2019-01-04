/**
 * @author kuuneruchannel
 */

window.onload = function(){
	var data = location.href.split("?")[1];
    var nowQ = data.substr(0,2);
    var allQ = data.substr(2,2);
    var okQ = data.substr(4,2);

  	document.getElementById("ans_ok").onclick = function(){
    	location.href = "answer" + nowQ + ".html?" + data + "01";
  	}

  	document.getElementById("ans_ng1").onclick = function(){
    	location.href = "answer" + nowQ + ".html?" + data + "02";
  	}

  	document.getElementById("ans_ng2").onclick = function(){
    	location.href = "answer" + nowQ + ".html?" + data + "02";
  	}

  	document.getElementById("ans_ng3").onclick = function(){
    	location.href = "answer" + nowQ + ".html?" + data + "02";
  	}
}

