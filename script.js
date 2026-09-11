new Chart($("#pieChart"), {

    type: "doughnut",

    data: {
        labels: ["Chrome", "Firefox", "Edge", "Other"],






        datasets: [{
            data: [40, 25, 20, 15]
        }]
    }

});

new Chart($("#barChart"), {

    type: "bar",

    data: {

        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

        

        datasets: [{
            label: "Visitors",
            data: [40, 55, 35, 60, 45, 70]
        }]

    }

});

$(document).ready(function () {


    $("#logout").click(function (e) {

        e.preventDefault();

        alert("Logout clicked!");

    });


    $("#search").keyup(function () {

        let text = $(this).val().toLowerCase();

        $("#users tr").filter(function () {

            $(this).toggle(
                $(this).text().toLowerCase().includes(text)
            );

        });

    });

});