/// <reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" />

//........global

var sinir = 0;
var gecici = [];
var sira = 1;
var kolonsayisi = 0;
var alinan = [];
var asil = [];

//........


function eklesil(a)
{

    if ($(a).attr("class") != "buton text-center col-lg-1 col-md-1 col-sm-1 col-xs-1 icyazi") {
        $(a).removeClass("secili");
        sinir--;

        if ($("#bir").attr("value") == $(a).text()) {
            $("#bir").attr("value", "");
        }
        else if ($("#iki").attr("value") == $(a).text()) {
            $("#iki").attr("value", "");
        }
        else if ($("#uc").attr("value") == $(a).text()) {
            $("#uc").attr("value", "");
        }
        else if ($("#dort").attr("value") == $(a).text()) {
            $("#dort").attr("value", "");
        }
        else if ($("#bes").attr("value") == $(a).text()) {
            $("#bes").attr("value", "");
        }
        else if ($("#alti").attr("value") == $(a).text()) {
            $("#alti").attr("value", "");
        }
        else {
            $("#alti").attr("value", "");
        }


    }
    else {
        
        
        if (sinir >= 6) {
            alert("En fazla 6 top seçebilirsiniz !");
        }
        else {
            $(a).addClass("secili");
            sinir++;


            if ($("#bir").attr("value")=="") {
                $("#bir").attr("value", $(a).text());
            }
            else if ($("#iki").attr("value") == "") {
                $("#iki").attr("value", $(a).text());
            }
            else if ($("#uc").attr("value") == "") {
                $("#uc").attr("value", $(a).text());
            }
            else if ($("#dort").attr("value") == "") {
                $("#dort").attr("value", $(a).text());
            }
            else if ($("#bes").attr("value") == "") {
                $("#bes").attr("value", $(a).text());
            }
            else if ($("#alti").attr("value") == "") {
                $("#alti").attr("value", $(a).text());
            }
            else {
                $("#alti").attr("value", $(a).text());
            }
        }

    }

}

function kolonekle()
{

    if (sinir < 6) {
        alert("Lütfen 6 top seçiniz !");
        return;
    }

    
    $("#mytable").append('<tr class="keko"><td>' + sira + '</td><td>' + $("#bir").attr("value") + '</td><td>' + $("#iki").attr("value") + '</td><td>' + $("#uc").attr("value") + '</td><td>' + $("#dort").attr("value") + '</td><td>' + $("#bes").attr("value") + '</td><td>' + $("#alti").attr("value") + '</td><td class="text-center"><button onclick="cikar(this);" type="button" class="_' + sira + ' btn btn-danger">SİL</button></td></tr>');
    sira++;

    var dizi = [];
    dizi.push($("#bir").attr("value"));
    dizi.push($("#iki").attr("value"));
    dizi.push($("#uc").attr("value"));
    dizi.push($("#dort").attr("value"));
    dizi.push($("#bes").attr("value"));
    dizi.push($("#alti").attr("value"));

    alinan.push(dizi);

    temizle();

}

function temizle()
{

    $("#bir").attr("value", "");
    $("#iki").attr("value", "");
    $("#uc").attr("value", "");
    $("#dort").attr("value", "");
    $("#bes").attr("value", "");
    $("#alti").attr("value", "");

    sinir = 0;

    var div = document.getElementById("sayilar");
    for (sayi in div.childNodes) {

        if ($(div.childNodes[sayi]).attr("class") == "buton text-center col-lg-1 col-md-1 col-sm-1 col-xs-1 icyazi secili") {
            $(div.childNodes[sayi]).removeClass("secili");
        }

    }

}

function cikar(vi)
{

    //for (index in asil) {
    //    alert(asil[index]);
    //}

    //var div = document.getElementById("mytable");
    //for (sayi in div.childNodes) {


    //    //if ($(div.childNodes[sayi]).attr("id") == "bol") {
    //    //    alert($(div.childNodes[sayi]).html());
    //    //}


    //    if (div.childNodes[sayi].nodeName == "tr") {
            
    //        if ($(div.childNodes[sayi]).attr("class") == $(vi).attr("class") + " btn btn-danger") {
    //            div.removeChild(div.childNodes[sayi]);
    //        }

    //    }


        
        
    //    //alert($(div.childNodes[sayi]).attr("class"));

    //}
}

function kontrol()
{
    kolonsayisi = 0;
    asil = [];

    for (index in alinan)
    {
        kolonsayisi++;
    }
    if (kolonsayisi < 1)
    {
        alert("Lütfen en az bir kolon oynayın !");
        return;
    }

    for (var i = 0; i < kolonsayisi; i++) {
        var dizi = [];

        for (var a = 0; a < 6; a++) {

            var durum = false;
            var yersiz = randomsayisal();

            for (index in dizi) {
                if (dizi[index] == yersiz) {
                    durum = true;
                    break;
                }
            }

            if (durum) {
                a--;
            }
            else {
                dizi[a] = yersiz;
            }

        }

        asil.push(dizi);

    }

    $(".renk3").slideUp(200);
    $("#mytablesonuc").html('<tr id="Tr1" class="tablebaslik"><th>NO</th><th>SİZİN OYNADIĞINIZ</th><th>ÇIKAN SAYILAR</th><th>DOĞRU SAYISI</th></tr>');
    


    var ss = 0;
    var dogrusayisi = 0;
    for (index in alinan) {
        
        var user = alinan[index];
        var pc = asil[index];

        for (var i = 0; i < 6; i++) {
            
            if (user[i] == pc[i]) {
                dogrusayisi++;
            }

        }

        ss++;
        $("#mytablesonuc").append('<tr class="keko"><td>' + ss + '</td><td>' + user + '</td><td>' + pc + '</td><td>' + dogrusayisi + '</td></tr>');

        dogrusayisi = 0;

    }


    $(".renk3").slideDown(500);



}

function randomsayisal() {

    var deger = Math.floor(Math.random() * 100);

    while (deger > 49 || deger < 1) {
        deger = Math.floor(Math.random() * 100);
    }

    return deger;

}
