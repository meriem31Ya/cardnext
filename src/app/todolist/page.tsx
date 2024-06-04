// Importation des composants nécessaires à partir des fichiers correspondants
import FormData from '@/components/FormData'
import Header from '@/components/Header'
import Todolist from '@/components/Todolist'
import { todoType } from '@/utils/types'
import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { ContextTodolist } from '../contexts/Contexts'

// Définition du composant fonctionnel Todoliste
const Todoliste = () => {

  // Déclaration d'un état local 'todos' avec useState pour gérer les tâches de la liste
  const [todos, setTodos] = useState<todoType[]>([])

  return (
    // Conteneur principal avec des classes pour le style
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">

    {/* Inclusion du composant Header avec le titre Todo List */}
      <Header title={"Todo List"} />

      {/*  Utilisation du ContextTodolist.Provider pour fournir le contexte à ses composants enfants */}
      <ContextTodolist.Provider value={{todos, setTodos}}>
        
        {/* Inclusion du composant FormData pour la saisie des nouvelles tâches */}
        <FormData />
        
        {/* Inclusion du composant Todolist pour afficher la liste des tâches */}
        <Todolist />
      </ContextTodolist.Provider>
      
      {/* Inclusion du composant Toaster pour afficher les notifications */}
      <Toaster />
    </div>
  )
}

export default Todoliste
