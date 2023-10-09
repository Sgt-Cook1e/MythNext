import Image from "next/image";
import background from "./images/me&dxm.png";

function Home() {
    return (
        <main className="Home">
            {/* <div className="background-image-div"/> */}
            <Image src={background} alt="background" className="background-image-div"/>
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
                        <a className="btn btn1 glas button-glas" role="button" href="https://discord.gg/MeZUrZ6Aa3">Support Discord</a>
                    </div>
                    <div className="col col-lg-7 col-xl-6 col-box">
                        <div className="container">
                            <a href="https://github.com/Sgt-Cook1e">
                                <img src="https://github-readme-stats.vercel.app/api?username=Sgt-Cook1e&theme=transparent&text_color=FFFFFF&title_color=FFFFFF" className="status"/>
                            </a>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col text-center text-white">
                        <h1 className="roadrage">About Me!</h1>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="text-center">Hi Im Mythic, aka Thomas. Im a 20 year old Developer / World Creator with the passion to make everyones vrchat experience better and more amazing.
                                <br/>
                                I love all of the people who support me and if there is any form of benifits you would like to see off of patreon lmk.
                                <br/>
                                Looking for work done? Discord bot / World? Etc. Message me on Discord! Dms are always open
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
