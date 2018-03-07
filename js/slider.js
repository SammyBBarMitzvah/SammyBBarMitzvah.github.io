        var slider = document.getElementById('slider');
        var output = document.getElementById('valueOutput');
        slider.oninput = function() {
            output.innerHTML = this.value;
        }
