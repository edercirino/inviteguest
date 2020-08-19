import { Host } from "./Host";

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
//-----------------------------------------------------------------------------
import { Receptionist } from "./Receptionist";

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
//-----------------------------------------------------------------------------
import { Guest } from "./Guest";


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
//-----------------------------------------------------------------------------