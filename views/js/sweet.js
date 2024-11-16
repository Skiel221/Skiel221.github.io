document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío normal del formulario

    let timerInterval;

    Swal.fire({
        confirmButton: false,
        title: "Enviando Mensaje...",
        background: "#00275a",
        color: "#ffd000",
        imageUrl: "../img/sweetAlert/crashito.png",
        imageWidth: "auto",
        imageHeight: 300,
        imageAlt: "Crash",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) { // Verifica si la alerta se cerró por el temporizador
            Swal.fire({
                title: "Mensaje Enviado Con Exito!!",
                text : "Su mensaje será leído en unas horas...",
                background: "#00275a",
                color: "#ffd000",
                imageUrl: "../img/sweetAlert/crashok.png",
                imageWidth: "auto",
                imageHeight: 300,
                imageAlt: "CrashOk",
                confirmButtonText : "Aceptar",
                confirmButtonColor : "#024caa"
            });
        }
    });
});
