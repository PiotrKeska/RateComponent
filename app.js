
const menuView = document.querySelector('.menu');
const rateView = document.querySelector('.result');
const rankItems = [...document.querySelectorAll('.circle')];
const submitBtn = document.querySelector('button');
const rankText = document.querySelector('.rank-text');
const returnBtn = document.querySelector('.return-button')


const SELECTED_CLASS = 'selected';
const HIDDEN_CLASS = 'hidden';
const ALERT_TEXT = 'You need choose rank before submit';

class rateComponent {
    constructor(){
        this.rank;
    }

    toggleClassListView(){
        menuView.classList.toggle(HIDDEN_CLASS);
        rateView.classList.toggle(HIDDEN_CLASS);
    }

    clearSelectedRates(){
        rankItems.forEach(item => item.classList.remove(SELECTED_CLASS));
    }

    getMessage(){
        rankText.textContent =  `Your rate is ${this.rank} out of 5`;
    }

    setRank(rank){
        this.rank = rank;
    }

    rankValidator(){
        if(this.rank > 0){
            return true;
        }
    
        return false;
    }

}

const rateUs = new rateComponent();


rankItems.forEach(item => {
    item.addEventListener('click', (event) => {
        rateUs.clearSelectedRates();
        item.classList.add(SELECTED_CLASS);
        rateUs.setRank(event.target.id);
        
    })
})

submitBtn.addEventListener('click', () => {
    if(rateUs.rankValidator()){
        rateUs.clearSelectedRates();
        rateUs.getMessage();
        rateUs.toggleClassListView();
        
    } else {
        alert(ALERT_TEXT);
    }
    
    rateUs.setRank('');
})

returnBtn.addEventListener('click', () => {
    rateUs.toggleClassListView();
}
)
