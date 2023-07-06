//Bouton Like
var likee = document.getElementsByClassName('btnlikee')
for(var i = 0; i < likee.length; i++){
    var button = likee[i];
    button.addEventListener('click', function(event) {
        var btnlike = event.target
        if (btnlike.style.color == "red") {
            btnlike.style.color = "grey"
        }
        else{
            btnlike.style.color = "red"
        }
    })
}

//Supprimer une commande
var removeCart = document.getElementsByClassName('del')
for(var i = 0; i < removeCart.length; i++){
    var button = removeCart[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.remove()
        updateCart()
    })
}

//Incrémenter et décrémenter
var pluss = document.getElementsByClassName('btnplus')
var minuss = document.getElementsByClassName('btnminus')

for(var i = 0; i < pluss.length; i++){
    var button = pluss[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[1];
        var prixUnit = buttonClicked.parentElement.parentElement.children[1].children[1].innerText;
        var montant = buttonClicked.parentElement.parentElement.children[3];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) + 1;
        var pUnit = parseInt(parseFloat(prixUnit.replace('Prix unitaire : ', '')));
        input.value = newValue;
        total = pUnit * newValue;
        montant.innerText = total
        updateCart()
    })
}

for(var i = 0; i < minuss.length; i++){
    var button = minuss[i];
    button.addEventListener('click',function(event){
        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[1];
        var prixUnit = buttonClicked.parentElement.parentElement.children[1].children[1].innerText;
        var montant = buttonClicked.parentElement.parentElement.children[3];
        var inputValue = input.value;
        var newValue = parseInt(inputValue) - 1;
        var pUnit = parseInt(parseFloat(prixUnit.replace('Prix unitaire : ', '')));
        console.log(pUnit)
        if (newValue >= 1) {
            input.value = newValue;
        }
        else{
            newValue = 1;
        }
        total = pUnit * newValue;
        montant.innerText = total
        updateCart()
    })
}


//Montant Total
function updateCart() {
    var sumel = document.getElementsByClassName('prix');
    var sum = 0;
    for (i=0; i<sumel.length; i++){
        sum = sum + parseInt(sumel[i].innerHTML)
    }
    var cfa = new Intl.NumberFormat('sn-SN', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0
    });
    document.getElementsByClassName('price')[0].innerText = 'Montant à payer : ' + cfa.format(sum)
}

//Checkout
function cmdOk() {
    var myText = "Votre commande est en cours de traitement !\nMerci d'avoir choisi FreshFruits ";
    alert (myText);
}