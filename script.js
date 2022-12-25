const generateBtn = document.querySelector('form button');
const qrInput = document.querySelector('form input')
const qrCodeBox = document.querySelector('.qr-code')
const qrImage = document.querySelector('.qr-code img')


generateBtn.addEventListener('click',() =>{
    let qrValue = qrInput.value;
    if(!qrValue){
        return alert('لطفا یه ادرس وارد بکن')
    }
    generateBtn.innerText = 'در حال دریافت QR Code'
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener('load',()=>{
        qrCodeBox.classList.remove('hidden')
        generateBtn.innerText =' تولید QR Code'
    })
})
qrInput.addEventListener('keyup',()=>{
    if(!qrInput.value){
        qrCodeBox.classList.add('hidden')
    }
})