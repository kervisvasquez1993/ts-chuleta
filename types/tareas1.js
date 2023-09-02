"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let ki;
    (function (ki) {
        ki[ki["Acuaman"] = 0] = "Acuaman";
        ki[ki["Batman"] = 1] = "Batman";
        ki[ki["Flash"] = 5] = "Flash";
        ki[ki["Superman"] = 100] = "Superman";
    })(ki || (ki = {}));
    const fuerzaFlash = ki.Flash;
    const fuerzaSuperman = ki.Superman;
    const fuerzaBatman = ki.Batman;
    const fuerzaAcuaman = ki.Acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
