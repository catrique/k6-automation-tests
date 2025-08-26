export function generateRandomEmail() {
    const dominios = ["gmail.com", "outlook.com", "yahoo.com", "hotmail.com", "empresa.com.br"];

    function gerarGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const guid = gerarGUID(); // Gera o GUID
    const dominio = dominios[Math.floor(Math.random() * dominios.length)]; 
    return `${guid}@${dominio}`;
}