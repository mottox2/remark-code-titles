const visit = require('unist-util-visit');

module.exports = function(options) {
  return (tree) => visit(tree, 'code', (node, index) => {
    const [language, title] = (node.lang || '').split(':');
    if (!title) {
      return;
    }

    const className = 'remark-code-title'

    const titleNode = {
      type: 'html',
      value: `<div class="${className}">${title}</div>`.trim()
    };

    tree.children.splice(index, 0, titleNode);
    node.lang = language;
  });
}
