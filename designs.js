// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function()
{
    $('#sizePicker').submit(function makeGrid(prachi)
    {
        $('table tr').remove();
        var p = $('#forheight').val();
        var q = $('#forwidth').val();
        for(var i=1;i<=p;i++)
        {
            $('table').append('<tr></tr>');
                for(var k=1;k<=q;k++)
                {
                    $('tr:last').append('<td></td>');
                    $('td').attr("class",'forcolor');
                }
        }
        prachi.preventDefault();
        $('.forcolor').click(function(event)
        {
            var bcolor= $('#colorPicker').val();
            $(event.target).css('background-color',bcolor);
        });
    });
});