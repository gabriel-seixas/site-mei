document.querySelectorAll('.item').forEach((item, index) => {
    item.addEventListener('click', function() {
        if (index === 0) {
            openOverlay('Produto 1');
        } else if (index === 1) {
            openOverlay('Produto 2');
        } else if (index === 2) {
            openOverlay('Produto 3');
        }else if (index === 3) {
            openOverlay('Produto 4');
        }// Continue com mais produtos conforme necessário
    });
});

// Função para abrir o overlay específico com base no nome do produto
function openOverlay(produto) {
    // Esconder todos os overlays
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.style.display = 'none';
    });

    // Mostrar o overlay específico com base no nome do produto
    if (produto === 'Produto 1') {
        document.getElementById('overlay1').style.display = 'flex';
        showOverlaySlide(0); // Mostrar o primeiro slide ao abrir o overlay
    } else if (produto === 'Produto 2') {
        document.getElementById('overlay2').style.display = 'flex';
        showOverlaySlide(0); // Mostrar o primeiro slide ao abrir o overlay
    } else if (produto === 'Produto 3') {
        document.getElementById('overlay3').style.display = 'flex';
        showOverlaySlide(0); // Mostrar o primeiro slide ao abrir o overlay
    } else if (produto === 'Produto 4') {
        document.getElementById('overlay4').style.display = 'flex';
        showOverlaySlide(0); // Mostrar o primeiro slide ao abrir o overlay
    }// Continue com mais produtos conforme necessário
}

// Evento para fechar o overlay ao clicar fora dele
window.addEventListener('click', function(event) {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
});

let overlaySlideIndex1 = 0;
let overlaySlideIndex2 = 0;
let overlaySlideIndex3 = 0;
let overlaySlideIndex4 = 0; // Adicionar índice para o overlay3
const overlaySlides1 = document.querySelectorAll('#overlay1 .overlay-slide');
const overlaySlides2 = document.querySelectorAll('#overlay2 .overlay-slide');
const overlaySlides3 = document.querySelectorAll('#overlay3 .overlay-slide');
const overlaySlides4 = document.querySelectorAll('#overlay4 .overlay-slide');
const overlayDots1 = document.querySelectorAll('#overlay1 .overlay-dot');
const overlayDots2 = document.querySelectorAll('#overlay2 .overlay-dot');
const overlayDots3 = document.querySelectorAll('#overlay3 .overlay-dot');
const overlayDots4 = document.querySelectorAll('#overlay4 .overlay-dot');

function showOverlaySlide(n) {
    overlaySlides1.forEach(slide => slide.style.display = 'none');
    overlaySlides2.forEach(slide => slide.style.display = 'none');
    overlaySlides3.forEach(slide => slide.style.display = 'none');
    overlaySlides4.forEach(slide => slide.style.display = 'none'); // Ocultar todos os slides

    overlayDots1.forEach(dot => dot.classList.remove('active'));
    overlayDots2.forEach(dot => dot.classList.remove('active'));
    overlayDots3.forEach(dot => dot.classList.remove('active'));
    overlayDots4.forEach(dot => dot.classList.remove('active')); // Remover classe 'active' de todos os dots

    if (document.getElementById('overlay1').style.display === 'flex') {
        overlaySlides1[n].style.display = 'block';
        overlayDots1[n].classList.add('active');
        overlaySlideIndex1 = n;
    } else if (document.getElementById('overlay2').style.display === 'flex') {
        overlaySlides2[n].style.display = 'block';
        overlayDots2[n].classList.add('active');
        overlaySlideIndex2 = n;
    } else if (document.getElementById('overlay3').style.display === 'flex') {
        overlaySlides3[n].style.display = 'block';
        overlayDots3[n].classList.add('active');
        overlaySlideIndex3 = n;
    } else if (document.getElementById('overlay4').style.display === 'flex') {
        overlaySlides4[n].style.display = 'block';
        overlayDots4[n].classList.add('active');
        overlaySlideIndex4 = n;
    }
}

function currentOverlaySlide(n) {
    showOverlaySlide(n);
    overlaySlideIndex1 = n;
    overlaySlideIndex2 = n; 
    overlaySlideIndex3 = n;
    overlaySlideIndex4 = n; // Atualizar índice para ambos os overlays
}

function nextOverlaySlide() {
    if (document.getElementById('overlay1').style.display === 'flex') {
        overlaySlideIndex1 = (overlaySlideIndex1 + 1) % overlaySlides1.length;
        showOverlaySlide(overlaySlideIndex1);
    } else if (document.getElementById('overlay2').style.display === 'flex') {
        overlaySlideIndex2 = (overlaySlideIndex2 + 1) % overlaySlides2.length;
        showOverlaySlide(overlaySlideIndex2);
    } else if (document.getElementById('overlay3').style.display === 'flex') {
        overlaySlideIndex3 = (overlaySlideIndex3 + 1) % overlaySlides3.length;
        showOverlaySlide(overlaySlideIndex3);
    } else if (document.getElementById('overlay4').style.display === 'flex') {
        overlaySlideIndex4 = (overlaySlideIndex4 + 1) % overlaySlides4.length;
        showOverlaySlide(overlaySlideIndex4);
    }
}

setInterval(nextOverlaySlide, 5000); // Alterna o slide a cada 5 segundos

showOverlaySlide(overlaySlideIndex1); // Mostra o primeiro slide 
