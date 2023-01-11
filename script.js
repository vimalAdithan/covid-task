var url='https://data.covid19india.org/v4/min/data.min.json';
var select=document.querySelector('.form-select');
var aconfirmed=document.querySelector('.confirmed');
var adeceased=document.querySelector('.deceased');
var arecovered=document.querySelector('.recovered');
var atested=document.querySelector('.tested');
var avaccinated1=document.querySelector('.vaccinated1');
var avaccinated2=document.querySelector('.vaccinated2');
window.addEventListener('load',()=>{
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then(res=>{
        var meaning=res;
        var state=Object.keys(meaning);
        state.forEach(element => {
            select.insertAdjacentHTML('beforeend',`<option>${element}</option>`);
        });
        window.addEventListener('click',()=>{
            var state1=select.value;
            aconfirmed.innerText=meaning[state1].total.confirmed;
            adeceased.innerText=meaning[state1].total.deceased;
            arecovered.innerText=meaning[state1].total.recovered;
            atested.innerText=meaning[state1].total.tested;
            avaccinated1.innerText=meaning[state1].total.vaccinated1;
            avaccinated2.innerText=meaning[state1].total.vaccinated2;
        });
    });
})

