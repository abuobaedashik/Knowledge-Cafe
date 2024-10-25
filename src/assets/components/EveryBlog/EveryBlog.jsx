
import { FiBookmark } from "react-icons/fi";
const EveryBlog = ({blog,handleBookmark,handleMarkAsRead}) => {
    const {title,author_name,author_img,cover_image,publishing_date,reading_time,description,hashtags}=blog
    return (
        <div>
         <img className="rounded-xl mt-5 object-fill w-full h-[400px]" src={cover_image} alt={title} />
         <div className="flex justify-between px-3 py-5">
            <div className="flex gap-3 items-center justify-center">
               <p>
               <img 
                className="w-10 h-10 object-cover rounded-[50%]"
                src={author_img}
                alt={`image of ${author_name}`} />
               </p>
               <div>
                 <p 
                 className="text-xl
                 text-[#111111]
                  font-bold
                 ">{author_name}
                 </p>
                 <p className="text-xs
                  text-[#11111191] 
                  font-normal">
                  {publishing_date}
                 </p>
               </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-sm
                  text-[#11111191] 
                  font-normal">
                {`${reading_time} min`}
             </p>
             <button  onClick={()=>handleBookmark(blog)} className="hover:text-black text-[#11111191] ml-1"><FiBookmark></FiBookmark></button>
            </div>
         </div>
         <h2 className="font-bold md:text-3xl text-2xl text-[#111111]">{title}</h2>
         <h4 className="text-sm mt-2 text-[#11111191] font-normal">{`${description}`}<a  className="hover:underline hover:text-blue-500">Read More...</a></h4>
         {
            hashtags.map((hash,key)=><span key={key} className="text-xs mx-1 hover:text-blue-500 text-[#11111196]"><a href="">{hash}</a></span>)
         }
         <br />
         <button onClick={()=>handleMarkAsRead(reading_time)}><a className="text-sm text-[#111111] hover:text-blue-600 hover:underline">Mark as read</a></button>
        </div>
    );
};


export default EveryBlog;