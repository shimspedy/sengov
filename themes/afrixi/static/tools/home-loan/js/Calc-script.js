
jQuery(($) => {
    let ins = {};
    let data_arr = [];
    let isSubmitted = false;

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 0
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
    
    const elm1 = new AutoNumeric('#down_payment', numOptionCurrency);
    const elm2 = new AutoNumeric('#down_payment_percentage', numOptionPercent);

    const anElement1 = AutoNumeric.multiple('.in-num', numOptionCurrency);
    const anElement2 = AutoNumeric.multiple('.in-pr', numOptionPercent);

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    buildOptions(30);

    $("#home_price").on("input", function(){
        home_price = removeSign($("#home_price").val());
        down_payment = removeSign($("#down_payment").val());
        down_payment_percentage = removeSign($("#down_payment_percentage").val());

        if(home_price){
            if(down_payment_percentage){
                let amount = home_price * (down_payment_percentage/100);
                elm1.set(amount);
            }
        } else {
            elm1.set("");
            elm2.set("");
        }
    });

    $("#down_payment").on("input", function(){
        home_price = removeSign($("#home_price").val());
        down_payment = removeSign($("#down_payment").val());
        down_payment_percentage = removeSign($("#down_payment_percentage").val());

        if(home_price){
            let prcnt = (100/home_price)*down_payment;
            elm2.set(prcnt);
        } else {

        }
    });

    $("#down_payment_percentage").on("input", function(){
        home_price = removeSign($("#home_price").val());
        down_payment = removeSign($("#down_payment").val());
        down_payment_percentage = removeSign($("#down_payment_percentage").val());

        if(home_price){
            let amount = home_price*(down_payment_percentage/100);
            elm1.set(amount);
        }
    });

    $("#show_more_btn").on("click", function(){
        $("#show_more_sec").slideToggle();
        $(this).toggleClass("is-active")
    });

    $("#amrt_table_btn").on("click", function(){
        $("#amrt_table_sec").slideToggle();
    });
    
    $("#loan_term").on("input", function(){
        let vl = Number($(this).val());
        buildOptions(vl);
    });

    $(document).on("input", "#choose_year", function(){
        let vl = Number($(this).val());

        calcFunc(true);
        updateShortTable(vl);
    });

    $(".cl-input").on("input", function(){
        $(this).removeClass("err-input");
    });

    $("#calc_btn").on("click", function(){
        isSubmitted = true;
        calcFunc();
    });

    calcFunc();

    function calcFunc(sp_yr = false){
        let rq_ins = $(".cl-input[required]").length;
        let x = 0;

        $(".cl-input").each(function(i, elm){
            let vl = removeSign($(elm).val());
            let inID = $(elm).attr("id");

            ins[inID] = vl;

            if(isSubmitted){
                if($(elm).prop("required")){
                    if(vl){
                        $(elm).removeClass("err-input");
                        x++;
                    } else {
                        $(elm).addClass("err-input");
                    }
                }
            } else {
                if($(elm).prop("required")) if(vl) x++;
            }
        });

        if(x == rq_ins){
            ins["interest_rate"] = ins["interest_rate"]/100;
        
            let inst_rate = ins["interest_rate"];
            let loan_amount = ins["home_price"] - ins["down_payment"];
            let monthly_payment = - 1 * PMT(inst_rate/12, ins["loan_term"] * 12, loan_amount);
            let pro_tax = ins["annual_property_taxes"]/12;
            let home_ins = ins["annual_home_insurance"]/12;
            
            let pmi = 0;

            if(ins["down_payment_percentage"] < 20){
                pmi =  (0.0011 * loan_amount) / 12;
            }

            let total_mn_payment = monthly_payment + pro_tax + home_ins + pmi;

            let remaing_blnc = loan_amount;
            let i, rows = "";

            for(i=0; i<ins["loan_term"]; i++){
                let yr = i+1;
                let bgn_blnc = remaing_blnc;
                let an_payment = monthly_payment * 12;
                let arr = yearlyInterest(remaing_blnc, monthly_payment, inst_rate);
                let an_interest = arr[0];
                let princial_amount = an_payment - an_interest;
                remaing_blnc = arr[1] > 0 ? arr[1] : 0;

                data_arr.push([bgn_blnc, princial_amount, an_interest, an_payment, remaing_blnc]);

                rows = rows + `
                    <tr>
                        <td class="text-center">${yr}</td>
                        <td class="text-center">$${nft.format(bgn_blnc)}</td>
                        <td class="text-center">$${nft.format(princial_amount)}</td>
                        <td class="text-center">$${nft.format(an_interest)}</td>
                        <td class="text-center">$${nft.format(an_payment)}</td>
                        <td class="text-center">$${nft.format(remaing_blnc)}</td>
                    </tr>
                `;
            }

            if(!sp_yr){
                $("#choose_year").val(1);
                updateShortTable(1);
            }
            
            $("#amrt_table_data").html(rows);

            $("#fixed_load").text(ins["loan_term"]);
            $("#principle_interest").text("$"+nft.format(Math.floor(monthly_payment)));
            $("#property_taxes").text("$"+nft.format(Math.floor(pro_tax)));
            $("#home_insurance").text("$"+nft.format(Math.floor(home_ins)));
            $("#pmi").text(pmi ? "$"+nft.format(Math.floor(pmi)) : "N/A");
            $("#total_payment").text("$"+nft.format(Math.floor(total_mn_payment)));
            $("#estimated_monthly_payment").text("$"+nft.format(Math.floor(total_mn_payment)));
        } else {
            updateShortTable(0);
            $("#amrt_table_data").html("");
            $("#fixed_load").text(0);
            $("#principle_interest").text("$"+nft.format(0));
            $("#property_taxes").text("$"+nft.format(0));
            $("#home_insurance").text("$"+nft.format(0));
            $("#pmi").text("N/A");
            $("#total_payment").text("$"+nft.format(0));
            $("#estimated_monthly_payment").text("$"+nft.format(0));
        }

        
    } 

    function buildOptions(vl){
        let i;

        let options = "";
        for(i = 0; i < vl; i++){
            options = options + `<option value="${i+1}">${i+1} ${i > 0 ? "years" : "year"}</option>`;
        }

        $("#choose_year").html(options);
    }

    function updateShortTable(vl){
        if(vl){
            let  arr = data_arr[vl-1];

            $("#remaining_balance").text("$"+nft.format(arr[4]));
            $("#principle_paid").text("$"+nft.format(arr[1]));
            $("#interest_paid").text("$"+nft.format(arr[2]));
        } else {
            $("#remaining_balance, #principle_paid, #interest_paid").text("$"+nft.format(0));
        }
    }

    function yearlyInterest(op_blnc, mn_py, int_rate){
        let i = 0;
        let total_interest = 0;
        let init_blnce = op_blnc;

        for(i = 0; i < 12; i++){
            let interest = init_blnce*int_rate/12;
            init_blnce = init_blnce - (mn_py - interest);
            total_interest = total_interest + interest;
        }

        return [total_interest, init_blnce];
    }
    
    function PMT(rate, nperiod, pv, fv, type) {
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
    
    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ''));
    }
});