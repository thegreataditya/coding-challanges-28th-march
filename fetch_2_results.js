// async function getTodoData(){
//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then((response) => response.json());
// }

// async function getPostData() {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json());
// }

// async function getPostAndTodo(){
//     const [ans1, ans2] = await Promise.all([getTodoData(), getPostData()]);
//     const ans = {todo: ans1, post: ans2};
//     return ans;
// }

async function getPostAndTodo() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
      response.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
      response.json()
    ),
  ]);
  let ans = { todo: data1, post: data2 };

  return ans;
}

getPostAndTodo().then((data) => console.log(data));