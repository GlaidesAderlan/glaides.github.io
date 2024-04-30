function criarQRCode() {
    let qrInput = document.getElementById('dadosQRCode').value;
    let tamanho = document.getElementById('tamanho').value;
    if (!qrInput) {
        alert('Por favor, insira algum texto.');
        return;
    }

    var qrCodeDiv = document.getElementById('printQRCode');
    qrCodeDiv.innerHTML = '';
    var qr = new QRCode(qrCodeDiv, {
        text: qrInput,
        width: tamanho,
        height: tamanho
    });
}