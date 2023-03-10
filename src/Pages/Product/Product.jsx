import { Link } from 'react-router-dom'
import './Product.css'
import Chart from "../../Components/chart/Chart"
import { Productdata } from '../../Dummydata'
import Airpords from '../../../public/Airpords.jpeg'
import {Publish} from '@material-ui/icons'

const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">
                Product
            </h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create
            </button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
    <Chart data={Productdata} dataKey="Sales" title="Sales Performance" grid/>
            </div>
            <div className="productTopRight">
            <div className="productInfoTop">
<img src={Airpords} alt="" className="productInfoImg" />
<span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
<div className="productInfoItem">
    <span className="productInfoKey">id:</span>
    <span className="productInfoValue">123</span>
</div>
<div className="productInfoItem">
    <span className="productInfoKey">Sales:</span>
    <span className="productInfoValue">5123</span>
</div>
<div className="productInfoItem">
    <span className="productInfoKey">Active:</span>
    <span className="productInfoValue">Yes</span>
</div>
<div className="productInfoItem">
    <span className="productInfoKey">In Stock:</span>
    <span className="productInfoValue">No</span>
</div>
            </div>
            </div>
        </div>
        <div className="productTopBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpods' className="Apple Airpods" />
                    <label>
                        In Stock
                    </label>
                    <select name="inStock" id="inStock">
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                    <label>
                        Active
                    </label>
                    <select name="active" id="active">
                        <option value="Yes">
                            Yes
                        </option>
                        <option value="No">
                            No
                        </option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={Airpords} alt="" className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file" id='file'style={{display:"none"}} />
                    </div>
                    <button className="productButton">
                        Update
                    </button>
                </div>
            </form>
        </div>
        </div>
  )
}

export default Product