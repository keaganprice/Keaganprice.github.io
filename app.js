const qrDialog = document.querySelector('#qr-dialog');
const cardUrl = new URL('./', window.location.href).href;
const saveContact = document.querySelector('a[download][href$=".vcf"]');
if (saveContact) {
  saveContact.addEventListener('click', (event) => {
    event.preventDefault();
    const original = `BEGIN:VCARD\r\nVERSION:3.0\r\nN:Price;Keagan;;;\r\nFN:Keagan Price\r\nORG:Keagan Price\r\nTITLE:Founder & CEO\r\nTEL;TYPE=CELL:+19165398334\r\nEMAIL;TYPE=INTERNET,HOME:keaganprice12@gmail.com\r\nURL:${cardUrl}\r\nURL:https://ccservicesofficial.com\r\nX-SOCIALPROFILE;TYPE=instagram:https://www.instagram.com/keaganpriceofficial\r\nX-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/keagan-price\r\nX-SOCIALPROFILE;TYPE=tiktok:https://www.tiktok.com/@keagan__price\r\nNOTE:Property Services | Business Development | Strategic Partnerships | Insurance Solutions\r\nEND:VCARD\r\n`;
    const url = URL.createObjectURL(new Blob([original], { type: 'text/vcard;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'keagan-price.vcf';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
}
const qrImage = document.querySelector('[data-qr-image]');
if (qrImage) {
  qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=300x300&margin=12&data=' + encodeURIComponent(cardUrl);
  qrImage.onerror = () => { qrImage.src = 'assets/keagan-price-qr.png'; };
}

document.querySelectorAll('[data-open-qr]').forEach((button) => {
  button.addEventListener('click', () => qrDialog?.showModal());
});

document.querySelectorAll('[data-close-qr]').forEach((button) => {
  button.addEventListener('click', () => qrDialog?.close());
});

document.querySelectorAll('[data-share]').forEach((button) => {
  button.addEventListener('click', async () => {
    const shareData = {
      title: 'Keagan Price',
      text: 'Connect with Keagan Price',
      url: cardUrl
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        const label = button.querySelector('span');
        const original = label.textContent;
        label.textContent = 'Copied';
        window.setTimeout(() => { label.textContent = original; }, 1800);
      }
    } catch (error) {
      if (error?.name !== 'AbortError') window.location.href = shareData.url;
    }
  });
});

qrDialog?.addEventListener('click', (event) => {
  if (event.target === qrDialog) qrDialog.close();
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const sections = document.querySelectorAll('.card-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });
  sections.forEach((section) => {
    section.classList.add('reveal-ready');
    observer.observe(section);
  });
}
