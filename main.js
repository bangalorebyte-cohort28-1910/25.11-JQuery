
// // $("div").text("For this type jQuery found " + input.length + ".");
// console.log(input)

$(document).ready(function () {

    //selectors
    $('h1#title').hide()
    $('h1#title').show()

    $('h1#title').css('color', 'red');
    $('h1#title').css('padding-left', '20px')

    $('h1.subheading').css('color', 'grey')
    $(":button#red").addClass("marked");

    //events
    $('button#red').click(function(){
        $('#title').css('color','red')
    })

    // $('button#blue').click(function () {
    //     $('#title').css('color', 'blue')
    // })

    $('button#blue').on('mouseleave', function () {
        $('#title').css('color', 'blue')
    })

    $('button#toggle').on('click', function(){
        $('p').toggle();
    })

    //animate
     
    $("#go").click(function () {
        $("#block").animate({
            width: "20%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 1500);
    });

    //DOM manipulation
    $('button#submit').on('click', function(event){
        event.preventDefault()
        var value = $('input#name').val()
        $('ul#addnames').append(`<li>${value}</li>`);
    })

    // $('#test').load('test.html', function(responseTxt, statusTxt, xhr){
    //     if(statusTxt=='success'){
    //         console.log("Success")
    //     }else {
    //         console.log("failure :", xhr.statusText)
    //     }

    // })

    $.get('test.html', function(data){
        $('#test').html(data)
    })


    $('button#getUsers').on('click', function(){
        $.getJSON("user.json", function (data, textStatus, jqXHR) {
            $.each(data, function (i, user) {
                $('ul#users').append(`<li>${user.firstName} ${user.lastName}</li>`)
            })
        });
    })

    $.ajax("https://jsonplaceholder.typicode.com/posts").done(function(data){
        $.each(data, function (i,item) {
            $('#newdiv').append(`<li>${item.title} </li>`)
        })
    })
});

