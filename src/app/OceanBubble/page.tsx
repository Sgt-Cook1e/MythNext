import FooterComponent from "@/components/footer";
import { Row, Col } from "react-bootstrap";

function OceanBubble() {
    return (
        <main className="OceanBubble">
            <div className="background-image-div"/>
            <div className="container-md">
                <div className="alert alert-warning center">
                    <p>Page Still Under Development.</p>
                </div>
                <div className="row top">
                    <div className="col my-auto col-lg-5 col-xl-6 col-main">
                        
                    </div>
                </div>
            </div>
            <FooterComponent></FooterComponent>
        </main>
    )
}

export default OceanBubble;