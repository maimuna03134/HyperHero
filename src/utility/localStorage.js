import Swal from "sweetalert2";

// get installed apps
export const loadInstallApps = () => {
    try {
        const data = localStorage.getItem("installedApps");
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

// install an app
export const installApp = (app) => {
    const installedApps = loadInstallApps();

    try {
        const isDuplicate = installedApps.some((a) => a.id === app.id);
        if (isDuplicate) {
            Swal.fire({
                title: "Already Installed",
                text: `${app.title} is already installed.`,
                icon: "info",
                confirmButtonColor: "#00D390",
            });
            return;
        }

        const updatedApps = [...installedApps, app];
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        Swal.fire({
            title: `${app.title} Installed! 😍`,
            text: "The app has been successfully installed.",
            icon: "success",
            confirmButtonColor: "#00D390",
            draggable: true,
        });
    }
    catch (err) {
        console.log(err);
    }
};

//uninstalled an app
export const unInstallApp = (id) => {
    const installedApps = loadInstallApps();
    try {
        const updatedApps = installedApps.filter((a) => a.id !== id);
        localStorage.setItem("installedApps", JSON.stringify(updatedApps));
        Swal.fire({
            toast: true,
            position: "top-center",
            icon: "success",
            title: "App uninstalled successfully ☺️!",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });

    } catch (err) {
        console.log(err);
    }
};
