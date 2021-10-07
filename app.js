document.addEventListener('DOMContentLoaded',function(){
    let arr = [];//empty array
    let counter = 1; //increment value

    let newDiceBtn = document.getElementById('newDiceBtn');
    let rollDiceBtn = document.getElementById('rollDiceBtn');
    let container = document.createElement('div');

    container.className = 'container';
    document.body.appendChild(container);
    


class Die{
    constructor(){
        this.div = document.createElement('div');//creates a div for dice
        this.div.className = 'dice'; //add class name to div
        this.value = document.createTextNode(counter);//create value for dice
        this.div.appendChild(this.value); //append value to dice
        arr.push(this); //push all div items to array
        this.roll(); //call roll method
        container.appendChild(this.div); //append to div body
        this.div.addEventListener('click', () => this.roll());
        

    }
    roll(){
        this.value = Math.floor(Math.random() * 6 + 1); //picks a random number
        this.div.textContent = this.value;
        
    }
    
}
//create button

newDiceBtn.addEventListener("click", function(){
    new Die();
});

rollDiceBtn.addEventListener('click', function () {
   arr.forEach(dice => {
       dice.roll()
   });
});

sumDice.addEventListener('click', function() {
    let num = document.getElementsByClassName('dice');
    for (let i=0; i<arr.length; i++){
    let answer= num[i].textContent
    console.log(answer);
}
})













































})//end of DOM listener