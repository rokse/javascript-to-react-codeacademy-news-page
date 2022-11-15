export default function siteFooter() {
  const siteFooterEl = document.createElement('footer');
  siteFooterEl.classList.add('site-footer');

  const footerContainerEl = document.createElement('div');
  footerContainerEl.classList.add('footer-container', 'wrap');

  const footerLogoEl = document.createElement('div');
  footerLogoEl.classList.add('footer-logo');

  const footerLogoImage = document.createElement('img');
  footerLogoImage.src = './components/codeacademy-white.svg';
  footerLogoImage.alt = 'company-logo';

  const footerWidgetsEl = document.createElement('div');
  footerWidgetsEl.classList.add('footer-widgets');

  const footerWidgetsLeftEl = document.createElement('div');
  footerWidgetsLeftEl.classList.add('footer-widget-left');

  const footerWidgetsUlEl = document.createElement('ul');

  const footerMenuItems = ['Studentams', 'Jei galiu as - gali ir tu!', 'Verslui', 'Programos', 'Nemokamos studijos', 'UZT kursai', 'Programavimo kalbos', 'Apie mus', 'Naujienos', 'Karjera - We are hiring!', 'ES parama', 'Kontaktai'];

  footerMenuItems.forEach(item => {
    const menuItemEl = document.createElement('li');
    menuItemEl.classList.add('menu-item');

    const menuItemLinkEl = document.createElement('a');
    menuItemLinkEl.href = '#'
    menuItemLinkEl.textContent = item;

    menuItemEl.append(menuItemLinkEl);

    footerWidgetsUlEl.append(menuItemEl);
  });

  const footerWidgetsCenterEl = document.createElement('div');
  footerWidgetsCenterEl.classList.add('footer-widget-center');

  const footerWidgetCenterUlEl = document.createElement('ul');
  footerWidgetCenterUlEl.innerHTML = `<li>
                                        <h2>Vilnius</h2>
                                      </li>
                                      <li>
                                        <a href="#">Saulėtakio al. 15,<br>Vilnius</a>
                                      </li>
                                      <li>
                                        <a href="#">Antakalnio g. 17,<br>Vilnius</a>
                                      </li>`;


  const footerWidgetsRightEl = document.createElement('div');
  footerWidgetsRightEl.classList.add('footer-widget-right');

  const footerWidgetRightUlEl = document.createElement('ul');
  footerWidgetRightUlEl.innerHTML = `<li>
  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="31"><defs><path id="a" d="M0 .009h29.991v29.987H0z"></path></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"></use></mask><path fill="#929497" d="M14.995.01c-4.072 0-4.583.017-6.182.09-1.596.072-2.686.326-3.64.697a7.34 7.34 0 00-2.656 1.73 7.344 7.344 0 00-1.73 2.655c-.37.954-.624 2.044-.697 3.64-.073 1.6-.09 2.11-.09 6.183 0 4.072.017 4.583.09 6.182.073 1.596.327 2.686.697 3.64a7.34 7.34 0 001.73 2.656 7.34 7.34 0 002.656 1.73c.954.37 2.044.624 3.64.697 1.6.073 2.11.09 6.182.09 4.073 0 4.583-.017 6.183-.09 1.596-.073 2.686-.327 3.64-.697a7.348 7.348 0 002.656-1.73 7.366 7.366 0 001.73-2.656c.37-.954.623-2.044.696-3.64.073-1.6.09-2.11.09-6.182 0-4.073-.017-4.583-.09-6.183-.072-1.596-.326-2.686-.697-3.64a7.348 7.348 0 00-1.73-2.656 7.37 7.37 0 00-2.655-1.73c-.954-.37-2.044-.624-3.64-.696-1.6-.073-2.11-.09-6.183-.09zm0 2.701c4.004 0 4.478.016 6.06.088 1.462.066 2.256.31 2.784.516.7.272 1.2.597 1.724 1.122.525.524.85 1.024 1.122 1.724.205.528.45 1.322.516 2.784.072 1.582.088 2.056.088 6.06s-.016 4.478-.088 6.06c-.066 1.461-.31 2.255-.516 2.784a4.644 4.644 0 01-1.122 1.724 4.634 4.634 0 01-1.724 1.121c-.528.206-1.322.45-2.784.517-1.581.072-2.056.087-6.06.087s-4.478-.015-6.06-.087c-1.461-.067-2.255-.311-2.784-.517a4.654 4.654 0 01-1.724-1.121 4.65 4.65 0 01-1.121-1.724c-.206-.529-.45-1.323-.517-2.785-.072-1.581-.087-2.055-.087-6.06 0-4.003.015-4.477.087-6.059.067-1.462.311-2.256.517-2.784.272-.7.597-1.2 1.121-1.724a4.652 4.652 0 011.724-1.122c.529-.205 1.323-.45 2.785-.516 1.581-.072 2.055-.088 6.06-.088z" mask="url(#b)"></path><path fill="#929497" d="M14.995 20.003a4.998 4.998 0 110-9.997 4.998 4.998 0 010 9.997zm0-12.699a7.7 7.7 0 10.002 15.4 7.7 7.7 0 00-.002-15.399zM24.8 7a1.8 1.8 0 11-3.6 0 1.8 1.8 0 013.6 0" mask="url(#b)"></path></g></svg></a>
</li>
<li>
  <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M30 15.092C30 6.757 23.284 0 15 0 6.716 0 0 6.757 0 15.092 0 22.624 5.485 28.868 12.656 30V19.454H8.848v-4.362h3.808v-3.325c0-3.783 2.24-5.872 5.666-5.872 1.641 0 3.358.295 3.358.295v3.714h-1.892c-1.863 0-2.444 1.163-2.444 2.357v2.83h4.16l-.665 4.363h-3.495V30C24.514 28.868 30 22.624 30 15.092" fill="#929497" fill-rule="evenodd"></path></svg></a>
</li>
<li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M27.783 0C29.007 0 30 .963 30 2.149v25.702C30 29.038 29.007 30 27.783 30H2.217C.993 30 0 29.038 0 27.852V2.149C0 .963.993 0 2.217 0h25.566zM9.094 11.566H4.563v13.547h4.531V11.566zm11.123-.317c-2.354 0-3.436 1.259-4.046 2.177l-.038.058v-1.917h-4.53c.017.372.024 1.69.025 3.367v1.558c-.003 3.46-.021 7.58-.025 8.454l-.001.156-.001.01h4.532v-7.563c0-.405.03-.81.15-1.099.327-.81 1.072-1.647 2.324-1.647 1.64 0 2.295 1.242 2.295 3.064v7.246h4.531v-7.767c0-4.161-2.235-6.097-5.216-6.097zM6.859 5.036c-1.55 0-2.563 1.011-2.563 2.34 0 1.3.983 2.341 2.504 2.341h.03c1.58 0 2.563-1.04 2.563-2.34-.03-1.33-.984-2.34-2.534-2.34z" fill="#929497"></path></svg></a></li>`;

  const footerInfoEl = document.createElement('div');
  footerInfoEl.classList.add('footer-info');
  footerInfoEl.innerHTML = `<div class="copyright">
                              © By UAB Programuok | CodeAcademy šeimos narys – 
                              <a href="#">CodeAcademy Kids</a>
                            </div>
                            <div class="privacy-policy">
                              <a href="#">Privatumo politika</a>
                            </div>`;

  const footerCertificatesEl = document.createElement('div');
  footerCertificatesEl.classList.add('footer-certificates');
  footerCertificatesEl.style.marginTop = '15px';
  footerCertificatesEl.innerHTML = `<img src="./components/sertika.svg" width="97" height="44" alt="Sertika">`;

  const footerDecorationEl = document.createElement('div');
  footerDecorationEl.classList.add('footer-decoration');
  footerDecorationEl.innerHTML = `<img src="./components/footer.svg" alt="footer-decoration">`;

  footerLogoEl.append(footerLogoImage);

  footerWidgetsLeftEl.append(footerWidgetsUlEl);

  footerWidgetsCenterEl.append(footerWidgetCenterUlEl);

  footerWidgetsRightEl.append(footerWidgetRightUlEl);

  footerWidgetsEl.append(footerWidgetsLeftEl, footerWidgetsCenterEl, footerWidgetsRightEl)

  footerContainerEl.append(footerLogoEl, footerWidgetsEl, footerInfoEl, footerCertificatesEl);

  siteFooterEl.append(footerContainerEl, footerDecorationEl);

  return siteFooterEl;
};