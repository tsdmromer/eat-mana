document.addEventListener('DOMContentLoaded', () => {

    let mana = 0;
    const maxMana = 100;
    const manaRegenRate = 5; // Her saniyede 5 mana yenile
    const manaBar = document.getElementById("mana-fill");
    const manaText = document.getElementById("mana-text");
    const useManaBtn = document.getElementById("useMana20");
    const useManaBtn1 = document.getElementById("useMana30");
    const useManaBtn2 = document.getElementById("useMana40");
    const useManaBtn3 = document.getElementById("useMana50yenile");


    useManaBtn.addEventListener('click',() => {
        useMana(20)
    })
    useManaBtn1.addEventListener('click',() =>{
        useMana(30)
    })
    useManaBtn2.addEventListener('click',() =>{
        useMana(40)
    })
    useManaBtn3.addEventListener('click',() =>{
        retrieveMana(50)
    })

    function updateManaUI() {
        manaBar.style.width = (mana / maxMana) * 100 + "%";
        manaText.textContent = mana;
    }

    // Mana yenileme sistemi
    setInterval(() => {
        if (mana < maxMana) {
            mana += manaRegenRate;
            if (mana > maxMana) mana = maxMana;
            updateManaUI();
        }
    }, 1000); // Her saniyede mana yenile

    // Mana kullanma fonksiyonu
    function useMana(amount) {
        if (mana >= amount) {
            mana -= amount;
            updateManaUI();
        } else {
            alert("Yeterli mana yok!");
        }
    
    }
    function retrieveMana(amount){
        if (mana+amount<=100){
            mana+=amount
            updateManaUI()
        }
        else{
            mana=100 ;
            updateManaUI()
        }
            
    }










})