<?php
include("conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $sql = "SELECT * FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($senha, $user["senha"])) {
            session_start();
            $_SESSION["usuario"] = $user["nome"];

            // 🔹 Redireciona para a homepage
            header("Location: homepage.php");
            exit(); // sempre usar exit depois do header
        } else {
            echo "Senha incorreta.";
        }
    } else {
        echo "Usuário não encontrado.";
    }
}
session_start();
if (!isset($_SESSION["usuario"])) {
    header("Location: form_login.html"); // se não estiver logado, volta pro login
    exit();
}

?>
<h1>Bem-vindo, <?php echo $_SESSION["usuario"]; ?>!</h1>
<p>Essa é a homepage do seu site.</p>
