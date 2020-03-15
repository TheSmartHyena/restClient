const jsonHttp = {
"100": {
"message": "Continuer",
"description": "Le serveur a reçu les en-têtes de demande et le client doit continuer à envoyer le corps de la demande"
},
"101": {
"message": "Switching Protocols",
"description": "Le demandeur a demandé au serveur de changer de protocole"
},
"103": {
"message": "Checkpoint",
"description": "Utilisé dans la proposition de demande de reprise pour reprendre les demandes PUT ou POST abandonnées"
},
"200": {
"message": "OK",
"description": "La demande est OK (il s'agit de la réponse standard pour les demandes HTTP réussies)"
},
"201": {
"message": "Créé",
"description": "La demande a été satisfaite et une nouvelle ressource est créée"
},
"202": {
"message": "Accepté",
"description": "La demande a été acceptée pour traitement, mais le traitement n'est pas terminé"
},
"203": {
"message": "Informations sans autorité",
"description": "La demande a été traitée avec succès, mais renvoie des informations qui peuvent provenir d'une autre source"
},
"204": {
"message": "Pas de contenu",
"description": "La demande a été traitée avec succès, mais ne renvoie aucun contenu"
},
"205": {
"message": "Réinitialiser le contenu",
"description": "La demande a été traitée avec succès, mais ne renvoie aucun contenu et requiert que le demandeur réinitialise la vue du document"
},
"206": {
"message": "Contenu partiel",
"description": "Le serveur ne fournit qu'une partie de la ressource en raison d'un en-tête de plage envoyé par le client"
},
"300": {
"message": "Multiple Choices",
"description": "Une liste de liens. L'utilisateur peut sélectionner un lien et aller à cet emplacement. Cinq adresses maximum"
},
"301": {
"message": "Déplacé en permanence",
"description": "La page demandée a été déplacée vers une nouvelle URL"
},
"302": {
"message": "Trouvé",
"description": "La page demandée a été déplacée temporairement vers une nouvelle URL"
},
"303": {
"message": "Voir autre",
"description": "La page demandée se trouve sous une URL différente"
},
"304": {
"message": "Non modifié",
"description": "Indique que la page demandée n'a pas été modifiée depuis la dernière demande"
},
"306": {
"message": "Switch Proxy",
"description": "- Plus utilisé -"
},
"307": {
"message": "Redirection temporaire",
"description": "La page demandée a été déplacée temporairement vers une nouvelle URL"
},
"308": {
"message": "CV incomplet",
"description": "Utilisé dans la proposition de demande de reprise pour reprendre les demandes PUT ou POST abandonnées"
},
"400": {
"message": "Bad Request",
"description": "La demande ne peut pas être satisfaite en raison d'une syntaxe incorrecte"
},
"401": {
"message": "Non autorisé",
"description": "La demande était une demande légale, mais le serveur refuse d'y répondre. À utiliser lorsque l'authentification est possible mais a échoué ou n'a pas encore été fournie"
},
"402": {
"message": "Paiement requis",
"description": "- Réservé pour une utilisation future -"
},
"403": {
"message": "Interdit",
"description": "La demande était une demande légale, mais le serveur refuse d'y répondre"
},
"404": {
"message": "Non trouvé",
"description": "La page demandée est introuvable mais peut être à nouveau disponible à l'avenir"
},
"405": {
"message": "Méthode non autorisée",
"description": "Une page a été demandée à l'aide d'une méthode de demande non prise en charge par cette page"
},
"406": {
"message": "Non acceptable",
"description": "Le serveur ne peut générer qu'une réponse qui n'est pas acceptée par le client"
},
"407": {
"message": "Authentification proxy requise",
"description": "Le client doit d'abord s'authentifier auprès du proxy"
},
"408": {
"message": "Request Timeout",
"description": "Le serveur a expiré en attendant la demande"
},
"409": {
"message": "Conflict",
"description": "La demande n'a pas pu être terminée en raison d'un conflit dans la demande"
},
"410": {
"message": "Gone",
"description": "La page demandée n'est plus disponible"
},
"411": {
"message": "Longueur requise",
"description": "Le Content-Length n'est pas défini. Le serveur n'acceptera pas la demande sans lui"
},
"412": {
"message": "Échec de la précondition",
"description": "La condition préalable donnée dans la demande est évaluée comme fausse par le serveur"
},
"413": {
"message": "Request Entity Too Large",
"description": "Le serveur n'acceptera pas la demande, car l'entité de demande est trop grande"
},
"414": {
"message": "Request-URI Too Long",
"description": "Le serveur n'acceptera pas la demande, car l'URL est trop longue. Se produit lorsque vous convertissez une demande POST en demande GET avec des informations de requête longues"
},
"415": {
"message": "Type de support non pris en charge",
"description": "Le serveur n'acceptera pas la demande, car le type de support n'est pas pris en charge"
},
"416": {
"message": "Plage demandée non satisfaisante",
"description": "Le client a demandé une partie du fichier, mais le serveur ne peut pas fournir cette partie"
},
"417": {
"message": "Échec de l'attente",
"description": "Le serveur ne peut pas répondre aux exigences du champ d'en-tête de demande Expect"
},
"418": {
"message": "je suis une théière",
"description": "Toute tentative de préparer du café avec une théière devrait entraîner le code d'erreur 418 Je suis une théière. Le corps d'entité résultant PEUT être court et robuste"
},
"421": {
"message": "Demande mal dirigée",
"description": "La demande a été adressée à un serveur qui n'est pas en mesure de produire une réponse (par exemple en raison d'une réutilisation de connexion)"
},
"422": {
"message": "Entité non traitable",
"description": "La demande était bien formée mais n'a pas pu être suivie en raison d'erreurs sémantiques"
},
"423": {
"message": "Verrouillé",
"description": "La ressource en cours d'accès est verrouillée"
},
"424": {
"message": "Echec de la dépendance",
"description": "La demande a échoué en raison de l'échec d'une demande précédente (par exemple, un PROPPATCH)"
},
"426": {
"message": "Mise à niveau requise",
"description": "Le client doit basculer vers un protocole différent tel que TLS \ /1.0, indiqué dans le champ d'en-tête de mise à niveau"
},
"428": {
"message": "Condition préalable requise",
"description": "Le serveur d'origine requiert que la demande soit conditionnelle"
},
"429": {
"message": "Trop de demandes",
"description": "L'utilisateur a envoyé trop de demandes dans un laps de temps donné. Destiné à être utilisé avec des schémas de limitation de débit"
},
"431": {
"message": "Demander des champs d'en-tête trop grands",
"description": "Le serveur ne souhaite pas traiter la demande car un champ d'en-tête individuel ou tous les champs d'en-tête collectivement sont trop grands"
},
"451": {
"message": "Non disponible pour des raisons juridiques",
"description": "Un opérateur de serveur a reçu une demande légale de refuser l'accès à une ressource ou à un ensemble de ressources qui inclut la ressource demandée"
},
"500": {
"message": "Erreur de serveur interne",
"description": "Une erreur s'est produite dans un script côté serveur, un message plus spécifique convient"
},
"501": {
"message": "Non implémenté",
"description": "Le serveur ne reconnaît pas la méthode de demande ou il lui manque la capacité de répondre à la demande"
},
"502": {
"message": "Bad Gateway",
"description": "Le serveur faisait office de passerelle ou de proxy et a reçu une réponse non valide du serveur en amont"
},
"503": {
"message": "Service non disponible",
"description": "Le serveur est actuellement indisponible (surchargé ou arrêté)"
},
"504": {
"message": "Délai d'expiration de la passerelle",
"description": "Le serveur faisait office de passerelle ou de proxy et n'a pas reçu de réponse en temps opportun du serveur en amont"
},
"505": {
"message": "Version HTTP non prise en charge",
"description": "Le serveur ne prend pas en charge la version du protocole HTTP utilisée dans la demande"
},
"511": {
"message": "Authentification réseau requise",
"description": "Le client doit s'authentifier pour accéder au réseau"
}
}
