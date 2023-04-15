async function handleFetchErrors() {
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/posts/1234567890");
        let response = data.json();
        return response;
    }catch(err){
        console.log("An error Occured");
    }

}

handleFetchErrors();