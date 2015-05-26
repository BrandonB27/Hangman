/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var words = [],
        CityWord = '',
        CompanyWord = '',
        FullnameWord = '',
        tries = [],
        Lives = 6,
        x = 0;
        score1 = 45;
        score2 = 45;
var playerflag = 0; 
var k = 0;
//var butt = document.getElementsByClassName("btn-warning");
function image(number) {
    $('#imghang').removeAttr("class").addClass("image" + number);
}

function LoadData() {
    var word = '';
    $.ajax({
        url: 'info/data.json',
        async: false
    }).done(function(data) {
        for (word in data) {
            words.push(data[word]);
        }
    }, 'json');
}

function players(){
    // Store
    localStorage.setItem("Player1", parseInt(score1));
    localStorage.setItem("Player2", parseInt(score2));
    // Retrieve
    document.getElementById("test").innerHTML = localStorage.getItem("Player1");
    document.getElementById("test2").innerHTML = localStorage.getItem("Player2");
}

function playerchoose(){
    document.getElementById("play1").addEventListener("click", function(){
             playerflag = 1; alert("Player 1 Selected");category();} , true);
    document.getElementById("play2").addEventListener("click", function(){
            playerflag = 2; alert("Player 2 Selected");category();} , true);
}

function category(){
    document.getElementById("c").addEventListener("click", function(){
            x = 1;
            alert("City");
            LoadData();
            InitWord();
            makeGuess();
            $('#butt').attr('onclick', 'changea();');
            $('#butt2').attr('onclick', 'changeb();');
        $('#butt3').attr('onclick', 'changec();');
    $('#butt4').attr('onclick', 'changed();');
$('#butt5').attr('onclick', 'changee();');
$('#butt6').attr('onclick', 'changef();');
$('#butt7').attr('onclick', 'changeg();');
$('#butt8').attr('onclick', 'changeh();');
$('#butt9').attr('onclick', 'changei();');
$('#butt10').attr('onclick', 'changej();');
$('#butt11').attr('onclick', 'changek();');
$('#butt12').attr('onclick', 'changel();');
$('#butt13').attr('onclick', 'changem();');
$('#butt14').attr('onclick', 'changen();');
$('#butt15').attr('onclick', 'changeo();');
$('#butt16').attr('onclick', 'changep();');
$('#butt17').attr('onclick', 'changeq();');
$('#butt18').attr('onclick', 'changer();');
$('#butt19').attr('onclick', 'changes();');
$('#butt20').attr('onclick', 'changet();');
$('#butt21').attr('onclick', 'changeu();');
$('#butt22').attr('onclick', 'changev();');
$('#butt23').attr('onclick', 'changew();');
$('#butt24').attr('onclick', 'changex();');
$('#butt25').attr('onclick', 'changey();');
$('#butt26').attr('onclick', 'changez();');} , true);
        
    document.getElementById("cc").addEventListener("click", function(){
            x = 2;
            alert("Company");
            LoadData();
            InitWord();
            makeGuess();
            $('#butt').attr('onclick', 'changea();');
        $('#butt2').attr('onclick', 'changeb();');
        $('#butt3').attr('onclick', 'changec();');
    $('#butt4').attr('onclick', 'changed();');
$('#butt5').attr('onclick', 'changee();');
$('#butt6').attr('onclick', 'changef();');
$('#butt7').attr('onclick', 'changeg();');
$('#butt8').attr('onclick', 'changeh();');
$('#butt9').attr('onclick', 'changei();');
$('#butt10').attr('onclick', 'changej();');
$('#butt11').attr('onclick', 'changek();');
$('#butt12').attr('onclick', 'changel();');
$('#butt13').attr('onclick', 'changem();');
$('#butt14').attr('onclick', 'changen();');
$('#butt15').attr('onclick', 'changeo();');
$('#butt16').attr('onclick', 'changep();');
$('#butt17').attr('onclick', 'changeq();');
$('#butt18').attr('onclick', 'changer();');
$('#butt19').attr('onclick', 'changes();');
$('#butt20').attr('onclick', 'changet();');
$('#butt21').attr('onclick', 'changeu();');
$('#butt22').attr('onclick', 'changev();');
$('#butt23').attr('onclick', 'changew();');
$('#butt24').attr('onclick', 'changex();');
$('#butt25').attr('onclick', 'changey();');
$('#butt26').attr('onclick', 'changez();');}, true);
    document.getElementById("ccc").addEventListener("click", function(){
            x = 3;
            alert("FullName");
            LoadData();
            InitWord();
            makeGuess();
            $('#butt').attr('onclick', 'changea();');
        $('#butt2').attr('onclick', 'changeb();');
        $('#butt3').attr('onclick', 'changec();');
    $('#butt4').attr('onclick', 'changed();');
$('#butt5').attr('onclick', 'changee();');
$('#butt6').attr('onclick', 'changef();');
$('#butt7').attr('onclick', 'changeg();');
$('#butt8').attr('onclick', 'changeh();');
$('#butt9').attr('onclick', 'changei();');
$('#butt10').attr('onclick', 'changej();');
$('#butt11').attr('onclick', 'changek();');
$('#butt12').attr('onclick', 'changel();');
$('#butt13').attr('onclick', 'changem();');
$('#butt14').attr('onclick', 'changen();');
$('#butt15').attr('onclick', 'changeo();');
$('#butt16').attr('onclick', 'changep();');
$('#butt17').attr('onclick', 'changeq();');
$('#butt18').attr('onclick', 'changer();');
$('#butt19').attr('onclick', 'changes();');
$('#butt20').attr('onclick', 'changet();');
$('#butt21').attr('onclick', 'changeu();');
$('#butt22').attr('onclick', 'changev();');
$('#butt23').attr('onclick', 'changew();');
$('#butt24').attr('onclick', 'changex();');
$('#butt25').attr('onclick', 'changey();');
$('#butt26').attr('onclick', 'changez();');}, true);
    document.getElementById("rand").addEventListener("click", function(){
            x = Math.floor((Math.random() * 3) + 1);
            alert("Random");
            LoadData();
            InitWord();
            makeGuess();
            $('#butt').attr('onclick', 'changea();');
        $('#butt2').attr('onclick', 'changeb();');
        $('#butt3').attr('onclick', 'changec();');
    $('#butt4').attr('onclick', 'changed();');
$('#butt5').attr('onclick', 'changee();');
$('#butt6').attr('onclick', 'changef();');
$('#butt7').attr('onclick', 'changeg();');
$('#butt8').attr('onclick', 'changeh();');
$('#butt9').attr('onclick', 'changei();');
$('#butt10').attr('onclick', 'changej();');
$('#butt11').attr('onclick', 'changek();');
$('#butt12').attr('onclick', 'changel();');
$('#butt13').attr('onclick', 'changem();');
$('#butt14').attr('onclick', 'changen();');
$('#butt15').attr('onclick', 'changeo();');
$('#butt16').attr('onclick', 'changep();');
$('#butt17').attr('onclick', 'changeq();');
$('#butt18').attr('onclick', 'changer();');
$('#butt19').attr('onclick', 'changes();');
$('#butt20').attr('onclick', 'changet();');
$('#butt21').attr('onclick', 'changeu();');
$('#butt22').attr('onclick', 'changev();');
$('#butt23').attr('onclick', 'changew();');
$('#butt24').attr('onclick', 'changex();');
$('#butt25').attr('onclick', 'changey();');
$('#butt26').attr('onclick', 'changez();');}, true); 
}

