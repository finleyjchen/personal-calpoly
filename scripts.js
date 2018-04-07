function clearSyll() {
    document.getElementById('syll1').style.display = "none";
    document.getElementById('syll2').style.display = "none";
    document.getElementById('syll3').style.display = "none";

}    

function showSyll1() {
    var syll1 = document.getElementById('syll1');
    clearSyll();
        if (syll1.style.display == "none") {
           syll1.style.display = "block";
        } else {
           syll1.style.display = "none";
        }
    }

function showSyll2() {
    var syll2 = document.getElementById('syll2');
    clearSyll();
    if (syll2.style.display == "none") {
       syll2.style.display = "block";
    } else {
       syll2.style.display = "none";
    }
}

function showSyll3() {
    var syll3 = document.getElementById('syll3');
    clearSyll();
    if (syll3.style.display == "none") {
       syll3.style.display = "block";
    } else {
       syll3.style.display = "none";
    }
}

    
tinymce.init({
    selector: '#noteseditor'
  });