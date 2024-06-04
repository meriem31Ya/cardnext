// Importation des modules et fonctions nécessaires à partir des bibliothèques et fichiers correspondants
import React, { useContext, useState } from 'react'
import { setTodos, todoType } from '@/utils/types'
import toast from 'react-hot-toast'
import { ContextTodolist } from '@/app/contexts/Contexts'

// Définition du composant fonctionnel FormData
const FormData = () => {
    
    // Fonction pour afficher des notifications en fonction du type d'erreur
    const notify = (message: string, error: boolean) => {
        return error ? toast.error(message) : toast.success(message)
    }

    // Déclaration d'un état local 'value' avec useState pour gérer la valeur de l'input
    const [value, setValue] = useState<string>("")

    // Gestionnaire d'événement pour le bouton "Add"
    const handleClick = () => {                
        
        // Mise à jour de l'état 'todos' avec la nouvelle tâche ajoutée
        setTodos((todos: todoType[]) => {
            return [...todos, { id: new Date().getTime(), title: value, checked: false, date: new Date().toDateString() }]
        })

        // Réinitialisation de la valeur de l'input
        setValue("")
    }

    // Récupération de la fonction setTodos à partir du contexte
    const { setTodos } = useContext(ContextTodolist)

    return (
        // Formulaire pour l'ajout de nouvelles tâches
        <form className="w-full max-w-sm mx-auto px-4 py-2">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
                {/* Champ de saisie pour ajouter une tâche */}
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" 
                    placeholder="Add a task" 
                    onChange={(e) => setValue(e.target.value)} 
                    value={value} 
                />
                {/* Bouton pour ajouter la tâche */}
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button" 
                    onClick={handleClick}
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default FormData