function changea(){
        k = 1;
        reload();
}
function changeb(){
        k = 2;
        reload();
}
function changec(){
        k = 3;
        reload();
}
function changed(){
        k = 4;
        reload();
}
function changee(){
        k = 5;
        reload();
}
function changef(){
        k = 6;
        reload();
}
function changeg(){
        k = 7;
        reload();
}
function changeh(){
        k = 8;
        reload();
}
function changei(){
        k = 9;
        reload();
}
function changej(){
        k = 10;
        reload();
}
function changek(){
        k = 11;
        reload();
}
function changel(){
        k = 12;
        reload();
}
function changem(){
        k = 13;
        reload();
}
function changen(){
        k = 14;
        reload();
}
function changeo(){
        k = 15;
        reload();
}
function changep(){
        k = 16;
        reload();
}
function changeq(){
        k = 17;
        reload();
}
function changer(){
        k = 18;
        reload();
}
function changes(){
        k = 19;
        reload();
}
function changet(){
        k = 20;
        reload();
}
function changeu(){
        k = 21;
        reload();
}
function changev(){
        k = 22;
        reload();
}
function changew(){
        k = 23;
        reload();
}
function changex(){
        k = 24;
        reload();
}
function changey(){
        k = 25;
        reload();
}
function changez(){
        k = 26;
        reload();
}


