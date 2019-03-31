let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

window.onload = function main() {
    var userInput; // Incoming userdata = request
    let url; //Wiki-URL of request (should be converted to JSon file)
    // var data; // JSon file with an information about request
        
    $('#btn').click(function(){
        userInput = $('#userInput').val();
        url = searchUrl + userInput;
        alert(url);

        // $.getJSON(url, function() { 
        //     alert(1);
        // });

        // $.getJSON(url, function (data) {
        //     var obj = data.query.pages;
        //     var ob = Object.keys(obj)[0];
        //     alert(obj[ob]["extract"]);
        // }, 'jsonp');

        // $.getJSON doesnt work

        data = gotData(url);
    });

    function gotData(url) {
        // how to convert web-url to JSon file?
    }
}
