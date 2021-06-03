const fs = require("fs");

const crearArchivo = async(valor = 5, listar = true, hasta=10) =>{

    try {

       
        let salida = '';
        
        for(i =1 ; i<=hasta ; i++){
            salida += `${i} X ${valor} = ${i*valor}\n`;
        }
   
        if(listar){
            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./tablas/tabla-${valor}.txt`, salida);
        

        
        return `tabla-${valor}.txt ha sido creada`;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}