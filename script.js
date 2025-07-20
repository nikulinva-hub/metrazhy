document.addEventListener("DOMContentLoaded", function() {
    // Плавная прокрутка для якорных ссылок
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Интерактивный FAQ
    const faqItems = document.querySelectorAll('#faq > div');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } 
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("feedback-modal");
    var btn = document.querySelector(".imessage-input button");
    var span = document.getElementsByClassName("close")[0];
    
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвратить отправку формы
        // Здесь может быть код для обработки формы
        modal.style.display = "none";
        alert("Ваше сообщение отправлено!");
    });
});
