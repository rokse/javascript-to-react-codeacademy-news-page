import copyrightPrivacy from "./copyrights-privacy.js";
import ulListComponent from "./ul-list-component.js";

export default function siteFooter(props) {
  let { footerMenuItems, listItemsObj, listIconsObj } = props;
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

  const footerWidgetsUlEl = ulListComponent(footerMenuItems);

  const footerWidgetsCenterEl = document.createElement('div');
  footerWidgetsCenterEl.classList.add('footer-widget-center');

  const footerWidgetsCenterHeadingEl = document.createElement('h2');
  footerWidgetsCenterHeadingEl.textContent = 'Vilnius';

  const footerWidgetCenterUlEl = ulListComponent(listItemsObj);


  const footerWidgetsRightEl = document.createElement('div');
  footerWidgetsRightEl.classList.add('footer-widget-right');

  const footerWidgetRightUlEl = ulListComponent(listIconsObj);

  const footerInfoEl = copyrightPrivacy();

  const footerCertificatesEl = document.createElement('div');
  footerCertificatesEl.classList.add('footer-certificates');
  footerCertificatesEl.style.marginTop = '15px';
  footerCertificatesEl.innerHTML = `<img src="./components/sertika.svg" width="97" height="44" alt="Sertika">`;

  const footerDecorationEl = document.createElement('div');
  footerDecorationEl.classList.add('footer-decoration');
  footerDecorationEl.innerHTML = `<img src="./components/footer.svg" alt="footer-decoration">`;

  footerLogoEl.append(footerLogoImage);

  footerWidgetsLeftEl.append(footerWidgetsUlEl);

  footerWidgetsCenterEl.append(footerWidgetsCenterHeadingEl, footerWidgetCenterUlEl);

  footerWidgetsRightEl.append(footerWidgetRightUlEl);

  footerWidgetsEl.append(footerWidgetsLeftEl, footerWidgetsCenterEl, footerWidgetsRightEl)

  footerContainerEl.append(footerLogoEl, footerWidgetsEl, footerInfoEl, footerCertificatesEl);

  siteFooterEl.append(footerContainerEl, footerDecorationEl);

  return siteFooterEl;
};