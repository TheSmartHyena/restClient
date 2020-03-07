function sendRequest(){

    const url = $("#urlRequest").val()
    const contentType = $("#typeRequest").val()
    const method = $("#methodRequest").val()
    const language = $("#langueRequest").val()
    const body = $("#bodyRequest").val()

    const request = RequestMaker.createRequest(url, contentType, method, language, body)
    console.log(request)
    if(request){
        const result = RequestMaker.executeRequest(request)
        displayRequestResult(result)
    }

}

function displayRequestResult(toDisplay){
    console.log("Poney de fin")
}

class RequestMaker {

    // Check if value are valid
    static createRequest(url, contentType, method, language, body){
        try{
            const result = new RequestConfig(url, contentType, method, language, body)
            RequestConfigValider.validateRequestConfig(result)
            return result
        }catch(err){
            console.log(err)
            return false
        }
    }

    // axios buiseness
    static executeRequest(requestConfig) {
        try{

        }catch(err){
            console.log(err)
        }
    }

}

class InvalidUrl extends Error {
    constructor(message="Invalid url"){
        super(message)
        AlertTools.displayWarning(message)
    }
}

class InvalidContentType extends Error {
    constructor(message="Invalid content-type"){
        super(message)
        AlertTools.displayWarning(message)
    }
}

class InvalidMethod extends Error {
    constructor(message="Invalid method"){
        super(message)
        AlertTools.displayWarning(message)
    }
}

class InvalidLanguage extends Error {
    constructor(message="Invalid language"){
        super(message)
        AlertTools.displayWarning(message)
    }
}

class InvalidBody extends Error {
    constructor(message="Invalid body"){
        super(message)
        AlertTools.displayWarning(message)
    }
}

class RequestConfigValider{

    static #validContentType = new Set(["application/json", "application/x-www-form-urlencoded", "application/xml"])
    static #validMethods = new Set(["get", "post", "put", "patch", "delete"])
    static #validLanguage = new Set(["fra", "end", "esp", "ita", "deu"])

    static validateRequestConfig(requestConfig){
        this.validateUrl(requestConfig.url)
        this.validateContentType(requestConfig.contentType)
        this.validateMethod(requestConfig.method)
        this.validateLanguage(requestConfig.language)
        this.validateBody(requestConfig.body)
    }

    static validateUrl(toValidate){
        const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
        const result = regex.test(toValidate)
        if(!result){
            throw new InvalidUrl()
        }
    }

    static validateContentType(toValidate){
        const result = this.#validContentType.has(toValidate.toLowerCase())
        if(!result){
            throw new InvalidMethod()
        }
    }

    static validateMethod(toValidate){
        const result = this.#validMethods.has(toValidate.toLowerCase())
        if(!result){
            throw new InvalidContentType()
        }
    }

    static validateLanguage(toValidate){
        const result = this.#validLanguage.has(toValidate.toLowerCase())
        if(!result){
            throw new InvalidLanguage()
        }
    }

    static validateBody(toValidate){
        // Nothing for now
    }

}

class RequestConfig{

    // Private var declaration
    #url = ""
    #contentType = ""
    #method = ""
    #language = ""
    #body = ""

    constructor(url="", contentType="", method="", language="", body="") {
       this.#url = url
       this.#contentType = contentType
       this.#method = method
       this.#language = language
       this.#body = body
   }

   // url
   get url() {
       return this.#url
   }

   set url(url) {
        this.#url = url
   }

   // contentType
   get contentType() {
       return this.#contentType
   }

   set contentType(contentType) {
       this.#contentType = contentType
   }

   // method
   get method() {
       return this.#method
   }

   set method(method) {
       this.#method = method
   }

   // language
   get language() {
       return this.#language
   }

   set language(language) {
       this.#language = language
   }

   // body
   get body() {
       return this.#body
   }

   set body(body) {
       his.#body = body
   }

}
