let btn = document.getElementById("btn");
let jokes = document.getElementById("jokes");

   const func = async () => {
     try {
       const headerapi = {
         headers: {
           Accept: "application/json",
         },
       };
       const res = await fetch("https://icanhazdadjoke.com/", headerapi);
       const data = await res.json();
       jokes.innerHTML = data.joke;
     } catch (error) {
       jokes.innerHTML = "Please Check Your Internet Connection";
     }
   };
   btn.addEventListener("click", func);
   func();