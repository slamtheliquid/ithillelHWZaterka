const button = document.querySelector('#submitButton');
let bookmarks = [];

let bookmarkSave = (id) => {
    const buttonSave = document.querySelector(`#bookmarkButtonSave${id}`);
    const buttonInsert = document.querySelector(`#bookmarkButtonDone${id}`);
    const wrapper = document.querySelector(`#editWrapper${id}`);
    const name = document.querySelector(`#editInputName${id}`);
    const text = document.querySelector(`#editInputText${id}`);
    const bookmark = document.querySelector(`#bookmark${id}`);
    const nameInner = name.value;
    const textInner = text.value;
    wrapper.remove();
    bookmarks.forEach(bookmark => {
        if(bookmark.counter === id){
            let count = bookmarks.indexOf(bookmark);
            bookmarks[count].name = nameInner;
            bookmarks[count].text = textInner;
        }
    });
    let saveChanges = document.createElement('div');
    let createButton = document.createElement('button');
    saveChanges.innerHTML =
        `<div class="bookmarkName" id=bookmarkName${id}>${nameInner}</div>
         <div class="bookmarkText" id=bookmarkText${id}>${textInner}</div>`;
    saveChanges.setAttribute('id', `nameTextWrapper${id}`);
    createButton.setAttribute('id', `bookmarkButtonEdit${id}`);
    createButton.setAttribute('class', `bookmarkButton`);
    createButton.setAttribute('onclick', `bookmarkEdit(${id})`);
    createButton.textContent = `Редактировать`;
    bookmark.insertBefore(createButton, buttonInsert);
    bookmark.insertBefore(saveChanges, createButton);
    buttonSave.remove();
    console.log(bookmarks);
}

let bookmarkEdit = (id) => {
    const buttonEdit = document.querySelector(`#bookmarkButtonEdit${id}`);
    const buttonInsert = document.querySelector(`#bookmarkButtonDone${id}`);
    const wrapper = document.querySelector(`#nameTextWrapper${id}`);
    const name = document.querySelector(`#bookmarkName${id}`);
    const text = document.querySelector(`#bookmarkText${id}`);
    const bookmark = document.querySelector(`#bookmark${id}`);
    if(wrapper !== null){
        const nameInner = name.innerHTML;
        const textInner = text.innerHTML;
        wrapper.remove();
        let editInputs = document.createElement('div');
        editInputs.innerHTML = `<input class="formInput" id=editInputName${id} value="${nameInner}" placeholder="Новое имя заметки"/>
                                <input class="formInput" id=editInputText${id} value="${textInner}" placeholder="Новый текст заметки"/>
                                <button class="bookmarkButton" id="bookmarkButtonSave${id}" onclick="bookmarkSave(${id})">Сохранить</button>`;
        editInputs.setAttribute('id', `editWrapper${id}`);
        bookmark.insertBefore(editInputs, buttonInsert);
        buttonEdit.remove();
    }
}

let bookmarkLineThrough = (id) => {
    const button = document.querySelector(`#bookmarkButtonEdit${id}`);
    const wrapper = document.querySelector(`#nameTextWrapper${id}`);
    const name = document.querySelector(`#bookmarkName${id}`);
    const text = document.querySelector(`#bookmarkText${id}`);
    const bookmark = document.querySelector(`#bookmark${id}`);
    if(name !== null && wrapper !== null){
        const nameInner = name.innerHTML.strike();
        const textInner = text.innerHTML.strike();
        wrapper.remove();
        let afterText = document.createElement('div');
        afterText.innerHTML = `<div class="bookmarkName" id=bookmarkName${id}>${nameInner}</div>
                               <div class="bookmarkText" id=bookmarkText${id}>${textInner}</div>`;
        afterText.setAttribute('id', `afterTextWrapper${id}`);
        bookmarks.forEach(bookmark => {
            if(bookmark.counter === id){
                let count = bookmarks.indexOf(bookmark);
                bookmarks[count].done = true;
            }
        });
        bookmark.insertBefore(afterText, button);
        console.log(bookmarks);
    }
}
let bookmarkDeleteElement = (id) => {
    const bookmark = document.querySelector(`#bookmark${id}`);
    bookmarks.forEach(bookmark => {
        if(bookmark.counter === id){
            let count = bookmarks.indexOf(bookmark);
            bookmarks.splice(count, 1);
        }
    });
    bookmark.remove();
    console.log(bookmarks);
}
let getInputs = () => {
    const name = document.querySelector('#inputName');
    const text = document.querySelector('#inputText');
    const footer = document.querySelector('#after');
    let resObj = {
        name: name.value,
        text: text.value,
        done: false,
        counter: 0
    }
    if(bookmarks.length === 0){
        resObj.counter = 0;
    }else{
        resObj.counter = bookmarks[bookmarks.length-1].counter + 1;
    }
    let newBookmark = document.createElement('div');
    newBookmark.setAttribute('class','bookmark');
    newBookmark.innerHTML =
        `<div id="nameTextWrapper${resObj.counter}">
            <div class="bookmarkName" id=bookmarkName${resObj.counter}>${resObj.name}</div>
            <div class="bookmarkText" id=bookmarkText${resObj.counter}>${resObj.text}</div>
         </div>
         <button class="bookmarkButton" id="bookmarkButtonEdit${resObj.counter}" onclick="bookmarkEdit(${resObj.counter})">Редактировать</button>
         <button class="bookmarkButton" id="bookmarkButtonDone${resObj.counter}" onclick="bookmarkLineThrough(${resObj.counter})">Завершено</button>
         <button class="bookmarkButton" id="bookmarkButtonDelete${resObj.counter}" onclick="bookmarkDeleteElement(${resObj.counter})">Удалить</button>`;
    newBookmark.setAttribute('id',`bookmark${resObj.counter}`)
    document.body.insertBefore(newBookmark, footer);
    bookmarks.push(resObj);
    console.log(bookmarks);
}
button.addEventListener('click', getInputs);