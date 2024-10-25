const Bookmark = ({bookmarks}) => {
   const {author_name,author_img,title}=bookmarks
    return (
        <div className="mt-3 bg-white px-2 py-3 rounded-xl">
           <div className="flex items-center gap-2">
             <div className="flex flex-col gap-1 items-center justify-center">
              <p><img className="w-10 h-10 object-cover rounded-[50%]" src={author_img} alt="" /></p>
              <p className="text-xs font-semibold text-[#111111]">{author_name}</p> 
             </div>
             <p className=" text-sm font-medium text-[#111111b8]">{title}</p>
           </div>
        </div>
    );
};

export default Bookmark;