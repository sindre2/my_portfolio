import { ToggleButton } from './components/Button'

export function Home()
{
    return(
        <div className="home_body">
            <div className="home_container">
                <h1>Sindre2.Kodehode
                    Front End Developer
                </h1>
                <div className="home_buttons">
                    <button>About Me</button>
                    <button>Creations</button>
                    <ToggleButton />
                </div>
            </div>
        </div>
    )
}