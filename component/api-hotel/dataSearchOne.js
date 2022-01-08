
export const filterData = [
    {
      items: [
        { name: 'one', value: '1' },
        { name: 'two', value: '2' },
        { name: 'three', value: '3' },
        { name: 'four', value: '4' },
        { name: 'five', value: '5' }
      ],
      placeholder: 'star Ratings',
      queryName: 'starRatings',
      type: 'radio'
    },
    {
      items: [
        { name: 'min', value: '10' },
        { name: 'max', value: '10000' }
      ],
      placeholder: 'Min Price',
      queryName: 'priceMin',
      type: 'range'
    },
    {
      items: [
        { name: 'checkInDate', value: '2020-01-18' },
      ],
      placeholder: 'check In',
      queryName: 'checkIn',
      type: 'date'
    },
    {
      items: [
        { name: 'checkOutDate', value: '2021-01-15' },
      ],
      placeholder: 'check Out',
      queryName: 'checkOut',
      type: 'date'
    },
    // {
    //   items: [
    //     { name: 'min', value: '10' },
    //     { name: 'max', value: '10000' }
    //   ],
    //   placeholder: 'Max Price',
    //   queryName: 'priceMax',
    //   type: 'range'
    // },
    {
      items: [
        { name: 'Best seller', value: 'BEST_SELLER' },
        { name: 'Price', value: 'PRICE' },
        { name: 'Guest ratinf', value: 'GUEST_RATING' },
        { name: 'Rating Hight', value: 'STAR_RATING_HIGHEST_FIRST' },
        { name: 'Rating Low', value: 'STAR_RATING_LOWEST_FIRST' },
        { name: 'Highest Price', value: 'PRICE_HIGHEST_FIRST' },
        { name: 'LandMark', value: 'DISTANCE_FROM_LANDMARK' },
      ],
      placeholder: 'Sort',
      queryName: 'sortOrder',
      type: 'select'
    },
];

export const getFilterValues = (filterValues) => {
    const {
        checkIn,
        checkOut,
        sortOrder,
        priceMin,
        starRatings,
        // priceMax,
    } = filterValues;

    const values = [
        {
          name: 'checkOut',
          value: checkOut,
        },
        {
          name: 'checkIn',
          value: checkIn,
        },
        {
          name: 'sortOrder',
          value: sortOrder,
        },
        {
          name: 'priceMin',
          value: priceMin,
        },
        {
          name: 'starRatings',
          value: starRatings,
        },
        // {
        //   name: 'priceMax',
        //   value: priceMax,
        // },
    ];

    return values;
};
