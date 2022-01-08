import Image from 'next/image';
import LayoutOne from '../../component/layouts/page-design-one';
import { apiCall, baseUrl } from '../../utils/apiCall';
export default function Blog({ data }) {
  console.log(data)
    const { pdpHeader, overview, hotelWelcomeRewards, propertyDescription, guestReviews, atAGlance } = data.data.body
    const { address, priceMatchEnabled, name, starRatingTitle, featuredPrice, mapWidget } = propertyDescription




  return (
    <LayoutOne title={'hotel - ' + 'dataSingleHotel' }>
        <div className="container">
            <div className="row align-items-center g-5 py-5">
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">{name}</h1>
                    <span className="badge bg-info text-dark me-2">{featuredPrice.currentPrice.formatted}</span>
                    <span className="badge bg-danger me-2">{starRatingTitle}</span>
                    <span className="badge bg-dark mt-3">{address.fullAddress}</span>
                </div>
                <div className="col-lg-6">
                    <Image
                        alt={name}
                        src={mapWidget.staticMapUrl}
                        width={640}
                        height={443}
                    />
                </div>
            </div>
        </div>
    </LayoutOne>
  )
}


export async function getServerSideProps({query}) {
    const getHotelSingle = await apiCall( 
        `${baseUrl}/properties/get-details?id=${query.id}`
    )
    console.log(query)
    return {
        props: {
            data : getHotelSingle
        }
    }
}




