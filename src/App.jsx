import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App(props) {
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

  /*UseEfect*/
  useEffect(() => {
    console.log("Efecto...")
  }, [counter])

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

//--- CICLOS DE VIDA ---//
/*
El ciclo de vida no es más que una serie de estados por los cuales pasa todo componente a lo largo de su existencia. 
Esos estados tienen correspondencia en diversos métodos,
que podemos implementar para realizar acciones cuando se van produciendo.
En React es fundamental el ciclo de vida, porque hay determinadas acciones que necesariamente debemos realizar en el momento correcto de ese ciclo. 
Conocer estos ciclos nos ayudará a optimizar la aplicación, siguiendo las reglas básicas que pone React

Hay más reglas pero por ahora tengamos en mente las más básicas:

-No bloquear el rendering con tareas pesadas y sincrónicas.
-Ejecutar tareas asincrónicas con efectos secundarios luego del montaje (mount).
*/

//--- LAS TRES CLASIFICACIONES DE ESTADOS DENTRO DE UN CICLO DE VIDA ---//
/*
-El montaje se produce la primera vez que un componente va a generarse, incluyéndose en el DOM.

-La actualización se produce cuando el componente ya generado se está actualizando.

-El desmontaje se produce cuando el componente se elimina del DOM

El hijo tendrá la posibilidad de cambiar todas las veces que quiera hasta que el componente que lo generó lo destruya.
Además, dependiendo del estado actual de un componente y lo que está ocurriendo con él, se producirán grupos diferentes de etapas del ciclo de vida. 
En la siguiente imagen puedes ver un resumen de esta diferenciación
*/

//--- MÉTODOS DE CICLOS DE VIDA( CLASS BASED ) ---//
/*
Si bien hoy en día con componentes funcionales tendremos reemplazos para varios de los lifecycles, a continuación encontrarás una referencia para que los conozcas, con la consideración de que en React 17.x  serán deprecados:

-componentWillMount
-componentWillReceiveProps
-componentWillUpdate

componentDidMount()

Método de montaje, que solo se ejecuta en el lado del cliente. Se produce inmediatamente después del primer renderizado. 
Una vez se invoca este método ya están disponibles los elementos asociados al componente en el DOM. 
Si se tiene que realizar llamadas Ajax, setIntervals, y similares, éste es el sitio adecuado.

houldComponentUpdate
(nextProps, nextState)
Es un método de actualización y tiene una particularidad especial con respecto a otros métodos del ciclo de vida, que consiste en que debe devolver un valor booleano. 
Se invocará tanto cuando se producen cambios de propiedades o cambios de estado y es una oportunidad de decirle a react si queremos que actualice la vista.

componentDidUpdate
(prevProps, prevState)
Método de actualización que se ejecuta justamente después de haberse producido la actualización del componente. 
En este paso los cambios ya están trasladados al DOM del navegador, así que podríamos operar con el DOM para hacer nuevos cambios. 
Como parámetros en este caso recibes el valor anterior de las propiedades y el estado.

componentWillUnmount()
Este es el único método de desmontado y se ejecuta en el momento que el componente se va a retirar del DOM. 
Este método es muy importante, porque es el momento en el que
se debe realizar una limpieza de cualquier cosa que tuviese el componente y que no deba seguir existiendo cuando se retire de la página.
*/

//--- MÉTODOS DE CICLOS DE VIDA ( FUNCTION BASED ) ---//
/*
HOOK DE EFECTO useEffect

El hook de efecto sirve para: 

1. controlar el ciclo de vida
2. mutaciones (props, estado)

Piénsalo como un filtro:
useEffect(fn, filter)
Si queremos reemplazar el lifecycle componentDidMount() podemos utilizar el hook de efecto con el mismo resultado
[ ] => On mount

Variantes/filtros:

[ ] => On mount
[prop] => On mount y por cada cambio de prop
[prop1, prop2] => On mount y en cada cambio en prop1 o prop2
undefined => useEffect(()=>{}) => Mount y en cada render
*/

//--- VARIANTES useEffect ---//
/*

[ ] => On mount
[prop] => On mount y por cada cambio de name

[prop1, prop2] => On mount y en cada cambio en prop1 ó prop2

Si devuelves una función return () => {}

se ejecutará el clean que quieras (ajax call, remover una suscripción, librería, etc)

IMPORTANTE

Tanto los callbacks como los cleanups:

-Se ejecutan en el orden en que se hayan declarado los otros hooks respectivos.

-Recuerda que la función se destruye en cada ejecución, si tienes actividad pendiente hay que cerrarla en cada cleanup y volver a suscribirla.
*/

//--- COMPORTAMIENTO SIMÉTRICO ---//
/*
Los hooks se comportan simétricamente tanto con los valores observados props como con el state

Acción => Limpieza => Acción => Limpieza
y nunca
Acción => Acción => Acción => Limpieza

Cualquier acción en un effect tiene una acción opuesta de limpieza, que será ejecutada antes de poder volver a ejecutar la acción.
*/

//--- EJEMPLOS/CHEATSHEET useEffect ---//
/*
-Toda acción del effect-hook se ejecuta al montar.

-Ningún efecto bloquea el render.

-Todas las acciones y limpiezas se realizan en orden.

-Si modifico el state incluido en los filtros propios habrá un loop infinito.
*/


