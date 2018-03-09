function submit() {
    let sliderValue = document.getElementById('slider');
    let people = { 'amount': sliderValue };
    console.log(JSON.stringify(people));
}
