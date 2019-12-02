function search() {
    var searchItem = $('#categoria').val()
    console.log(searchItem)
    let url = "127.0.0.1:8000/?categoria=" + searchItem
    let goog = "http://www.google.com"
    window.location.href = goog      
};
