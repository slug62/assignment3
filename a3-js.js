/**
 * Created by aa8439 on 6/22/2016.
 */
var i = 1;
function countChars(id, o) {
    var test = document.getElementById(id);
    var t = test.value.length;
    o.innerHTML = t + " length";
}
function addTextField(){
    var d = document.createElement("div");
    var d2 = document.createElement("div");
    var tf = document.createElement("input");
    var br = document.createElement("br");
    var divtf = document.getElementById("tfields");
    d.setAttribute('id', "divtextfield"+i);
    d2.setAttribute('id', "output"+i);
    d2.innerHTML = "0 length";
    tf.setAttribute('type', 'text');
    tf.setAttribute('id', "textfield"+i);
    tf.setAttribute('class', "tf");
    tf.setAttribute('onkeyup', "countChars(this.id, output"+i+");");
    d.appendChild(br);
    d.appendChild(tf);
    divtf.appendChild(d);
    divtf.appendChild(d2);
    i++;
}
function removeTextField() {
    i--;
    if(document.getElementById("divtextfield"+i) != null) {
        document.getElementById("divtextfield"+i).remove();
        document.getElementById("output"+i).remove();
    }else{
        i++;
    }
}
function sortTextFields(){
    var test = document.getElementsByClassName("tf");
    //test[0].value = test[1].value;

    var sorted = [];

    for(var t = 0; t < test.length; t++){
        sorted.push(test[t].value);
    }
    sorted.sort();
    for(var i = 0; i < test.length; i++){
        test[i].value = sorted[i];
        countChars(test[i].id, output+i);
    }
}
