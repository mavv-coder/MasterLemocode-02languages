console.log("************** DELIVERABLE 04 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * READ BOOKS *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se
 * ha leído o no dicho libro. Un libro es un objeto con `title` como string y `isRead` 
 * como booleano. En caso de no existir el libro devolver `false`
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

const isBookRead = (list: Book[], bookTitle: string): boolean =>
  list.some((el) => el.title === bookTitle && el.isRead);

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
