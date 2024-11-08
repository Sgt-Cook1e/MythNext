import FooterComponent from "@/components/footer";
import Navbar from "@/components/navbar";

function Home() {
    return (
        <main className="Home">
            <Navbar></Navbar>
            <div className="background-image-div"/>
            <div className="container-md">
                <div className="alert alert-warning">
                    <p>Page Still Under Development.</p>
                </div>
                <div className="row top">
                    <div className="col my-auto col-lg-5 col-xl-6 col-main">
                        <a href="https://discord.com/users/847363776961314817">
                            <img src="https://lanyard.cnrad.dev/api/847363776961314817?bg=23283d&borderRadius=8px" className="status"></img>
                        </a>
                        <h4 className="roadrage support">Support My Work!</h4>
                        <a className="btn btn1 glas button-glas" role="button" href="https://patreon.com/MythicStudios">Patreon</a>
                        {/* <a className="btn btn1 glas button-glas" role="button" href="https://discord.gg/MeZUrZ6Aa3">Support Discord</a> */}
                    </div>
                    <div className="col col-lg-7 col-xl-6 col-box">
                        <div className="container">
                            <a href="https://github.com/Sgt-Cook1e">
                                <img src="https://github-readme-stats.vercel.app/api?username=Sgt-Cook1e&theme=transparent&text_color=FFFFFF&title_color=FFFFFF" className="status"/>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Text here */}
            </div>
            <FooterComponent></FooterComponent>
        </main>
    );
}

export default Home;
