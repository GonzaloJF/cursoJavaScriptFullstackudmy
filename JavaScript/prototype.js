function miObjeto(nombre,apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.getNombreCompleto = function (){
        return `{$this.nombre} {$this.apellido}`
    }
}

let miObjeto1 = new miObjeto('Gonzalo',)

let miObjetoJson = {nombre:'Gonzalo',   apellido:'Jaques',  getNombreCompleto(){}}

miObjeto.prototype.nombre = 'vacio'

miObjeto.prototype.apellido = 'vacio'

function miObjeto2 (){
    this.getNombreCompleto = function(){
        return `{$this.nombre} {$this.apellido}` 
    }
    this.setNombre = function(nombre){
        this.nombre = nombre
    }
    this.setApellido = function(apellido){
        this.apellido = apellido
    }
}

miObjeto2

let miObjeto3 = new miObjeto2()

miObjeto2.prototype.nombre = 'vacio'

miObjeto3.prototype.apellido = 'vacio'
 