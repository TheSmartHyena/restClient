async function sendRequest(){

    // Lazy jquery
    const url = $("#urlRequest").val()
    const contentType = $("#typeRequest").val()
    const method = $("#methodRequest").val()
    const language = $("#langueRequest").val()
    const body = $("#bodyRequest").val()

    const request = RequestMaker.createRequest(url, contentType, method, language, body)
    console.log(request)

    if(request){
        // Using a callback makes clean reponse, and separate execution from render
        RequestMaker.executeRequest(request, RenderRequest.renderResult)
    }
}

class RequestToAxios {

    // Check if value are valid
    static convert(request){

        const result = {

          // `url` is the server URL that will be used for the request
          url: request.url,

          // `method` is the request method to be used when making the request
          method: request.method,

          // `headers` are custom headers to be sent
          headers: { 'Content-Type': request.contentType, 'Accept-Language': request.language }

        }

        // `data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // When no `transformRequest` is set, must be of one of the following types:
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - Browser only: FormData, File, Blob
        // - Node only: Stream, Buffer
        if(request.method === 'put' || request.method === 'post' || request.method === 'patch'){
            result.data = request.body
        }

        return result
    }
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
    static executeRequest(requestConfig, callBack) {

        const axiosRequest = RequestToAxios.convert(requestConfig)
        axios(axiosRequest)
            .then((response)=>{
                callBack(response)
            })
            .catch((err) => {
                console.log(err)
                RenderAlert.renderAlert("Erreur lors de la requête", "danger")
            })
    }

}

class RequestConfigValider{

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
        const result = valid.contentType.has(toValidate.toLowerCase())
        if(!result){
            throw new InvalidContentType()
        }
    }

    static validateMethod(toValidate){
        const result = valid.methods.has(toValidate.toLowerCase())
        if(!result){
            throw new InvalidMethod()
        }
    }

    static validateLanguage(toValidate){
        const result = valid.language.has(toValidate.toLowerCase())
        if(!result){
            throw new InvalidLanguage()
        }
    }

    static validateBody(toValidate){
        // Nothing for now
    }

}

class RequestConfig{

    constructor(url="", contentType="", method="", language="", body="") {
       this._url = url
       this._contentType = contentType
       this._method = method
       this._language = language
       this._body = body
   }

   // url
   get url() {
       return this._url
   }

   set url(url) {
        this._url = url
   }

   // contentType
   get contentType() {
       return this._contentType
   }

   set contentType(contentType) {
       this._contentType = contentType
   }

   // method
   get method() {
       return this._method
   }

   set method(method) {
       this._method = method
   }

   // language
   get language() {
       return this._language
   }

   set language(language) {
       this._language = language
   }

   // body
   get body() {
       return this._body
   }

   set body(body) {
       his._body = body
   }

}
