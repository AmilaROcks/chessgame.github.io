
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
var scoresnum=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

var currentPossition;
var suares;
var chesspieces;

var pondCount;
var blackCount=0;
var whiteCount=1;

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

$('.chesspieces').on("click",selectPiece);



function selectPiece() {
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
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Rook')){
        pathofRook(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('RookW')){
        pathofRookW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Bishop')){
        pathofBishop(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('BishopW')){
        pathofBishopW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Knight')){
        pathofKnight(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('KnightW')){
        pathofKnightW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('King')){
        pathofKing(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('KingW')){
        pathofKingW(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('Queen')){
        pathofQueen(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('QueenW')){
        pathofQueenW(currentPossition);

    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBlackpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
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
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKnight(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition-2]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+2];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+2];
    var tempId4=Letters[LettersArrayPossition+2]+numbers[numArrayPossition+1];
    var tempId5=Letters[LettersArrayPossition-2]+numbers[numArrayPossition-1];
    var tempId6=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-2];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-2];
    var tempId8=Letters[LettersArrayPossition+2]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieces'))){
        $("#"+tempId1).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieces'))){
        $("#"+tempId2).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieces'))){
        $("#"+tempId3).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId3).children().hasClass('white')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieces'))){
        $("#"+tempId4).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId4).children().hasClass('white')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieces'))){
        $("#"+tempId5).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId5).children().hasClass('white')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieces'))){
        $("#"+tempId6).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId6).children().hasClass('white')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieces'))){
        $("#"+tempId7).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId7).children().hasClass('white')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieces'))){
        $("#"+tempId8).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId8).children().hasClass('white')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKnightW(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition-2]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+2];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+2];
    var tempId4=Letters[LettersArrayPossition+2]+numbers[numArrayPossition+1];
    var tempId5=Letters[LettersArrayPossition-2]+numbers[numArrayPossition-1];
    var tempId6=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-2];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-2];
    var tempId8=Letters[LettersArrayPossition+2]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieces'))){
        $("#"+tempId1).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId1).children().hasClass('Black')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieces'))){
        $("#"+tempId2).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId2).children().hasClass('Black')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieces'))){
        $("#"+tempId3).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId3).children().hasClass('Black')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieces'))){
        $("#"+tempId4).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId4).children().hasClass('Black')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieces'))){
        $("#"+tempId5).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId5).children().hasClass('Black')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieces'))){
        $("#"+tempId6).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId6).children().hasClass('Black')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieces'))){
        $("#"+tempId7).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId7).children().hasClass('Black')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieces'))){
        $("#"+tempId8).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId8).children().hasClass('Black')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKing(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId4=Letters[LettersArrayPossition+1]+numbers[numArrayPossition];
    var tempId5=Letters[LettersArrayPossition-1]+numbers[numArrayPossition];
    var tempId6=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId8=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieces'))){
        $("#"+tempId1).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieces'))){
        $("#"+tempId2).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieces'))){
        $("#"+tempId3).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId3).children().hasClass('white')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieces'))){
        $("#"+tempId4).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId4).children().hasClass('white')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieces'))){
        $("#"+tempId5).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId5).children().hasClass('white')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieces'))){
        $("#"+tempId6).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId6).children().hasClass('white')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieces'))){
        $("#"+tempId7).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId7).children().hasClass('white')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieces'))){
        $("#"+tempId8).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId8).children().hasClass('white')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofKingW(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId4=Letters[LettersArrayPossition+1]+numbers[numArrayPossition];
    var tempId5=Letters[LettersArrayPossition-1]+numbers[numArrayPossition];
    var tempId6=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId8=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('chesspieces'))){
        $("#"+tempId1).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId1).children().hasClass('Black')){
        $("#"+tempId1).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId2).children().hasClass('chesspieces'))){
        $("#"+tempId2).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId2).children().hasClass('Black')){
        $("#"+tempId2).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId3).children().hasClass('chesspieces'))){
        $("#"+tempId3).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId3).children().hasClass('Black')){
        $("#"+tempId3).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId4).children().hasClass('chesspieces'))){
        $("#"+tempId4).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId4).children().hasClass('Black')){
        $("#"+tempId4).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId5).children().hasClass('chesspieces'))){
        $("#"+tempId5).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId5).children().hasClass('Black')){
        $("#"+tempId5).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId6).children().hasClass('chesspieces'))){
        $("#"+tempId6).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId6).children().hasClass('Black')){
        $("#"+tempId6).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId7).children().hasClass('chesspieces'))){
        $("#"+tempId7).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId7).children().hasClass('Black')){
        $("#"+tempId7).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
    if (!($("#"+tempId8).children().hasClass('chesspieces'))){
        $("#"+tempId8).addClass('selectpath');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');

    }else if ($("#"+tempId8).children().hasClass('Black')){
        $("#"+tempId8).addClass('crosspiece');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('selectpath');
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofRookW(eventData){
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofRook(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBishop(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('white')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('white')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieces'))){
            $("#"+tempId3).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('white')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieces'))){
            $("#"+tempId4).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('white')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofBishopW(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('Black')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');

        }else if ($("#"+tempId2).children().hasClass('Black')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieces'))){
            $("#"+tempId3).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieces'))){
            $("#"+tempId4).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofQueen(eventData) {
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('white')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('white')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('white')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieces'))){
            $("#"+tempId3).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('white')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieces'))){
            $("#"+tempId4).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('white')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pathofQueenW(eventData){
    currentPossition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    suares.removeClass('crosspiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId).children().hasClass('Black')){
            $("#"+tempId).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId1).children().hasClass('Black')){
            $("#"+tempId1).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId2).children().hasClass('Black')){
            $("#"+tempId2).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('chesspieces'))){
            $("#"+tempId3).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('chesspieces'))){
            $("#"+tempId4).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }else if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
            break;
        }else {
            break;
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
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
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('chesspieces')) && !($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPossition.addClass('clickpiece');
        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');

        }
        if ($("#"+tempId3).children().hasClass('Black')){
            $("#"+tempId3).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
        if ($("#"+tempId4).children().hasClass('Black')){
            $("#"+tempId4).addClass('crosspiece');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('selectpath');
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

var IdW=$("#firstRow").children().first().attr('id');
var IdB=$("#firstRowB").children().first().attr('id');
var rotateC=0;

function rotate() {
    if(rotateC==0){
        $("#main").css("transform","rotate(180deg)");
        $("#main").css("transition","3s");
        $(".chesspieces").css("transform","rotate(180deg)");
        $(".cross").css("transform","rotate(180deg)");
        rotateC++;
    }else if(rotateC==1){
        $("#main").css("transform","rotate(0deg)");
        $("#main").css("transition","3s");
        $(".chesspieces").css("transform","rotate(0deg)");
        $(".cross").css("transform","rotate(0deg)");
        rotateC=0;
    }
}

$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".chesspieces.clickpiece");
    if ($(currentSquar).hasClass('selectpath')) {
        currentSquar.append(currentpiece);
        chesspieces.removeClass('clickpiece');
        suares.removeClass('selectpath');
        suares.removeClass('crosspiece');
        rotate();
    }

    if ($(currentSquar).hasClass('crosspiece')) {
        var y=$(currentpiece).clone();
        $(currentpiece).remove();
        console.log(IdB);
        if((currentpiece.hasClass('Black'))){
            var x=$(currentSquar).children().clone();
            $(currentSquar).children().remove();
            $("#"+IdW).append(x);
            IdW++;
        }else{
            var x=$(currentSquar).children().clone();
            $(currentSquar).children().remove();
            $("#"+IdB).append(x);
            IdB++;
        }
        $(currentSquar).children().remove();
        currentSquar.append(currentpiece);
        chesspieces.removeClass('clickpiece');
        suares.removeClass('selectpath');
        suares.removeClass('crosspiece');
    }
});









