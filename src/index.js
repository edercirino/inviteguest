class Host {

    constructor(){
        this.hostName;
    }

    create(hostName){

        if (hostName == "") {
            alert("Digite um nome.");
        }else{   
            localStorage.setItem("hostName", JSON.stringify(hostName));
            document.getElementById("btnAddHostName").style.display = "none";
            document.getElementById("hostNameInput").value = "";
            document.getElementById("btnDelHostName").style.display = "block";
            window.location.reload();

        }

    }

    list(){
        let hostName = localStorage.getItem("hostName");
        
        if (hostName) {
            document.getElementById("btnDelHostName").style.display = "block";
            document.getElementById("btnAddHostName").style.display = "none";
            document.getElementById("hostNameInput").value = JSON.parse(hostName);
        }
        
    }

    delete(){
        localStorage.removeItem("hostName");
        document.getElementById("btnAddHostName").style.display = "block";
        document.getElementById("btnDelHostName").style.display = "none";

    }
}

const objHost = new Host();

document.getElementById("btnAddHostName").onclick = () => {
    let nameHost = document.getElementById("hostNameInput").value;
    objHost.create(nameHost);  
};

objHost.list();


document.getElementById("btnDelHostName").onclick = () => {
    document.getElementById("hostNameInput").value = "";
    objHost.delete();
};


// -----------------------------------------------------------------------------

class Receptionist {

    constructor(){
        this.receptionistName;
    }

    create(receptionistName){

        if (receptionistName == "") {
            alert("Digite um nome.");

        }else{

            localStorage.setItem("receptionistName", JSON.stringify(receptionistName));
            document.getElementById("btnAddReceptionistName").style.display = "none";
            document.getElementById("receptionistNameInput").value = "";
            document.getElementById("btnDelReceptionistName").style.display = "block";
            window.location.reload();
        }
    }

    list(){
        let receptionistName = localStorage.getItem("receptionistName");

        if (receptionistName) {
            document.getElementById("receptionistNameInput")
                                    .value = JSON.parse(receptionistName);
            document.getElementById("btnDelReceptionistName")
                                    .style.display = "block";
            document.getElementById("btnAddReceptionistName")
                                    .style.display = "none";
            document.getElementById("container2").style.display = "block";

        }
    }

    delete(){
        localStorage.removeItem("receptionistName");
        document.getElementById("btnAddReceptionistName").style.display = "block";
        document.getElementById("btnDelReceptionistName").style.display = "none";
        window.location.reload();
    }
}

const objReceptionist = new Receptionist();

document.getElementById("btnAddReceptionistName").onclick = () => {
    let nameRecept = document.getElementById("receptionistNameInput").value;
    objReceptionist.create(nameRecept);
};

objReceptionist.list();

document.getElementById("btnDelReceptionistName").onclick = () => {
    document.getElementById("receptionistNameInput").value = "";
    objReceptionist.delete();
};

// -----------------------------------------------------------------------------
class Guest{

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

const objGuest = new Guest();

document.getElementById("btnAddGuest").onclick = () =>{
    let guestName = document.getElementById("guestNameInput").value;
    objGuest.create(guestName);
}
//delete method
const deleteGuest = (id) =>{
    objGuest.delete(id);
};
window.deleteGuest = deleteGuest; //making the variable global

objGuest.list();