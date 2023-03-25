package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io"
	"os" //El paquete os nos permite modificar archivos
	"strings"

	task "github.com/EmilianoQuiroz/GO-CLI-TodoApp/tasks"
)

func main() {

	// Este archivo json es donde se guardaran nuestras tareas
	file, err := os.OpenFile("tasks.json", os.O_RDWR|os.O_CREATE, 0666)
	// OpenFile nos permite modificar el archivo y os.O_RDWR le damos permisos de lectura y escritura

	if err != nil { // Si se produce un error

		panic(err) // se muestra el error

	}

	// Si no se produce ningun error cerramos la lectura del archivo
	defer file.Close()

	var tasks []task.Task

	// Stat me da informacion acerca del archivo
	// Esta informacion la guardamos dentro de info
	info, err := file.Stat()

	if err != nil { // Si se produce un error

		panic(err) // Lansamos un panic error y mostramos el error por consola

	}
	if info.Size() != 0 { // Si el archivo no esta vacio
		//Guardamos los datos en la variable Task
		bytes, err := io.ReadAll(file)

		if err != nil { // Si se produce un error

			panic(err) // Se muestra el error por consola

		}
		// Convertimos los datos de Bytes a Json
		err = json.Unmarshal(bytes, &tasks)
		if err != nil { // Si se produce un error

			panic(err) //mostramos el error en consola

		}
	} else { // Si el archivo esta vacio le cargamos tareas

		tasks = []task.Task{}
	}

	if (len(os.Args) < 2){
		// Si el usuario no me pasas el segundo elemento mostramos el contenido de la func printUsage
		printUsage()

	}

	switch os.Args[1] {
	// En caso de que el usuario elija la opcion Listar le mostramos la lista de tareas
	case "Listar":
		task.ListTasks(tasks)
	//En caso de que el usuario elija la opcion Agregar
	case "Agregar":
		reader := bufio.NewReader(os.Stdin)
		fmt.Println("Tipee la tarea a agregar:")
		name, _ := reader.ReadString('\n')
		name = strings.TrimSpace(name)

		tasks = task.AddTask(tasks, name)
		task.SaveTasks(file, tasks)
	}
}

// Funcion para describir el uso de la aplicacion
func printUsage() {
	// Nos incica las funciones que podemos ejecutar
	// Listar las tareas
	// Agregar tareas
	// Completar tareas
	// Borrar tareas
	fmt.Println("Uso: go-cli-TodoApp [Listar|Agregar|Completar|Borrar]")
}