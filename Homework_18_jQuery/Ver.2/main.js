$(document).ready(function () {
    function getAjax(url, section){
        $(section).html('');
        $(section).append('<hr>');
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            $.each(result, function (key, val) {
                if(Array.isArray(val)){
                    $.each(val, function (k, v) {
                        $(section).append(`${key}: <a id="${key}${k}">${v}</a><br>`);
                        $(`#${key}${k}`).on('click', function(event){

                            getAjax(v, '#resultSecond');
                        })
                    })
                    $(section).append('<hr>');
                }else if(key === 'homeworld' || key === 'url'){
                    $(section).append(`${key}: <a id="${key}">${val}</a><hr><br>`);
                    $(`#${key}`).on('click', function(event){
                        getAjax(val, '#resultSecond');
                    })
                }else if(key === 'name' || key === 'title'){
                    $(section).append(`<div class="titleSearchResult">${key}: ${val}</div><hr>`);
                }else{
                    $(section).append(`<div>${key}: ${val}</div><hr>`);
                }
            });
        }).fail(function(error) {
            console.log(error);
        })
    }
    $(`#submit`).on('click', function(event){
        let value = $('#search').val();
        let directories = $('#directories').val();
        let url = `https://swapi.dev/api/${directories}/?search=${value}`;
        getAjaxSearch(url, '#result');
    })
    function getAjaxSearch(url, section){
        $(section).html('');
        $(section).append('<hr>');
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
            $.each(Object.values(result['results']), function (key, value) {
                $.each(value, function (el, val) {
                    if(Array.isArray(val)){
                        $.each(val, function (k, v) {
                            $(section).append(`${el}: <a id="${el}${key}${k}">${v}</a><br>`);
                            $(`#${el}${key}${k}`).on('click', function(event){
                                getAjax(v, '#resultSecond');
                            })
                        })
                        $(section).append('<hr>');
                    }else if(el === 'homeworld' || el === 'url'){
                        $(section).append(`${el}: <a id="${el}${key}">${val}</a><hr><br>`);
                        $(`#${el}${key}`).on('click', function(event){
                            getAjax(val, '#resultSecond');
                        })
                    }else if(el === 'name' || el === 'title'){
                        $(section).append(`<div class="titleSearchResult">${el}: ${val}</div><hr>`);
                    }else{
                    $(section).append(`<div>${el}: ${val}</div><hr>`);
                }
                })

            });
        }).fail(function(error) {
            console.log(error);
        })
    }
    let elArr = ['#film1', '#film2', '#film3', '#film4', '#film5', '#film6', '#filmsLink', '#peopleLink', '#planetsLink', '#speciesLink', '#starshipsLink', '#vehiclesLink'];
    let linkArr = ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/',
                   'https://swapi.dev/api/films/', 'https://swapi.dev/api/people/', 'https://swapi.dev/api/planets/', 'https://swapi.dev/api/species/', 'https://swapi.dev/api/starships/', 'https://swapi.dev/api/vehicles/'];

    $.each(elArr, function(index, value){
        if(elArr[index].endsWith('Link')){
            $(elArr[index]).on('click', function(event){
                getAjaxSearch(linkArr[index], "#result");
            })
        }else{
            $(elArr[index]).on('click', function(event){
                getAjax(linkArr[index], "#result");
            })
        }
    });
})