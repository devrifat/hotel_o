import { useRouter } from 'next/router';
import LayoutOne from '../component/layouts/page-design-one';

export default function InstallApp() {
    
    return(
        <LayoutOne title={'Token api'}>
            <div className="token-page-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            Token api
                        </div>
                    </div>
                </div>
            </div>
        </LayoutOne>
    )
}
