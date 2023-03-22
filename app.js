const rankItems = [...document.querySelectorAll('.circle')];
const submitBtn = document.querySelector('button');


const clearSelected = () => {
    rankItems.forEach(item => item.classList.remove('selected'));
}


rankItems.forEach(item => {
    item.addEventListener('click', () => {
        clearSelected();
        item.classList.add('selected')
        
    })
})



