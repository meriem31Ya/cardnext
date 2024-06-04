// Importation des modules et fonctions nécessaires à partir des bibliothèques et fichiers correspondants
import { ContextTodolist } from '@/app/contexts/Contexts'
import { propItem, todoType } from '@/utils/types'
import { Trash2, Trash2Icon } from 'lucide-react'
import React, { useContext } from 'react'
import toast from 'react-hot-toast'

// Définition du composant fonctionnel TodoItem
const TodoItem = ({id, title, date, checked}: todoType) => {
    
    // Utilisation du contexte pour obtenir la fonction setTodos
    const { setTodos } = useContext(ContextTodolist)

    // Fonction pour afficher des notifications en fonction du type d'erreur
    const notify = (message: string, error: boolean) => {
        return error ? toast.error(message) : toast.success(message)
    }

    // Gestionnaire d'événement pour le changement d'état de la case à cocher
    const handleChangeCheck = (e: any) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, checked: e.target.checked }
                }
                return todo
            })
        })
    }

    return (
        // Élément de liste pour une tâche
        <li className="py-4">
            <div className="flex items-center w-full justify-between">
                
                {/* Case à cocher pour marquer la tâche comme terminée ou non */}
                <input 
                    id={`todo-${id}`} 
                    name={`todo-${id}`} 
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" 
                    onChange={handleChangeCheck}
                    checked={checked} // Ajout de la valeur checked pour que la case reflète l'état actuel
                />

                {/* Étiquette de la tâche */}
                <label htmlFor={`todo-${id}`} className="ml-3 flex w-full justify-between items-center gap-4 text-gray-900">
                    <span className={`text-lg font-medium ${checked ? "line-through" : ""}`}>{title}</span>
                    <span className="text-sm font-light text-gray-500">On {date}</span>
                </label>

                {/* Bouton pour supprimer la tâche */}
                <button className='mx-auto' onClick={(e) => {
                    // Affichage de la notification
                    notify("Todo deleted", false)

                    // Suppression de la tâche de la liste
                    setTodos((todos) => todos.filter((todo) => todo.id !== id))
                }}>
                    {""}
                    <Trash2Icon />
                </button>
            </div>
        </li>
    )
}

export default TodoItem
