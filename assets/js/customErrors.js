class InvalidUrl extends Error {
    constructor(message="Invalid url"){
        super(message)
        RenderAlert.renderAlert(message, "warning")
    }
}

class InvalidContentType extends Error {
    constructor(message="Invalid content-type"){
        super(message)
        RenderAlert.renderAlert(message, "warning")
    }
}

class InvalidMethod extends Error {
    constructor(message="Invalid method"){
        super(message)
        RenderAlert.renderAlert(message, "warning")
    }
}

class InvalidLanguage extends Error {
    constructor(message="Invalid language"){
        super(message)
        RenderAlert.renderAlert(message, "warning")
    }
}

class InvalidBody extends Error {
    constructor(message="Invalid body"){
        super(message)
        RenderAlert.renderAlert(message, "warning")
    }
}
