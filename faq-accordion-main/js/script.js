const accordion = document.getElementsByClassName('accordion-questions');

for (i = 0; i < accordion.length; i++) {
   accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
   });
}