var ele = document.getElementById("section");


setInterval(change,500);

function change(){
   
    var ele2 = document.getElementById("class").value;
    if(ele2== "Select a class"){
        ele.innerHTML="<option>Select a section</option>";
       ele.disabled = true;
    }
    else if (ele2 == "VI"){
        ele.disabled = false;
        ele.innerHTML="<option>A</option><option>B</option><option>C</option><option>D</option><option>E</option> <option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option>";
   
    }
    else if (ele2 == "VII"){
                   ele.disabled =false;
        ele.innerHTML="<option>A</option><option>B</option><option>C</option> <option>D</option><option>E</option> <option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option>";
    }

     else if (ele2 == "VIII"){
                   ele.disabled =false;
        ele.innerHTML="<option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option>";
    }

    else if (ele2 == "IX"){
                   ele.disabled =false;
        ele.innerHTML=" <option>A</option><option>B</option><option>C</option><option>D</option><option>E</option> <option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option> <option>L</option><option>M</option><option>N</option><option>O</option>";
    }

    else if (ele2 == "X"){
                   ele.disabled =false;
        ele.innerHTML="<option>A</option><option>B</option><option>C</option> <option>D</option><option>E</option> <option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option> <option>L</option><option>M</option><option>N</option><option>O</option>";
    }

    else if (ele2 == "XI"){
                   ele.disabled =false;
        ele.innerHTML="  <option>A</option><option>B</option><option>C</option><option>D</option><option>E</option> <option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option> <option>L</option><option>M</option><option>N</option><option>O</option><option>P</option><option>Q</option><option>R</option><option>S</option><option>T</option> <option>U</option><option>V</option><option>W</option><option>X</option>";
    }

    else if (ele2 == "XII"){
                   ele.disabled =false;
        ele.innerHTML=" <option>A</option><option>B</option><option>C</option><option>D</option><option>E</option> <option>F</option><option>G</option><option>H</option><option>I</option><option>J</option><option>K</option> <option>L</option><option>M</option><option>N</option><option>O</option><option>P</option><option>Q</option><option>R</option><option>S</option> <option>T</option> <option>U</option><option>V</option><option>W</option><option>X</option>";
    }

}