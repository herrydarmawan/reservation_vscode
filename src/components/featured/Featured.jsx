import "./featured.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/640x640/688053.webp?k=da426cecdc6492da255ca0612c4bb41bd785b2565c83405f7281f15c05b16376&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Jakarta</h1>
                <h2>123-property</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/640x640/688180.webp?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Ubud</h1>
                <h2>123-property</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/640x640/688189.webp?k=f1e882ea63a9ac9b680d43ba379069f878951bdcbb2ea53bdcd6b05d524de87a&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Yogyakarta</h1>
                <h2>123-property</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured