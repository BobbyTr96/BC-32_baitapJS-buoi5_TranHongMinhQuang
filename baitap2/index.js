function tinhTien() {
  // đầu vào
  var ten = document.getElementById("ten").value;
  var soDien = document.getElementById("soDien").value * 1;
  var tienDien = 0;
  //xử lý

  tienDien = calTienDien(soDien, 500, 650, 850, 1100, 1300);
  shown(tienDien, ten);
}

// price1 = tien điện 0 => 50 kw
// price2 = tien điện 51 => 100 kw
// price3 = tien điện 101 => 200 kw
// price4 = tien điện 201 => 350 kw
// price5 = tien điện 351 kw =>
function calTienDien(soDien, price1, price2, price3, price4, price5) {
  tienDien1 = 0;
  if (soDien <= 50) {
    tienDien1 = soDien * price1;
  } else if (soDien > 50 && soDien <= 100) {
    tienDien1 = 50 * price1 + (soDien - 50) * price2;
  } else if (soDien > 100 && soDien <= 200) {
    tienDien1 = 50 * price1 + 50 * price2 + (soDien - 100) * price3;
  } else if (soDien > 200 && soDien <= 350) {
    tienDien1 =
      50 * price1 + 50 * price2 + 100 * price3 + (soDien - 200) * price4;
  } else if (soDien > 350) {
    tienDien1 =
      50 * price1 +
      50 * price2 +
      100 * price3 +
      150 * price4 +
      (soDien - 350) * price5;
  } else alert("Số Kw không hợp lệ !!! vui lòng nhập lại");
  return tienDien1;
}

function shown(tienDien, ten) {
  var currenFormat = new Intl.NumberFormat("vn-VN");
  document.getElementById("result").innerHTML =
    "Họ tên : " + ten + " ; " + currenFormat.format(tienDien);
}
