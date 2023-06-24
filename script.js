const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//first dropdown box
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});

//second dropdown box
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

//default currencies
fromDropDown.value = "CAD";
toDropDown.value = "USD";
