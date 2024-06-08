document.addEventListener('DOMContentLoaded', () => {
    const emojiGallery = document.getElementById('emoji-gallery');
    const emojis = ['😀', '😂', '🥰', '😎', '🤔', '😭', '😡', '👍', '🎉', '🍕', '🚀', '🌟'];

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.textContent = emoji;
        emojiGallery.appendChild(emojiItem);
    });
});
