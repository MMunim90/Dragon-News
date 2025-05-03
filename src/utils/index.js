import { toast } from "react-toastify";

export const getBookmark = () => {
  const bookmarked = localStorage.getItem("bookmarked");
  if (bookmarked) return JSON.parse(bookmarked);
  return [];
};

export const addBookmark = (card) => {
  const bookmarked = getBookmark();
  const isExist = bookmarked.find((b) => b.id === card.id);
  if (!isExist) {
    bookmarked.push(card);
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
    return toast.success(`News successfully added to Bookmark`);
  } else {
    return toast.info("News is already added to Bookmark");
  }
};

export const removeBookmark = id => {
    const bookmarked = getBookmark()
    const remainingBookmark = bookmarked.filter(card => card.id !==id)
    localStorage.setItem('bookmarked', JSON.stringify(remainingBookmark))
}
