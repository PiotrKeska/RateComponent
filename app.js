const menuView = document.querySelector('.menu');
const rateView = document.querySelector('.result');
const rankItems = [...document.querySelectorAll('.circle')];
const submitBtn = document.querySelector('button');
const rankText = document.querySelector('.rank-text');
const returnBtn = document.querySelector('.return-button')



let selectedRank;

const toggler = () => {
    menuView.classList.toggle('hidden');
    rateView.classList.toggle('hidden');
}
const clearSelected = () => {
    rankItems.forEach(item => item.classList.remove('selected'));
}


rankItems.forEach(item => {
    item.addEventListener('click', (event) => {
        clearSelected();
        item.classList.add('selected');
        selectedRank = `Your rate is ${event.target.id} out of 5`;
        
    })
})

submitBtn.addEventListener('click', () => {
    if(selectedRank === ''){
        alert('You need choose rank before submit');
    } else {
        clearSelected();
        rankText.textContent = selectedRank;
        toggler();
    }
    selectedRank = '';
})

returnBtn.addEventListener('click', () => {
    toggler();
}
)
