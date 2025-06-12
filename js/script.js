// wwwroot/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const updateBtn = document.getElementById('updateStatusBtn');
    const statusText = document.getElementById('status-text');
    const statusIndicator = document.querySelector('.status-indicator');
    const dynamicMessage = document.getElementById('dynamic-message');
    const previewTitle = document.getElementById('preview-title');

    // Función para simular una actualización de estado o mostrar un estado inicial
    function updateDeploymentStatus() {
        // En un CI/CD real, aquí harías una llamada a la API de GitHub o leerías un archivo de estado
        // Por ahora, simulamos un estado inicial o de éxito si la página carga
        statusText.textContent = 'Despliegue Actualizado';
        statusIndicator.classList.remove('status-initial', 'status-failure');
        statusIndicator.classList.add('status-success');
        dynamicMessage.textContent = '¡El pipeline de CI/CD funciona! Esta página refleja el último despliegue exitoso desde la rama Release.';
        previewTitle.textContent = '🎉 ¡Tu Proyecto CI/CD Desplegado con Éxito! 🎉';
    }

    // Actualizar estado al cargar la página
    updateDeploymentStatus();

     
});