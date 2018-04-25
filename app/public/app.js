$( document ).ready(function() {

    $(".submitButton").on("click", function(e){
        event.preventDefault();

        var newFriend = {
            dogs: $("#formDogs"),
            cats: $("#formCats"),
            height: $("#formHeight"),
            guitar: $("#formGuitar"),
            games: $("#formGames"),
            dnd: $("#formDnd"),
            smart: $("#formSmart"),
            hands: $("#formHands"),
            deadpool: $("#formDeadpool"),
            ron: $("#formRon")
        }
    });

    console.log(newFriend);


});