document.getElementById('removeButton').addEventListener('click', function() {
    var list = document.getElementById('itemList');
    var items = list.getElementsByTagName('li');

    if (items.length > 0) {
        list.removeChild(items[items.length - 1]);
    } else {
        alert('La liste est déjà vide !');
    }
});