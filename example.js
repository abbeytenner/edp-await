// document
//   .getElementById("save-btn")
//   .addEventListener("click", async function () {
//     try {
//       // console.log("Save button clicked!");
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       if (!response.ok) throw new Error(`HTTP ${response.status}`);
//       const data = await response.json();

//       // If the API returns an array, log each title; otherwise log the single item's title
//       if (Array.isArray(data)) {
//         data.forEach((post) => console.log(post.title));
//       } else {
//         console.log(data.title ?? data);
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//     }
//   });

// changing the style of an HTML element by ID
// id attribute, meaning only one element can have that id in the entire HTML document
// const t = document.getElementById("sample");
// t.textContent = "Hi";
// t.innerHTML = "<strong>Bold text</strong>";

// document.getElementById("paragraph").style.backgroundColor = "#ffffff";

// // accessing the HTML element content by innerHTML thru id attribute
// document.getElementById("paragraph").innerHTML = "henlo";
// document.getElementById("phoneNum").innerHTML = "095632";

// // same thing as innerHTML
// document.getElementById("textContent").textContent = "Hello World!";

// // set an element's attribute
// // style change
// const paragraph = document.getElementById("textContent");
// paragraph.setAttribute(
//   "style",
//   "background-color: blue; color: white; padding: 10px;",
// );
// // src change on img
// const imgElement = document.getElementById("imgElement");
// imgElement.setAttribute("src", "source");

// console.dir(document.getElementById("genderr")); //gives the full HTML element object (all properties, events, methods, etc. for this element)

// DOM Methods that returns list of elements
let genders = document.getElementsByName("gender");

// genders.forEach((gender) => {
//   gender.addEventListener("change", () => {
//     if (gender.checked) {
//       console.log(gender.value);
//     }
//   });
// });

genders.forEach((gender) => {
  gender.addEventListener("change", () => {
    console.log(gender.value);
  });
});

let t = document.getElementById("text");
t.addEventListener("change", () => {
  console.log(t.value);
});
