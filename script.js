document.getElementById("btn").onclick = function(){
    var year = document.getElementById("namDuong").value;
    year = Number(year);
    if(year > 0){
        
        var cans = ["Quý","Giáp","Ất","Bính","Đinh","Mậu",
        "Kỳ","Canh","Tân","Nhâm"];
        var chis = ["Hợi","Tý","Sửu","Dần","Mão","Thìn","Tỵ"
                    ,"Ngọ","Mùi","Thân","Dậu","Tuất"
                   ];
        var res = cans[(year-3)%10] + " " + chis[(year-3)%12];
        document.getElementById("kq").innerHTML = res;
    }
    else{
        alert("Nhập lại");
    } 
   
}