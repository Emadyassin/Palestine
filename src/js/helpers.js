/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
export const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
export const els = (elements) => document.querySelectorAll(elements);

export var path = window.location.pathname;
export var page = path.split("/").pop();

export const setStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
    })
  );
};

export const getStorage = (key , defaultValue = null) => {
  const data = localStorage.getItem(key);
  if (data && !undefined) return JSON.parse(data).data;

  return defaultValue;
};

const app = el("#app");

export const renderHtml = (htmlString) => {
  app.innerHTML += htmlString;
};

export let stopFromSubmitRefresh = (formId) => {
  formId.addEventListener("submit", (e) => {
      e.preventDefault();
    });
}

export let toggleModalEvent = (modelId ,model) => {
  console.log(modelId,model)
  modelId .addEventListener("click", () => {
  model.toggle();
        });

        
} 


// var user = [];

// user = getStorage("user");