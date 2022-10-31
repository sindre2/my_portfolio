import { Error_Styles } from "./404_Styles"

export const NonRoute = () =>
{
    return(
        <Error_Styles>
            <div className="error">
                <h1>Oh no! Nothing here but 404!</h1>
            </div>
        </Error_Styles>
    )
}