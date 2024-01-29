$(document).ready(function() {
    // Load header, chat box, and footer partials
    $("#header-placeholder").load("partials/header.html", function() {
        // Event handlers related to header can be defined here
        // For example, if there's a mobile menu toggle in the header
        $(document).on('click', '#mobile-menu-toggle', function() {
            $('#nav-links').slideToggle();
        });
    });

    $("#chat_box-placeholder").load("partials/chat_box.html", function() {
        // Once chat box is loaded, setup event handlers using event delegation
        $(document).on('click', '#message-icon', function() {
            $('#chat-box').toggleClass('hidden');
        });

        $(document).on('click', '#close-chat', function() {
            $('#chat-box').addClass('hidden');
        });
    });

    $("#footer-placeholder").load("partials/footer.html", function() {
        // Event handlers related to footer can be defined here
    });

    // Resize event for showing/hiding nav links
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('#nav-links').css('display', 'flex');
        } else {
            $('#nav-links').css('display', 'none');
        }
    });

    // Function to send messages in the chat
    function sendMessage() {
        var message = $('#chat-input').val().trim();
        if (message !== "") {
            $('#chat-messages').append('<div>' + message + '</div>');
            $('#chat-input').val('');
            $('#chat-messages').scrollTop($('#chat-messages')[0].scrollHeight);
        }
    }

    // Binding events to send message
    $(document).on('click', '#send-message', sendMessage);
    $(document).on('keypress', '#chat-input', function(e) {
        if (e.which === 13) {  // Enter key pressed
            sendMessage();
        }
    });

    // Hover effect on project items
    $('.project-item').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );

    
});
