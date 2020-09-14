// Helpers and Base

/**
 * @name API-CHALLENGE Aflore API Challenge
 * @author @restrepo_arnold Arnold Restrepo Hernandez - Frontend Developer
 * @description App for get elements by Mocki API
 */

const API_URL = `https://api.mocki.io/v1/56e929d8`;

(async function load() {
  /**
   * @name Containers
   */

  const $dataContainer = document.getElementById('js-data');
  const $categoryContainer = document.getElementById('js-category');
  const $form = document.getElementById('js-search-form');
  const $formInput = document.getElementById('js-search-input');

  /**
   * @name getData
   * @description Get Data of API
   * @param url API URL
   */
  async function getData(url) {
    try {
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (e) {
      throw new Error(`Error in getData, ${e}`);
    }
  }
  const dataAPI = await getData(API_URL).then((data) => {
    return data;
  });

  /**
   * @name createTemplate
   * @description Create Template for HTML
   */

  function createTemplate(HTMLString) {
    const $html = document.implementation.createHTMLDocument();
    $html.body.innerHTML = HTMLString;
    return $html.body.children[0];
  }

  /**
   * @name createTemplateString
   * @description Create HTML String
   */
  function createTemplateString(item) {
    return `<div class="Card">
          <h3 class="Card__title">${item.name}</h3>
          <span class="Card__id">${item.id}</span>
          <span class="${item.offer ? 'is--offer' : 'is--normal'}">Ofertas: ${
      item.offer ? 'is--offer' : 'is--normal'
    }</span>
          <span>Productos: ${item.children.length}</span>
       </div>
    `;
  }
  /**
   * @name createTemplateStringCategory
   * @description Create HTML String for Category
   */
  function createTemplateStringCategory(item) {
    return `
      <div class="Category__wrapper">
        <h1 class="Category__title">Categoria: ${item.name}</h1>
        <small>${item.children.length} Productos</small>
      </div>
    `;
  }

  /**
   * @name renderItems
   * @description Render Items List for Children data
   */

  function renderItems(list, $container) {
    $container.innerHTML = '';
    list.forEach((item) => {
      let HTMLString = createTemplateString(item);
      let itemTemplate = createTemplate(HTMLString);
      $container.append(itemTemplate);
    });
  }

  /**
   * @name renderCategory
   * @description Render Category text
   */
  function renderCategory(data, $container) {
    $container.innerHTML = '';
    let HTMLString = createTemplateStringCategory(data);
    let itemTemplate = createTemplate(HTMLString);
    $container.append(itemTemplate);
  }
  renderCategory(dataAPI, $categoryContainer);
  renderItems(dataAPI.children, $dataContainer);
})();
