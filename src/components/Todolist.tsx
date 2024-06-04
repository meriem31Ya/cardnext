// Importation des modules et fonctions nécessaires à partir des bibliothèques et fichiers correspondants
import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import { ContextTodolist } from '@/app/contexts/Contexts'

// Définition du composant fonctionnel Todolist
const Todolist = () => {
  // Utilisation du contexte pour obtenir la liste des tâches (todos)
  const { todos } = useContext(ContextTodolist)

  return (
    // Lister la todos pour afficher les tâches
    <ul className="divide-y divide-gray-200 px-4">
      {/* Boucle sur les tâches pour créer un composant TodoItem pour chaque tâche */}
      {todos.map((todo) => (
        // Utilisation de l'identifiant unique de chaque tâche comme clé
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default Todolist
