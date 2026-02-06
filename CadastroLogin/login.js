import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://rzmomstdheorrqwkdfek.supabase.co"
const supabaseKey = "sb_publishable_p9mvf-w3oreBk5KvAMKfvg_tpScOIzu"
const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById("loginForm")
const infoDiv = document.getElementById("info")

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  const email = document.getElementById("email").value.trim()
  const senha = document.getElementById("senha").value.trim()

  const { data, error } = await supabase
    .from("usuarios")
    .select("id, nome, email")
    .eq("email", email)
    .eq("senha", senha)
    .single()

  if (error || !data) {
    infoDiv.innerHTML = `<p style="color:red">Login inválido!</p>`
    return
  }
infoDiv.style.display = "flex";
  infoDiv.innerHTML = `
    <h2>Bem-vindo, ${data.nome}</h2>
    <p>ID do usuário: ${data.id}</p>
    <p>Email: ${data.email}</p>
  `
  setTimeout(()=>{window.location.href = "../HomePage/QuizeTáticoHome.html"},1000)
})
