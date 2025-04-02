const inputBox = document.querySelector(".input-field");
const generateBtn = document.querySelector(".generate-btn");
const qrContainer = document.querySelector("#qr-container");
const downloadBtn = document.getElementById("download-btn");
const image = document.querySelector(".mypic");

const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150";

async function generateQR() {
    const argument = inputBox.value.trim(); 

    if (argument === "") {
        alert("Enter some text!");
        return;
    }

    image.src = apiUrl + "&data=" + argument;
    qrContainer.style.display = "block"; 
}

generateBtn.addEventListener("click", generateQR);

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        generateQR();
    }
});

// function downloadQR() {
//     if (!image.src) {
//         alert("Generate a QR code first!");
//         return;
//     }

//     const link = document.createElement("a");
//     link.href = image.src;
//     link.download = "qr-code.png";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }
// downloadBtn.addEventListener("click", downloadQR);
