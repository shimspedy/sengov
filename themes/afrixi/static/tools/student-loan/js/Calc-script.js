jQuery(function($){
    let hm_in_1, hm_in_2, hm_in_3, hm_in_4, hm_in_5, hm_in_6, hm_in_7;
    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0,
        minimumValue: 0
    };
    const numOptionPercent = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.suffix,
        decimalPlaces              : 2,
        minimumValue: 0,
        maximumValue: 100
    };

    const anElement1 = AutoNumeric.multiple('.cl-in', numOptionCurrency);
    const anElement2 = AutoNumeric.multiple('.pr-in', numOptionPercent);

    let isValid = false, isShown = false;

    $("#btn_calc").on("click", function(){
        if(getInputs()){
            calc();
        }
    });

    $("#btn_view").on("click", function(){
        if(isValid && isShown == false){
            isShown = true;
            $("#table_sec").slideDown();
            $("#btn_view").text("Hide Details");
        } else {
            isShown = false;
            $("#table_sec").slideUp();
            $("#btn_view").text("View Details");
        }
    });

    $("#btn_calc").on("click", function(){
        if(getInputs()){
            isValid = true;
            calc();
            $(".clc-elm").removeClass("ds-none");
            $(".df-elm").addClass("ds-none");
        } else {
            isValid = false;
            $(".clc-elm").addClass("ds-none");
            $(".df-elm").removeClass("ds-none");
        }
    });

    $(".cl-input").on("input", function(){
        $(this).removeClass("err-in");
    });

    function calc(){
        let rs_vl = [];
        let mp_1, mp_2, term_1, term_2;
        
        term_1 = hm_in_4;
        term_2 = hm_in_7;

        mp_1 = -pmt((hm_in_2/100)/12,hm_in_4*12,hm_in_1);
        mp_2 = -pmt((hm_in_5/100)/12,hm_in_7*12,hm_in_1);

        let interst_a1 = mp_1*term_1*12;
        let interst_a2 = mp_2*term_2*12;

        let life_sv;
        
        if((interst_a1 - interst_a2) < 0){
            life_sv = Math.abs((interst_a1 - interst_a2));
            $("#text_1").text("Added Interest");
        } else {
            life_sv = (interst_a1 - interst_a2);
            $("#text_1").text("Money Saved");
        }

        let interest_sub = (interst_a1 - interst_a2);

        let new_mp = mp_2;
        let msv = Math.abs(mp_1 - mp_2);
        let new_loan = mp_2*term_2*12;

        if(mp_2 > mp_1){
            $("#text_2").text("Increased Monthly Cost");
        } else {
            $("#text_2").text("Monthly Savings");
        }

        $("#rs_vl_1").text("$"+nft.format(life_sv));
        if(mp_1 && mp_2) $("#rs_vl_2").text("$"+nft.format(new_mp));

        $("#rs_11").text("$"+nft.format(interst_a1));
        $("#rs_12").text("$"+nft.format(interst_a2));
        $("#rs_13").text(((interest_sub) < 0 ? "-" : "")+"$"+nft.format(Math.abs(interest_sub)));

        if(interest_sub < 0){
            $("#rs_vl_1, #rs_13").css({"color":"#f11a0b"});
        } else {
            $("#rs_vl_1, #rs_13").css({"color":"#05c36c"});
        }

        $("#rs_21").text("$"+nft.format(mp_1));
        $("#rs_22").text("$"+nft.format(mp_2));
        $("#rs_23").text(((mp_1 - mp_2) < 0 ? "-" : "")+"$"+nft.format(Math.abs(mp_1 - mp_2))+"/mo");

        if((mp_1 - mp_2) < 0){
            $("#rs_23").css({"color":"#f11a0b"});
        } else {
            $("#rs_23").css({"color":"#05c36c"});
        }

        $("#rs_31").text(hm_in_2+"%");
        $("#rs_32").text(hm_in_5+"%");
        $("#rs_33").text((hm_in_2 - hm_in_5)+"%");

        if((hm_in_2 - hm_in_5) < 0){
            $("#rs_33").css({"color":"#f11a0b"});
        } else {
            $("#rs_33").css({"color":"#05c36c"});
        }

        $("#rs_41").text(hm_in_4+"yr");
        $("#rs_42").text(hm_in_7+"yr");
        $("#rs_43").text((hm_in_4 - hm_in_7)+"yr");

        if((hm_in_4 - hm_in_7) < 0){
            $("#rs_43").css({"color":"#f11a0b"});
        } else {
            $("#rs_43").css({"color":"#05c36c"});
        }
    }

    function getInputs(){
        hm_in_1 =  removeSign($("#hm_in_1").val());
        hm_in_2 =  removeSign($("#hm_in_2").val());
        hm_in_4 =  removeSign($("#hm_in_4").val());
        hm_in_5 =  removeSign($("#hm_in_5").val());
        hm_in_7 =  removeSign($("#hm_in_7").val());

        let total = $(".cl-input").length;
        let x = 0;

        $(".cl-input").each(function() {
            if($(this).val()) {
                $(this).removeClass("err-in");
                x++;
            } else {
                $(this).addClass("err-in");
            }
        });

        return total == x;
    }

    function removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }

    function pmt(rate, nperiod, pv, fv, type) {
        if (!fv) fv = 0;
        if (!type) type = 0;

        if (rate == 0) return -(pv + fv)/nperiod;

        var pvif = Math.pow(1 + rate, nperiod);
        var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

        if (type == 1) {
            pmt /= (1 + rate);
        };

        return pmt;
    }

    function nper(rate, payment, present, future, type) {
        var type = (typeof type === 'undefined') ? 0 : type;

        var future = (typeof future === 'undefined') ? 0 : future;

        rate = eval(rate);

        var num = payment * (1 + rate * type) - future * rate;
        var den = (present * rate + payment * (1 + rate * type));
        return Math.log(num / den) / Math.log(1 + rate);
    }
});