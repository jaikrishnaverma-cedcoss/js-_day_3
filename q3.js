function func() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var postcode = document.getElementById('post_code').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var province = document.getElementById('Province').value;
    var prod1 = document.getElementById('product1').value;
    var prod2 = document.getElementById('product2').value;
    var prod3 = document.getElementById('product3').value;
    var prod3 = document.getElementById('product3').value;
    var deliverytime = document.getElementById('deliveryTime').value;
    document.getElementById('post_code').style.border = "2px solid black";
    document.getElementById('email').style.border = "2px solid black";
    document.getElementById('phone').style.border = "2px solid black";
    document.getElementById('name').style.border = "2px solid black";

    var reg=/[A-Z][^\s]*/;
    if (!name.match(reg)|| name.length > 25) {
        alert("Name should be In proper Case & ,max length will be 25 characters allowed");
        document.getElementById('name').style.border = "2px solid red";
        return false;
    }
    else if (email.length >= 30 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        alert("Please enter a valid email address & max alowed char is 30.");
        document.getElementById('email').style.border = "2px solid red";
        return false;
    }
    else if (phone.length !== 10) {
        alert("Please enter a valid length of phone no.");
        document.getElementById('phone').style.border = "2px solid red";
        return false;
    }
    else if (postcode.length !== 6) {
        document.getElementById('post_code').style.border = "2px solid red";
        alert("Please enter a 6 digit of post code.");
        return false;
    }
    else {
        putvalue(name, email, phone, address, city, postcode, province, prod1, prod2, prod3, deliverytime);
     
        return false;
    }


}

function putvalue(name = "", email = "", phone = "", address = "", city = "", postcode = "", province = "", prod1 = "", prod2 = "", prod3 = "", deliverytime = "") {

    document.getElementById("p1").innerText = prod1 + "  Product 1 @ $10.00";
    document.getElementById("p2").innerText = prod2 + "  Product 2 @ $20.00";
    document.getElementById("p3").innerText = prod3 + "  Product 3 @ $30.00";
    prod1 = parseInt(prod1) * 10;
    prod2 = parseInt(prod2) * 20;
    prod3 = parseInt(prod3) * 30;
    var all = prod1 + prod2 + prod3;
    document.getElementById('name1').innerText = name;
    document.getElementById('email1').innerText = email;
    document.getElementById('phone1').innerText = phone;
    document.getElementById('address1').innerText = address + " city:" + city + ", province:" + province + ", delivery time:" + deliverytime;
    document.getElementById('product11').innerText = "$" + prod1;
    document.getElementById('product21').innerText = "$" + prod2;
    document.getElementById('product31').innerText = "$" + prod3;
    document.getElementById('shipping1').innerText = "$20";
    document.getElementById('subtotal1').innerText = "$" + (all + 20);
    tax = ((all) / 100) * 13;
    document.getElementById('tax1').innerText = "$" + tax;
    document.getElementById('total1').innerText = "$" + (tax + all + 20);
}


function titleCase(string) {
    let sentence = string.toLowerCase().split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }

    return sentence.join(" ");
}
function check(data) {
    console.log(data.value);
    if (data.getAttribute('id') == "phone") {
        if (data.value.length != 10) {

            data.style.color = "red";
            console.log(data.style.color);
        }
        else {
            data.style.color = "green";
        }
    } else {
        if (data.value.length != 6) {

            data.style.color = "red";
        }
        else {
            data.style.color = "green";
        }
    }
}