export class Receptionist {

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