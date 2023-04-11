var button = document.getElementById("allclear");

button.addEventListener('click', function () {

    document.getElementById('newfeed1').style.backgroundColor = 'transparent';
    document.getElementById('newfeed2').style.backgroundColor = 'transparent';
    document.getElementById('newfeed3').style.backgroundColor = 'transparent';


    document.querySelectorAll('.dote').forEach(e => {
        e.classList.remove('dote');
    });
    document.getElementById('number').innerText = '0';
});

