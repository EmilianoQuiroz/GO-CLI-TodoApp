package task

import "fmt"

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
	for i, task := range tasks{
		fmt.Printf("%d %s\n", i, task.Name)
	}
}