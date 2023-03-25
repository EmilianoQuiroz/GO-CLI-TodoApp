package task

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
)

// Estructura de datos
type Task struct {
	ID 		 int 	`json:"id"`
	Name 	 string `json:"name"`
	Complete bool 	`json:"complete"`
}

// Funcion para la lista de tareas
func ListTasks(tasks []Task) {
	if (len(tasks) == 0 ){ // Si la longitud de nuestro arreglo de tareas es = a 0 
		// Mostramos el siguiente mensaje
		fmt.Println("No hay tareas pendientes")
		return
	}
	// EN caso de que el arreglo tenga tareas
	for _, task := range tasks{
		// Con la variable status definimos el estado de la tareas
		status := " "
		if task.Complete{ // Si el estado de la tarea esta en true 
			//Vamos a colocar un check
			status = "✓"
		}
		fmt.Printf("[%s] %d %s\n", status, task.ID, task.Name)
	}
}

//Funcion para agregar tareas
func AddTask(tasks []Task, name string) []Task{
	newTask := Task{
		ID: 10,
		Name: name,
		Complete: false,
	}

	return append(tasks, newTask)
}

// Funcion para guardar las tareas al Json
 func SaveTasks(file *os.File,tasks []Task){
	bytes, err := json.Marshal(tasks)// Con este metodo podemos transformar un arreglo en un Json 
	
	if err != nil {// Si se produce un error
		panic(err)// Acabamos con la ejecucion del de la funcion y mostramos el error
	}
	// Si no hay error mostramos los bytes en un archivo
	_, err = file.Seek(0, 0)

	if err != nil {
		panic(err)
	}
	
	err = file.Truncate(0)
	if err != nil {// Si se produce un error
		panic(err)// Acabamos con la ejecucion del de la funcion y mostramos el error
	}

	// Escribimos el archivo
	writer := bufio.NewWriter(file)
	_, err = writer.Write(bytes)
	if err != nil {// Si se produce un error
		panic(err)// Acabamos con la ejecucion del de la funcion y mostramos el error
	}

	// Con el metodo Flush nos aseguramos que el metodo haya sido escrito
	err = writer.Flush()
	if err != nil {// Si se produce un error
		panic(err)// Acabamos con la ejecucion del de la funcion y mostramos el error
	}
}