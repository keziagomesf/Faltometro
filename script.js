function calcular() {
    let vinte = document.getElementById('vin')
    let quarenta = document.getElementById('qua')
    let sessenta = document.getElementById('ses')
    let oitenta = document.getElementById('oit')
    let centoevinte = document.getElementById('cen')
    let faltasTotais = document.getElementById('faltas')
    let res = document.getElementById('res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
 

    if (faltasTotais.value.length == 0) {
        window.alert('Por favor, informe quantas faltas você já registrou na matéria. Se não houver faltas, insira 0.')
       
    } let totalFaltas = Number(faltasTotais.value);
    let faltasPermitidas;
    let ch = ''; 

    if (vinte.checked) {
        ch = `Vinte horas`;
        faltasPermitidas = Number(vinte.value) * 0.25;
    } else if (quarenta.checked) {
        ch = `Quarenta horas`;
        faltasPermitidas = Number(quarenta.value) * 0.25;
    } else if (sessenta.checked) {
        ch = `Sessenta horas`;
        faltasPermitidas = Number(sessenta.value) * 0.25;
    } else if (oitenta.checked) {
        ch = `Oitenta horas`;
        faltasPermitidas = Number(oitenta.value) * 0.25;
    } else if (centoevinte.checked) {
        ch = `Cento e vinte horas`;
        faltasPermitidas = Number(centoevinte.value) * 0.25;
    } else {
        window.alert('Por favor, selecione uma carga horária.');
        return; 
    }

    
    if (totalFaltas > faltasPermitidas) {
        img.setAttribute('src', 'reprovou.jpg');
    } else if (totalFaltas === faltasPermitidas) {
        img.setAttribute('src', 'quase.jpg');
    } else {
        img.setAttribute('src', 'ok.jpg');
    }

   
    res.innerHTML = `Sua matéria tem carga horária de ${ch}. Você pode ter ${faltasPermitidas} faltas e atualmente está com ${totalFaltas} faltas.`;
    innerHTML = `<br>`
    res.appendChild(img);
        }