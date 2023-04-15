async function retriveContent(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = response.json();
    return data;
}

retriveContent().then(data => console.log(data));