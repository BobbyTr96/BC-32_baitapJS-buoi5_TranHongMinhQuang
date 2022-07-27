function ketQua() {
  // đầu vào
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var khuVuc = document.getElementById("khuVuc").value * 1;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var diemMot = document.getElementById("diemMot").value * 1;
  var diemHai = document.getElementById("diemHai").value * 1;
  var diemBa = document.getElementById("diemBa").value * 1;
  var diemTong = 0;
  var tongKet = "";
  // xử lý
  //cách 1
  //   switch (khuVuc) {
  //     case 2:
  //       if (doiTuong === 2) {
  //         diemTong = diemMot + diemHai + diemBa + 2.5 + 2;
  //       } else if (doiTuong === 3) {
  //         diemTong = diemMot + diemHai + diemBa + 1.5 + 2;
  //       } else if (doiTuong === 4) {
  //         diemTong = diemMot + diemHai + diemBa + 1 + 2;
  //       }
  //       break;

  //     case 1:
  //       if (doiTuong === 2) {
  //         diemTong = diemMot + diemHai + diemBa + 2.5 + 1;
  //       } else if (doiTuong === 3) {
  //         diemTong = diemMot + diemHai + diemBa + 1.5 + 1;
  //       } else if (doiTuong === 4) {
  //         diemTong = diemMot + diemHai + diemBa + 1 + 1;
  //       }
  //       break;
  //     case 0.5:
  //       if (doiTuong === 2) {
  //         diemTong = diemMot + diemHai + diemBa + 2.5 + 0.5;
  //       } else if (doiTuong === 3) {
  //         diemTong = diemMot + diemHai + diemBa + 1.5 + 0.5;
  //       } else if (doiTuong === 4) {
  //         diemTong = diemMot + diemHai + diemBa + 1 + 0.5;
  //       }
  //       break;
  //   }
  switch (khuVuc) {
    case 2:
      diemTong = calcDiem(diemMot, diemHai, diemBa, doiTuong, khuVuc);
      
      break;
    case 1:
      diemTong = calcDiem(diemMot, diemHai, diemBa, doiTuong, khuVuc);
      
      break;
      case 0.5 :
        diemTong = calcDiem(diemMot, diemHai, diemBa, doiTuong, khuVuc);
       
        break;
  }

  if (diemTong >= diemChuan && diemMot !== 0 && diemHai !== 0 && diemBa !== 0) {
    tongKet = "Bạn Đã Đậu ." + " Tổng Điểm : " + diemTong;
    document.getElementById("result").innerHTML = tongKet ;
  } else if (
    diemTong < diemChuan &&
    diemMot !== 0 &&
    diemHai !== 0 &&
    diemBa !== 0
  ) {
    tongKet = "Bạn Đã Rớt ." + " Tổng Điểm : " + diemTong;
    document.getElementById("result").innerHTML = tongKet ;
  } else if (
    (diemTong >= diemChuan && diemMot === 0) ||
    (diemTong >= diemChuan && diemHai === 0) ||
    (diemTong >= diemChuan && diemBa === 0)
  ) {
    tongKet = "Bạn Đã Rớt ." + " Do có điểm bị 0 ";
    document.getElementById("result").innerHTML = tongKet ;
  } else if (
    (diemTong < diemChuan && diemMot === 0) ||
    (diemTong < diemChuan && diemHai === 0) ||
    (diemTong < diemChuan && diemBa === 0)
  ) {
    tongKet = "Bạn Đã Rớt ." + " Do có điểm bị 0 ";
    document.getElementById("result").innerHTML = tongKet ;
  }

  // đầu ra

  
}


function calcDiem(diemMot, diemHai, diemBa, doiTuong, khuVuc) {
  // var doiTuong = document.getElementById("doiTuong").value * 1;
  var diemTong1 = 0;
  if (doiTuong === 2.5) {
    diemTong1 = diemMot + diemHai + diemBa + khuVuc + doiTuong;
  } else if (doiTuong === 1.5) {
    diemTong1 = diemMot + diemHai + diemBa + khuVuc + doiTuong;
  } else if (doiTuong === 1) {
    diemTong1 = diemMot + diemHai + diemBa + khuVuc + doiTuong;
  }
  return diemTong1;
}

  