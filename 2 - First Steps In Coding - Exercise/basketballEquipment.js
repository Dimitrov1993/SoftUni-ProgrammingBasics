function basketballEquipment(input) {
    let annualFee = Number(input[0]);
    let shoes = annualFee * 0.60;
    let jersey = shoes * 0.80;
    let ball = jersey / 4;
    let accessories = ball / 5;
    let totalPrice = annualFee + shoes + jersey + ball + accessories;

    console.log(totalPrice);
};

basketballEquipment(["550"]);