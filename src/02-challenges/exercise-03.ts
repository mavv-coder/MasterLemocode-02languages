console.log("************** CHALLENGE 03 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * TREE  **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ¿Cómo generarías con TypeScript un tipado para estructuras en forma de árbol?
 * Un árbol es una estructura que parte de un nodo raiz, a partir del cual salen más 
 * nodos. Cada nodo en un árbol puede tener hijos (más nodos) o no tenerlos 
 * (convirtiendose en un nodo final o una "hoja").
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface Tree<T> {
  childrens?: T[];
  father?: Tree<T>;
}

const tree: Tree<number> = {
  father: {
    father: {
      childrens: [5, 6, 7, 8],
      father: {
        childrens: [9, 10],
        father: {},
      },
    },
  },
  childrens: [1, 2, 3, 4],
};
