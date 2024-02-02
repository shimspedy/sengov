jQuery(function($){
    let hm_in_1, hm_in_2, hm_in_3, hm_in_4;
    let min_pm, interest;;
    let int_rate = 0.083333;

    const nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    const nftdd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    let con_in = "pm";

    getInputs();
    min_payment();
    calc();

    $(".con_in").on("change", function(){
        con_in = $(this).val();
        getInputs();
        min_payment();
    });

    $("#hm_in_1").on("keyup change", function(){
        let vl = $(this).val();
        vl = Number(vl.replace(/,/g,''));
        $(this).val(nft.format(vl));
        
        getInputs();
        min_payment();
    });
    $("#hm_in_2, #hm_in_3").on("keyup change", function(){
        getInputs();
        min_payment();
    });
    $("#hm_in_4").on("keyup change", function(){
        let vl = $(this).val();
        vl = Number(vl.replace(/,/g,''));
        $(this).val(nft.format(vl));

        getInputs();
        min_payment();
    });

    $("#calcBtn").on("click", function(){
        getInputs();
        min_payment();
        calc();
    });

    function calc(){
        if(con_in == "pm"){
            withPayment();
        } else {
            withPayment();
            withFixedPayment();
        }
    }

    function withPayment(){
        let arrBlnc = [], i = 1, mn = 0, interest_total = 0;
        let blnc = hm_in_1;
        arrBlnc[0] = blnc;

        while(blnc > 0){
            mn = i;
            let pm = ((interest/100)*arrBlnc[i-1]<15) ? 15 : ((interest/100)*arrBlnc[i-1]);
            let int = arrBlnc[i-1]*((hm_in_2/100)/12);
            let pr = pm-int;
            blnc =  arrBlnc[i-1]-pr;
            arrBlnc[i] = blnc;

            interest_total = interest_total + int;
            i++;
        }
        $("#t_mn_pm").text(nft.format(mn));
        $("#rs_vl_1").text("$"+nftdd.format(interest_total));
    }

    function withFixedPayment(){
        let arrBlnc = [], i = 1, mn = 0, interest_total = 0;
        let blnc = hm_in_1;
        arrBlnc[0] = blnc;

        while(blnc > 0){
            mn = i;
            let pm = hm_in_4;
            let int = arrBlnc[i-1]*((hm_in_2/100)/12);
            let pr = pm-int;
            blnc =  arrBlnc[i-1]-pr;
            arrBlnc[i] = blnc;

            interest_total = interest_total + int;
            i++;
        }
        $("#t_mn_fx").text(nft.format(mn));
        $("#rs_vl_2").text("$"+nftdd.format(interest_total));
    }

    function min_payment(){
        if(hm_in_3 == 10){
            interest = hm_in_1 * ((hm_in_2 * int_rate)/100) + hm_in_1*(1/100);
        console.log(interest);
            interest = (100/hm_in_1)*interest;
        } else {
            interest = hm_in_3;
        }

        min_pm = hm_in_1 * (interest/100);

        let vl = removeSign($("#hm_in_4").val());
            
        if(con_in == "pm"){
            $("#con_input, #fx_rs").hide();
            $("#hm_in_4").val("");
            $("#calcBtn").prop("disabled", false);
        } else {
            $("#con_input, #fx_rs").show();
            if(vl < min_pm){
                $("#fx_note").text(`Please enter a value between $${nftd.format(min_pm)} and $${nft.format(removeSign($("#hm_in_1").val()))}`);
                $("#fx_note").css({"display":"block"});
                $("#calcBtn").prop("disabled", true);
            } else {
                $("#fx_note").hide();
                $("#calcBtn").prop("disabled", false);
            }
        }
        
        $("#min_pm").text("$"+nftd.format(min_pm));
    }

    function getInputs(){
        hm_in_1 =  removeSign($("#hm_in_1").val());
        hm_in_2 =  removeSign($("#hm_in_2").val());
        hm_in_3 =  removeSign($("#hm_in_3").val());
        hm_in_4 =  removeSign($("#hm_in_4").val());
    }

    function removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }
});