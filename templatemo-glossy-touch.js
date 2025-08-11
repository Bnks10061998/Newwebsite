let currentPage = 'home';

document.addEventListener("DOMContentLoaded", () => {
  // Handle nav clicks
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const pageId = this.dataset.page;
      location.hash = pageId;
    //   history.pushState({ page: pageId }, '', `/${pageId}`);
      showPage(pageId);
    });
  });

  // Handle browser back/forward
  window.addEventListener('popstate', (event) => {
    const pageId = event.state?.page || 'home';
    showPage(pageId);
  });

  // Load correct page on first load
  const initialPage = location.hash.replace('#', '') || 'home';
//   const initialPage = location.pathname.replace('/', '') || 'home';
  showPage(initialPage);
});

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Show selected page
  const activePage = document.getElementById(pageId);
  if (activePage) activePage.classList.add('active');

  // Update nav active class
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  // Move footer to the active page
  const footer = document.getElementById('footer');
  if (activePage) activePage.appendChild(footer);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

        // Initialize footer position
        window.addEventListener('DOMContentLoaded', () => {
            const footer = document.getElementById('footer');
            const homePage = document.getElementById('home');
            homePage.appendChild(footer);
        });

        // Add interactive parallax effect to background shapes
        document.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const xPos = (x - 0.5) * speed * 20;
                const yPos = (y - 0.5) * speed * 20;
                shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });

        // Add scroll-based animations
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.bg-shapes');
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.style.display = 'none';
        });

        // Show the clicked page
        const targetId = this.getAttribute('href').replace('#', '');
        document.getElementById(targetId).style.display = 'block';
    });
});

// Optional: Show the first page by default
document.querySelectorAll('.page').forEach((page, index) => {
    page.style.display = index === 0 ? 'block' : 'none';
});


        // Add click ripple effect to glass elements
        // document.querySelectorAll('.glass').forEach(element => {
        //     element.addEventListener('click', function(e) {
        //         const ripple = document.createElement('div');
        //         const rect = this.getBoundingClientRect();
        //         const size = Math.max(rect.width, rect.height);
        //         const x = e.clientX - rect.left - size / 2;
        //         const y = e.clientY - rect.top - size / 2;
                
        //         ripple.style.cssText = `
        //             position: absolute;
        //             width: ${size}px;
        //             height: ${size}px;
        //             left: ${x}px;
        //             top: ${y}px;
        //             background: rgba(255, 255, 255, 0.3);
        //             border-radius: 50%;
        //             transform: scale(0);
        //             animation: ripple 0.6s linear;
        //             pointer-events: none;
        //             z-index: 1000;
        //         `;
                
        //         this.style.position = 'relative';
        //         this.appendChild(ripple);
                
        //         setTimeout(() => {
        //             ripple.remove();
        //         }, 600);
        //     });
        // });

        // Add ripple animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Form submission handling
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(46, 204, 113, 0.9);
                color: white;
                padding: 20px 40px;
                border-radius: 10px;
                backdrop-filter: blur(20px);
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            `;
            successMsg.textContent = 'Message sent successfully! We\'ll get back to you soon.';
            
            document.body.appendChild(successMsg);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
            
            // Reset form
            this.reset();
        });

        // Add fade in animation
        const fadeStyle = document.createElement('style');
        fadeStyle.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(fadeStyle);