const symbols = ['🍒', '🍋', '🍇', '💎', '7️⃣'];
const button = document.getElementById('spin-button');
const message = document.getElementById('message');

button.onclick = () => {
    const reels = [document.getElementById('reel1'), 
                   document.getElementById('reel2'), 
                   document.getElementById('reel3')];
    
    // Добавляем эффект вращения
    reels.forEach(r => r.classList.add('spinning'));
    message.innerText = "Вращаем...";

    setTimeout(() => {
        const results = reels.map(r => {
            r.classList.remove('spinning');
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            r.innerText = randomSymbol;
            return randomSymbol;
        });

        // Проверка на победу
        if (results[0] === results[1] && results[1] === results[2]) {
            message.innerText = "💰 ДЖЕКПОТ! 💰";
        } else {
            message.innerText = "Попробуй еще раз!";
        }
    }, 1000); // Остановка через 1 секунду
};