function CreateWord() {
    CityWord = words[Math.floor(Math.random() * words.length)].city;
    CompanyWord = words[Math.floor(Math.random() * words.length)].company;
    FullnameWord = words[Math.floor(Math.random() * words.length)].fullname;
}

function HideWord(f) {
    var HWord = '';
    if (x===1){
    for (var i = 0; i < CityWord.length; i++) {
        if (tries.indexOf(CityWord[i].toLowerCase(), 0) === -1) {
            HWord += '_ ';
        } else {
            HWord += CityWord[i];
        }
    }
    return HWord;
    }
    if (x===2){
    for (var i = 0; i < CompanyWord.length; i++) {
        if (tries.indexOf(CompanyWord[i].toLowerCase(), 0) === -1) {
            HWord += '_ ';
        } else {
            HWord += CompanyWord[i];
        }
    }
    return HWord;
    }
    if (x===3){
    for (var i = 0; i < FullnameWord.length; i++) {
        if (tries.indexOf(FullnameWord[i].toLowerCase(), 0) === -1) {
            HWord += '_ ';
        } else {
            HWord += FullnameWord[i];
        }
    }
    return HWord;
    }
}

function InitWord() {
    while ((CityWord || CompanyWord || FullnameWord) === '') {
        CreateWord();
    }
    $('#gameWord').html(HideWord());
}

function makeGuess() {
    tries.sort();
    $('#triesbefore').html(tries.join(', '));
}

function wipeGuess() {
    var onetime = [];
    $.each(tries, function(index, element) {
        if (element.length > 0 && $.inArray(element, onetime) === -1) {
            onetime.push(element);
        }
    });
    tries = onetime;
}

function addGuess() {
    
    if (/^[a-zA-Z]*$/.test($('#butt').val()) && typeof $('#butt').val() !== "undefined") {
        tries.push($('#butt').val().toLowerCase());
        //$('#butt').val('');
    }
    }
function addguessb(){    
    if (/^[a-zA-Z]*$/.test($('#butt2').val()) && typeof $('#butt2').val() !== "undefined") {
        tries.push($('#butt2').val().toLowerCase());
       // $('#butt2').val('');
    }}
function addguessc(){    
    if (/^[a-zA-Z]*$/.test($('#butt3').val()) && typeof $('#butt3').val() !== "undefined") {
        tries.push($('#butt3').val().toLowerCase());
      //  $('#butt3').val('');
    }}
function addguessd(){    
    if (/^[a-zA-Z]*$/.test($('#butt4').val()) && typeof $('#butt4').val() !== "undefined") {
        tries.push($('#butt4').val().toLowerCase());
       // $('#butt4').val('');
    }}
function addguesse(){    
    if (/^[a-zA-Z]*$/.test($('#butt5').val()) && typeof $('#butt5').val() !== "undefined") {
        tries.push($('#butt5').val().toLowerCase());
       // $('#butt5').val('');
    }}
function addguessf(){    
    if (/^[a-zA-Z]*$/.test($('#butt6').val()) && typeof $('#butt6').val() !== "undefined") {
        tries.push($('#butt6').val().toLowerCase());
       // $('#butt6').val('');
    }}
function addguessg(){    
    if (/^[a-zA-Z]*$/.test($('#butt7').val()) && typeof $('#butt7').val() !== "undefined") {
        tries.push($('#butt7').val().toLowerCase());
       // $('#butt7').val('');
    }}
function addguessh(){    
    if (/^[a-zA-Z]*$/.test($('#butt8').val()) && typeof $('#butt8').val() !== "undefined") {
        tries.push($('#butt8').val().toLowerCase());
      //  $('#butt8').val('');
    }}
function addguessi(){    
    if (/^[a-zA-Z]*$/.test($('#butt9').val()) && typeof $('#butt9').val() !== "undefined") {
        tries.push($('#butt9').val().toLowerCase());
      //  $('#butt9').val('');
    }}
function addguessj(){    
    if (/^[a-zA-Z]*$/.test($('#butt10').val()) && typeof $('#butt10').val() !== "undefined") {
        tries.push($('#butt10').val().toLowerCase());
       // $('#butt10').val('');
    }}
function addguessk(){    
    if (/^[a-zA-Z]*$/.test($('#butt11').val()) && typeof $('#butt11').val() !== "undefined") {
        tries.push($('#butt11').val().toLowerCase());
       // $('#butt11').val('');
    }}
