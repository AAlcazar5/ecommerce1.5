import Layout from "../shared/layout";
import { Link } from "react-router-dom";
import './return-request.styles.scss';

const ReturnRequest = () => {
    return ( 
        <Layout>
            <h1 style={{color: 'black'}} className="playfair">REQUEST RETURN</h1>
            <div className="select is-multiple">
                <div className="return-request montserrat">
                    <h3>Please select the reason for the return request :)</h3>
                </div>

                <div className="montserrat" style={{marginLeft: '150px', marginRight: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>We accept returns on defective items. Please let us know how the item is defective.</div>

                {/* <div className="return-reason" style={{cursor: 'pointer'}}>
                    <select multiple size="8">
                        <option value="Size too small" className="montserrat">Size too small</option>
                        <option value="Size too large" className="montserrat">Size too large</option>
                        <option value="Style" className="montserrat">Didn't like style</option>
                        <option value="Fabric" className="montserrat">Fabric was uncomfortable</option>
                        <option value="Other" className="montserrat">Other</option>
                    </select>
                </div> */}
                <div className="feedback">
                    <textarea className="feedbackArea montserrat" placeholder="Please let us know how the item is defective"></textarea>
                </div>
                <div className="request">
                    <button className="button is-black">
                        <Link to='/request-success' className="montserrat" style={{ textDecoration: 'none', color: 'white' }}>Submit</Link>
                    </button>
                </div>
            </div>
        </Layout>
        
     );
}
 
export default ReturnRequest;