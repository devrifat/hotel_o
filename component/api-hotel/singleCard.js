import Image from 'next/image';
import Link from 'next/link';
const HotelCardOne = ( { item } ) => {
    const {id, name, starRating, urls, address, guestReviews, landmarks, geoBullets, ratePlan, neighbourhood, coordinate, providerType, supplierHotelId, optimizedThumbUrls} = item
    return(
        <div className="col-xl-4 col-lg-6 col-12 mb-5">
            <div className="card single-item-of-hotel">
                <div className="card-img position-relative">
                <span className="price-me position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{ratePlan.price.current}</span>
                    { optimizedThumbUrls &&
                        <Image
                            alt={name}
                            src={optimizedThumbUrls.srpDesktop}
                            width={250}
                            height={140}
                        />
                    }
                </div>
                <div className="card-body text-start">
                    <h5 className="card-text"><small className="text-dark">{name}</small></h5>
                    <p className="card-text"><small className="text-muted">{address.streetAddress}, {address.locality}</small></p>
                    <Link
                        href={'/hotel/' + id}
                    >
                        <a className=" badge bg-dark">Read More</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HotelCardOne





// destinationId: '1506246',
// pageNumber: '1',
// pageSize: '25',
// adults1: '1',
// adults2: '30',
// adults3: '19',
// adults4: '21',
// adults5: '1',
// children1: '23,3,4,5,6',
// children2: '3,4,5,3',
// starRatings: '1,3',



// checkIn: '2020-01-08',
// checkOut: '2020-01-15',

// priceMin: '100',
// priceMax: '10000',
// sortOrder: 'PRICE',




// locale: 'en_US',
// currency: 'USD',
// accommodationIds: 'sasas,asas,asas,asa',
// amenityIds: 'fgfg,fdgfg,fgfdg,',
// landmarkIds: '12',
// themeIds: '12434'



// {
//     "id": 634418464,
//     "name": "31 Street Broadway Hotel",
//     "starRating": 2,
//     "urls": {},
//     "address": {
//         "streetAddress": "38 West 31st Street",
//         "extendedAddress": "",
//         "locality": "New York",
//         "postalCode": "10001",
//         "region": "NY",
//         "countryName": "United States",
//         "countryCode": "us",
//         "obfuscate": false
//     },
//     "guestReviews": {
//         "unformattedRating": 5.4,
//         "rating": "5.4",
//         "total": 313,
//         "scale": 10
//     },
//     "landmarks": [
//         {
//             "label": "City center",
//             "distance": "0.7 miles"
//         },
//         {
//             "label": "Times Square",
//             "distance": "0.7 miles"
//         }
//     ],
//     "geoBullets": [],
//     "ratePlan": {
//         "price": {
//             "current": "$35",
//             "exactCurrent": 35
//         },
//         "features": {
//             "paymentPreference": false,
//             "noCCRequired": false
//         }
//     },
//     "neighbourhood": "NoMad",
//     "deals": {},
//     "messaging": {},
//     "badging": {},
//     "pimmsAttributes": "DoubleStamps|D13|TESCO",
//     "coordinate": {
//         "lat": 40.74725,
//         "lon": -73.98776
//     },
//     "providerType": "LOCAL",
//     "supplierHotelId": 19794327,
//     "vrBadge": "Condo Hotel",
//     "isAlternative": false,
//     "optimizedThumbUrls": {
//         "srpDesktop": "https://exp.cdn-hotels.com/hotels/20000000/19800000/19794400/19794327/fec711f6_z.jpg?impolicy=fcrop&w=250&h=140&q=high"
//     }
// }