function addguessl(){    
    if (/^[a-zA-Z]*$/.test($('#butt12').val()) && typeof $('#butt12').val() !== "undefined") {
        tries.push($('#butt12').val().toLowerCase());
       // $('#butt12').val('');
    }}
function addguessm(){    
    if (/^[a-zA-Z]*$/.test($('#butt13').val()) && typeof $('#butt13').val() !== "undefined") {
        tries.push($('#butt13').val().toLowerCase());
       // $('#butt13').val('');
    }}
function addguessn(){    
    if (/^[a-zA-Z]*$/.test($('#butt14').val()) && typeof $('#butt14').val() !== "undefined") {
        tries.push($('#butt14').val().toLowerCase());
       // $('#butt14').val('');
    }}
function addguesso(){    
    if (/^[a-zA-Z]*$/.test($('#butt15').val()) && typeof $('#butt15').val() !== "undefined") {
        tries.push($('#butt15').val().toLowerCase());
       // $('#butt15').val('');
    }}
function addguessp(){    
    if (/^[a-zA-Z]*$/.test($('#butt16').val()) && typeof $('#butt16').val() !== "undefined") {
        tries.push($('#butt16').val().toLowerCase());
       // $('#butt16').val('');
    }}
function addguessq(){    
    if (/^[a-zA-Z]*$/.test($('#butt17').val()) && typeof $('#butt17').val() !== "undefined") {
        tries.push($('#butt17').val().toLowerCase());
       // $('#butt17').val('');
    }}
function addguessr(){    
    if (/^[a-zA-Z]*$/.test($('#butt18').val()) && typeof $('#butt18').val() !== "undefined") {
        tries.push($('#butt18').val().toLowerCase());
       // $('#butt18').val('');
    }}
function addguesss(){    
    if (/^[a-zA-Z]*$/.test($('#butt19').val()) && typeof $('#butt19').val() !== "undefined") {
        tries.push($('#butt19').val().toLowerCase());
       // $('#butt19').val('');
    }}
function addguesst(){    
    if (/^[a-zA-Z]*$/.test($('#butt20').val()) && typeof $('#butt20').val() !== "undefined") {
        tries.push($('#butt20').val().toLowerCase());
       // $('#butt20').val('');
    }}
function addguessu(){    
    if (/^[a-zA-Z]*$/.test($('#butt21').val()) && typeof $('#butt21').val() !== "undefined") {
        tries.push($('#butt21').val().toLowerCase());
        //$('#butt21').val('');
    }}
function addguessv(){    
    if (/^[a-zA-Z]*$/.test($('#butt22').val()) && typeof $('#butt22').val() !== "undefined") {
        tries.push($('#butt22').val().toLowerCase());
        ///$('#butt22').val('');
    }}
function addguessw(){    
    if (/^[a-zA-Z]*$/.test($('#butt23').val()) && typeof $('#butt23').val() !== "undefined") {
        tries.push($('#butt23').val().toLowerCase());
       // $('#butt23').val('');
    }}
function addguessx(){    
    if (/^[a-zA-Z]*$/.test($('#butt24').val()) && typeof $('#butt24').val() !== "undefined") {
        tries.push($('#butt24').val().toLowerCase());
       // $('#butt24').val('');
    }}
function addguessy(){    
    if (/^[a-zA-Z]*$/.test($('#butt25').val()) && typeof $('#butt25').val() !== "undefined") {
        tries.push($('#butt25').val().toLowerCase());
       // $('#butt25').val('');
    }}
function addguessz(){    
    if (/^[a-zA-Z]*$/.test($('#butt26').val()) && typeof $('#butt26').val() !== "undefined") {
        tries.push($('#butt26').val().toLowerCase());
       // $('#butt26').val('');
    }}

