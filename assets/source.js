document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
  const message = `Halo saya mau beli ${product_name} - ${product_price}`
  const whatsapp = `https://wa.me/6288973748682?text=${message}`
  open(whatsapp, "_blank")
}

function chat() {
  alert('Halo..............Selamat Berbelanja GUYS');
}
