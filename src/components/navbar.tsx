import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import menu from "/icons/menu.svg";
import "../styles/navbar.scss";

const Navbar = () => {
	const [search, setSearch] = useState<String>("");
	const [showMenu, setShowMenu] = useState<Boolean>(false);
	const navigate = useNavigate();

	function handleKeyDown(e: any) {
		if (e.key === "Enter") {
			navigateFunc();
		}
	}

	const ref: any = useRef();

	function navigateFunc() {
		navigate(`/search/${encodeURIComponent(search.trim())}`);
		ref.current.blur();
	}

	return (
		<div className="nav-container">
			<nav>
				<ul>
					<li>
						<NavLink to={`/`}>Home</NavLink>
					</li>
					<li>
						<NavLink to={`movies`}>Movies</NavLink>
					</li>
					<li>
						<NavLink to={`series`}>Series</NavLink>
					</li>
					<li>
						<NavLink to={`about`}>About</NavLink>
					</li>
				</ul>
				<input
					ref={ref}
					type="search"
					name="search"
					id="search"
					placeholder="Search..."
					className="nav-search"
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button className="nav-menu-btn" onClick={() => setShowMenu(!showMenu)}>
					<img src={menu} alt="menu" />
				</button>
			</nav>
			<div className={`mobile-nav ${showMenu && "active"}`}>
				<ul>
					<li>
						<NavLink to={`/`} onClick={() => setShowMenu(false)}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to={`movies`} onClick={() => setShowMenu(false)}>
							Movies
						</NavLink>
					</li>
					<li>
						<NavLink to={`series`} onClick={() => setShowMenu(false)}>
							Series
						</NavLink>
					</li>
					<li>
						<NavLink to={`about`} onClick={() => setShowMenu(false)}>
							About
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
