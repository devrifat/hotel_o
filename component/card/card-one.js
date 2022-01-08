export default function CardOne({ col, img, title, content, link, children }){
    return(
        <div className={`card mb-3 col-${col}`}>
            <div className="row g-0">
                <div className="col-md-4">
                    Img
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                </div>
                </div>
            </div>
            {children}
        </div>
    )
}