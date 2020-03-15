class RenderAlert{

    static renderAlert(message, color){
        const htmlAlert = `<div class="alert alert-${color} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
        </div>`

        $("#alertHolder").html(htmlAlert)
        $("#alertHolder").show()

        const id = window.setTimeout(function(){
            $("#alertHolder").hide()
        }, 3000)

        this.clearAllTimeOut(id)
    }

    static clearAllTimeOut(id){
        while(id--) {
            window.clearTimeout(id) // will do nothing if no timeout with id is present
        }
    }

}

class RenderRequest{
    static renderResult(toDisplay){

        RenderRequest.renderHeaders(toDisplay.headers);
        RenderRequest.renderCardHeader(toDisplay.status)
        RenderRequest.renderData(toDisplay.data)
    }

    static renderHeaders(headers){
        let result = "";
        for(let [key, value] of Object.entries(headers)){
            result = result + key + " : " + value + "\n";
        }

        document.getElementById("headerResult").innerText = result;
    }

    static renderData(data){
        document.getElementById("dataResult").innerText = JSON.stringify(data)  ;
    }

    static renderCardHeader(status){

        let color = "";
        if(status >= 100 && status <= 199){
            color = "#0275d8";
        }

        if(status >= 200 && status <= 299){
            color = "#5cb85c";
        }

        if(status >= 300 && status <= 399){
            color = "#f0ad4e";
        }

        if(status >= 400 && status <= 499){
            color = "#d9534f";
        }

        if(status >= 500 && status <= 599){
            color = "#d9534f";
        }

        document.getElementById("headerDescription").innerText = jsonHttp[status].description;
        document.getElementById("statusSpan").innerText = "[" + status + "] - " + jsonHttp[status].message;
        document.getElementById("headerCardId").style.color = "white";
        document.getElementById("headerCardId").style.backgroundColor = color;


    }
}
