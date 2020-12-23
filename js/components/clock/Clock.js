class Clock {

    constructor(selector,) {
        this.selector= selector;
        this.now = Date.now();
    
        this.deadline={
            year: (new Date()).getFullYear(),
            month:1,
            day:1,
            hour: 0,
            minutes: 0,
            seconds: 0,


        }
        
            this.dateString = this.createDateString();
            this.DOM= null;
            this.DOMdays= null;
            this.DOMhour= null;
            this.DOMminutes= null;
            this.DOMseconds= null;

            
           
    }



    

        createDateString() {
            const { year, month, day, hour, minutes, seconds }= this.deadline;
            return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
        }

        ArBusMetines() {

            const jubiliejausMiliseconds= (new Date(this.dateString)).getTime();
            return this.now < jubiliejausMiliseconds;
        }

        atnaujintiInformacija() {

            this.deadline.year++;
            this.dateString =this.createDateString();
        }

        isValidSelector() {
            const DOM = document.querySelector(this.selector);
            if (!DOM) {
                console.error('ERROR: blogas selectorius.')
                return false;
            }
            this.DOM = DOM;
            return true;
        }

        findClockValueElements(){
            
            const values =this.DOM.querySelectorAll('.value');
            this.DOMdays= values[0];
            this.DOMhour= values[1];
            this.DOMminutes= values[2];
            this.DOMseconds= values[3];


        }

        start(){
            let jubiliejausMiliseconds= (new Date(this.dateString)).getTime();

            setInterval(() => {

                const now= new Date();
                const diff= jubiliejausMiliseconds- now;

                let secondsLeft = Math.floor (diff / 1000)
                const days= Math.floor(secondsLeft /60 /60 /24);

                secondsLeft-= days* 60 * 60 *24;
                const hours= Math.floor (secondsLeft/ 60 / 60);

                secondsLeft-= hours * 60 * 60;
                const minutes= Math.floor(secondsLeft/60 );

                secondsLeft-= minutes* 60;

                





            this.DOMdays.innerText= days;
            this.DOMhour.innerText= hours;
            this.DOMminutes.innerText= minutes;
            this.DOMseconds.innerText= secondsLeft;


                
            }, 1000);

        }





}







export { Clock}