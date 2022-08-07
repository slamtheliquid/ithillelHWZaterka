String.prototype.countWords = function(){
    return this.split(/\s+/).length;
}
window.onload = function() {
    const check = word => {
        if(word.endsWith('.') && word.length > 8){
            return '<span style="background-color: yellow">' + word + '</span><div></div>';
        } else if (word.length > 8) {
            return '<span style="background-color: yellow">' + word + '</span>';
        } else if(word.endsWith('.')) {
            return word + '<div></div>';
        } else if(word.endsWith('?')){
           return word.replace('?',  '🤔');
        }else if(word.endsWith('!')){
            return word.replace('!',  '😲');
        }else{
            return word;
        }
    }
    const text = document.querySelector('p');
    text.insertAdjacentHTML('afterend', '<a href="https://forcemipsum.com/">Source</a>');
    text.insertAdjacentHTML('beforebegin', `<div>word counter: ${text.innerHTML.countWords()}</div>`);

    const sample = document.querySelector("p");
    sample.innerHTML = sample.innerText.trim().split(' ').map(check).join(' ');
}