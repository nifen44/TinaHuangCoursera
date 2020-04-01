document.getElementsByClassName('dropdownMenu')[0].addEventListener('click', function() {
    var element = document.getElementsByClassName('NavClassDiv')[0];
    var eleHeight = element.style.maxHeight;
    if (eleHeight == "0px" || !eleHeight) {
        element.style.maxHeight = "600px";
    } else {
        element.style.maxHeight = "0px";
    }

})