function count1() {
    let c = document.getElementById("heart1")
    c.innerHTML = 152
}
function count8() {
    let c = document.getElementById("heart8")
    c.innerHTML = 3002
}
function count2() {
    let c = document.getElementById("heart2")
    c.innerHTML = 782
}
function count3() {
    let c = document.getElementById("heart3")
    c.innerHTML = 192
}
function count4() {
    let c = document.getElementById("heart4")
    c.innerHTML = 1501
}
function count5() {
    let c = document.getElementById("heart5")
    c.innerHTML = 1102
}
function count6() {
    let c = document.getElementById("heart6")
    c.innerHTML = 680
}
function count7() {
    let c = document.getElementById("heart7")
    c.innerHTML = 452
}

function wildLife() {
    document.getElementById('dir1').style.display = "none"
    document.getElementById('dir2').style.display = "none"
    document.getElementById('dir3').style.display = "none"
    document.getElementById('dir4').style.display = "none"
    document.getElementById('dir5').style.display = "none"
    document.getElementById('dir6').style.display = "none"
    document.getElementById('dir7').style.display = "none"
    document.getElementById('dir8').style.display = "flex"
    document.getElementById('dir9').style.display = "none"
    document.getElementById('dir10').style.display = "none"
    document.getElementById('dir11').style.display = "flex"
    document.getElementById('dir12').style.display = "none"
    document.getElementById('dir13').style.display = "none"
    document.getElementById('dir14').style.display = "flex"
}
function shoot() {
    document.getElementById('dir1').style.display = "flex"
    document.getElementById('dir2').style.display = "none"
    document.getElementById('dir3').style.display = "none"
    document.getElementById('dir4').style.display = "none"
    document.getElementById('dir5').style.display = "none"
    document.getElementById('dir6').style.display = "flex"
    document.getElementById('dir7').style.display = "flex"
    document.getElementById('dir8').style.display = "none"
    document.getElementById('dir9').style.display = "none"
    document.getElementById('dir10').style.display = "flex"
    document.getElementById('dir11').style.display = "none"
    document.getElementById('dir12').style.display = "none"
    document.getElementById('dir13').style.display = "none"
    document.getElementById('dir14').style.display = "none"
}
function wedding() {
    document.getElementById('dir1').style.display = "none"
    document.getElementById('dir2').style.display = "none"
    document.getElementById('dir3').style.display = "none"
    document.getElementById('dir4').style.display = "none"
    document.getElementById('dir5').style.display = "none"
    document.getElementById('dir6').style.display = "flex"
    document.getElementById('dir7').style.display = "none"
    document.getElementById('dir8').style.display = "none"
    document.getElementById('dir9').style.display = "none"
    document.getElementById('dir10').style.display = "none"
    document.getElementById('dir11').style.display = "none"
    document.getElementById('dir12').style.display = "none"
    document.getElementById('dir13').style.display = "flex"
    document.getElementById('dir14').style.display = "none"
}
function allClick() {
    let x = Math.floor(Math.random() * 6);
    console.log(x);
    if (x === 1) {
        document.getElementById('dir3').style.display = "flex"
        document.getElementById('dir6').style.display = "flex"
        document.getElementById('dir11').style.display = "flex"
        document.getElementById('dir4').style.display = "flex"

    } else if (x === 2) {
        document.getElementById('dir11').style.display = "flex"
        document.getElementById('dir12').style.display = "flex"
        document.getElementById('dir13').style.display = "flex"
        document.getElementById('dir14').style.display = "flex"
    } else if (x === 3) {
        document.getElementById('dir1').style.display = "flex"
        document.getElementById('dir4').style.display = "flex"
        document.getElementById('dir9').style.display = "flex"
        document.getElementById('dir12').style.display = "flex"
    } else if (x === 4) {
        document.getElementById('dir6').style.display = "flex"
        document.getElementById('dir7').style.display = "flex"
        document.getElementById('dir10').style.display = "flex"
        document.getElementById('dir13').style.display = "flex"
    } else if (x === 5) {
        document.getElementById('dir1').style.display = "flex"
        document.getElementById('dir4').style.display = "flex"
        document.getElementById('dir7').style.display = "flex"
        document.getElementById('dir14').style.display = "flex"
        document.getElementById('dir14').style.display = "flex"
    }
}