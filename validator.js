var colors = require('colors');

module.exports = function(node, context) {
    if(node.name !== 'button' && node.name !== 'a') {
        if(node.getAttribute('onclick') && !node.getAttribute('role')) {
            warn(node, context, 'you have a click handler on a non-interactive element but no `role` property');
        }
    }
}

function warn(node, context, message) {
    var pos = node.pos != null && context.getPosInfo(node.pos);
    var location = pos ? ' at ' + pos.path + ':' + pos.line + ':' + pos.column : '';

    console.warn(colors.bold.yellow('Warning: ') + message + colors.gray(' for <' + node.tagName + '>' + location));
}