export default class Cl_Contador{
    constructor(){
        this.acmEdad=0 
        this.contPersona=0
        this.EdadMayor=0
        this.NombreMayorMujer=''

    }
    procesarPersona(per){
    if(per.sexo== "F"){ 
        per.edad > this.EdadMayor
        this.EdadMayor = per.edad;
       
    }
    this.acmEdad+=per.edad

    this.contPersona++
    }
  MayorMujer(){
return  this.EdadMayor
  }
  Promedioedad(){
    return this.acmEdad/this.contPersona
  }
}