var newField = document.getElementById('AddFilter');
newField.addEventListener('keyup',function onkeyup(event){
    if(event.keyCode == 13)
    {
//        console.log('masuk: '+newField.value);
        self.port.emit("filter-entered",newField.value);
        newField.value = '';
    }
}, false);

self.port.on('show', function onShow()
{
    newField.focus();
});