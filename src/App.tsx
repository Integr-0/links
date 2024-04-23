import "./App.css";
import icon from "./assets/icon.png";

import Card from "./components/Card";
import MainBox from "./components/MainBox";
import Box from "./components/Box";
import TitleIcon from "./components/TitleIcon";
import LinkButton from "./components/LinkButton.tsx";

function App() {
    return (
        <>
            <div className="area_center">

                <MainBox icon={icon}/>

                <Box
                    content={
                        <div className="card-body">
                            <TitleIcon
                                text="Links"
                                icon="fa-solid fa-link"
                            />

                            <Card
                                title="Helix"
                                bio="Helix is a Minecraft mod adding various features to improove your gameplay."
                                links={
                                    <div>
                                        <LinkButton name="Project" link="https://modrinth.com/mod/helix"/>
                                        <LinkButton name="Source" link="https://github.com/Integr-0/Helix"/>
                                    </div>
                                }
                            />

                            <Card
                                title="GitHub"
                                bio="My GitHub wich holds all my public projects."
                                links={
                                    <div>
                                        <LinkButton name="Go there" link="https://github.com/Integr-0"/>
                                    </div>
                                }
                            />

                            <Card
                                title="Discord"
                                bio="My Discord, message me here."
                                links={
                                    <div>
                                        <LinkButton name="Go there"
                                                    link="https://discordapp.com/users/688059979105697844"/>
                                    </div>
                                }
                            />
                        </div>
                    }
                />
            </div>

            <br/>
        </>
    );
}

export default App;
