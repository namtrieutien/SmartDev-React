    export const VNDformat = (money) => {
        return money ? (money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })) : ("0VND");
      }