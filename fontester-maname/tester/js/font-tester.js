(function(global){
    /* jshint laxcomma:true, laxbreak:true, undef:true, unused:true */
    function initStyle (setup, spoof) {
        var style = document.createElement('style')
          , defaults = {
                weight: 400
              , style: 'normal'
              , familyName: 'default-font-tester-family'
            }
          , familyName = familyName || 'default-font-tester-family'
          , css = '@font-face {'
                        + 'font-family: "' + (setup.familyName || defaults.familyName) +'";'
                        + 'src: url("' + setup.url + (spoof || '') + '");'
                        + 'font-weight:  ' + (setup.weight || defaults.weight) + ';'
                        + 'font-style: ' + (setup.style || defaults.style) + ';'
                        + '}'
              , textNode
            ;
        textNode = document.createTextNode(css);
        style.appendChild(textNode);
        document.head.appendChild(style);
        return style;
    }


    function writeStyles(fonts, cacheSpoof) {
        var i,l, styles = [], style;

        for(i=0,l=fonts.length;i<l;i++) {
            style = initStyle(fonts[i], '?' + cacheSpoof);
            styles.push(style);
        }
        return styles;
    }

    function deleteElements(elements) {
        var i ,l;
        for(i=0,l=elements.length;i<l;i++)
                    elements[i].parentElement.removeChild(elements[i]);
    }

    function onFileChange(styles, fonts) {
        // Remove previous style tags from head
        var cacheSpoof = (new Date()).getTime();
        deleteElements(styles);
        return writeStyles(fonts, cacheSpoof);
    }

    function main(fonts) {
        // first run
        var styles = onFileChange([], fonts)
          , socket = io.connect('/')
          ;
        // When a file is updated. This uses and updates the "styles"
        // array from the closure
        socket.on('reload', function () { styles = onFileChange(styles, fonts); });
    }

    global.fontTesterMain = main;
})(window);
