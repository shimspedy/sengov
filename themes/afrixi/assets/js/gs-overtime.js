function xml_to_json_tables(url, tableid, tablediv) {
    // API URL
    const apiUrl = url;
    document.getElementById("loader").style.display = "flex";
    // Fetch the XML data from the API
    fetch(apiUrl)
      .then((response) => response.text())
      .then((xmlString) => {
        document.getElementById("loader").style.display = "none";
        // Parse the XML data using DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const items = xmlDoc.getElementsByTagName("Grade"); // Adjust to your XML structure
  
        let des = xmlDoc
          .querySelector("Description")
          .textContent.replace(/\n/g, ""); // Adjust to your XML structure
        const notes = xmlDoc
          .querySelector("Notes")
          .textContent.replace(/\n/g, ""); // Adjust to your XML structure
        if (tableid == "table_rus") {
          des =
            "Rest of United States (Consisting of those portions of the United States and its territories and possessions as listed in 5 CFR 591.205 not located within another locality pay area.)";
        }
        let div = document.createElement("div");
        div.style.marginBottom = "30px";
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let table = document.createElement("table");
        table.id = tableid;
        table.classList.add('centered'); 
  
        let thead = document.createElement("thead");
        let class_annual = "annual-" + tableid;
        let hourly_annual = "hourly-" + tableid;
        let overtme_annual = "overtime-" + tableid;
        let tabsx = `
    <div class="tabsx">
    <label class="tabx active" id="${overtme_annual}">Overtime</label>
    <label class="tabx" id="${hourly_annual}">Hourly</label>
    <label class="tabx" id="${class_annual}">Annual</label>
      </div>`;
        let th_count =
          items[0].getElementsByTagName("Steps")[0].childElementCount;
        let th_html = `<tr><th>${file_type} Grade</th>`;
        for (let i = 1; i <= th_count; i++) {
          th_html += `<th>Step ${i}</th>`;
        }
        th_html += "</tr>";
  
        thead.innerHTML = th_html;
        table.appendChild(thead);
        tbody(items, "Overtime", table, overtme_annual);
        tbody(items, "Hourly", table, hourly_annual);
        tbody(items, "Annual", table, class_annual);
        h2.innerHTML = des + tabsx;
        h2.classList.add('bio');
        p.innerHTML = notes;
        div.appendChild(h2);
        div.appendChild(table);
        div.appendChild(p);
        document.getElementById(tablediv).appendChild(div);
      })
      .catch((error) => {
        console.error("Error fetching or parsing data:", error);
      });
  }
  function tbody(items, type, table, class_name) {
    let tbody = document.createElement("tbody");
    tbody.classList.add(class_name);
    let tr1 = "";
    for (let i = 0; i <= items.length - 1; i++) {
      let step = items[i].getElementsByTagName("Step");
      tr1 += `<tr><th>${file_type}-${i + 1}</th>`;
      for (let j = 0; j <= step.length - 1; j++) {
        let stepTxt = "$" + step[j].querySelector(type).innerHTML;
        tr1 += `<td>${stepTxt}</td>`;
      }
      tr1 += "</tr>";
    }
    tbody.innerHTML = tr1;
    table.appendChild(tbody);
  }
  function default_table(tables) {
    let i = 1;
    tables.forEach((item) => {
      let xml = item.xml + leo_url;
      let url = `https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/salary-tables/xml/2024/${xml}.xml`;
      let tableid = "table" + i;
      xml_to_json_tables(url, tableid, "table");
      i++;
    });
  }
  $(document).ready(function () {
    $("path, circle").click(function (e) {
      $("path, circle").css("fill", "rgb(211, 211, 211)");
      $(this).css("fill", "green");
      let id = $(this).attr("id");
      /* let table = countryCode;
      console.log(table[id]); */
      document.getElementById("table").innerHTML = "";
      document.getElementById("table_rus").innerHTML = "";
      if (table[id] != undefined) {
        $("#info-box").css("display", "block");
        $("#info-box").html(id);
        default_table(table[id]);
      }
      if (id != "AK" && id != "HI") {
        xml_to_json_tables(
          `https://www.opm.gov/policy-data-oversight/pay-leave/salaries-wages/salary-tables/xml/2024/RUS${leo_url}.xml`,
          "table_rus",
          "table_rus"
        );
      }
    });
  
    $("path, circle").mouseover(function (e) {
      let id = $(this).attr("id");
      $("#info-box").css("display", "block");
      $("#info-box").html(id);
    });
  
    $("path, circle").mouseleave(function (e) {
      $("#info-box").css("display", "none");
    });
  
    $(document).on("click", ".tabx", function () {
      let class_name = $(this).attr("id");
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
      $("." + class_name)
        .siblings("tbody")
        .css("display", "none");
      $("." + class_name).css("display", "table-row-group");
    });
  
    $(document)
      .mousemove(function (e) {
        $("#info-box").css("top", e.pageY - $("#info-box").height() - 30);
        $("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
      })
      .mouseover();
  
    var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (ios) {
      $("a").on("click touchend", function () {
        var link = $(this).attr("href");
        window.open(link, "_blank");
        return false;
      });
    }
  });
  