$(document).ready(function () {

    $('#dialog').hide();

    // Make tickets draggable
    $('.ticket').draggable({
        helper: 'clone'
    });

    let totalPrice = 0;

    // Make cart droppable
    $('#cart').droppable({
        accept: '.ticket',
        drop: function (event, ui) {
            const draggedTicket = ui.helper.clone();
            draggedTicket.css({
                
            });


            $(this).append(draggedTicket);


            const removeButton = $('<button class="remove-item">Remove</button>');
            draggedTicket.append(removeButton);

            totalPrice = totalPrice + draggedTicket.data('price');
            $('#total_amount').html(`$${totalPrice}`);


            // Handle click event on the remove button
            removeButton.on('click', function () {
                totalPrice = totalPrice - draggedTicket.data('price');

                $('#total_amount').html(`$${totalPrice}`);

                draggedTicket.remove();
                console.log(draggedTicket.data('price'));
            });

            showDialog(draggedTicket.data('ticket'), draggedTicket.data('price'));
        }
    });

    // Show jQuery UI Dialog
    function showDialog(ticket, price) {
        $('#dialog-message').html(`Added ${ticket} to the cart! Cost: $${price}`);



        $('#dialog').dialog({
            show: {
                effect: 'shake',
                duration: 500
            },
            hide: {
                effect: 'explode',
                duration: 500
            }
        });
    }



    // let html = "",
    // let totalAmount = document.getElementById('total_amount');


});
