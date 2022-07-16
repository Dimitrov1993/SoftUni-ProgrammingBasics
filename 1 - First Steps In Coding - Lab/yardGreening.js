function yardGreening(input) {
    
    let metersGreening = Number(input[0] * 7.61);
    let discount = Number(0.18 * metersGreening);
    let result = (metersGreening - discount);
    
    console.log(`The final price is: ${result} lv.`);
    console.log(`The discount is: ${discount} lv.`);
};

yardGreening(["150"]);