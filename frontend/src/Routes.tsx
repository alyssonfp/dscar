import Navbar from "components/Navbar";
import Home from "pages/Home";
import Catalog from "pages/Catalog";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Purchase from "pages/Purchase";
import Buscar from "pages/Buscar";

const Routes = () => (
    
        <BrowserRouter>
       <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products">
                <Catalog />
            </Route>
            <Route path="/purchase">
                <Purchase />
            </Route>
            <Route path="/buscar">
                <Buscar />
            </Route>
            
            
        </Switch>
        
        </BrowserRouter>

    );

export default Routes;