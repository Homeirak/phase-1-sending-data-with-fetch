function submitData(userName, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: email,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Server response:", data);
      
        const body = document.querySelector("body"); //get the body
        const p = document.createElement("p");       //create new <p>
        p.textContent = `ID: ${data.id}`;            //set its text
        p.style.fontSize = "24px";         
        p.style.color = "green";           
        body.appendChild(p);                         //add it to the page
      })
      
    .catch(function (error) {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.textContent = error.message;
        body.appendChild(p);
    });
}