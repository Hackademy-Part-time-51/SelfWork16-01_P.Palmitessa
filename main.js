let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3"); 

box1.addEventListener("click", () => {
    
    const p = document.createElement("p")
    p.innerHTML = `<p>La distanza del div dal top è di ${box1.offsetTop}px mentre, quella da sinistra è di ${box1.offsetLeft}px.<p>`;
    
    
    box1.appendChild(p);
    
})

box2.addEventListener("click", () => {
    
    const p = document.createElement("p")
    p.innerHTML = `<p>La distanza del div dal top è di ${box2.offsetTop}px mentre, quella da sinistra è di ${box2.offsetLeft}px<p>`;
    
    
    box2.appendChild(p);
    
})

box3.addEventListener("click", () => {
    
    const p = document.createElement("p")
    p.innerHTML = `<p>La distanza del div dal top è di ${box3.offsetTop}px mentre, quella da sinistra è di ${box3.offsetLeft}px<p>`;
    
    
    box3.appendChild(p);
    
})


