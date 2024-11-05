function loadContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
        	let htmlContent = data
                .replace(/^# (.+)$/gm, '<h1 style="text-align: center;">$1</h1>')
                .replace(/^## (.+)$/gm, '<h2 style="text-align: center;">$1</h2>')
                .replace(/^### (.+)$/gm, '<h3 style="text-align: center;">$1</h3>')
                .replace(/^(?!<h[123]>)[^ \n]+.+/gm, '<p>$&</p>');

            
            document.getElementById('content').innerHTML = 
            	`<h2 align="center"> Lenguajes de programación </h2> 
            	<div class="content-text"> ${htmlContent} </div>`;
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
        });
}