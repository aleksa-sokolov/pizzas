import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {useState} from "react";
import {createContext} from "react";

export const SearchContext = createContext("");

function App() {
    const [searchValue, setSearchValue] = useState();
    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue,setSearchValue}}>
                <Header/>
                <div className="content">
                    {/*<Router>*/}
                        <Routes>
                            <Route path="/" element={<Home searchValue={searchValue}/>}/>
                            <Route path="/card" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    {/*</Router>*/}
                </div>
            </SearchContext.Provider>
        </div>
    );
}

export default App;