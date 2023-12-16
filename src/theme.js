// Dark and Light theme switching
const themeChange = (theme) => {

    // Listen the theme button clicking
    theme.addEventListener("click", (e) => {

        e.preventDefault();     // Prevent the automatic bahaviour of theme button

        // Change the theme class of the document and the theme button src (image)
        document.documentElement.classList.toggle("dark"); 
        document.documentElement.classList.contains("dark") ? theme.src = "./assets/dark.png" : theme.src = "./assets/light.png";

        // Save the preferences about theme of user with localStorage()
        if (document.documentElement.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
    
    // Listen the page's load
    window.addEventListener("load", (e) => {

        e.preventDefault();

        const userThemePreferences = localStorage.getItem("theme");     // Get the user theme preferences

        if (userThemePreferences == "dark") {
            document.documentElement.classList.add("dark");
            theme.src = "./assets/dark.png";
        }

    });

};

export default themeChange;     // Export the theme switching function