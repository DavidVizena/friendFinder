$(document).ready(function () {

    $(".submitButton").on("click", function (event) {
        event.preventDefault();

        function validateForm() {
            var isValid = true;
            $(".form-control").each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });

            $(".chosen-select").each(function () {

                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        if (validateForm()) {

            var userData = {
                name: $("#nameInput").val(),
                photo: $("#photoInput").val(),
                scores: [
                    $("#q1").val(),
                    $("#q2").val(),
                    $("#q3").val(),
                    $("#q4").val(),
                    $("#q5").val(),
                    $("#q6").val(),
                    $("#q7").val(),
                    $("#q8").val(),
                    $("#q9").val(),
                    $("#q10").val()
                ]
            };

            console.log(userData);

            $.post("/api/friends", userData, function (data) {

                $("#match-name").text(data.name);
                $("#match-img").attr("src", data.photo);

                $("#results-modal").modal("toggle");

            });
        } else {
            alert("Please fill out all fields before submitting!");
        }
    });


});