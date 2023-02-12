document.getElementById("btn").onclick = function(){
    var thang = document.getElementById("month").value;
    var nam = document.getElementById("year").value;
    thang = Number(thang);
    nam = Number(nam);
    var res;
    if((thang < 1 || thang > 12)){
        alert("Nhập lại mày");
        document.getElementById("kq").innerHTML = "";
    }
    else if(nam <= 0){
        alert("Nhập lại mày");
        document.getElementById("kq").innerHTML = "";
    }
    else{
        if(thang == 2){
            if(nam%400 == 0 || nam%4==0 && nam%100!=0) res = 29;
            else res = 28;
        }
        else if(thang == 4 || thang == 6 || thang == 9 || thang == 11){
            res = 30;
        }
        else{
            res = 31;
        }
        document.getElementById("kq").innerHTML = "Tháng " + thang
                                                 + " năm " + nam +
                                                 " có " + res +
                                                  " ngày"; 
    }
}