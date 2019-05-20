var x,
	i,
	j,
	selectElement,
	firstDiv,
	secondDiv,
	thirdDiv;

x = document.getElementsByClassName("custom--select");

for (i = 0; i < x.length; i++) {

	selectElement = x[i].getElementsByTagName("select")[0];

	firstDiv = document.createElement("DIV");
	firstDiv.setAttribute("class", "select--selected");
	firstDiv.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
	x[i].appendChild(firstDiv);

	secondDiv = document.createElement("DIV");
	secondDiv.setAttribute("class", "select--items select--hide");

	for (j = 0; j < selectElement.length; j++) {

		thirdDiv = document.createElement("DIV");
		thirdDiv.innerHTML = selectElement.options[j].innerHTML;

		thirdDiv.addEventListener("click", function (e) {

			var y,
				i,
				k,
				parent,
				previous;

			parent = this.parentNode.parentNode.getElementsByTagName("select")[0];
			previous = this.parentNode.previousSibling;

			for (i = 0; i < parent.length; i++) {

				if (parent.options[i].innerHTML == this.innerHTML) {

					parent.selectedIndex = i;

					previous.innerHTML = this.innerHTML;

					y = this.parentNode.getElementsByClassName("select--items--same");

					for (k = 0; k < y.length; k++) {

						y[k].removeAttribute("class");

					}

					this.setAttribute("class", "select--items--same");
					break;

				}

			}

			previous.click();

		});

		secondDiv.appendChild(thirdDiv);

	}

	x[i].appendChild(secondDiv);

	firstDiv.addEventListener("click", function (e) {

		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select--hide");
		this.classList.toggle("select--arrow--active");

		/* Log informations */
		var log = document.getElementById("eating").options[document.getElementById("eating").selectedIndex];
	  console.log("Index: " + log.index + " is " + log.text);

  });

}

function closeAllSelect(element) {

	var x,
		y,
		i,
		array = [];

	x = document.getElementsByClassName("select--items");
	y = document.getElementsByClassName("select--selected");

	for (i = 0; i < y.length; i++) {

		if (element == y[i]) {

			array.push(i);

		} else {

			y[i].classList.remove("select--arrow--active");

		}

	}

	for (i = 0; i < x.length; i++) {

		if (array.indexOf(i)) {

			x[i].classList.add("select--hide");

		}

	}

}

document.addEventListener("click", closeAllSelect);
