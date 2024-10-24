

const EveryBlog = ({blog}) => {
    console.log(blog)
    const {title,author_name,author_img,cover_image}=blog
    return (
        <div>
            Title:{title}
            <img className="w-80" src={cover_image} alt="" />
            <img className="w-48 h-48" src={author_img} alt="" />
        </div>
    );
};

export default EveryBlog;