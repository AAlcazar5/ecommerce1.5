import { Link } from "react-router-dom"
import Layout from "../shared/layout";
import './return-request.styles.scss'

const RequestSuccess = () => {
    return ( 
        <Layout>
            <h2 className="title montserrat" style={{color: 'black'}}>Request Success!</h2>
            <div className="paragraphContainer montserrat">
                <p className="paragraph montserrat" style={{color: 'black'}}>
                    Your return request has been submitted. 
                    More details will been sent to your 
                    receipt email shortly.
                    Thank you for shopping with us and
                    funding our sustainable future!
                </p>
            </div>
            <div className="buttonContainer">
                <button className="button is-black montserrat"><Link to="/shop">Continue Shopping</Link></button>
            </div>
        </Layout>
     );
}
 
export default RequestSuccess;