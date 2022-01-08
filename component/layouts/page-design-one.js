import FooterCopyrigh from '../footer/footer'
import MenuOne from '../header/header-menu'
export default function LayoutOne({ children, title }) {
    return (
      <>
        <MenuOne />
            <section className="bg-light py-5 text-center overflow-hidden">
                <div className="row py-lg-2">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">{title}</h1>
                    </div>
                </div>
            </section>
            {children}
        <FooterCopyrigh />
      </>
    )
  }