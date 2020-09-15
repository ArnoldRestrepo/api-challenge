/**
 * @name API-CHALLENGE Aflore API Challenge
 * @author @restrepo_arnold Arnold Restrepo Hernandez | Frontend Developer | arnoldrestrepo.com
 * @description App for get elements by Mocki API
 */

const API_URL = `https://api.mocki.io/v1/56e929d8`;

(async function load() {
  /**
   * @name Containers
   * @description DOM Elements for render data and events handling
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
   * @param HTMLString Template String with HTML Data
   */

  function createTemplate(HTMLString) {
    const $html = document.implementation.createHTMLDocument();
    $html.body.innerHTML = HTMLString;
    return $html.body.children[0];
  }

  /**
   * @name createTemplateString
   * @description Create HTML String
   * @param item List Element
   */

  function createTemplateString(item) {
    return `
      <div class="Card">
        <div class="Card__header">
          <h3 class="Card__title">${item.name.normalize()}</h3>
          <small class="Card__id">#${item.id}</small>
        </div>
        <div class="Card__content">
          <small class="${item.offer ? 'is--offer' : 'is--normal'}">
            <i class="fas fa-certificate"></i> In Offer!
          </small>
          <small class="Card__products">${item.children.length} Products</small>
        </div>
      </div>
    `;
  }

  /**
   * @name createTemplateStringCategory
   * @description Create HTML String for Category
   * @param item List Element
   */

  function createTemplateStringCategory(item) {
    return `
      <div class="Category__wrapper">
        <h1 class="Category__title">Category: ${item.name}</h1>
        <small>${item.children.length} Products found</small>
      </div>
    `;
  }

  /**
   * @name createTemplateStringEmpty
   * @description Create HTML String for Category
   * @param message Message for String Error Element
   */

  function createTemplateStringEmpty(message) {
    return `
      <div class="Error">
        <h3 class="Error__title">
          <i class="fas fa-exclamation-triangle"></i>
          ${message} 
        </h3>
        <button onClick="window.location.reload()" class="Reload">Reload Page</button>
      </div>
    `;
  }

  /**
   * @name renderItems
   * @description Render Items List for Children data
   * @param data Data List
   * @param $container DOM Element for render data
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
   * @param data Data List
   * @param $container DOM Element for render data
   */

  function renderCategory(data, $container) {
    $container.innerHTML = '';
    let HTMLString = createTemplateStringCategory(data);
    let itemTemplate = createTemplate(HTMLString);
    $container.append(itemTemplate);
  }

  /**
   * @name renderEmptyData
   * @description Render Category text
   * @param message Message for Error Title
   * @param $container DOM Element for render data
   */

  function renderEmptyData(message, $container) {
    $container.innerHTML = '';
    let HTMLString = createTemplateStringEmpty(message);
    let itemTemplate = createTemplate(HTMLString);
    $container.append(itemTemplate);
  }

  renderCategory(dataAPI, $categoryContainer);
  renderItems(dataAPI.children, $dataContainer);

  /**
   * @name findId
   * @description Find Id in Data
   * @param id Number to Search
   * @param array Data Array to id find
   */

  function findId(id, array) {
    const newData = array.find((element) => element.id === id);
    return newData;
  }

  /**
   * @name SearchForm
   * @description Search Form
   */

  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const numberSearch = parseInt($formInput.value);
    const dataSearch = findId(numberSearch, dataAPI.children);
    if (dataSearch) {
      let arraySearch = [];
      arraySearch.push(dataSearch);
      renderItems(arraySearch, $dataContainer);
    } else {
      renderEmptyData(`Product #${numberSearch} not found`, $dataContainer);
    }
  });
})();
