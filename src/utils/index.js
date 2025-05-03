import { toast } from "react-toastify"

export const getBookmark = () => {
    const bookmarked = localStorage.getItem('bookmarked')
    if (bookmarked) return JSON.parse(bookmarked)
    return []
}


export const addBookmark = card => {
    const bookmarked = getBookmark()
    const isExist = bookmarked.find(b => b.id === card.id)
    if(isExist){
     return toast.info('News is already added to Bookmark')
    }
    else{
        toast.success(`successfully added to Bookmark`)
    }
    bookmarked.push(card)
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked))
}