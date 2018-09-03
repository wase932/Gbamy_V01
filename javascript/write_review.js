
//document is ready
$(document).ready(
   function() {
    OnDocumentReady();
    costSlider();

   }
    
);

function OnDocumentReady(){
    console.log("The document is now ready...");
}

function costSlider(){

    $( "#costRange" ).slider(
        {
            slide: function( event, ui ){ 
                    $( "#costRange" ).val( ui.value );
                    $(ui.value).val($('#costRange').val());
                }
        });

    $("#costRange").change(function() {
        $("#costRange").slider("value" , $(this).val());
        var costRangeValue = $("#costRange").slider("value");

        function getTextToDisplay(){
            $("#costRangeDisplayValue").attr("class","cleanstate");
            $("#costRangeDisplayValue").addClass("badge");

            switch (costRangeValue) {
                case 1:
                    $("#costRangeDisplayValue").toggleClass("badge-info");
                    return "practically free";
                case 2:
                    $("#costRangeDisplayValue").toggleClass("badge-success");
                    return "super cheap!!!";
                case 3:
                    $("#costRangeDisplayValue").toggleClass("badge-warning");
                    return "humm...";
                case 4:
                    $("#costRangeDisplayValue").toggleClass("badge-danger");
                    return "expensive!";
                case 5:
                    $("#costRangeDisplayValue").toggleClass("badge-danger");
                    return "broke the bank!!";
            }
        }

        //display the value on the UI!
        $("#costRangeDisplayValue").text(
            
            getTextToDisplay()
        
        );
        // console.log("value of slider: " + costRangeValue);
    });
}

// 
// 