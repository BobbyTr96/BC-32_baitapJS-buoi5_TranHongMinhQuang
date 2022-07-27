function doanhNghiep() {
  var chonLoai = document.getElementById("chonLoai").value * 1;
  if (chonLoai === 2) {
    document.getElementById("soLuongKetNoiThem").style.display = " block ";
  } else {
    document.getElementById("soLuongKetNoiThem").style.display = " none ";
  }
}

function tinhTien() {
  //đầu vào
  var chonLoai = document.getElementById("chonLoai").value * 1;
  var maKhachHang = document.getElementById("maKhachHang").value * 1;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var soLuongKetNoiThem =
    document.getElementById("soLuongKetNoiThem").value * 1;
  var tienCap = 0;

  switch (chonLoai) {
    case 1:
      {
        tienCap = calcTienCap(soKenhCaoCap, soLuongKetNoiThem, 4.5, 20.5, 7.5);
      }
      break;
    case 2: {
      tienCap = calcTienCap(soKenhCaoCap, soLuongKetNoiThem, 15, 75, 50,5);
    }
  }

  //đầu ra
  document.getElementById("result").innerHTML = "Mã khách hàng là : " + maKhachHang + " ; " + " Tiền Cáp: $" +tienCap +".00" ;
}

/** price1 = phí xử lý hóa đơn
 * price2 =  phí dịch vụ
 * price3 = phí thuê kênh cao cấp / kênh
 * price4 =  phí thêm đầu kết nối
 */
function calcTienCap(
  soKenhCaoCap,
  soLuongKetNoiThem,
  price1,
  price2,
  price3,
  price4
) {
  var tienCap1 = price1 + price2 + price3 * soKenhCaoCap;
  if (soLuongKetNoiThem >= 0 && soLuongKetNoiThem < 10) {
    var tienCap1 = price1 + price2 + price3 * soKenhCaoCap;
  } else if (soLuongKetNoiThem > 10) {
    var tienCap1 =
      price1 + price2 + (soLuongKetNoiThem-10) * price4 + price3 * soKenhCaoCap;
  }
  return tienCap1;
}
