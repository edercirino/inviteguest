export class Guest {

    constructor(){
        this.guests = [];
    }

    create(guestName){
        
        if (guestName == "") {
            alert("Digite um nome.");
            
        }else{
        
        // add guest to the list
        let guestNameInput = document.getElementById("guestNameInput");
        let elGuestNameInput =  guestNameInput.value;
        this.guests.push({name: elGuestNameInput});
        localStorage.setItem("guestName", JSON.stringify(this.guests));
        guestNameInput.value = "";
        window.location.reload();
        
        }    
    }

    list(){
        // load the list
        this.guests = JSON.parse(localStorage.getItem("guestName")) || [];
        
        
        let elNameList = document.getElementById("guestNameList");
        elNameList.innerHTML = "";

        for (const guest of this.guests) {
            
            let elTr = document.createElement("tr")
            let elTd1 = document.createElement("td"); //guest name
            let elTd2 = document.createElement("td"); //button del
            let elTdADel = document.createElement("a");
            elTdADel.setAttribute("href", "#"); //Adding the class
            elTdADel.setAttribute("onclick", "deleteGuest(this.id)");
            elTdADel.classList.add("btn", "btn-danger", "mx-1"); //Adding the class
            let elTdDel = document.createTextNode("Excluir");
            let elGuestName = document.createTextNode(guest.name);
            elTdADel.setAttribute("id", guest.name);


            // name of the guest
            elTd1.appendChild(elGuestName);
            elTr.appendChild(elTd1);
            elNameList.appendChild(elTr);

            // delete button
            elTdADel.appendChild(elTdDel);
            elTd2.appendChild(elTdADel);
            elTr.appendChild(elTd2);
            elNameList.appendChild(elTr);

        }
    }

    delete(idGuest){
        let guest = JSON.parse(localStorage.getItem("guestName"));
        let guestRemoved = guest.filter((id) => { return id.name !== idGuest });
        localStorage.setItem("guestName", JSON.stringify(guestRemoved));
        window.location.reload();
        console.log(guestRemoved);
    }
}