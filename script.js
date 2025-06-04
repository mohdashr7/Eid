// العناصر التفاعلية
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة العناصر
    const sheep = document.getElementById('sheep');
    const speechBubble = document.getElementById('speech-bubble');
    const jokeText = document.getElementById('joke-text');
    const greetingBtn = document.getElementById('greeting-btn');
    const greetingResult = document.getElementById('greeting-result');
    const nameInput = document.getElementById('name-input');
    const generateWishBtn = document.getElementById('generate-wish');
    const wishResult = document.getElementById('wish-result');
    const shareBtn = document.getElementById('share-btn');
    const startGameBtn = document.getElementById('start-game');
    const gameSheep = document.getElementById('game-sheep');
    const scoreDisplay = document.getElementById('score');
    const confettiContainer = document.getElementById('confetti-container');

    // مصفوفة النكات
    const jokes = [
        "ما هو الخروف الذي يعرف الرياضيات؟ الخروف العبقري! 🐑➕➖✖️➗",
        "خروف قال لخروف: عيد مبارك! رد عليه: بع بع عليك! 🐑🎉",
        "خروف سأل صديقه: ماذا ستفعل في العيد؟ قال: سأذهب للحلاق لأخذ قصة صوف جديدة! ✂️🐑",
        "لماذا الخروف دائماً سعيد في العيد؟ لأنه يلبس صوف جديد! 👔🐑",
        "خروف يقول لصديقه: أنا خائف من العيد! صديقه: لماذا؟ قال: لأنني سمعت أنهم يبحثون عن كبش فداء! 😱🐑",
        "خروف يسأل آخر: ماذا تلبس في العيد؟ قال: صوفي الطبيعي، إنه الموضة هذا الموسم! 🧶🐑",
        "خروف يقول: أنا أحب العيد لأن الناس تأخذ صور سيلفي معي قبل أن... لحظة، هل هذا سكين؟! 📱🔪🐑",
        "خروف يقول: أتمنى لو كنت دجاجة في عيد الأضحى! 🐔🐑"
    ];

    // مصفوفة التهاني
    const greetings = [
        "كل عام وأنتم بخير! تقبل الله منا ومنكم صالح الأعمال 🌙✨",
        "عيد أضحى مبارك! أعاده الله عليكم بالخير واليمن والبركات 🎉🐑",
        "أضحى مبارك سعيد! أسأل الله أن يتقبل منا ومنكم الطاعات 🌟🕌",
        "عساكم من عواده! كل عام وأنتم بألف خير 🎊🌙",
        "تقبل الله منا ومنكم، وكل عام وأنتم إلى الله أقرب ✨🤲",
        "عيد سعيد مليء بالفرح والسعادة والبركات! 🎁🐑",
        "أسأل الله أن يجعل أيامكم كلها أعياد وسعادة "
    ];

    // مصفوفة التهاني المخصصة
    const customWishes = [
        "كل عام و{name} بألف خير! عيد أضحى مبارك 🎉🐑",
        "أتمنى ل{name} عيداً مليئاً بالفرح والسعادة 🌙✨",
        "عيد مبارك يا {name}! تقبل الله منا ومنكم صالح الأعمال 🕌🌟",
        "{name}، أعاده الله عليك بالصحة والعافية والبركات 🎊🐑",
        "أجمل التهاني وأطيب الأماني ل{name} بمناسبة عيد الأضحى المبارك ",
        "{name}، عساك من عواده! كل عام وأنت بخير 🎁✨",
        "{name}، أسأل الله أن يجعل أيامك كلها أعياد وسعادة 🤲🌟"
    ];

    // تفاعل الخروف
    sheep.addEventListener('click', function() {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeText.textContent = randomJoke;
        speechBubble.classList.remove('hidden');
        speechBubble.classList.add('visible');
        
        // تغيير تعبير وجه الخروف
        const sheepMouth = document.querySelector('.sheep-mouth');
        sheepMouth.style.borderBottom = 'none';
        sheepMouth.style.borderTop = '2px solid #333';
        sheepMouth.style.borderRadius = '50%';
        
        // إعادة الوجه للوضع الطبيعي بعد 3 ثوانٍ
        setTimeout(() => {
            speechBubble.classList.remove('visible');
            setTimeout(() => {
                speechBubble.classList.add('hidden');
                sheepMouth.style.borderBottom = '2px solid #333';
                sheepMouth.style.borderTop = 'none';
            }, 300);
        }, 5000);
    });

    // زر التهنئة
    greetingBtn.addEventListener('click', function() {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingResult.innerHTML = `<div class="message success">${randomGreeting}</div>`;
        createConfetti();
        
        // تحريك الخروف بشكل عشوائي
        sheep.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        setTimeout(() => {
            sheep.style.transform = 'rotate(0deg)';
        }, 1000);
    });

    // إنشاء تهنئة مخصصة
    generateWishBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            const randomWish = customWishes[Math.floor(Math.random() * customWishes.length)];
            const personalizedWish = randomWish.replace('{name}', name);
            wishResult.innerHTML = `<div class="message funny">${personalizedWish}</div>`;
            shareBtn.classList.remove('hidden');
            createConfetti();
        } else {
            wishResult.innerHTML = '<div class="message">الرجاء إدخال اسم الشخص أولاً</div>';
        }
    });

    // زر المشاركة
    shareBtn.addEventListener('click', function() {
        alert('تم نسخ التهنئة! يمكنك مشاركتها مع أحبائك الآن 🎉');
        // هنا يمكن إضافة وظيفة النسخ الفعلية أو المشاركة عبر وسائل التواصل الاجتماعي
    });

    // العد التنازلي للعيد
    function updateCountdown() {
        // تاريخ عيد الأضحى القادم (يمكن تعديله)
        const eidDate = new Date('2025-06-06:00:00');
        const now = new Date();
        
        const diff = eidDate - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById('countdown').innerHTML = '<h3>عيد مبارك! 🎉</h3>';
        }
    }
    
    // تحديث العد التنازلي كل ثانية
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // لعبة الخروف
    let gameActive = false;
    let score = 0;
    let gameSpeed = 1000;
    let gameInterval;

    startGameBtn.addEventListener('click', function() {
        if (!gameActive) {
            gameActive = true;
            score = 0;
            scoreDisplay.textContent = score;
            startGameBtn.textContent = 'إيقاف اللعبة';
            moveSheep();
            gameInterval = setInterval(moveSheep, gameSpeed);
        } else {
            gameActive = false;
            startGameBtn.textContent = 'ابدأ اللعبة';
            clearInterval(gameInterval);
        }
    });

    gameSheep.addEventListener('click', function() {
        if (gameActive) {
            score++;
            scoreDisplay.textContent = score;
            
            // زيادة السرعة كل 5 نقاط
            if (score % 5 === 0 && gameSpeed > 400) {
                gameSpeed -= 100;
                clearInterval(gameInterval);
                gameInterval = setInterval(moveSheep, gameSpeed);
            }
            
            // تأثير النقر
            gameSheep.style.transform = 'scale(0.8)';
            setTimeout(() => {
                gameSheep.style.transform = 'scale(1)';
            }, 100);
            
            // إنشاء كونفيتي صغير
            createMiniConfetti(gameSheep.offsetLeft, gameSheep.offsetTop);
        }
    });

    function moveSheep() {
        const gameContainer = document.querySelector('.game-container');
        const maxX = gameContainer.offsetWidth - 50;
        const maxY = gameContainer.offsetHeight - 50;
        
        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);
        
        gameSheep.style.left = newX + 'px';
        gameSheep.style.top = newY + 'px';
    }

    // إنشاء الكونفيتي
    function createConfetti() {
        confettiContainer.innerHTML = '';
        const colors = ['#ff9500', '#4CAF50', '#E91E63', '#2196F3', '#FFEB3B'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = -20 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // أشكال مختلفة للكونفيتي
            const shape = Math.floor(Math.random() * 3);
            if (shape === 0) {
                confetti.style.borderRadius = '50%'; // دائرة
            } else if (shape === 1) {
                confetti.style.borderRadius = '0'; // مربع
            } else {
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.borderRadius = '0';
                confetti.style.transform = `rotate(45deg)`;
            }
            
            confettiContainer.appendChild(confetti);
            
            // حركة الكونفيتي
            const animationDuration = Math.random() * 3 + 2;
            const horizontalMovement = Math.random() * 10 - 5;
            
            confetti.animate([
                { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) translateX(${horizontalMovement * 30}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: animationDuration * 1000,
                easing: 'ease-out',
                iterations: 1
            }).onfinish = function() {
                confetti.remove();
            };
        }
    }

    // كونفيتي صغير للعبة
    function createMiniConfetti(x, y) {
        const colors = ['#ff9500', '#4CAF50', '#E91E63', '#2196F3', '#FFEB3B'];
        
        for (let i = 0; i < 10; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = x + 'px';
            confetti.style.top = y + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 5 + 3 + 'px';
            confetti.style.height = Math.random() * 5 + 3 + 'px';
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.position = 'absolute';
            confetti.style.zIndex = '1001';
            
            document.body.appendChild(confetti);
            
            const animationDuration = Math.random() * 1 + 0.5;
            const horizontalMovement = Math.random() * 10 - 5;
            const verticalMovement = Math.random() * -50 - 20;
            
            confetti.animate([
                { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${verticalMovement}px) translateX(${horizontalMovement * 10}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: animationDuration * 1000,
                easing: 'ease-out',
                iterations: 1
            }).onfinish = function() {
                confetti.remove();
            };
        }
    }

    // تحريك الخروف عند تحميل الصفحة
    setTimeout(() => {
        sheep.click();
    }, 1500);
});
