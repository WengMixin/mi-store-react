import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavbarComponent from './components/Navbar.js';
import Cancel from './pages/Cancel.js';
import Success from './pages/Success.js';
import Store from './pages/Store.js';
import CartProvider from './CartContext.js';

// Localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
	return (
		<CartProvider>
			<Container>
				<NavbarComponent>

				</NavbarComponent>
				<BrowserRouter>
					<Routes>
						<Route index element={<Store />} />
						<Route path='success' element={<Success />} />
						<Route path='cancel' element={<Cancel />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</CartProvider>
	);
}

export default App;
