function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tds = Array.from(document.getElementsByTagName("td")); tds.pop();
      const searchField = document.getElementById("searchField");
      const input = searchField.value.toLowerCase();
   
      tds.forEach(td => {
         td.parentElement.classList.remove("select");
      });
      tds.forEach(td => {
         if (td.textContent.toLowerCase().includes(input)) {
            td.parentElement.classList.add("select");
         }
      });
      
   }
}