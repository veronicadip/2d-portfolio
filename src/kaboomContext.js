import kaboom from "kaboom";

// Instead of importing kaboom globally, I'll use this context to have a cleaner code -> recommended pattern for kaboom projects

export const k = kaboom({
    global: false,
    // Needed property for mobile view
    touchToMouse: true,
    canvas: document.getElementById("game"),
})
