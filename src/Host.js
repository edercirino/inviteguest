export class Host {

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