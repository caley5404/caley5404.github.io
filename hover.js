
window.addEventListener('load', function() {
    
    const characterImages = document.querySelectorAll('.cards_wrap img');
    
    
    characterImages.forEach(img => {
        
        img.addEventListener('mouseover', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'translateY(-10px)';
        });

        
        img.addEventListener('mouseout', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'translateY(0)';
        });
    });
}); 