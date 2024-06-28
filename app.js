/*const URL="https://bhagavadgitaapi.in/slok/1/5";
const Shlokaa=document.querySelector("#Shlok");
const btn=document.querySelector("#btn");




let promise=fetch(URL);
console.log(promise)

//-------button click----- shlok 
//----------add both inputs
//-----large value error


const getShlok = async () =>{
    console.log("getting data....")
    let response=await fetch(URL);
    //console.log(response);
    //console.log(response.status);
    let data=await response.json();
    //console.log(data)
    let shloka = data["slok"];
    //console.log(shloka)
    Shlokaa.innerText=data["slok"]
    

   

}


btn.addEventListener("click", (evt) => {
  getShlok()
        
})*/

//const URL = "https://cors-anywhere.herokuapp.com/https://bhagavadgitaapi.in/slok/1/5";
const URL = "https://bhagavadgitaapi.in/slok/1/5";

const Shlokaa = document.querySelector("#Shlok");
const btn = document.querySelector("#btn");

const getShlok = async () => {
    console.log("getting data....");
    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        let shloka = data["slok"];
        Shlokaa.innerText = data["slok"];
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

btn.addEventListener("click", (evt) => {
    getShlok();
});
