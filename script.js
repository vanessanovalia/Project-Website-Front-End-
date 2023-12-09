let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active')
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick =() =>{
	searchForm.classList.toggle('active')
}

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
	slides[index].classList.remove('active');
	index = (index + 1) % slides.length;
	slides[index].classList.add('active');
}

function prev(){
	slides[index].classList.remove('active');
	index = (index - 1 + slides.length) % slides.length;
	slides[index].classList.add('active');
}


$(document).ready(function(){

    $('.controls .buttons').click(function(){

        $(this).addClass('button-active').siblings().removeClass('button-active');

        let filter = $(this).attr('data-filter');
        if(filter == 'all'){
            $('.dish .image').show(400);
        }else{
            $('.dish .image').not('.'+filter).hide(200);
            $('.dish .image').filter('.'+filter).show(400);
        }

    });

});


  