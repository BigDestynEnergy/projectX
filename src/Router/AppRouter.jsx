import { BrowserRouter, Routes , Route} from "react-router-dom";
import LandingPage from "../comps/Landing Page";

export default function AppRouter(){
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}