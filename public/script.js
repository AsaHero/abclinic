window.onload = () => {
    setTimeout(() => {
        let home = document.querySelector(".home");
        let span = document.querySelector(".side_nav span");
        let arrows = document.querySelectorAll(".arrow");
        let service_block = document.querySelector(".services_block");
        let blocks = document.querySelectorAll(".side_nav .block");
        let backgrounds = document.querySelectorAll(".background");
        let open = document.querySelector(".open");
        let priceList = document.querySelector(".priceList_table");
        let sidebar = document.querySelector(".sidebar_container");
        let social_icons = document.querySelectorAll(".social_media");
        let dentists = document.querySelectorAll(".dentist");
        let fog = document.querySelectorAll(".fog");
        
        home.scrollIntoView();

        for (let i = 0; i < blocks.length; i++) {
            const eleme = blocks[i];
            eleme.classList.remove("active");
        }
        document.querySelector("#home").classList.add("active");

        document.querySelector(".name").classList.add("ready"); 

        Nav_span(document.querySelector("#home"), span);

        for (let i = 0; i < blocks.length; i++) {
            const el = blocks[i];
            el.addEventListener("click", () => {
                if (el.classList.contains("active")) {
                    return;
                } 
                let currentPage = document.querySelector(`.${el.id}`);
                let background = document.querySelector(`#b_${currentPage.getAttribute("class")}`);
                let arrow = currentPage.querySelector(".arrow");
                
                if (currentPage.id == 3) {
                    sidebar.classList.add("paralax");
                    off(dentists);
                    off(fog);
                    for (let i = 0; i < social_icons.length; i++) {
                        const element = social_icons[i];
                        element.classList.add("paralax");
                    }
                    window.addEventListener("mousemove", function (ev) {
                        let Y = window.innerHeight;
                        let X = window.innerWidth;
                        if (ev.clientX >= 0 && ev.clientX <= 75) {
                            sidebar.classList.add("hover");
                        } else {
                            sidebar.classList.remove("hover");
                        }
                        if ((ev.clientY <= Y && ev.clientY >= (Y - 200)) && (ev.clientX <= X && ev.clientX >= (X - 80))) {
                            for (let i = 0; i < social_icons.length; i++) {
                                const element = social_icons[i];
                                element.classList.add("hover");
                            }
                        } else {
                            for (let i = 0; i < social_icons.length; i++) {
                                const element = social_icons[i];
                                element.classList.remove("hover");
                            }
                        }
                    })
                } else {
                    sidebar.classList.remove("paralax");
                    for (let i = 0; i < social_icons.length; i++) {
                        const element = social_icons[i];
                        element.classList.remove("paralax");
                    }
                    addOff(fog);
                }


                removeClasses(blocks);
                hiddenArrows(arrows);
                addON(service_block);
                Nav_span(el, span);
                iconMove(currentPage, arrow, priceList);
                scrolling(currentPage);
                setBack(background, backgrounds, currentPage);

                
                el.classList.add("active");
                
            });
        }

        for (let i = 0; i < arrows.length; i++) {
            const arrow = arrows[i];
            
            arrow.addEventListener("click", () => {
                let page = arrow.parentElement.nextSibling;
                let el = document.getElementById(`${page.getAttribute("class")}`);
                let background = document.querySelector(`#b_${page.getAttribute("class")}`);

                
                
                
                removeClasses(blocks);
                
                addON(service_block);
                hiddenArrows(arrows);
                Nav_span(el, span);
                iconMove(page, arrow);
                setBack(background, backgrounds, page);
                scrolling(page);
                el.classList.add("active");
            });
        }

        for (let i = 0; i < dentists.length; i++) {
            const dentist = dentists[i];
            dentist.addEventListener("transitionend", function (){
                dentist.classList.add("nameup");
            })
        }


        open.addEventListener("click", () => {
            document.querySelector(".priceList_table").classList.toggle('openlist');
        })
        
        
    }, 1000);
        
        
};
function hiddenArrows(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.classList.add("hidden");
    }
}
function off(elems) {
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.remove("off");
    }
}
function addOff(elems) {
    for (let i = 0; i < elems.length; i++) {
        const elem = elems[i];
        elem.classList.add("off");
    }
}
function iconMove(page, arrow, priceList){
    let icons = document.querySelectorAll(".social_media");
    // let bool = document.getElementById("1").classList.contains("tried");
    if (page.id > 1) {  
        for (let i = 0; i < icons.length; i++){
                let icon = icons[i];
                icon.classList.add("high");
        }
        if (page.id == 2) {
            setTimeout(() => {
                priceList.classList.add("view");
            }, 3000);
        }
        return;
    }
    // if (bool) {
    //     for (let i = 0; i < icons.length; i++){
    //         let icon = icons[i];
    //         icon.classList.remove("high");
    //     }
    //     if (arrow) {
    //         arrow.classList.remove("hidden");
    //     }
    // }
    setTimeout(() => {
        for (let i = 0; i < icons.length; i++){
            let icon = icons[i];
            icon.classList.remove("high");
            // document.getElementById("1").classList.add("tried");
        }
        if (arrow) {
            arrow.classList.remove("hidden");
        }
    }, 400);
}
function setBack(current, arr, page) {
    if (page.id > 1) {
        setTimeout(() => {
            for (let i = 0; i < arr.length; i++) {
                const back = arr[i];
                back.classList.remove("onthis");
            }
            current.classList.add("onthis");
        }, 500); 
        return;
    }
        for (let i = 0; i < arr.length; i++) {
            const back = arr[i];
            back.classList.remove("onthis");
        }
        current.classList.add("onthis");
}
function scrolling(element) {
    setTimeout(() => {
        element.scrollIntoView({
            block: "start",
            inline: "nearest", 
            behavior: "smooth",
        })
    }, 200);
    
}

function removeClasses(arr) {
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        elem.classList.remove("active");
    }
}
function addON(el) {
    if (!el.classList.contains("on")) {
        el.classList.add("on");
    }
}

function Nav_span(active, span) {
    span.style = `
        height: ${active.clientHeight}px;
        top: ${active.getBoundingClientRect().top}px;
    `;
}

function navClick(blocks, service_block, span) {
    
}

function arrowClick(arrows, service_block, span) {
    
}


    


