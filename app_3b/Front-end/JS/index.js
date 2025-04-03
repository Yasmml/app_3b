function showLoginTab() {
    document.getElementById("login-tab").style.display = "block";
    document.getElementById("recover-tab").style.display = "none";
    document.getElementById("reset-password-tab").style.display = "none";
    document.getElementById("create-account-tab").style.display = "none";
}

function showRecoverTab() {
    document.getElementById("login-tab").style.display = "none";
    document.getElementById("recover-tab").style.display = "block";
    document.getElementById("reset-password-tab").style.display = "none";
    document.getElementById("create-account-tab").style.display = "none";
}

function showResetPasswordTab() {
    document.getElementById("login-tab").style.display = "none";
    document.getElementById("recover-tab").style.display = "none";
    document.getElementById("reset-password-tab").style.display = "block";
    document.getElementById("create-account-tab").style.display = "none";
}

function showCreateAccountTab() {
    document.getElementById("login-tab").style.display = "none";
    document.getElementById("recover-tab").style.display = "none";
    document.getElementById("reset-password-tab").style.display = "none";
    document.getElementById("create-account-tab").style.display = "block";
}

// Mostrar a aba de Login por padrão
window.onload = showLoginTab;