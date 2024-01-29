$(document).ready(function() {
    // Function to get query parameters from the URL
    function getQueryParam(param) {
        var searchParams = new URLSearchParams(window.location.search);
        return searchParams.get(param);
    }

    // Object holding data for each service
    var serviceData = {
        preconstruction: {
            title: "Preconstruction Planning",
            image: "./assets/images/service1.jpg",
            description: "Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase."
        },
        modelling: {
            title: "Architectural Modelling",
            image: "./assets/images/service2.jpg",
            description: "Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase."
        },
        management: {
            title: "Construction Management",
            image: "./assets/images/service3.jpg",
            description: "Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase.Efficient and comprehensive planning for every project phase."
        }
        // Add more service keys and data as needed
    };

    // Get the service query parameter from the URL
    var service = getQueryParam('service');

    // Update the page content based on the service parameter
    if (serviceData[service]) {
        var selectedService = serviceData[service];
        $('#service-title').text(selectedService.title);
        $('#service-image').attr('src', selectedService.image).attr('alt', selectedService.title);
        $('#service-description').text(selectedService.description);
    } else {
        // Default content if no valid service is specified
        $('#service-title').text('Service Information');
        $('#service-image').attr('src', './assets/images/default-service.jpg').attr('alt', 'Default Service Image');
        $('#service-description').text('Please select a valid service to view details.');
    }
});
