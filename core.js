// ============================================================
// core.js — Le coeur du framework
// ============================================================

function bootstrapApp(component) {

  // 1. Lire le selector du composant
  const selector = component.selector;

  // 2. Trouver l'élément hôte dans le DOM
  const hostElement = document.querySelector(selector);

  if (!hostElement) {
    throw new Error(`host element with selector ${selector} not found`);
  }

  // 3. Afficher du contenu statique (pour l'instant)
  hostElement.innerHTML = '<h1>Hello depuis mon mini Angular framework!</h1>';

  // 4. Log
  console.log(`Bootstrapping component with selector: ${selector}`);
}