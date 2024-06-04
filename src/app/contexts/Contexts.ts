import { propsItems } from "@/utils/types";
import { createContext } from "react";



// Créer un contexte pour pouvoir partager {todos, setTodos} avec les différents enfants, la famouse boutique
export const ContextTodolist= createContext<propsItems>({
    // initiliser les parametres de mon context
todos: [],
setTodos: ()=>{}})