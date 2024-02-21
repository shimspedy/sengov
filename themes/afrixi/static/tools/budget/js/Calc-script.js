
jQuery(document).ready(function($){
    let total_income = 0, total_exp = 0, exp_parant = "Home", exp_con = "con_1";

    const numOptionCurrency = {
        digitGroupSeparator        : ',',
        decimalCharacter           : '.',
        decimalCharacterAlternative: '.',
        currencySymbol             : '',
        currencySymbolPlacement    : AutoNumeric.options.currencySymbolPlacement.prefix,
        decimalPlaces              : 2,
        minimumValue               : 0
    };
    const anElement1 = AutoNumeric.multiple('.cl-required', numOptionCurrency);

    const nftd = Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    $(".cl-income").on("input", function(){
        total_income = 0;

        $(".cl-income").each(function(ind, elm){
            let vl = removeSign($(this).val());
            let inID = $(this).attr("id");
            
            $("#"+inID+"_ds").text("$"+nftd.format(vl));
            console.log(total_income);
            
            total_income = total_income + vl;
        });
        
        $("#rs_1, #rs_2, #rs_3, #pdf_rs_1").text("$"+nftd.format(total_income));
        buildExpenseTable();

    });

    $("#in_6").on("change", function(){
        let vl = $(this).val();
        let name = $("#in_6 option:selected").text();

        exp_parant = name;
        exp_con = vl;

        $(".expense-in-sec").addClass("ds-none");
        $("."+exp_con).removeClass("ds-none");
    });

    $(document).on("input", ".ex-in", function(){
        buildExpenseTable();
    });

    let total_card = 3;

    $("#add_card_btn").on("click", function(){
        total_card++;
        let card_input = `
            <div class="col-cus-50 expense-in-sec con_11">
                <label>Credit Card ${total_card}</label>
            </div>
            <div class="col-cus-50 expense-in-sec con_11">
                <div class="form-group">
                    <input type="text" data-label="Credit Card ${total_card}" class="form-control sp-pd-left ex-in cl-required con_11_input" autocomplete="off" />
                    <span class="prepend-text">$</span>
                </div>
            </div>
        `;

        $("#more_cards").append(card_input);
    });

    $('#btn_download').on('click', function(){
        $(this).prop('disabled', true);
        $('#btn_download').text("Downloading....");
        let tbl_1 = $("#tbl_1").html();
        let tbl_2 = $("#tbl_2").html();
        $("#pdf_tbl_1").html(tbl_1);
        $("#pdf_tbl_2").html(tbl_2);

        genPDF();
        setTimeout(() => {
            $('#btn_download').prop('disabled', false);
            $('#btn_download').text("Download");
        }, 500);
    });

    function genPDF(){
        var d = new Date();
        let date_time = d.getMonth() + 1+"_"+ d.getDate() + "_"+d.getFullYear()+"_"+d.getHours()+"_"+d.getMinutes()+"_"+d.getSeconds();
        var element = document.getElementById('pdf_data');
        html2pdf(element, {
            margin:       10,
            enableLinks:  true,
            filename:     'Budget_Calculator'+date_time+".pdf",
            image:        { type: 'jpeg', quality: 1 },
            html2canvas:  { scale: 2, logging: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });
    }

    function buildExpenseTable(){
        $("#"+exp_con+"_data").html("");
        total_exp = 0;

        let vl = 0, exp_label = "", ex_row = "", total_in = $("."+exp_con+"_input").length, total_vl_in = 0;

        if(total_in > 1){
            $("."+exp_con+"_input").each(function(i, elm){
                vl = removeSign($(elm).val());
                if(vl){
                    exp_label = $(elm).data("label");

                    ex_row = ex_row + `
                        <tr>
                            <td class="brd-left">${exp_label}</td>
                            <td class="text-right exp-value">$${nftd.format(vl)}</td>
                        </tr>
                    `;
                    total_vl_in++;
                }
            });

            if(total_vl_in){
                ex_row = `
                    <tr>
                        <th class="text-left" rowspan="${total_in+1}">${exp_parant}</th>
                    </tr>
                ` + ex_row;
            }
            
        } else {
            vl = removeSign($("."+exp_con+"_input").val());
            exp_label = $("."+exp_con+"_input").data("label");

            console.log(vl);

            if(vl){
                ex_row = `
                        <tr>
                            <th class="text-left" colspan="2">${exp_label}</th>
                            <td class="text-right exp-value">$${nftd.format(vl)}</td>
                        </tr>
                    `;
                total_vl_in++;
            }
        }

        if(total_vl_in){
            $("#"+exp_con+"_data").html(ex_row);
        } else {
            $("#"+exp_con+"_data").html("");
        }

        $(".ex-in").each(function(x, element){
            let ex_vl = removeSign($(element).val());
            total_exp = total_exp + ex_vl;
        });
        $("#rs_4, #rs_6, #pdf_rs_2").text("$"+nftd.format(total_exp));
        $("#rs_5, #pdf_rs_3").text("$"+nftd.format(total_income - total_exp));

        if((total_income - total_exp) < 0){
            $("#rs_5").css({"color":"orange"});
        } else {
            $("#rs_5").css({"color":"#6F6AF7"});
        }
        
        if(!total_exp){
            $("#no_ex_data").removeClass("ds-none");
        } else {
            $("#no_ex_data").addClass("ds-none");
        }
    }

    function removeSign(vl){
        return Number(vl.replace(/\$|,/g, ""));
    }
});