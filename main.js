/**
 * ## The challenge

Your challenge is to build out this FAQ accordion and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to: 

 * - Hide/Show the answer to a question when the question is clicked [DONE]
 * - Navigate the questions and hide/show answers using keyboard navigation alone [DONE]
 * - View the optimal layout for the interface depending on their device's screen size
 * - See hover and focus states for all interactive elements on the page
 */

let headers = document.querySelectorAll("section header h2");
let btns = document.querySelectorAll("section header button");

// hides button
function hide(btn) {
    btn.setAttribute("class", "plus");
    p = btn.parentElement.parentElement.lastElementChild;
    btn.style = "background-image:url('./assets/images/icon-plus.svg');";
    p.style = "display:none;height:0;";
}

// initial condition [all hidden except the first]
btns[0].style = "background-image: url('./assets/images/icon-minus.svg')";
btns[0].parentElement.parentElement.lastElementChild.style =
    "display:block;height:fit-content;";

btns.forEach((btn) => {
    // initial condition [all hidden except the first]
    btn.setAttribute("class", "plus");
    // on btn click
    btn.addEventListener("click", (e) => {
        if (btn.classList.contains("minus")) {
            // if not hidden
            hide(btn);
        } else if (btn.classList.contains("plus")) {
            // if hidden
            // hide all
            btns.forEach((btn) => hide(btn));
            // open clicked only
            e.target.setAttribute("class", "minus");
            p = btn.parentElement.parentElement.lastElementChild;
            btn.style =
                "background-image: url('./assets/images/icon-minus.svg')";
            p.style = "display:block;height:fit-content;";
        }
    });
});
