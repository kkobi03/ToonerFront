const signup = document.getElementById('signup');
signup.addEventListener('click',function(){
    var data = {
        id : $('#id').val(),
        password : $('#password').val(),
        age : $('age').val(),
        gender: $('gender').val()
        }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/api/members',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data)
        }).done(function(data) {
            alert(data.message);
            window.location.href = '/';
        }).fail(function (data) {
            alert(data.errorMessage);
        });

    alert('계정이 생성되었습니다');
})
