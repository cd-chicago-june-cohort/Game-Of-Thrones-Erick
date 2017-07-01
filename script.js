$(document).ready(function(){
    var id;
    var num = 1;
    var link = 'http://anapioficeandfire.com/api/houses/';
    var targaryen = "House Targaryen of King's Landing";
    var stark = "House Stark of Winterfell";
    var lanniester = "House Lannister of Casterly Rock";
    var baratheon = "House Baratheon of Storm's End";

    $('img').click(function(){

        id = $(this).attr("id");

        for(var k=1;k<=379;k++){
            $.get('http://anapioficeandfire.com/api/houses/'+k, function(res){
                    if(res.name == id){
                        $('#houseInfo').html('');
                        $('#houseInfo').append('<h3>Name:&nbsp' + res.name + '</h3><br>');
                        $('#houseInfo').append('<h3>Words:&nbsp' + res.words + '</h3><br><br><br>');
                        $('#houseInfo').append('<h3>Titles:&nbsp' + res.titles + '</h3><br>');
                    }
            },'json');
        }
    });
});