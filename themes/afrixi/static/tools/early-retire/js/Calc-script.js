jQuery(document).ready(function($){
    const mc2_nft = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:0
    });
    const mc2_nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits:0,
        maximumFractionDigits:2
    });

    $("#mc2_in_1").on("input", function(){
        let vl = mc2_removeSign($(this).val());

        $(this).val(mc2_nft.format(vl));
        
        mc2_calc();
    });

    $("#mc2_in_2").on("input", function(){
        let vl = mc2_removeSign($(this).val());

        if(vl < 0){
            $(this).val(0);
        } else if(vl > 100){
            $(this).val(100);
        }
        
        mc2_calc();
    });

    mc2_calc();

    function mc2_calc(){
        mc2_getInputs();
        if(mc2_in_1 && mc2_in_2){
            mc2_in_1 = mc2_removeSign(mc2_in_1);
            mc2_in_2 = mc2_removeSign(mc2_in_2);

            mc2_rs_1 = mc2_in_1*(100/mc2_in_2);

            $("#mc2_rs_1").text("$"+mc2_nftd.format(mc2_rs_1));

        } else {
            $("#mc2_rs_1").text("-");
        }
    }

    function mc2_getInputs(){
        mc2_in_1 = $("#mc2_in_1").val();
        mc2_in_2 = $("#mc2_in_2").val();
    }

    function mc2_removeSign(vl){
        return Number(vl.replace(/,/g,''));
    }
});