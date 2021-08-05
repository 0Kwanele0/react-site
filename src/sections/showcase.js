import './styles/showcase.css'
import img from '../images/blogging.png'
import Button from '../components/button'



function Showcase() {

    return (
        <div class="container pt-5">
            <div class="row">
                <div class="col-md order-md-last">
                    <div className="right">
                        < img className='image' alt="showcase" src={img} />
                    </div>
                </div>
                <div class="col-md order-md-first">
                    <div className="left">
                        <h1>Let us help you create and launch your product</h1>
                        <p>Scale apps with 0% rev share on your first $1M. Get started with Shopify App Challenge. Reimagine commerce. Earn More Revenue. Create Your Best Work.</p>
                        <div className="btn-div">
                            <Button text="Know more" />
                            <Button text="Get in touch" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Showcase
