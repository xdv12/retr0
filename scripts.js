
<input type="text" onkeypress="myFunction()">

<script>
document.addEventListener("keydown", myFunction);

function myFunction(e) {
    alert(e.keyCode)
}
