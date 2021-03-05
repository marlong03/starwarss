/* class  personas {

    constructor( nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    saludar = (fn) => " hola yo soy " + this.nombre
    if(fn){
        fn(this.nombre, this.apellido )   
    }
}
class  desarrollador extends personas {

    constructor( nombre, apellido){
    super(nombre , apellido)
    }
    saludar = (fn) => " hola yo soy " + this.nombre
    if(fn){
        fn(this.nombre, this.apellido  , true )
    }
}
 var fabian = new personas ("fabian" , "dimate")
 var mateo = new personas ("mateo" , "posada")
 var juan = new personas ("juan" , "garcia") */

 function responderSaludo(persona , dev){ 
      "buenos dias " + persona.nombre
     if(dev){
         console.log(persona.nombre + " no sabia que sabias javaScript");
     }
 }
 function hola (){
     setTimeout(()=> console.log("b"),1000)
     console.log("a")
    setTimeout(()=> console.log("d"),999)
     console.log("c")
    }
    var container = function(valor , callback){   callback(valor)} 
    container(123 , function(valor){ })
 setTimeout(function(){},2000)
    setTimeout(function(){},1000)
    
    /* var random = Math.floor(Math.random() *100/4) */


    //jquery

    const url_sw = "https://swapi.dev/api/";
    const url_solito = "films/:id/";
   
    var protw = prompt("¿Quieres lo personajes de StarWars episodio :(1-6)");
    var parsee = parseInt(protw)
    var  peliculaUrl = url_sw + url_solito.replace(":id",parsee);
   
    var security = { crossDomain: true };

    const onResponse =(a) => document.getElementById("primero").innerHTML=(a.title); 
    $.get(peliculaUrl , security ,onResponse);
   
        function onResponsel (a){ 
        
        var  personajeUrl = url_sw + 
        url_solito.replace("films","people" ) ;

        for(i=1; i<a.characters.length;i++){
         
        if(a.characters[i].length===30){
           var ali = parseInt(a.characters[i].charAt(28).split());
           var personajeAhoraSiUrl = personajeUrl.replace(":id" , ali)
        }
        else if(a.characters[i].length===31){
            var ale =  a.characters[i].charAt(28).split();
           var alo = a.characters[i].charAt(29).split();

           var union = parseInt(ale+alo)
           var personajeAhoraSiUrl = personajeUrl.replace(":id" , union)
        }

      const onResponsess =(x) => setTimeout(function callback (){
          
          document.write("<div style= background-color:#9c9c9c;margin:0px;text-align:center;padding-bottom:20px;   ><p style=margin:0px;font-size:20px;font-family:monospace >" + 
          x.name + "</p></div>")},700)
    
          $.get( personajeAhoraSiUrl, security ,onResponsess);
        } 
    }
        $.get(peliculaUrl , security ,onResponsel);
  

     
