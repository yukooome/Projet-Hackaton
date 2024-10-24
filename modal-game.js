

    document.getElementById("openModal").onclick = function() {
        document.getElementById("myModal").style.display = "block";
    }

    // Fermer la modal lorsqu'on clique sur la croix
    document.getElementsByClassName("close")[0].onclick = function() {
        document.getElementById("myModal").style.display = "none";
    }

    // Fermer la modal en cliquant à l'extérieur de la modal
    window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    }

