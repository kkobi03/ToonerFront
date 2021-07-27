$(document).ready(function() {
    $.getJSON('/assets/naver.json', function(data){
        var html = [];

        $.each(data, function(i, item){
            console.log(item.users.length);
            html.push()
        })
    })
})