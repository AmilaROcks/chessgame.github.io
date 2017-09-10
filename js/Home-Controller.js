
//////////////////////////////////////////////////////////////////////
var colors=['red','green','black','blue','brown'];
var i=0;
function changeColor() {
    $("#theme").css("color",colors[i]);
    i++;
    if(i==colors.length){
        i=0;
    }
}
setInterval(changeColor,200);
///////////////////////////////////////////////////////////////////////////
// var currentPosition;
// var path;
//
// $( function() {
//     //currentPosition=$(this);
//     $("#im9").on("click",function selectpath() {
//         //currentPosition=$(this);
//         $("#d17,#d25").addClass('selectpath');
//
//     });
//     $("#im9").on("click",function selectPosition() {
//         //currentPosition=$(this);
//         $("#d9").addClass('currentpossition')
//     });
//     $("#im9").on("mouseout",function remove() {
//             $("#d17,#d25").removeClass('selectpath');
//
//         }
//     );
//     $("#im9").on("mouseout",function removePosition() {
//         $("#d9").removeClass('currentpossition')
//     });
//     $("#im9").draggable({ revert: "invalid"});
//     $( "#d17,#d25" ).droppable({
//
//     });
//
// });
//////////////////////////////////////////////////////////////////////////////////

var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1, 2, 3, 4, 5, 6, 7, 8];

var currentPossition;
var suares;
var chesspieces;

var pondCount;
var CountArray= new Array(9);

$(document).ready(function () {
    suares=$('.square');
    chesspieces=$('.chesspieces');
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.chesspieces').on("click",function (eventData) {
    currentPossition=$(this);
    console.log(currentPossition);

    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackpond')){
        pondCount=0;
        pathofBlackpond(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whitepond')){
        pondCount=0;
        pathofWhitekpond(currentPossition);

    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBlackpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofWhitekpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    switch(currentPossition.attr('id')){
        case "im17" :CountArray[0]++; break;
        case "im18" :CountArray[1]++; break;
        case "im19" :CountArray[2]++; break;
        case "im20" :CountArray[3]++; break;
        case "im21" :CountArray[4]++; break;
        case "im22" :CountArray[5]++; break;
        case "im23" :CountArray[6]++; break;
        case "im24" :CountArray[7]++; break;
    }

    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".chesspieces.clickpiece");
    if ($(currentSquar).hasClass('selectpath')){
        currentSquar.append(currentpiece);
        chesspieces.removeClass('clickpiece');
        suares.removeClass('selectpath');

    }
});









