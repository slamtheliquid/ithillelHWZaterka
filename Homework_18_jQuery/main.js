$(document).ready(function () {
    function getAjax(url){
        $("#result").html('');
        $("#result").append('<hr>');
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            $.each(result, function (key, val) {
                if(Array.isArray(val)){
                    $.each(val, function (k, v) {
                        $("#result").append(`${key}: <a id="${key}${k}" href="#">${v}</a><br>`);
                        $(`#${key}${k}`).on('click', function(event){
                            getAjax(v);
                        })
                    })
                    $("#result").append('<hr>');
                }else if(key === 'homeworld' || key === 'url'){
                    $("#result").append(`${key}: <a id="${key}" href="#">${val}</a><hr><br>`);
                    $(`#${key}`).on('click', function(event){
                        getAjax(val);
                    })
                }else if(key === 'name' || key === 'title'){
                    $("#result").append(`<div class="titleSearchResult">${key}: ${val}</div><hr>`);
                }else{
                    $("#result").append(`<div>${key}: ${val}</div><hr>`);
                }
            });
        }).fail(function(error) {
            console.log(error);
        })
    }
    function getAjaxSearch(url){
        $("#result").html('');
        $("#result").append('<hr>');
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            $.each(Object.values(result['results']), function (key, value) {
                $.each(value, function (el, val) {
                    if(Array.isArray(val)){
                        $.each(val, function (k, v) {
                            $("#result").append(`${el}: <a id="${el}${key}${k}" href="#">${v}</a><br>`);
                            $(`#${el}${key}${k}`).on('click', function(event){
                                getAjax(v);
                            })
                        })
                        $("#result").append('<hr>');
                    }else if(el === 'homeworld' || el === 'url'){
                        $("#result").append(`${el}: <a id="${el}${key}" href="#">${val}</a><hr><br>`);
                        $(`#${el}${key}`).on('click', function(event){
                            getAjax(val);
                        })
                    }else if(el === 'name' || el === 'title'){
                        $("#result").append(`<div class="titleSearchResult">${el}: ${val}</div><hr>`);
                    }else{
                    $("#result").append(`<div>${el}: ${val}</div><hr>`);
                }
                })

            });
        }).fail(function(error) {
            console.log(error);
        })
    }
    $(`#submit`).on('click', function(event){
        let value = $('#search').val();
        let directories = $('#directories').val();
        let url = `https://swapi.dev/api/${directories}/?search=${value}`;
        getAjaxSearch(url);
    })
    $('#film1').on('click', function(event){
        getAjax('https://swapi.dev/api/films/1/');
    })
    $('#film2').on('click', function(event){
        getAjax('https://swapi.dev/api/films/2/');
    })
    $('#film3').on('click', function(event){
        getAjax('https://swapi.dev/api/films/3/');
    })
    $('#film4').on('click', function(event){
        getAjax('https://swapi.dev/api/films/4/');
    })
    $('#film5').on('click', function(event){
        getAjax('https://swapi.dev/api/films/5/');
    })
    $('#film6').on('click', function(event){
        getAjax('https://swapi.dev/api/films/6/');
    })
})
