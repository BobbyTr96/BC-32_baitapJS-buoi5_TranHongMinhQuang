function tinhTien() {
  // đầu vào
  var ten = document.getElementById("ten").value;
  var tongThuNhap = document.getElementById("tongThuNhap").value;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value;
  var tienThuePhaiDong = 0;

  tienThuePhaiDong = calcTienThue(tongThuNhap,soNguoiPhuThuoc,0.05,0.1,0.15,0.2,0.25,0.3,0.35)

  // đầu ra
  var currenFormat = new Intl.NumberFormat("vn-VN");
  document.getElementById("result").innerHTML = "Tên: " +ten + " ; " + "Tiền thuế thu nhập cá nhân: " + currenFormat.format(tienThuePhaiDong) ;
}

/**thue1 = % tiền thuế dựa trên tổng thu nhập 0 => 60tr = 5% */
/**thue2 = % tiền thuế dựa trên tổng thu nhập 61 => 120tr = 10%*/
/**thue3 = % tiền thuế dựa trên tổng thu nhập 121 => 210tr = 15% */
/**thue4 = % tiền thuế dựa trên tổng thu nhập 211 => 384tr =20% */
/**thue5 = % tiền thuế dựa trên tổng thu nhập 385 => 624tr = 25%  */
/**thue6 = % tiền thuế dựa trên tổng thu nhập 625 => 960tr = 30% */
/**thue7 = % tiền thuế dựa trên tổng thu nhập 961 => = 35% */

function calcTienThue(
  tongThuNhap,
  soNguoiPhuThuoc,
  thue1,
  thue2,
  thue3,
  thue4,
  thue5,
  thue6,
  thue7
) {
  var tienthue1 = 0;
  if (tongThuNhap >= 10e6 && tongThuNhap <= 60e6) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue1;
  } else if (tongThuNhap > 60e6 && tongThuNhap <= 120e6) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue2;
  } else if (tongThuNhap > 120e6 && tongThuNhap <= 210e6) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue3;
  } else if (tongThuNhap > 210e6 && tongThuNhap <= 384e6) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue4;
  }else if (tongThuNhap > 384e6 && tongThuNhap <= 624e6) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue5;
  }else if (tongThuNhap > 624e6 && tongThuNhap <= 960e6) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue6;
  }else if (tongThuNhap > 960e6 ) {
    tienthue1 = (tongThuNhap - 4e6 - soNguoiPhuThuoc * 16e5 ) * thue7;
  }else {
    alert("số tiền thu nhập không hợp lệ vui lòng nhập lại")
  }
  return tienthue1 ;
} 
