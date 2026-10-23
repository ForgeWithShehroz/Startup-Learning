let url = "https://cat-fact.herokuapp.com/facts";

let fetchPara = document.querySelector("#fetchPara")
const getFacts = async () => {
    console.log("Getting data.....");
    let response = await fetch(url);
    console.log(response); // it is not the data that we want as information as it is that data of kind in form of JSON 
    //converting the json data into readable form
    let data = await response.json()
    console.log(data);
    console.log(data[0]);
    console.log(data[0].text);   
    fetchPara.innerText = data[0].text;
}


const btn = document.querySelector("#btn");
btn.addEventListener("click", getFacts)