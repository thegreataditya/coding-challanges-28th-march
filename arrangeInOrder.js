function filterTitles(arr, arrangeAndLog){
    let ans_arr = arr.map(e => e.title);
    arrangeAndLog(ans_arr);
}

let arr = [
  { title: "Henry Potter", auther: "H.R. Wings", year: 1990 },
  { title: "Harry Potter", auther: "Vikram Batra", year: 2021 },
  { title: "Chakra The Invincible", auther: "A.R. Rehman", year: 2022},
  { title: "Mighty Raju", auther: "M.F. Hussain", year: 2025},
];

filterTitles(arr, (arr) => {
    console.log(arr.sort());
})