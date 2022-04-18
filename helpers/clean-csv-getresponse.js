
const cleanCsv = ( file ) =>{

  let parametro="";
  let posicion=0;
  let posicionNombre;
  let posicionCorreo;
  let row = "";
  let cleaned = "";
  for( let i =0 ; i<file.length ;i++){

    if(file[i]==="\n" || i===file.length-1){
      cleaned+=row;
      posicion=0;
      row="";
    }
    if( file[i]==="," || file[i]==="\r" || i===file.length-1){
      if(parametro==="Nombre"){
        posicionNombre=posicion;
        parametro="nombre";
      }
      if(parametro==="Correo"){
        posicionCorreo=posicion;
        parametro="correo";
      }
      
      if ( posicionNombre === posicion){
        if(row.includes(",")){
          row+= parametro;

        }else{
          row+= parametro + ",";

        }
      }
      if ( posicionCorreo === posicion){
        if(row.includes(",")){
          row+= parametro;

        }else{
          row+= parametro + ",";

        }
      }
      parametro="";
      
      
      posicion++;
      continue;
      
    }

    parametro+=file[i];

  }
  return cleaned;
}

module.exports = {
  cleanCsv,
}