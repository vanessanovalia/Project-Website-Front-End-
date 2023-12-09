function hitungtotal() {
    var namastr = document.fform.inama.value;
    var add = document.fform.iadd.value;
    var jumlahInt = parseFloat(document.fform.ijumlah.value);
    var hb = 0.0;
    var ha = 0.0;
    var total = 0.0;
    if (namastr == "Tuna Sandwich") {
      hb = 25000;
    } else if (namastr == "Salad Sandwich") {
      hb = 20000;
    } else if (namastr == "Thin Sandwich") {
      hb = 20000;
    } else if (namastr == "Thick Stuffed Sandwich") {
        hb = 28000;
    } else if (namastr == "Double Sandwich"){
        hb = 37000;
    } else if(namastr == "Chicken Sub Sandwich"){
        hb = 25000;
    } else if(namastr =="Pizza Mozarella"){
        hb = 50000;
    } else if(namastr == "Pizza Jamur"){
        hb = 45000;
    } else if(namastr =="Pizza Fruit"){
        hb = 40000;
    } else if(namastr == "Pizza Corn Cheese"){
        hb = 50000;
    } else if(namastr == "Pizza With Minced Beef Meet"){
        hb = 60000;
    } else if(namastr =="Pizza Tommato"){
        hb = 45000;
    } else if(namastr =="Chicken Burger"){
        hb = 40000;
    } else if(namastr =="Cheese Burger"){
        hb = 45000;
    } else if(namastr =="Beef Burger"){
        hb = 50000;
    } else if(namastr =="Tempeh Burger"){
        hb = 35000;
    } else if(namastr =="Veggie Burger"){
        hb = 35000;
    } else if(namastr =="Fish Burger"){
        hb = 40000;
    }

    if (add =="None"){
        ha = 0;
    } else if(add =="Pancake"){
        ha = 20000;
    } else if(add =="Ice Croffle"){
        ha = 25000;
    } else if(add =="Chocolate Cookies"){
        ha = 25000;
    }
  
    total = (hb * jumlahInt) + ha;
  
    document.fform.oharga.value = eval(hb);
    document.fform.ototal.value = eval(total);
  }