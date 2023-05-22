
let stop = false;
const container = document.getElementById('container');
const sizeInput = document.getElementById('size');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const scrollInput = document.getElementById('scroll-input');
const scrollValue = document.getElementById('scroll-value');
scrollValue.innerHTML = (2000 - scrollInput.value) / 1000 + " sec";

// generate an array with random values
let array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
let bars = [];
let reset = false;
function createBars() {
    // clear the container
    container.innerHTML = ``;

    // get the size of the array from the input
    let size = sizeInput.value;
    // generate a new array with random values
    array = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    // create an HTML element for each value in the array
    bars = array.map(value => {
        let bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value + 1}px`;
        bar.style.width = `${80 / size}%`;
        container.appendChild(bar);
        return bar;
    });
}
let i = 0, j = 0;
async function bubbleSort() {
    startButton.disabled = true;
    stopButton.disabled = false;
    let length = array.length;
    for (i; i < length; i++) {
        for (j; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                bars[j].classList.add('prime');
                bars[j + 1].classList.add('active');
            }
            else {
                bars[j].classList.add('active');
                bars[j + 1].classList.add('prime');
            }
            if (stop) return;

            await new Promise(resolve => setTimeout(resolve, 2000 - scrollInput.value));
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                [bars[j].style.height, bars[j + 1].style.height] = [bars[j + 1].style.height, bars[j].style.height];
            }
            bars[j].classList.remove('active');
            bars[j + 1].classList.remove('active');
            bars[j].classList.remove('prime');
            bars[j + 1].classList.remove('prime');
        }
        bars[j].classList.add('fixed');
        j = 0;
    }
    done();
    stopButton.disabled = true;


}
async function SelectionSort() {
    startButton.disabled = true;
    stopButton.disabled = false;
    let length = array.length;
    for (i; i < length; i++) {
        for (j = i + 1; j < length; j++) {
            bars[i].classList.add('prime');
            bars[j].classList.add('active');
            if (stop) return;

            await new Promise(resolve => setTimeout(resolve, 2000 - scrollInput.value));
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
                [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
            }
            bars[j].classList.remove('active');
        }
        bars[i].classList.add('fixed');
    }
    done();
    stopButton.disabled = true;

}
async function SelectionSortRevert() {
    startButton.disabled = true;
    stopButton.disabled = false;
    let length = array.length;
    for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
            bars[i].classList.add('prime');
            bars[j].classList.add('active');
            if (stop) return;

            await new Promise(resolve => setTimeout(resolve, 2000 - scrollInput.value));

            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
                [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
            }
            bars[j].classList.remove('active');
            bars[i].classList.remove('prime');


        }

    }
    done();
    stopButton.disabled = true;

}

async function SelectionSortRevertV2() {
    startButton.disabled = true;
    stopButton.disabled = false;
    let length = array.length;
    let firstRunFlag = false;
    for (i = 0; i < length; i++) {
        for (j = 0; j < (firstRunFlag === false ? length : i); j++) {
            bars[i].classList.add('prime');
            bars[j].classList.add('active');
            if (stop) return;
            await new Promise(resolve => setTimeout(resolve, 2000 - scrollInput.value));
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
                [bars[i].style.height, bars[j].style.height] = [bars[j].style.height, bars[i].style.height];
            }
            bars[j].classList.remove('active');
            bars[i].classList.remove('prime');
        }
        firstRunFlag = true;
    }
    done();
    stopButton.disabled = true;

}
// // sssssssssssssssssssssssssssssssssssssssssssssssss
// function quickSort(arr, start, end) {
//     if (start >= end) {
//         return;
//     }
//     let pivotIndex = partition(arr, start, end);
//     quickSort(arr, start, pivotIndex);
//     quickSort(arr, pivotIndex + 1, end);
// }

// function partition(arr, start, end) {
//     let pivotIndex = start;
//     let pivotValue = arr[end];
//     for (let i = start; i < end; i++) {
//         if (arr[i] < pivotValue) {
//             swap(arr, i, pivotIndex);
//             pivotIndex++;
//         }
//     }
//     swap(arr, pivotIndex, end);
//     return pivotIndex;
// }

// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     // update the height of the corresponding bar
//     bars[i].style.height = `${arr[i]}px`;
//     bars[j].style.height = `${arr[j]}px`;
//     // add active class to the bars being compared
//     bars[i].classList.add('active');
//     bars[j].classList.add('active');
//     // remove active class after a delay
//     setTimeout(() => {
//         bars[i].classList.remove('active');
//         bars[j].classList.remove('active');
//     }, 500); // you can adjust the delay time here
// }




// sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
function SetDescription() {
    document.querySelectorz('#sortType').value
    document.querySelectorAll('.desc')
    //need to make it work.....
    //need to make it work.....
    //need to make it work.....
    //need to make it work.....
    //need to make it work.....
}



function setDisplay(elem) {
    console.log(elem.display);
    if (getComputedStyle(elem).display == "block")
        elem.setAttribute('style', `display:none`);
    else
        elem.setAttribute('style', `display:block`);


}
async function done() {
    for (let j = 0; j < array.length; j++) {
        bars[j].classList.add('done');
        await new Promise(resolve => setTimeout(resolve, 40));
    }
    startButton.disabled = false;
}
function runSort() {
    switch (document.querySelector('#sortType').value) {
        case 'bubble':
            bubbleSort();
            break;

        case 'select':
            SelectionSort();
            break;

        case 'selectR':
            SelectionSortRevert();
            break;

        case 'selectRv2':
            SelectionSortRevertV2();
            break;

        case 'quick':
            alert("Not yet implemented!");
            // quickSort(array, 0, array.length - 1);
            break;

    }
}

document.getElementById('size').oninput = function () {
    var max = parseInt(this.max);
    var min = parseInt(this.min);
    if (parseInt(this.value) > max) {
        this.value = max;
    }
    if (parseInt(this.value) < min) {
        this.value = min;
    }
}

startButton.addEventListener('click', function () {
    stopButton.innerText = 'Pause'
    stop = false;
    i = j = 0;
    createBars();
    scrollValue.value = 1700;
    runSort();
});

stopButton.addEventListener('click', function () {
    stop = !stop;
    if (stopButton.innerText == "Pause") {
        startButton.disabled = false;
        stopButton.innerText = 'Continue'
    }
    else {
        stopButton.innerText = 'Pause'
        startButton.disabled = true;
        runSort();
    }

});

scrollInput.addEventListener('input', function () {
    scrollValue.innerHTML = (2000 - scrollInput.value) / 1000 + " sec";
});

