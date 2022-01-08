import { useRouter } from 'next/router';
import React, { useEffect } from "react";
import LayoutOne from '../component/layouts/page-design-one';

export default function InstallApp() {
    const router = useRouter()

    let hostname
    if (typeof window !== 'undefined') {
        hostname = window.location.hostname;
    }
    
    const { query } = router
    const { hmac, shop } = query
    console.log(query)
    const api_key = '3f427ce89c586eecbece2f7c353886fe'
    // const scopes = 'read_all_orders,read_assigned_fulfillment_orders,write_assigned_fulfillment_ordersread_checkouts,write_checkouts,read_content,write_content,read_customers,write_customers,read_discounts,write_discounts'
    const scopes = 'read_products,write_products'
    const redirect_uri = 'https://' + hostname + '/token'
    const redirect_uri_encode =  encodeURIComponent(redirect_uri)
    const nonce = 1 + Math.random() * (100 - 1);
    const access_mode = 'pre-user'

    const the_auth_me = `https://${shop}/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect_uri_encode}&state=${nonce}&grant_options[]=${access_mode}`
    

    useEffect(() => {
        router.push(the_auth_me)
    });

    
    return(
        <LayoutOne title={'shopify api'}>
            <div className="singup-page-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            Hi
                        </div>
                    </div>
                </div>
            </div>
        </LayoutOne>
    )
}
