const TOKEN='6817946471:AAFAgk0JTD3358AdCeev4DvcP61Ip9rktrk';
const CHAT_ID='-1002104230801';
const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`;
const form=document.querySelector('#form')

form.addEventListener('submit',function (e){
    e.preventDefault()

    let message = `<b>Name:</b> ${this.name.value} \n`;
    message +=` <b>Email:</b> ${this.email.value} \n`;
    message += `<b>TEL:</b> ${this.tel.value} \n1`;
    message += `<b>Message:</b> ${this.text.value} \n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message
    })
        .then((res) => {
            this.name.value = "";
            this.email.value = "";
            this.tel.value = "";
            this.text.value = "";
        })
        .catch((err) => {
            console.warn(err)
        })
        .finally(() => {
            console.log("end")
        })


})

const img=document.querySelector('.about-img'),
    input=document.querySelector('#myfile');

input.addEventListener('change', ()=>{
    img.src=URL.createObjectURL(input.files[0])
})

