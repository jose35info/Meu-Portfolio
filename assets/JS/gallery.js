// Obtém todos os elementos de miniatura
var thumbnails = document.querySelectorAll('.thumbnail');

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o elemento de imagem no modal
var modalImg = document.getElementById("modalImg");

// Adiciona evento de clique a cada miniatura
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // Define a imagem no modal como a imagem da miniatura clicada
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Obtém o elemento de fechar no modal
var span = document.getElementsByClassName("close")[0];

// Fecha o modal quando o usuário clica no botão de fechar
span.onclick = function() {
    modal.style.display = "none";
};

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// ARROW DOWN
window.addEventListener('scroll', function() {
    var arrow = document.getElementById('arrow');
    var arrowContainer = document.getElementById('arrow-container');
    if (window.scrollY > 500) { // Altere o valor 100 para o ponto em que deseja que a seta desapareça
        arrowContainer.style.display = 'none';
    } else {
        arrowContainer.style.display = 'block';
    }
});


// VALIDATION FORM COM BOOTSTRAP
(function() {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// SCROLL DE ROLAGEM 
// Função para scroll suave
function scrollToSmoothly(target, duration) {
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Uso: chame a função scrollToSmoothly com o elemento alvo e a duração desejada
var targetElement = document.getElementById('seuElemento');
var duration = 500; // duração da animação em milissegundos
scrollToSmoothly(targetElement, duration);





