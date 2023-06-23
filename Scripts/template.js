let footer = document.getElementsByTagName("footer")[0];
let nav = document.getElementsByTagName("nav")[0];
fetch("2023_footer.html")
	.then((response) => response.text())
	.then((data) => {
		footer.innerHTML = data;
		const safeEmails = document.querySelectorAll("a[data-email]");
		const useSafeEmail = (emails) => {
			emails.forEach((thisEmail) => {
				let thisEmailAddress = thisEmail.dataset.email;
				thisEmailAddress = thisEmailAddress
					.replace("[at]", "@")
					.replace(/\[dot]/g, ".");
				thisEmail.href = "mailto:" + thisEmailAddress;
				thisEmail.innerHTML = thisEmailAddress;
			});
		};
		useSafeEmail(safeEmails);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
fetch("2023_nav.html")
	.then((response) => response.text())
	.then((data) => {
		nav.innerHTML = data;
		const wing = document.querySelector("#navWing");
		document.querySelectorAll("#nav-icon3").forEach(function (icon) {
			icon.addEventListener("click", function () {
				this.classList.toggle("open");
				wing.classList.toggle("open");
			});
			icon.addEventListener("mouseover", function () {
				wing.classList.add("open");
			});
			wing.addEventListener("mouseleave", function () {
				wing.classList.remove("open");
			});
		});
	})
	.catch((error) => {
		console.error("Error:", error);
	});
