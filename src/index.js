const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID");
  
      fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title;
          summary.innerText = data.summary;
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);













































// const init = () => {
//     const inputForm = document.querySelector("form");
//     // add event listener to capture form data / override form's default behavior
//     inputForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const input = document.querySelector("input#searchByID");
// // fetch data based on what the user types into that form
//         fetch(`http://localhost:3000/movies/${input.value}`)
//         .then ((response) => response.json())
//         .then ((data) => {
//             const title = document.querySelector("section#movieDetails h4");
//             const summary = document.querySelector("section#movieDetails p");

//             title.innerText = data.title;
//             summary.innerText = data.summary;
//         });
//     });
// };
// // displays the data on the page
// document.addEventListener('DOMContentLoaded', init);