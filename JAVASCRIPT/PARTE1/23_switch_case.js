/*CONTROLE DE FLUXO - CONDICIONAL - SWITCH CASE 

*/

const temperature = 36
switch (temperature) {
    case 30:
            console.log(`${temperature}° A pessoa está com a temperatura MUITO abaixo do normal.`)
        break;
        
        case 33:
            console.log(`${temperature}° A pessoa está com a temperatura abaixo do normal`)
        break;
        
        case 36:
            console.log(`${temperature}° A pessoa está com a temperatura normal`)
        break;

    default:
        console.log(`Temperatura ${temperature}° não encontrada`)
        break;
}