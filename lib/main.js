// This is an active module of the smanurung (1) Add-on
var data = require("sdk/self").data;

var filter_entry = require("sdk/panel").Panel({
    width: 400,
    height: 250,
    contentURL: data.url('filter-entry.html'),
    contentScriptFile: data.url('add-filter.js')
});

require('sdk/widget').Widget({
    label: 'Enter new filter',
    id: 'filterEntry',
    contentURL: 'https://www.hrb-ideas.com/wp-content/uploads/2012/05/chrome-favicon.png',
    panel: filter_entry
});

filter_entry.on('show', function()
{
    filter_entry.port.emit('show');
});

filter_entry.port.on("filter-entered", function(text)
{
    console.log(text);
    text_entry.hide();
});