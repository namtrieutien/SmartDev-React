export const formatPrice = (price) => {
  let priceString = ""
  let check = 0;
  while (price > 999) {
    check = 1;
    let num = price % 1000;
    if (num < 10) {
      num = '00' + num
    } else if (num < 100) {
      num = '0' + num;
    }
    priceString = '.' + num + priceString;
    price = Math.floor(price / 1000);
    if (price <= 999) {
      priceString = price + '' + priceString;
      break;
    }
  }
  if (check === 0) {
    priceString = price + '' + priceString;
  }
  return priceString;
}
