jQuery(document).ready(function($){
    let dn_py_sts = 1, isInclude = false;
    let myChart;

    const nft = Intl.NumberFormat("en-US");
    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $(".info-icon, .info-box").on("click", function(){
        $(".info-icon").removeClass("active");
        $(this).addClass("active");
        $(".info-box").hide();
        let icon_box = $(this).closest("label").find(".info-box");
        icon_box.show();
    });
    $('html').click(function(e) {                    
        if(!$(e.target).hasClass('info-icon') && !$(e.target).hasClass('info-box') )
        {
            $(".info-box").hide();  
            $(".info-icon").removeClass("active");            
        }
    });

    $(".cl-required").on("click", function(){
        $(".cl-required").removeClass("active");
        $(this).addClass("active");
    });
    $(".check-item").on("click", function(){
        $(".check-item").removeClass("active");
        $(this).addClass("active");
        dn_py_sts = Number($(this).data("value"));
        if(dn_py_sts == 1){
            $(".con_1, #err_con_1").show();
            $(".con_2").hide();
        } else {
            $(".con_1, #err_con_1").hide();
            $(".con_2").show();
        }
        $("#in_2_err, #in_3_err").hide();
    });
    $(".switch-sec").on("click", function(){
        if(isInclude == false){
            isInclude = true;
            $(this).addClass("active");
            $(".con_3").show();
        } else {
            isInclude = false;
            $(this).removeClass("active");
            $(".con_3").hide();
            $("#in_6_err, #in_7_err").hide();
        }
        $("#in_6, #in_7, #in_8").val("0");
    });

    $("#in_1, #in_2, #in_3, #in_4, #in_5, #in_6, #in_7").on("input", function(e){
        let vl = removeSign($(this).val());
        let inID = $(this).attr("id");
        if(vl > 0) {
            $("#"+inID+"_err").hide();
        } else {
            $("#"+inID+"_err").show();
        }
    });
    $("#in_1").on("change", function(e){
        let vl = removeSign($(this).val());
        $(this).val(nft.format(vl));
    });
    $("#in_2").on("change", function(){
        let vl = removeSign($(this).val());
        $(this).val(nft.format(vl));
    });
    $("#in_5").on("change", function(){
        let vl = Number($(this).val());
        if(vl > 0 && vl <= 100) {
            $("#in_5_err").hide();
        } else {
            $("#in_5_err").show();
        }
    });
    $("#in_6").on("change", function(){
        let vl = removeSign($(this).val());
        $(this).val(nft.format(vl));
    });
    $("#in_7").on("change", function(){
        let vl = removeSign($(this).val());
        $(this).val(nft.format(vl));
    });
    $("#in_8").on("change", function(){
        let vl = removeSign($(this).val());
        $(this).val(nft.format(vl));
    });

    calc(); 

    $("#calc_btn").on("click", function(){
        calc();

    });

    function calc(){
        in_1 = removeSign($("#in_1").val());
        in_2 = removeSign($("#in_2").val());
        in_3 = removeSign($("#in_3").val());
        in_4 = removeSign($("#in_4").val());
        in_5 = removeSign($("#in_5").val());
        in_6 = removeSign($("#in_6").val());
        in_7 = removeSign($("#in_7").val());
        in_8 = removeSign($("#in_8").val());

        if(in_1 && in_5){
            let downpayment = 0;

            if(dn_py_sts == 1){
                downpayment = in_2;
            } else if(dn_py_sts == 2) {
                downpayment = in_1 * (in_3/100);
            }

            rs_1 = -pmt((in_5/100)/12, in_4*12, (in_1-downpayment));
            rs_2 = in_6/12;
            rs_3 = in_7/12;
            rs_33 = in_8;
            rs_4 = rs_1 + rs_2 + rs_3 + rs_33;
            
            $("#rs_1").text("$ "+nftd.format(rs_1));
            $("#rs_2").text("$ "+nftd.format(rs_2));
            $("#rs_3").text("$ "+nftd.format(rs_3));
            $("#rs_33").text("$ "+nftd.format(rs_33));
            $("#rs_4").text("$ "+nftd.format(rs_4));

            if(myChart){
                myChart.destroy();
            }

            const labels = [
                'Principal & Interest',
                'Taxes',
                'Insurance'
            ];

            var xValues = ["Principal & Interest", "Taxes", "Insurance", "Maintenance"];
            var yValues = [rs_1, rs_2, rs_3, rs_33];
            var barColors = [
                "#029D4D",
                "#1597e5",
                "#69dadb",
                "#222831"
            ];

            myChart = new Chart("myChart", {
                type: "doughnut",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = ' '+context.label || '';

                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed);
                                    }
                                    return label;
                                }
                            }
                        },
                    },
                    title: {
                        display: false
                    },
                    cutout: 85
                }
            });
            
            $('html, body').animate({
                scrollTop: $("#rs_sec").offset().top - 180
            }, 1000);
        }
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


    function removeSign(vl){
        return Number(vl.replace(/\$|,|[^\d.-]/g, ''));
}
});