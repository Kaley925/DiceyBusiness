document.addEventListener('DOMContentLoaded', function () {
    var arr = []; //empty array
    var counter = 1; //increment value
    var newDiceBtn = document.getElementById('newDiceBtn');
    var rollDiceBtn = document.getElementById('rollDiceBtn');
    var sumDice = document.getElementById('sumDice');
    var container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    var Die = /** @class */ (function () {
        function Die() {
            var _this = this;
            this.value = 0;
            this.div = document.createElement('div'); //creates a div for dice
            this.div.className = 'dice'; //add class name to div
            //this.value = document.createTextNode(counter.toString());//create value for dice
            this.div.appendChild(document.createTextNode(counter.toString()));
            //this.div.appendChild(this.value); //append value to dice
            arr.push(this); //push all div items to array
            this.roll(); //call roll method
            container.appendChild(this.div); //append to div body
            this.div.addEventListener('click', function () { return _this.roll(); });
        }
        Die.prototype.roll = function () {
            this.value = (Math.floor(Math.random() * 6 + 1)); //picks a random number
            this.div.textContent = this.value.toString();
        };
        return Die;
    }());
    //create button
    newDiceBtn.addEventListener("click", function () {
        new Die();
    });
    rollDiceBtn.addEventListener('click', function () {
        arr.forEach(function (dice) {
            dice.roll();
        });
    });
    sumDice.addEventListener('click', function () {
        var temp = 0;
        arr.forEach(function (die) {
            temp += die.value;
        });
        alert(temp);
    });
}); //end of DOM listener
