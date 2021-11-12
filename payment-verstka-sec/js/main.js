let rangers = document.getElementsByClassName("payment-period__range-inp");
let periods = document.getElementsByClassName("payment-period__month");
let paymentWays = document.getElementsByClassName("payment__stage-block");
let paymentWaysContents = document.getElementsByClassName("payment__content-block");
let accordionHeaders = document.getElementsByClassName("payment-way-accordion__header");

let rangerVal = 0;

/* Аккордион на мобилке */
for (let i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].onclick = function () {
        if (accordionHeaders[i].closest(".payment-way-accordion").classList.contains("opened")) {
            accordionHeaders[i].closest(".payment-way-accordion").classList.remove("opened");
            console.log("if1");
        } else {
            for (let i = 0; i < accordionHeaders.length; i++) {
                accordionHeaders[i].closest(".payment-way-accordion").classList.remove("opened");
            }
            accordionHeaders[i].closest(".payment-way-accordion").classList.add("opened");
            console.log("else");
        }

    }
}

/*Выбор способа оплаты */
for (let i = 0; i < paymentWays.length; i++) {
    paymentWays[i].onclick = function () {
        for (let j = 0; j < paymentWays.length; j++) {
            paymentWaysContents[j].classList.remove('active');
            paymentWays[j].classList.remove('active');
        }
        paymentWaysContents[i].classList.add('active');
        paymentWays[i].classList.add('active');
    }
}
let addedWaysLinks = document.getElementsByClassName("payment__another-ways-link");
for (let i = 0; i < addedWaysLinks.length; i++) {
    addedWaysLinks[i].onclick = function () {
        let addedWays = document.getElementsByClassName("payment__another-way");
        this.closest('.payment__another-ways-add').style.display = 'none';
        for (let i = 0; i < addedWays.length; i++) {
            addedWays[i].style.display = 'block';
        }
    }

}

/* Ползунок с периодами оплаты НАЧАЛО */
/* Работает только для 3-х периодов оплаты!!! */
function setActivePeriodData(wrapper, index) {
    let periods = wrapper.getElementsByClassName("payment-period__month");
    let monthVal = periods[index].querySelector('.payment-period__month-txt').innerHTML
    let priceVal = periods[index].querySelector('.payment-period__month-txt').dataset.price;
   
    
    wrapper.querySelector(".payment__period-price").innerHTML = priceVal;
    wrapper.querySelector(".payment__month-amount").innerHTML = monthVal;
}

function makeActivePeriod(wrapper, index) {
    let periods = wrapper.getElementsByClassName("payment-period__month");
    for (let i = 0; i < periods.length; i++) {
        periods[i].classList.remove('active');

    }
    periods[index].classList.add('active');
    setActivePeriodData(wrapper, index);

}

for (let i = 0; i < periods.length; i++) {

    periods[i].onclick = function () {
        let index = i%3; //3 потому что 3 периода
        rangerVal = index * 50;
        
        let wrapper = this.closest(".payment__content-wrapper");
        wrapper.querySelector(".payment-period__range-inp").value = rangerVal;
        makeActivePeriod(wrapper, index);
    }
}

for (let i = 0; i < rangers.length; i++) {
    rangers[i].oninput = function () {
        let wrapper = this.closest(".payment__content-wrapper");
        rangerVal = this.value;
        if (rangerVal >= 0 && rangerVal < 25) {
            rangerVal = 0;
            makeActivePeriod(wrapper, 0);
        } else if ((rangerVal >= 25 && rangerVal < 50)
            || (rangerVal >= 50 && rangerVal < 75)) {
            rangerVal = 50;
            makeActivePeriod(wrapper, 1);
        } else if (rangerVal >= 75 && rangerVal <= 100) {
            rangerVal = 100;
            makeActivePeriod(wrapper, 2);
        }

    }
    rangers[i].onchange = function () {
        this.value = rangerVal;
    }
}



/* Ползунок с периодами оплаты КОНЕЦ */