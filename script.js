document.getElementById("btn").onclick = function(){
    var res = document.getElementById("luong").value;
    res = Number(res);
    if(res == 0 || res == null){
        alert("Nhập lại");
    }
    else{
        if(res >= 15000000){
            document.getElementById("thue").innerHTML = "Thue thu nhap: 30%"; 
            document.getElementById("luongRong").innerHTML = "Lương của bạn la: " + res*70/100;
        }
        else if(res >= 7000000 && res < 15000000){
            document.getElementById("thue").innerHTML = "Thue thu nhap: 20%"; 
            document.getElementById("luongRong").innerHTML = "Lương của bạn la: " + res*80/100;
        }
        else{
            document.getElementById("thue").innerHTML = "Thue thu nhap: 10%"; 
            document.getElementById("luongRong").innerHTML = "Lương của bạn la: " + res*90/100;
        }
    }
}