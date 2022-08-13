function removeRealNodeFromDOM (realNode) {
  realNode.remove();
}

function addToRealDOM (parentNode, virtualNode) {
  parentNode.appendChild(virtualNode);
}

function replaceNode (realNode, virtualNode) {
  realNode.replaceWith(virtualNode);
}

function hasNodeChanged (node1, node2) {
  // Different tag name
  if (node1.tagName !== node2.tagName) {
    return true;
  }

  const n1Attributes = node1.attributes;
  const n2Attributes = node2.attributes;

  // Different number of attributes
  if (n1Attributes.length !== n2Attributes.length) {
    return true;
  }

  // Different attribute
  const differentAttribute = Array.from(n1Attributes).find(function (attribute) {
    const { name } = attribute;

    const attribute1 = node1.getAttribute(name);
    const attribute2 = node2.getAttribute(name);

    return attribute1 !== attribute2;
  });

  if (differentAttribute) {
    return true;
  }

  // Different text leaves
  if (node1.children.length === 0 && node2.children.length === 0 && node1.textContent !== node2.textContent) {
    return true;
  }

  return false;
}

export function applyToDOM (parentNode, realNode, virtualNode) {
  if (realNode && !virtualNode) {
    return removeRealNodeFromDOM(realNode);
  }

  if (!realNode && virtualNode) {
    return addToRealDOM(parentNode, virtualNode);
  }

  if (hasNodeChanged(realNode, virtualNode)) {
    return replaceNode(realNode, virtualNode);
  }

  const realChildren = Array.from(realNode.children);
  const virtualChildren = Array.from(virtualNode.children);

  const max = Math.max(realChildren.length, virtualChildren.length);

  for (let i = 0; i < max; i++) {
		applyToDOM(realNode, realChildren[i], virtualChildren[i]);
  }
}
