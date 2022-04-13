function toFeed(){
    let header = document.querySelector('header')
    document.body.classList.toggle('toFeedCSS')
    //display none no sec-1 e display block no sec-2

    let firstName = document.getElementById('firstName').value
    let arrowName = document.getElementById('arrowName').innerHTML = `${firstName}`
}




function OpenFriendsRequest(){
    let friendsRequest = document.getElementById('friendsRequest')

    friendsRequest.classList.toggle('OpenFriendsRequest')
}

function OpenMessages(){
    let messages = document.getElementById('messages')

    messages.classList.toggle('OpenMessages')
}

function OpenArrow(){
    let arrow = document.getElementById('arrow')

    arrow.classList.toggle('OpenArrow')
}





//let buttonSignUp = document.querySelector('button').addEventListener('click')
//let firstName = document.getElementById('firstName')
//let lastName = document.getElementById('lastName')
//let email = document.getElementById('email')
//let password = document.getElementById('password')
//let passwordConfirm = document.getElementById('passwordConfirm')


