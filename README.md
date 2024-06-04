# Projet de Liste de Tâches (Todo List)

Ce projet est une application simple de liste de tâches construite avec NextJs. L'application permet aux utilisateurs d'ajouter, de marquer comme complété, et de supprimer des tâches. Elle utilise le contexte pour gérer l'état global des tâches.

## Fonctionnalités

- Ajouter une nouvelle tâche
- Marquer une tâche comme complétée/incomplétée
- Supprimer une tâche
- Notifications de succès/erreur lors de l'ajout ou de la suppression de tâches


## Description des Composants

### `App.tsx`
Le composant principal qui utilise `ContextTodolist` pour fournir l'état global des tâches aux composants enfants.

### `FormData.tsx`
Un formulaire permettant à l'utilisateur d'ajouter une nouvelle tâche. Il met à jour l'état global avec la nouvelle tâche.

### `Header.tsx`
Affiche le titre de l'application.

### `Todolist.tsx`
Affiche la liste des tâches en utilisant le composant `TodoItem` pour chaque tâche.

### `TodoItem.tsx`
Affiche une tâche individuelle avec la possibilité de la marquer comme complétée/incomplétée ou de la supprimer.

### `Contexts.tsx`
Définit le contexte global pour l'état des tâches (`ContextTodolist`).

### `types.ts`
Définit les types TypeScript utilisés dans l'application, comme `todoType`.



## Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/votre-nom-utilisateur/cardnext.git

   cd cardnext
   npm install

