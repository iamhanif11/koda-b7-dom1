function celciusToFahreinheit(suhu) {
    return (suhu * 9/5) + 32
}

const inputSuhu  = document.querySelector("#inputSuhu");
const hasil = document.querySelector("#hasil")

inputSuhu.addEventListener('change', (event) => {
    const suhu = event.target.value
    const result = celciusToFahreinheit(suhu)
    hasil.textContent = result
    console.log(result)
})

