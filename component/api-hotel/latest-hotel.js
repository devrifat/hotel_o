import HotelCardOne from "./singleCard";

const LatestHotell = ( { children, title, getHotelListLatestCall }) => {
    const resultsQuery = getHotelListLatestCall.data.body.searchResults.results
    return(
        <>
            <section className="bg-light py-2 text-center overflow-hidden">
                <div className="row py-lg-2">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h4 className="fw">{title}</h4>
                    </div>
                </div>
            </section>
            <section className="bg-light py-2 text-center overflow-hidden">
                <div className="container">
                    <div className="row">
                        {
                            resultsQuery.map(
                                item => {
                                    return (
                                        <HotelCardOne
                                            key={item.id}
                                            item={item}
                                        />
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}




export default LatestHotell
