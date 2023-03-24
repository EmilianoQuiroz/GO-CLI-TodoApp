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