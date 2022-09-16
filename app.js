const output=document.querySelector('.output')
const checkBtn=document.querySelector('#checkBtn')
const input=document.querySelectorAll('input')

checkBtn.addEventListener('click', function () {
    if (input[0].value=='' || input[1].value=='' || input[2].value=='') {
        output.innerHTML=`<h3>kindly enter all fields</h3>`
    }
    else {
        var buy=Number(input[0].value)
        var quant=Number(input[1].value)
        var curr=Number(input[2].value)
        var profit, loss, pcent, lcent
        var cp=buy*quant
        var sp=curr*quant
        price=sp-cp
    
        // if (price<0) {
        if (sp<cp) {
            loss=cp-sp
            lcent=(loss/cp)*100
            output.innerHTML=`<h3>you are making a loss of ${loss} which is ${lcent}%</h3>`
        }
        else if (cp<sp) {
            profit=sp-cp
            pcent=(profit/cp)*100
            output.innerHTML=`<h3>you are making a profit of ${profit} which is ${pcent}%</h3>`
        }
        else {
            output.innerHTML=`<h3>no loss-no profit; breaking even</h3>`
        }
    }
})