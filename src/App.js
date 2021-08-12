import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./routes/SiteRoute";

// import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// custom
import "./static/css/styles.css";

function App() {
	return (
		<BrowserRouter>
			<SiteRoutes />
		</BrowserRouter>
	);
}

export default App;
