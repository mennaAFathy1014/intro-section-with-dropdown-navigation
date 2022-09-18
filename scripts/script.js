const featureMenu = document.querySelector('.features-span').querySelector('ul');
const compMenu = document.querySelector('.company-span').querySelector('ul');
const closeButton = document.querySelector('.close');
const nav = document.querySelector('.nav');
window.addEventListener('click',function(e){
    console.log(this.window.innerWidth);
    e.preventDefault();
    if(this.window.innerWidth>768){
        if(e.target.classList.contains('arrow-feat')||e.target.classList.contains('Features')||e.target.parentElement.classList.contains('Features')){
            featureMenu.classList.toggle('opened');
        }
        else if(e.target.classList.contains('arrow-comp')||e.target.classList.contains('company')||e.target.parentElement.classList.contains('company')){
            compMenu.classList.toggle('opened');
        }
        else{
            featureMenu.classList.remove('opened');
            compMenu.classList.remove('opened');
        }
    }
    else{
        if(e.target.classList.contains('arrow-feat')||e.target.classList.contains('Features')||e.target.parentElement.classList.contains('Features')){
            featureMenu.classList.toggle('mob-opened');
            console.log(featureMenu)
        }
        else if(e.target.classList.contains('arrow-comp')||e.target.classList.contains('company')||e.target.parentElement.classList.contains('company')){
            compMenu.classList.toggle('mob-opened');
        }
    }
    if(e.target.classList.contains('bars')){
        nav.classList.add('open-nav');
    }
    else if(e.target.classList.contains('close')){
        nav.classList.remove('open-nav');
    }
})