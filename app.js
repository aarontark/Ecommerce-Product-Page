const selectionMenuInit = () => {
    const selectionMenu = document.querySelector(".selection-background");
    const selectionContainer = document.querySelector(".selection-container");
    const hamburgerMenu = document.querySelector(".hamburger");
    const menuCloseIcon = document.querySelector(".close");

    hamburgerMenu.addEventListener("click", () => {
      selectionMenu.classList.add("selection-background-open");
      selectionContainer.classList.add("selection-container-open");
    });

    menuCloseIcon.addEventListener("click", () => {
      selectionMenu.classList.remove("selection-background-open");
      selectionContainer.classList.remove("selection-container-open");
    });
}

const cartMenuInit = () => {
	const cart = document.querySelector('.cart');
	const cartIcon = document.querySelector('.cart-icon');

	cartIcon.addEventListener('click', () => {
		cart.classList.toggle('cart-open');
	})
}

const itemIncrementInit = () => {
	const plus = document.querySelector('.plus');
	const minus = document.querySelector('.minus');
	const amountElem = document.querySelector('.amount');

	plus.addEventListener('click', () => {
		let amount = Number(amountElem.innerHTML);		
		amount++;
		amountElem.innerHTML = amount;
	})

	minus.addEventListener("click", () => {
    	let amount = Number(amountElem.innerHTML);		
		if (amount == 0) {
			return;
		}
    	amount--;
    	amountElem.innerHTML = amount;
  	});
}

const checkoutBtnInit = () => {
	const amountElem = document.querySelector('.amount');
	const checkoutBtn = document.querySelector('.cart-btn');
	const cartFilled = document.querySelector('.cart-content-filled');
	const cartEmpty = document.querySelector('.cart-content-empty');
	const cartAmount = document.querySelector(".product-amount");
    const itemTotal = document.querySelector(".total");

	checkoutBtn.addEventListener('click', () => {
		const amount = Number(amountElem.innerHTML);
		if (amount == 0) {
			return;
		} else if (cartEmpty.classList.contains('active')) {
			cartEmpty.classList.remove('active');
			cartEmpty.classList.add('inactive');
			cartFilled.classList.remove("inactive");
			cartFilled.classList.add("active");
		}
		cartNum = (parseInt(itemTotal.innerHTML.slice(1)) / 125);
		cartAmount.innerHTML = `$125.00 x ${amount + cartNum}`;
		itemTotal.innerHTML = `$${(cartNum + amount) * 125}.00`;
	})
}


selectionMenuInit();
cartMenuInit();
itemIncrementInit();
checkoutBtnInit();