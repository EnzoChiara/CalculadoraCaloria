const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();  
    
    const genero = getSelectedValue('genero')
    const idade = getInputNumberValue('idade');
    const peso = getInputNumberValue('peso');
    const altura = getInputNumberValue('altura');
    const nivelAtividade = getInputNumberValue('nivel-atividade');
    
    const tmb= Math.round(
        genero === 'fem'
        ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade))
        : (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
    );
    const manutençao = Math.round(tmb * Number(nivelAtividade));
    const perderPeso = manutençao - 450;
    const ganharPeso = manutençao + 450;
    const layout = `
     <h2>Aqui está o seu resultado:</h2>
                <div class="resultado-conteudo">
                    <ul>
                        <li>
                            Seu metabolismo basal é de <strong> ${tmb}  calorias</strong>
                        </li>
                        <li>
                            Para manter seu peso você precisa consumir em média <strong> ${manutençao} calorias</strong>
                        </li>
                        <li>
                            Para perder seu peso você precisa consumir em média <strong>${perderPeso}  calorias</strong>
                        </li>
                        <li>
                            Para ganhar peso você precisa consumir em média <strong>${ganharPeso}  calorias</strong>
                        </li>
                    </ul>
                </div>
                `;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = layout;

});

function getSelectedValue(id){
    const select =document.getElementById(id);
    return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id){
    return Number(document.getElementById(id).value);
}