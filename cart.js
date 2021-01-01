const numberOfItems = {
  ss: "0",
  sa: "0",
  ap: "0",
  bb: "0",
  ss_h: 0,
  sa_h: 0,
  ap_h: 0,
  bb_h: 0,
};

function updateCart(item) {
  totalHarga =
    parseInt(numberOfItems.ss) * 75 +
    parseInt(numberOfItems.sa) * 25 +
    parseInt(numberOfItems.ap) * 25 +
    parseInt(numberOfItems.bb) * 20;
  totalSatuan = document
    .querySelector("#" + item + "-p")
    .firstChild.nodeValue.substring(4);
  parseInt();
  document.querySelector("#" + item).innerText = numberOfItems[item];
  document.querySelector("#" + item + "-h").innerText =
    numberOfItems[item] * totalSatuan;
  document.querySelector("#total").innerText = totalHarga + ".000";
}

function emptyCart() {
  numberOfItems.ss = "0";
  numberOfItems.sa = "0";
  numberOfItems.ap = "0";
  numberOfItems.bb = "0";
  numberOfItems.ss_h = 0;
  numberOfItems.sa_h = 0;
  numberOfItems.ap_h = 0;
  numberOfItems.bb_h = 0;
  updateCart("ss");
  updateCart("sa");
  updateCart("ap");
  updateCart("ap");
  updateCart("bb");
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    const target = event.target;
    change = target.classList[1];
    item = target.classList[2];
    if (change == "delete") {
      if (numberOfItems[item] == 0) {
        alert("Makanan belum ada di pesanan");
        return;
      }
      result = parseInt(numberOfItems[item]) - 1;
      numberOfItems[item] = result;
      updateCart(item);
      return;
    }
    if (change == "add") {
      result = parseInt(numberOfItems[item]) + 1;
      numberOfItems[item] = result;
      updateCart(item);
      return;
    }
    if (target.id == "empty") {
      emptyCart();
      return;
    }
  });
}
