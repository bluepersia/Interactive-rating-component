document.querySelector('.card_ratings').addEventListener ('click', handleClick);
document.querySelector('.card_submit').addEventListener ('click', submit);

let ratingSelected = 0;
function handleClick (e) 
{
    ratingSelected = 0;
    document.querySelectorAll ('.card_rating-wrapper').forEach (el => el.classList.remove ('selected'));

    const star = e.target.closest ('.card_rating-wrapper');

    if (star)
    {
        ratingSelected = Number (star.dataset.val);
        star.classList.add ('selected');
    }
}


function submit () 
{
    if (ratingSelected === 0) return;

    const card = document.querySelector ('.card');
    card.classList.add ('thanks');
    card.innerHTML = ( 
        `
        <img src='./images/illustration-thank-you.svg' class='card_img-thanks'/>
        <p class='card_selected-info'>You selected ${ratingSelected} out of 5</p>
        <h2 class='card_title-2'>Thank you!</h2>
        <p class='card_body'>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
        `
    )
}