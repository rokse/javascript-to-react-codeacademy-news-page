export default function ulListComponent(data) {
  let {listItems, liClassName, ulClassName} = data;

  const ulElement = document.createElement('ul');
  ulElement.classList.add(ulClassName);

  listItems.map(item => {
    const menuItemEl = document.createElement('li');
    menuItemEl.classList.add(liClassName);
    
    if (item.url) {
      const menuItemLinkEl = document.createElement('a');
      menuItemLinkEl.href = item.url;
      menuItemLinkEl.innerHTML = item.title
      menuItemEl.append(menuItemLinkEl);
    } else {
      menuItemEl.textContent = item.title;
    };

    ulElement.append(menuItemEl);
  });

  return ulElement;
}