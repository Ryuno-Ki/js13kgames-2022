const registry = new Map();

export function add (name, component) {
	registry.set(name, renderWrapper(component));
}

export function render (root, state) {
  function cloneComponent (root) {
    return root.cloneNode(true);
  }

  return renderWrapper(cloneComponent)(root, state);
}

function renderWrapper (component) {
  return function (targetElement, state) {
    const element = component(targetElement, state);

    const childComponents = Array.from(element.querySelectorAll('[data-component]'));

    childComponents.forEach(function (target) {
      const name = target.dataset.component;

      const child = registry.get(name);

      if (!child) {
        return;
      }

      target.replaceWith(child(target, state));
    });

    return element;
  }
}
