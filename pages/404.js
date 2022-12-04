import { useTranslation } from "next-i18next"
import Header from "../assets/components/header"
import Footer from "../assets/components/footer"

const Homepage = () => {
  const { t } = useTranslation(["404", "common", "footer"])

  return (
    <>
      <Header />
      <div className="dlist-main-white">
        <div className="dlist-container container">
          <div className="dlist404-page fullwidth">
            <h1 className="dlist404-page-h3">ERROR 404 - PAGE NOT FOUND</h1>
            <h2 className="dlist404-page-h3">THE PAGE YOU REQUEST COULD NOT BE FOUND</h2>
            <div className="dlist404-page-img">
              <img src="https://www.abraa.com/assets/images/Dlist-404page.png" alt="404page" />
            </div>
            <div className="clearfix " />
          </div>
          <div className="clearfix " />
        </div>
        <div className="clearfix " />
      </div>

      <Footer />
    </>
  )
}

export default Homepage
