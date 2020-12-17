function renderSocials (selector, data){


    // IF VALID

const DOM = document.querySelector(selector);



if (!DOM){
    return false;
}

let HTML= '' ;

for (let item of data) {

// if (!isValidSocialItem(item)) {
//     continue;
// }



HTML+=` <a href="${item.href}" target="_blank" class="fa fa-${item.icon}"></a>  `;

}

if(HTML === '') {
    return false;
}

DOM.innerHTML+=HTML;
return true;

}




export {renderSocials}















