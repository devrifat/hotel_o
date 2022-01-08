import { useRouter } from "next/router";
import LatestHotell from "../component/api-hotel/latest-hotel";
import { FilterDataInput } from '../component/api-hotel/searchFilterOne';
import LayoutOne from '../component/layouts/page-design-one';
import { apiCall, baseUrl } from "../utils/apiCall";
export default function Blog({ getHotelListLatestCall, getHotelListSearch }) {


    let router = useRouter()
    let searchNameUrl = router.query.purpose ? ` - ${query.purpose}` : ''
  return (
    <LayoutOne title={'hotel search' + searchNameUrl }>
        <FilterDataInput
            
        />
        {
            getHotelListSearch.data.body.searchResults.results.length > 0 ? 
                <LatestHotell getHotelListLatestCall={getHotelListSearch} title="Search result..." />
            :
                <div className="no-result-found">
                    No result found
                </div>
        }
        <LatestHotell getHotelListLatestCall={getHotelListLatestCall} title="Latest Hotell..." />
    </LayoutOne>
  )
}


export async function getServerSideProps({query}) {
    const getHotelListLatestCall = await apiCall( 
        `${baseUrl}/properties/list?destinationId=1506246&pageNumber=1&pageSize=6`
    )


    const priceMin = query.priceMin || 0
    const priceMax = query.priceMax || 1000000
    const sortOrder = query.sortOrder || 'PRICE'
    const checkIn = query.checkIn || '2020-01-08'
    const checkOut = query.checkOut || '2020-01-15'
    const starRatings = query.starRatings || '5'


    const getHotelListSearch = await apiCall( 
        `${baseUrl}/properties/list?destinationId=1506246&pageNumber=1&pageSize=6&priceMin=${priceMin}&priceMax=${priceMax}&sortOrder=${sortOrder}&checkIn=${checkIn}&checkOut=${checkOut}&starRatings=${starRatings}`
    )
    console.log(query)
    return {
        props: {
            getHotelListLatestCall: getHotelListLatestCall,
            getHotelListSearch: getHotelListSearch
        }
    }
}

