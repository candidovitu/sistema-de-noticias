document.addEventListener('submit', postSubmit);


function postSubmit(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    const shortDescription = document.getElementById('short-description').value;
    const content = document.getElementById('content').value;
    const postBody = {
        title,
        shortDescription,
        content
    }
    fetch('http://127.0.0.1:3000/post', {body: JSON.stringify(postBody), method: 'POST', headers: new Headers({'content-type': 'application/json'})})
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        if(data.code === 201) return location.href = '/';
        alert(data.msg);
    }).catch(err=>console.log(err));
}