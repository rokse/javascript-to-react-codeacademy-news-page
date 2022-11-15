export default function copyrightPrivacy() {
  const copyrightPrivacyEl = document.createElement('div');
  copyrightPrivacyEl.classList.add('footer-info');

  const copyrightEl = document.createElement('div');
  copyrightEl.classList.add('copyright');
  copyrightEl.innerHTML = `© By UAB Programuok | CodeAcademy šeimos narys – <a href="#">CodeAcademy Kids</a>`;

  const privacyEl = document.createElement('div');
  privacyEl.classList.add('privacy-policy');

  const privacyLinkEl = document.createElement('a');
  privacyLinkEl.href = '#';
  privacyLinkEl.textContent = 'Privatumo politika';

  privacyEl.append(privacyLinkEl);

  copyrightPrivacyEl.append(copyrightEl, privacyEl);

  return copyrightPrivacyEl;
}                     