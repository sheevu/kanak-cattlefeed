document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuBtn = document.querySelector('.menu');
  const nav = document.querySelector('#nav');

  if (menuBtn && nav) {
    const closeMenu = () => {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
      nav.classList.remove('open');
    };

    const toggleMenu = () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
      menuBtn.textContent = isOpen ? 'Menu' : 'Close';
      nav.classList.toggle('open', !isOpen);
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking nav links
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        nav.classList.contains('open') &&
        !nav.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  // Dynamic Year in Footer
  const yearElement = document.querySelector('#year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Auto-select product in Enquiry Form when clicking product/dealer CTAs
  const productSelect = document.querySelector('#form-product');
  const ctaLinks = document.querySelectorAll('a[data-product]');

  ctaLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const selectedProduct = link.getAttribute('data-product');
      if (productSelect && selectedProduct) {
        // Find matching option or closest value
        for (let i = 0; i < productSelect.options.length; i++) {
          if (
            productSelect.options[i].value.toLowerCase() === selectedProduct.toLowerCase() ||
            productSelect.options[i].text.toLowerCase().includes(selectedProduct.toLowerCase())
          ) {
            productSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Smooth scroll to contact section
      const contactSec = document.querySelector('#contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.querySelector('#form-name');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 600);
        }
      }
    });
  });

  // Interactive Enquiry Form Submission
  const enquiryForm = document.querySelector('#enquiry-form');
  const formStatus = document.querySelector('#form-status');

  if (enquiryForm && formStatus) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = enquiryForm.name?.value.trim();
      const phone = enquiryForm.phone?.value.trim();
      const location = enquiryForm.location?.value.trim();
      const product = enquiryForm.product?.value;
      const message = enquiryForm.message?.value.trim();

      if (!name || !phone || !location) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill in your name, phone number, and location.';
        return;
      }

      // Format enquiry message for WhatsApp/Email
      const enquiryText = `*Kanak Cattle Feed Enquiry*\n*Name:* ${name}\n*Phone:* ${phone}\n*Location:* ${location}\n*Product/Requirement:* ${product}\n*Details:* ${message || 'N/A'}`;
      const encodedMsg = encodeURIComponent(enquiryText);
      const whatsappUrl = `https://wa.me/?text=${encodedMsg}`;

      formStatus.className = 'form-status success';
      formStatus.innerHTML = `
        <strong>Thank you, ${name}!</strong> Your enquiry has been noted.<br>
        Our regional team for <em>${location}</em> will connect with you shortly.<br>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
          📲 Click here to also send your enquiry directly via WhatsApp &rarr;
        </a>
      `;

      enquiryForm.reset();
      if (productSelect && product) {
        productSelect.value = product;
      }
    });
  }
});
