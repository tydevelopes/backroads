// ***************** set date *****************
document.getElementById("date").innerHTML = new Date().getFullYear();
// ***************** nav toggle *****************
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
	links.classList.toggle("show-links");
});

// ***************** nav fixed *****************
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
	if (window.scrollY > 62) {
		// scrollY === pageYOffset
		navbar.classList.add("fixed");
	} else {
		navbar.classList.remove("fixed");
	}
});
// ***************** smooth scroll *****************
const scrollLInks = document.querySelectorAll(".scroll-link");
scrollLInks.forEach(link => {
	link.addEventListener("click", e => {
		e.preventDefault();
		links.classList.remove("show-links");
		const id = e.target.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		let position;
		if (navbar.classList.contains("fixed")) {
			position = element.offsetTop - 62;
		} else {
			position = element.offsetTop - 124;
		}
		if (window.innerWidth < 992) {
			if (navbar.classList.contains("fixed")) {
				position = element.offsetTop - 62;
			} else {
				position = element.offsetTop - 332 - 62;
			}
		}
		window.scrollTo({
			left: 0,
			top: position,
			behavior: "smooth",
		});
	});
});
