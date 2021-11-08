document.addEventListener('DOMContentLoaded',function(){
    let arr:Die[] = [];//empty array
    let counter = 1; //increment value
    
    let newDiceBtn:HTMLElement = document.getElementById('newDiceBtn')as HTMLElement;
    let rollDiceBtn:HTMLElement = document.getElementById('rollDiceBtn')as HTMLElement;
    let sumDice:HTMLElement = document.getElementById('sumDice')as HTMLElement;
    let container = document.createElement('div');

    container.className = 'container';
    document.body.appendChild(container);
    


class Die{
    div:HTMLDivElement;
    value:number;
    
    constructor(){
        this.value = 0;
        this.div = document.createElement('div');//creates a div for dice
        this.div.className = 'dice'; //add class name to div
        //this.value = document.createTextNode(counter.toString());//create value for dice
        this.div.appendChild(document.createTextNode(counter.toString()));
        //this.div.appendChild(this.value); //append value to dice
        arr.push(this); //push all div items to array
        this.roll(); //call roll method
        container.appendChild(this.div); //append to div body
        this.div.addEventListener('click', () => this.roll());
        

    }
    roll(){
        this.value = (Math.floor(Math.random() * 6 + 1)); //picks a random number
        this.div.textContent = this.value.toString();
        
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
    let temp:number = 0;
   arr.forEach((die) => {
    temp += die.value;
   })
   alert(temp);
}
)













































})//end of DOM listener