$(document).ready(function(){
    function createHeart() {
        const heart = $('<div class="heart"></div>');
        heart.css({
            left: Math.random() * $(window).width(),
            top: -10
        });
        $('body').append(heart);

        const speed = 0.5 + Math.random(); 

        const fallInterval = setInterval(() => {
            const currentTop = parseInt(heart.css('top'));
            const newTop = currentTop + speed;
            heart.css('top', newTop);

            if (newTop > $(window).height()) {
                heart.remove();
                clearInterval(fallInterval);
            }
        }, 50); 
    }

    createHeart(); 

    setInterval(createHeart, 1000); // Aumentei o intervalo para 1000 milissegundos

    $(document).on("contextmenu", function(e) {
        return false;
    });
});