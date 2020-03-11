const sber = document.querySelector('#sber'),
    vtb = document.querySelector('#vtb'),
    acb = document.querySelector('#acb'),
    mcb = document.querySelector('#mcb'),
    domRf = document.querySelector('#domRf'),
    vozBank = document.querySelector('#vozBank'),
    rossel = document.querySelector('#rossel'),
    psb = document.querySelector('#psb'),
    tcb = document.querySelector('#tcb');

let $range__flatCost = $(".js-range-slider__flat-cost"),
    $input = $(".js-input__flat-cost"),

    $range__firstPay = $(".js-range-slider-first-pay"),
    $input__firstPay = $(".js-input-first-pay"),

    $range__period = $(".js-range-slider-period"),
    $input__period = $(".js-input-period"),

    instance,

    min = 0,
    max = 1000;

$range__flatCost.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 2700000,
    max: 6200000,
    from: 3800000,

    grid: false,
    hide_min_max: true,
    hide_from_to: true,

    onStart: function(data) {
        $input.prop("value", data.from);
    },
    onChange: function(data) {
        $input.prop("value", data.from);
        sber.textContent = Math.floor(data.from /100);
        vtb.textContent = Math.floor(data.from /70);
        acb.textContent = Math.floor(data.from /50);
        mcb.textContent = Math.floor(data.from /60);
        domRf.textContent = Math.floor(data.from /80);
        vozBank.textContent = Math.floor(data.from /90);
        rossel.textContent = Math.floor(data.from /10);
        psb.textContent = Math.floor(data.from /20);
        tcb.textContent = Math.floor(data.from /30);
    }
});

instance = $range__flatCost.data("ionRangeSlider");

$input.on("change keyup", function() {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
});


$range__firstPay.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 380000,
    max: 3800000,
    from: 570000,

    grid: false,
    hide_min_max: true,
    hide_from_to: true,

    onStart: function(data) {
        $input__firstPay.prop("value", data.from);
    },
    onChange: function(data) {
        $input__firstPay.prop("value", data.from);
        sber.textContent = Math.floor(data.from /100);
        vtb.textContent = Math.floor(data.from /70);
        acb.textContent = Math.floor(data.from /50);
        mcb.textContent = Math.floor(data.from /60);
        domRf.textContent = Math.floor(data.from /80);
        vozBank.textContent = Math.floor(data.from /90);
        rossel.textContent = Math.floor(data.from /10);
        psb.textContent = Math.floor(data.from /20);
        tcb.textContent = Math.floor(data.from /30);

    }
});

instance = $range__firstPay.data("ionRangeSlider");

$input__firstPay.on("change keyup", function() {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
});


$range__period.ionRangeSlider({
    skin: "round",
    type: "single",
    min: 1,
    max: 30,
    from: 7,

    grid: false,
    hide_min_max: true,
    hide_from_to: true,

    onStart: function(data) {
        $input__period.prop("value", data.from);
    },
    onChange: function(data) {
        $input__period.prop("value", data.from);
    }
});

instance = $range__period.data("ionRangeSlider");

$input__period.on("change keyup", function() {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        from: val
    });
});
