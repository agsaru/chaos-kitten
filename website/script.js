document.addEventListener('DOMContentLoaded', () => {
    // Copy to clipboard functionality
    const copyBtn = document.querySelector('.copy-btn');
    const codeBlock = document.querySelector('.code-block code');

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener('click', () => {
            const code = codeBlock.innerText;
            navigator.clipboard.writeText(code).then(() => {
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                copyBtn.style.color = '#27c93f';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                    copyBtn.style.color = '';
                }, 2000);
            });
        });
    }

    // Mobile menu toggle (simple implementation)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.navbar nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            if (nav.style.display === 'flex') {
                nav.style.display = 'none';
            } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.width = '100%';
                nav.style.background = 'rgba(15, 10, 21, 0.95)';
                nav.style.padding = '1rem';
                nav.style.borderBottom = '1px solid var(--border)';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (nav && window.innerWidth <= 768) {
                    nav.style.display = 'none';
                }
            }
        });
    });
});
