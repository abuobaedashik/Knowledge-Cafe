import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,markAsRead}) => {
    console.log(bookmarks);
    return (
      <div className="flex flex-col gap-3 md:w-1/3">
        <div className="px-8 py-5 border border-blue-600 rounded-xl mt-11 text-center bg-[#1111110D]"><h2 className="text-blue-700 font-bold text-2xl">Total Time to read:{markAsRead} min</h2></div>
        <div className="text-3xl font-bold  border-2 bg-[#1111110D] px-2 py-2 rounded-xl mt-2 h-min">
            <h2 className="mx-auto px-2 text-xl text-[#111111] ">Bookmarked Blogs:{bookmarks.length}</h2>
            {
             bookmarks.map(bookmarks=><Bookmark bookmarks={bookmarks}></Bookmark>)
            }
        </div>
      </div>
    );
};

export default Bookmarks;