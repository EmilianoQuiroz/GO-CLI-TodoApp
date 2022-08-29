import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const suma = () => {
    console.log("Hiciste click")
    setCounter(counter + 1)
  }
  const resta = () => {
    console.log("Hiciste click")
    setCounter(counter - 1)
  } 
  const reestablecer = () => {
    console.log("Hiciste click")
    setCounter(counter - counter)
  }

  return (
    <div className="container">
      <div className="my-5">
        <strong>contador: {counter}</strong>
      </div>
        <button onClick={suma} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Sumar</button>
        <button onClick={resta} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5 mx-5">Resta</button>
        <button onClick={reestablecer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1 mx-5">Reestablecer</button>
      </div>
  );
}

export default App;

//--- COMPONENTES II: INTRODUCCIÓN ---//
//--- ANATOMÍA DE UN COMPONENTE ---//
/*
PROPIEDADES/PROPS:
No están limitadas a ser valores fijos como: 1 / “Alexis” / true

-Pueden ser lo que sea:
-Valores comunes
num, bool, array, obj
-Funciones
-Componentes. Si los componentes son funciones, ¡entonces puedo pasar componentes!
-Children
-Valores inyectados por librerías
-location, rutas, traducciones

RELACIÓN DE CHILDREN Y PROPS
React inyecta automáticamente children en las props, sólo si encuentra alguno.
Los inyecta como objeto si es único o como array si son muchos.
Tener cuidado para evitar errores del tipo children[0], si espero un grupo de children y viene uno solo, cuando hay un único child de tipo object

RENDER PROPS
Podemos usarlo en otro componente sin que, como en este caso, SuperForm sepa realmente la implementación del render prop.
No es obligatorio usar el nombre render como está en este ejemplo.
*/

//--- ESTADO/STATE: CLASS BASED ---//
/*
CLASS BASED
El estado en las clases era “más simple” de mantener, porque las clases en sí tienen un contexto propio (this.state) persistente.
Utilizando this.setState se podía guardar en this.state, que persiste entre renders, porque la clase se crea al montar y se destruye al desmontar.
*/

//--- ESTADO/STATE: FUNCTION BASED ---//
/*
FUNCTION BASED
El problema es que las funciones viven únicamente durante el tiempo que son ejecutadas.
Esto deriva de la manera en la que ocurren las cosas en JS.
Al terminar la ejecución de addOne(num), a y b serán puestas a disposición del garbage collector.
Todas las constantes o variables que declare para “intentar” mantener el estado, morirán y serán reiniciadas en cada render.
Cada evento que ocurra cumpliendo ciertas características invocará el completo de la función una vez por cada re-render
*/

//---STATE HOOK ---//
/*
Los declaramos con spread syntax para simplificar.

Reglas:

-El value es constante. 
-No puedo hacer name = x
-Se cambia con setName:
-setName(‘Nuevo valor’)
-No llamar setName entre la declaración del hook y el render

REGLAS GENERALES DE LOS HOOKS
-Deben ejecutarse siempre.
-Esto implica que no pueden ser ejecutados dentro de otras estructuras, como IF, FOR, ó ternary  A ? B : C
-Se ejecutan en orden y nunca en simultáneo.
*/
