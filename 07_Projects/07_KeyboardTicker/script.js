let insertref = document.getElementById("insert");

window.addEventListener("keydown",(e) => {

    insertref.innerHTML = `
    <div class='color'>
    <table style="width:100%">
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? "Space" : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>`
},false)