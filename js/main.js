function getMyEle(ele){
    return document.getElementById(ele)
}
function layLoaiXe(){
    var kq;
    var uberX = getMyEle('UberX').checked ;
    var uberSUV = getMyEle('UberSUV').checked ;
    var uberBlack = getMyEle('UberBlack').checked ;

    if(uberX) {
        kq = "uberX";
    } else if(uberSUV) {
        kq = "uberSUV";
    } else if(uberBlack) {
        kq = "uberBlack";
    } 

    return kq;
}



function TinhTien() {
    var laySoKM = document.getElementById('soKM').value ;
    laySoKM = parseFloat(laySoKM);

    var layThoiGianCho = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);

    var divThanhTien = document.getElementById('divThanhTien');
    divThanhTien.style.display = "block";
    var spanTien = document.getElementById('xuatTien');
   
    var loaiXe = layLoaiXe();
    var thanhTien;
    switch (loaiXe) {
        case("uberX"):
            if(laySoKM <=1) {
                thanhTien = laySoKM * 8000 + layThoiGianCho *2000;
            } else if(laySoKM <=20 && laySoKM >1) {
                thanhTien = 8000 + (laySoKM - 1) * 9000 + layThoiGianCho *2000;
            } else if(laySoKM > 20) {
                thanhTien = 8000+ 9000*20 + (laySoKM-21) * 10000 + layThoiGianCho *2000;
            }
        break;
        case("uberSUV"):
        if(laySoKM <=1) {
            thanhTien = laySoKM * 10000 + layThoiGianCho *3000;
        } else if(laySoKM <=20 && laySoKM >1) {
            thanhTien = 10000 + (laySoKM - 1) * 12000 + layThoiGianCho *3000;
        } else if(laySoKM > 20) {
            thanhTien = 10000+ 12000*20 + (laySoKM-21) * 14000 + layThoiGianCho *3000;
        }
        break;
        case("uberBlack"):
        if(laySoKM <=1) {
            thanhTien = laySoKM * 12000 + layThoiGianCho *4000;
        } else if(laySoKM <=20 && laySoKM >1) {
            thanhTien = 12000 + (laySoKM - 1) * 14000 + layThoiGianCho *4000;
        } else if(laySoKM > 20) {
            thanhTien = 12000 + 14000*20 + (laySoKM-21) * 16000 + layThoiGianCho *4000;
        }
        break;      
    }
    spanTien.innerHTML = thanhTien;  
}
