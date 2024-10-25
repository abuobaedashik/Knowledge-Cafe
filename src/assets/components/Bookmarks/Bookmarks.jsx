import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 border-2 bg-[#1111110D] px-2 py-5 rounded-xl mt-11 h-min">
            <h2 className="mx-auto px-2 text-xl text-[#111111] ">Bookmarks:{bookmarks.length}</h2>
            {
             bookmarks.map(bookmarks=><Bookmark bookmarks={bookmarks}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;