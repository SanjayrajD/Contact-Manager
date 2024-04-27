const getData = (e) => {
    console.log("inside function");
    e.preventDefault();
    let email = document.getElementById("email").value;
    let fname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let num = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    let formData = {
        firstname: fname,
        email: email,
        lastname: lastname,
        phone: num,
        address: address
    };
    console.log(formData);
    // Convert form data to JSON
    var jsonData = JSON.stringify(formData);

    // Generate a unique filename based on timestamp
    var timestamp = new Date().getTime();
    var filename = "data_" + timestamp + ".json";

    // Save JSON data to a file
    var blob = new Blob([jsonData], { type: "application/json" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
};

document.querySelector('form').addEventListener('submit', getData);
