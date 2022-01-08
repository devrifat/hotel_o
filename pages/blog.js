import CardOne from '../component/card/card-one';
import LayoutOne from '../component/layouts/page-design-one';


export default function Blog() {
  return (
    <LayoutOne title={'Blog page'}>
        <div className="login-page-area py-5">
            <div className="container">
                <div className="row gap-3">
                    <CardOne
                        col="3"
                        img="img"
                        title="card title"
                        content="this is card content"
                        link="google.com"
                    />
                    <CardOne
                        col="3"
                        img="img"
                        title="card title two"
                        content="this is card content"
                        link="google.com"
                    />
                    <CardOne
                        col="3"
                        img="img"
                        title="card title three"
                        content="this is card content"
                        link="google.com"
                    />
                </div>
            </div>
        </div>
    </LayoutOne>
  )
}
