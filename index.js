const visit = require('unist-util-visit');
const qs = require('qs')

module.exports = function(options) {
  return (tree) => visit(tree, 'code', (node, index) => {
    const [language, query] = (node.lang || '').split(':');
    const { title } = qs.parse(query);
    if (!title || !language) {
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