// {
//     "result": "OK",
//     "data": {
//         "body": {
//             "pdpHeader": {
//                 "hotelId": "634418464",
//                 "destinationId": "1506246",
//                 "pointOfSaleId": "HCOM_US",
//                 "currencyCode": "USD",
//                 "occupancyKey": "A2",
//                 "hotelLocation": {
//                     "coordinates": {
//                         "latitude": 40.74725,
//                         "longitude": -73.98776
//                     },
//                     "resolvedLocation": "CITY:1506246:PROVIDED:PROVIDED",
//                     "locationName": "New York"
//                 }
//             },
//             "overview": {
//                 "overviewSections": [
//                     {
//                         "title": "Main amenities",
//                         "type": "HOTEL_FEATURE",
//                         "content": [
//                             "28 smoke-free apartments",
//                             "Housekeeping once per stay",
//                             "WiFi in the lobby",
//                             "Room service",
//                             "24-hour front desk",
//                             "Air conditioning",
//                             "Self-serve laundry",
//                             "Luggage storage",
//                             "TV in a common area"
//                         ],
//                         "contentType": "LIST"
//                     },
//                     {
//                         "title": "Feel at home",
//                         "type": "FAMILY_FRIENDLY_SECTION",
//                         "content": [
//                             "Kitchenette",
//                             "Microwave",
//                             "Refrigerator",
//                             "Television",
//                             "Free toiletries",
//                             "Washer/dryer"
//                         ],
//                         "contentType": "LIST"
//                     },
//                     {
//                         "title": "What’s around",
//                         "type": "LOCATION_SECTION",
//                         "content": [
//                             "In Midtown",
//                             "5th Avenue - 1 min walk",
//                             "Herald Square - 5 min walk",
//                             "Empire State Building - 5 min walk",
//                             "Macy's - 6 min walk",
//                             "Madison Square Garden - 7 min walk",
//                             "Madison Square Park - 8 min walk",
//                             "Flatiron Building - 10 min walk",
//                             "Bryant Park - 10 min walk",
//                             "Hammerstein Ballroom - 12 min walk",
//                             "Times Square - 12 min walk"
//                         ],
//                         "contentType": "LIST"
//                     },
//                     {
//                         "type": "TAGLINE",
//                         "content": [
//                             "<b>Walking distance from Empire State Building </b>"
//                         ],
//                         "contentType": "LIST"
//                     }
//                 ]
//             },
//             "hotelWelcomeRewards": {
//                 "applies": true,
//                 "info": "You can collect Hotels.com® Rewards stamps here"
//             },
//             "propertyDescription": {
//                 "clientToken": "tnB3h5E_oolSTvoU_aRRbK47gQc.",
//                 "address": {
//                     "countryName": "United States of America",
//                     "cityName": "New York",
//                     "postalCode": "10001",
//                     "provinceName": "NY",
//                     "addressLine1": "38 West 31st Street",
//                     "countryCode": "USA",
//                     "pattern": "AddressLine1,#AddressLine2,#CityName,#ProvinceName,#PostalCode,#CountryName",
//                     "fullAddress": "38 West 31st Street, New York, NY, 10001, United States of America"
//                 },
//                 "priceMatchEnabled": false,
//                 "name": "31 Street Broadway Hotel",
//                 "starRatingTitle": "2 stars",
//                 "starRating": 2,
//                 "featuredPrice": {
//                     "beforePriceText": "Lowest price",
//                     "afterPriceText": "",
//                     "pricingAvailability": "available on 01/09/22",
//                     "pricingTooltip": "Price may be available on other dates",
//                     "currentPrice": {
//                         "formatted": "$35",
//                         "plain": 35
//                     },
//                     "taxInclusiveFormatting": false,
//                     "bookNowButton": false
//                 },
//                 "mapWidget": {
//                     "staticMapUrl": "https://maps-api-ssl.google.com/maps/api/staticmap?center=40.74725,-73.98776&format=jpg&sensor=false&key=AIzaSyDaDqDNrxWrxcURixO2l6TbtV68X0Klf4U&zoom=16&size=834x443&scale&signature&signature=hoaQwrpUYijVhK62rlUVkTsLi7s="
//                 },
//                 "roomTypeNames": [
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (517)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (525)",
//                     "Room, Shared Bathroom (529)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (820)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (813)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (528)",
//                     "Private Apartment, common Bathroom (630)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (522)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (212)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (413)",
//                     "Private Room, Kitchenette, common Bathroom (428)",
//                     "Private Apartment, common Bathroom (818)",
//                     "Private Room, Kitchenette, common Bathroom (815)",
//                     "Private Apartment, common Bathroom (418)",
//                     "Private Apartment, common Bathroom (816)",
//                     "Private Apartment, common Bathroom (615)",
//                     "Private Apartment, common Bathroom (712)",
//                     "Private Apartment, common Bathroom (744)",
//                     "Private Royal Studio with a Private bathroom (640)",
//                     "Private Comfort Apartment, Kitchenette, common Bathroom (526)",
//                     "Private Apartment, Shared Bathroom (727) ",
//                     "Private Apartment, common Bathroom (213) ",
//                     "Private Apartment, common Bathroom  (219)",
//                     "Private Apartment, Common Bathroom (512)",
//                     "Private Apartment, Shared Bathroom (676)",
//                     "Comfort Apartment, Common Bathroom, Kitchenette (717)",
//                     "Private Apartment, common Bathroom (724)",
//                     "Private Apartment, Common Bathroom (217) ",
//                     "Private Apartment, Shared Bathroom (741)",
//                     "Comfort Apartment, Common Bathroom, Kitchenette (823) ",
//                     "Private Apartment, common bathroom (628)",
//                     "Comfort Apartment, Shared Bathroom (218) ",
//                     "Apartment, Shared Bathroom (826)",
//                     "Private Apartment, Shared Bathroom (541) ",
//                     "Room, Shared Bathroom (619)",
//                     "Studio, Private Bathroom (1006)",
//                     "Studio, Private Bathroom (443)",
//                     "Studio, Private Bathroom (728)",
//                     "Studio, Private Bathroom (623)",
//                     "Studio, Private Bathroom (311)",
//                     "Studio, Private apartment (211)",
//                     "Studio, Private Bathroom (721)",
//                     "Studio, Private Bathroom (862)",
//                     "Apartment, Shared Bathroom (819)",
//                     "Studio,Private Apartment with Kitchenette (536)",
//                     "Apartment With Shared Bathroom (513)",
//                     "Apartment With Shared Bathroom (719)",
//                     "Room, Shared Bathroom (519)",
//                     "Studio, Private bathroom (235)",
//                     "Studio, Private Apartment (409)",
//                     "Studio, Private Bathroom (1008)",
//                     "Studio, Private Bathroom (1108)",
//                     "Studio, Kitchenette (207)",
//                     "Studio, Kitchenette (1103)",
//                     "Studio, Kitchenette"
//                 ],
//                 "tagline": [
//                     "<b>Walking distance from Empire State Building </b>"
//                 ],
//                 "freebies": []
//             },
//             "guestReviews": {
//                 "brands": {
//                     "scale": 10,
//                     "formattedScale": "10",
//                     "rating": 5.4,
//                     "formattedRating": "5.4",
//                     "lowRating": false,
//                     "total": 313
//                 }
//             },
//             "atAGlance": {
//                 "keyFacts": {
//                     "hotelSize": [
//                         "28 apartments",
//                         "Arranged over "
//                     ],
//                     "arrivingLeaving": [
//                         "Check-in time 4:00 PM-5:00 AM",
//                         "Check-out time is  10:00 AM"
//                     ],
//                     "specialCheckInInstructions": [
//                         "Front desk staff will greet guests on arrival. Guests can choose to either self-clean the property prior to check-out, or pay an additional cleaning fee of USD 110 at check-out. "
//                     ],
//                     "requiredAtCheckIn": [
//                         "Credit card, debit card, or cash deposit required for incidental charges",
//                         "Government-issued photo ID may be required",
//                         "Minimum check-in age is 17"
//                     ]
//                 },
//                 "travellingOrInternet": {
//                     "travelling": {
//                         "children": [
//                             "No cribs (infant beds)"
//                         ],
//                         "pets": [
//                             "Pets allowed"
//                         ],
//                         "extraPeople": []
//                     },
//                     "internet": [
//                         "WiFi in public areas*",
//                         "WiFi in rooms*"
//                     ]
//                 },
//                 "transportAndOther": {
//                     "transport": {
//                         "transfers": [],
//                         "parking": [
//                             "No onsite parking"
//                         ],
//                         "offsiteTransfer": []
//                     },
//                     "otherInformation": [
//                         "Smoke-free property"
//                     ],
//                     "otherInclusions": []
//                 }
//             },
//             "amenities": [
//                 {
//                     "heading": "At the aparthotel",
//                     "listItems": [
//                         {
//                             "heading": "Food and drink",
//                             "listItems": [
//                                 "Room service (during limited hours)"
//                             ]
//                         },
//                         {
//                             "heading": "Services",
//                             "listItems": [
//                                 "24-hour front desk",
//                                 "Laundry facilities",
//                                 "Luggage storage"
//                             ]
//                         },
//                         {
//                             "heading": "Facilities",
//                             "listItems": [
//                                 "Number of buildings/towers -  0",
//                                 "Elevator",
//                                 "Television in common areas"
//                             ]
//                         },
//                         {
//                             "heading": "Languages Spoken",
//                             "listItems": [
//                                 "Arabic",
//                                 "English",
//                                 "French",
//                                 "German",
//                                 "Korean",
//                                 "Portuguese",
//                                 "Russian",
//                                 "Spanish",
//                                 "Vietnamese"
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     "heading": "In the apartment",
//                     "listItems": [
//                         {
//                             "heading": "Home comforts",
//                             "listItems": [
//                                 "Air conditioning",
//                                 "Washer/dryer"
//                             ]
//                         },
//                         {
//                             "heading": "Freshen up",
//                             "listItems": [
//                                 "Free toiletries"
//                             ]
//                         },
//                         {
//                             "heading": "Be entertained",
//                             "listItems": [
//                                 "Flat-screen TV",
//                                 "Cable TV channels"
//                             ]
//                         },
//                         {
//                             "heading": "Stay connected",
//                             "listItems": [
//                                 "WiFi (surcharge)"
//                             ]
//                         },
//                         {
//                             "heading": "Food and drink",
//                             "listItems": [
//                                 "Refrigerator",
//                                 "Microwave",
//                                 "Kitchenette"
//                             ]
//                         },
//                         {
//                             "heading": "More",
//                             "listItems": [
//                                 "Housekeeping - once per stay"
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "hygieneAndCleanliness": {
//                 "title": "COVID-19: Hygiene and cleanliness",
//                 "healthAndSafetyMeasures": {
//                     "title": "Enhanced health and safety measures",
//                     "description": "This property advises that enhanced cleaning and guest safety measures are currently in place.",
//                     "measures": [
//                         "Property is cleaned with disinfectant",
//                         "Property confirms they are implementing enhanced cleaning measures",
//                         "Property uses a professional cleaning service"
//                     ]
//                 }
//             },
//             "smallPrint": {
//                 "alternativeNames": [
//                     "Grand NYC Apartment New York",
//                     "The Grand NYC",
//                     "1234 Broadway Avenue",
//                     "31 Street Broadway New York",
//                     "31 Street Broadway Hotel New York",
//                     "Grand NYC Apartment",
//                     "31 Street Broadway Hotel Aparthotel",
//                     "31 Street Broadway Hotel Aparthotel New York",
//                     "Grand NYC New York",
//                     "Grand NYC"
//                 ],
//                 "mandatoryFees": [
//                     "<ul><li>A tax is imposed by the city: USD 3.5 per accommodation, per night</li></ul>",
//                     "<p>Pet deposit: USD 35 per stay</p>",
//                     "<ul><li>Service fee: USD 139 per accommodation, per stay</li></ul>"
//                 ],
//                 "optionalExtras": [
//                     "<p><strong>Early check-in</strong> can be arranged for an extra charge of USD 40 (subject to availability)</p><p><strong>Late check-out</strong> can be arranged for an extra charge of USD 50 (subject to availability)</p>",
//                     "<p><strong>WiFi</strong> is available in guestrooms for USD 5 per day (rates may vary)</p><p><strong>WiFi</strong> is available in public areas for USD 5 per day (rates may vary)</p>"
//                 ],
//                 "policies": [
//                     "<p>Guests can rest easy knowing there's a smoke detector on site.</p><p>This property advises that enhanced cleaning and guest safety measures are currently in place.</p><p>The property is professionally cleaned; disinfectant is used to clean the property; commonly-touched surfaces are cleaned with disinfectant between stays; bed sheets and towels are laundered at a temperature of at least 60°C/140°F.</p>"
//                 ],
//                 "mandatoryTaxesOrFees": true,
//                 "display": true
//             },
//             "specialFeatures": {
//                 "sections": []
//             },
//             "miscellaneous": {
//                 "pimmsAttributes": "DoubleStamps|D13|TESCO",
//                 "showLegalInfoForStrikethroughPrices": true,
//                 "legalInfoForStrikethroughPrices": "The struck-out price is based on the property’s standard rate on our app, as determined and supplied by the property."
//             },
//             "pageInfo": {
//                 "pageType": "dateless",
//                 "errors": [],
//                 "errorKeys": []
//             },
//             "unavailable": {}
//         },
//         "common": {
//             "pointOfSale": {
//                 "numberSeparators": ",.",
//                 "brandName": "Hotels.com"
//             },
//             "tracking": {
//                 "omniture": {
//                     "s.prop34": "2021.12.925",
//                     "s.eVar69": "Mob :: aApp",
//                     "s.currencyCode": "USD",
//                     "s.eVar26": "US:TX:DALLAS:623",
//                     "s.eVar16": "Mob :: aApp",
//                     "s.products": "LOCAL;19794327",
//                     "s.eVar29": "Mob :: aApp",
//                     "s.eVar40": "D=v0",
//                     "s.eVar95": "Unknown",
//                     "s.eVar41": "USD",
//                     "s.eVar31": "D=v0",
//                     "s.eVar4": "|SI:anonymous|VS:returnVisitor|HCR:notApplicable|FC:notApplicable|NS:unknown|TI:notApplicable|SM:notApplicable|IR:anonymous|",
//                     "s.eVar43": "en_US|HCOM_US|www.hotels.com",
//                     "s.eVar32": "D=v0",
//                     "s.eVar34": "H1068:005.001,H1871:007.002,M4869:001.000,M4953:001.000,M5342:000.000,M5756:001.000,M5758:001.000,M5759:001.000,M5760:001.000,M6271:001.000,M6439:000.000,M6553:000.000,M6946:000.000,M7296:000.000,M7305:000.000,M7308:000.000,M7353:000.000,M7362.0,M7635:000.000,M7844:000.000,M7983:000.000,M7990:000.000,M8033:000.000,M8073:000.000,M8248:000.000,M8336:000.000,M8400:000.000,M9035:000.000,M9056:000.000,M9167:000.000,M9168:000.000,M9469:000.000,M9475:000.000,M9493:000.000,M9629:000.000,M9733:007.001,M9810:000.000,M9890:000.000,M9924:000.000,M9930:000.000,M9974:000.000,M10013:002.001,M10025:000.000,M10049:000.000,M10057:000.000,M10101:000.000,M10268:000.000,M10291:000.000,M10335:000.000,M10473:000.000,M10517:000.000,M9215:001.000",
//                     "s.eVar13": "389367",
//                     "s.server": "www.hotels.com",
//                     "s.prop28": "0",
//                     "s.prop27": "4187aa80-9887-4be5-ad4c-bb7d5623b9ee",
//                     "s.prop5": "389367",
//                     "s.eVar80": "",
//                     "s.prop48": "hotel details without dates description tab",
//                     "s.prop36": "|SI:anonymous|VS:returnVisitor|HCR:notApplicable|FC:notApplicable|NS:unknown|TI:notApplicable|SM:notApplicable|IR:anonymous|",
//                     "s.eVar93": "aws.us-west-2.unknown"
//                 },
//                 "pageViewBeaconUrl": "/taps/v1/PageView?deviceType=App-Phone&rooms=1&destRegionID=1506246&hotelIds=&adults=2&userAgent=PDE.4.1.430&userGuid=4187aa80-9887-4be5-ad4c-bb7d5623b9ee&pageName=Hotel-IS&slots=HIS_Car_A,HIS_Car_B,HIS_Car_C,HIS_Car_D,HIS_Car_E,HIS_Car_F,HIS_Car_G,HIS_Car_H,HIS_Car_I,HIS_Car_J&children=0&culture=en_US&testVersionOverride=4200.0,7983.0,7561.0,7990.0,8434.0,9493.0,10473.0&domain=www.hotels.com&action=pageview&publisher=expedia&userIP=127.0.0.1&programId=1"
//             }
//         }
//     },
//     "transportation": {
//         "transportLocations": [
//             {
//                 "category": "airport",
//                 "locations": [
//                     {
//                         "name": "John F. Kennedy International Airport (JFK) -",
//                         "distance": "",
//                         "distanceInTime": "21 min drive"
//                     },
//                     {
//                         "name": "Liberty Intl. Airport (EWR) -",
//                         "distance": "",
//                         "distanceInTime": "20 min drive"
//                     },
//                     {
//                         "name": "LaGuardia Airport (LGA) -",
//                         "distance": "",
//                         "distanceInTime": "13 min drive"
//                     },
//                     {
//                         "name": "New York, NY (NYS-Skyports Seaplane Base) -",
//                         "distance": "",
//                         "distanceInTime": "4 min drive"
//                     },
//                     {
//                         "name": "Teterboro, NJ (TEB) -",
//                         "distance": "",
//                         "distanceInTime": "15 min drive"
//                     },
//                     {
//                         "name": "Linden, NJ (LDJ) -",
//                         "distance": "",
//                         "distanceInTime": "26 min drive"
//                     }
//                 ]
//             },
//             {
//                 "category": "train-station",
//                 "locations": [
//                     {
//                         "name": "New York W 32nd St. Station -",
//                         "distance": "",
//                         "distanceInTime": "2 min walk"
//                     },
//                     {
//                         "name": "Penn Station -",
//                         "distance": "",
//                         "distanceInTime": "9 min walk"
//                     },
//                     {
//                         "name": "New York 23rd St. Station -",
//                         "distance": "",
//                         "distanceInTime": "10 min walk"
//                     }
//                 ]
//             },
//             {
//                 "category": "metro",
//                 "locations": [
//                     {
//                         "name": "28 St. Station (Broadway) -",
//                         "distance": "",
//                         "distanceInTime": "4 min walk"
//                     },
//                     {
//                         "name": "34 St. Station (Herald Square) -",
//                         "distance": "",
//                         "distanceInTime": "4 min walk"
//                     },
//                     {
//                         "name": "33 St. Station (Park Av. S) -",
//                         "distance": "",
//                         "distanceInTime": "7 min walk"
//                     }
//                 ]
//             }
//         ]
//     },
//     "neighborhood": {
//         "neighborhoodName": "Manhattan"
//     }
// }