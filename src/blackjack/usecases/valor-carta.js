
/**
 * Esta función le da el valor a la carta
 * @param {string} carta 
 * @returns {number} retorna la carta con su valor
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}