function alertBox(input) {
    
    if (x === 1){
    if (input) {
        $('#alertBoxTitle').html('You win!');
        $('#alertBoxContent').html('You guessed ' + CityWord + ' in ' + tries.length + ' tries');
    } else {
        $('#alertBoxTitle').html('You lost!');
        $('#alertBoxContent').html('The word was ' + CityWord);
         
      if(playerflag===1){    
        score1 = score1 - 1;
        localStorage.setItem("Player1", parseInt(score1));
        }
        if(playerflag===2){    
        score2 = score2 - 1;
        localStorage.setItem("Player2", parseInt(score2));
        }
            }
    }
    if (x === 2){
    if (input) {
        $('#alertBoxTitle').html('You win!');
        $('#alertBoxContent').html('You guessed ' + CompanyWord + ' in ' + tries.length + ' tries');
    } else {
        $('#alertBoxTitle').html('You lost!');
        $('#alertBoxContent').html('The word was ' + CompanyWord);
       if(playerflag===1){    
        score1 = score1 - 1;
        localStorage.setItem("Player1", parseInt(score1));
        }
        if(playerflag===2){    
        score2 = score2 - 1;
        localStorage.setItem("Player2", parseInt(score2));
        }
    }
    }
    if (x === 3){
    if (input) {
        $('#alertBoxTitle').html('You win!');
        $('#alertBoxContent').html('You guessed ' + FullnameWord + ' in ' + tries.length + ' tries');
    } else {
        $('#alertBoxTitle').html('You lost!');
        $('#alertBoxContent').html('The word was ' + FullnameWord);
        if(playerflag===1){    
        score1 = score1 - 1;
        localStorage.setItem("Player1", parseInt(score1));
        }
        if(playerflag===2){    
        score2 = score2 - 1;
        localStorage.setItem("Player2", parseInt(score2));
        }
    }
    }
    $('#alertBox').modal('toggle');
}

function checklives() {
    var livesleft = Lives;
          if(x===1){
            string = CityWord.toLowerCase();
        }
        if(x===2){
            string = CompanyWord.toLowerCase();
        }
        if(x===3){
            string = FullnameWord.toLowerCase();
        }
    for (var i = 0; i < tries.length; i++) {
        if (string.indexOf(tries[i], 0) === -1) {
            livesleft--;
        }
    }
    if (livesleft <= 0) {
        image(0);
        alertBox(false);
        return;
    }
    image(Lives - livesleft);
}

function checkwin() {
    
    if(x===1){
               if (HideWord() === CityWord) {
        alertBox(true);
    }
        }
        if(x===2){
               if (HideWord() === CompanyWord) {
        alertBox(true);
    }
        }
        if(x===3){
               if (HideWord() === FullnameWord) {
        alertBox(true);
    }
        }
}

function resetGame() {
    image(0);
    CityWord = '';
    CompanyWord = '';
    FullnameWord = '';
    x=0;
    tries = [];
    CreateWord();
}

function reload() {
    if(k===1){addGuess();}
    if(k===2){addguessb();}
    if(k===3){addguessc();}
    if(k===4){addguessd();}
    if(k===5){addguesse();}
    if(k===6){addguessf();}
    if(k===7){addguessg();}
    if(k===8){addguessh();}
    if(k===9){addguessi();}
    if(k===10){addguessj();}
    if(k===11){addguessk();}
    if(k===12){addguessl();}
    if(k===13){addguessm();}
    if(k===14){addguessn();}
    if(k===15){addguesso();}
    if(k===16){addguessp();}
    if(k===17){addguessq();}
    if(k===18){addguessr();}
    if(k===19){addguesss();}
    if(k===20){addguesst();}
    if(k===21){addguessu();}
    if(k===22){addguessv();}
    if(k===23){addguessw();}
    if(k===24){addguessx();}
    if(k===25){addguessy();}
    if(k===26){addguessz();}
    wipeGuess();
    InitWord();
    makeGuess();
    checklives();
    checkwin();
    players();
}

function eraseStorage(){
    document.getElementById("BorrarLocalStorage").addEventListener("dblclick", function(){window.localStorage.clear();}, true);
}

 function load_location() {
        navigator.geolocation.getCurrentPosition(save_location, handleLocationError, {maximumAge: 0, timeout: 1000, enableHighAccuracy: true});
    }

    function handleLocationError(error) {
        alert(error.code + ' - ' + error.message);
    }

    function save_location(position) {
        ls_save('latitude',position.coords.latitude);
        ls_save('longitude',position.coords.longitude);
    }

    function ls_save(key,value) {
        localStorage.setItem(key, value); 
    }

    function get_location() {
    while(typeof localStorage['latitude'] === 'string') {
        return localStorage.getItem("latitude");
    }
}
    load_location();
    console.log(get_location());

$(document).ready(function() {
    document.getElementById("location").innerHTML = localStorage.getItem("latitude");
    document.getElementById("location2").innerHTML = localStorage.getItem("longitude");
    document.getElementById("location3").innerHTML = localStorage.getItem("latitude");
    document.getElementById("location4").innerHTML = localStorage.getItem("longitude");
    playerchoose();
    eraseStorage();
});
