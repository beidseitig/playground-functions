function techList(tech, name) {
    tech = tech.sort();
    let sortedTechList = [];
    if (tech.length === 0) {
        return 'Vazio';
    }
    for (let index in tech) {
        sortedTechList.push({ tech: tech[index], name: name})
    }
    return sortedTechList;
}

console.log(techList([''],'Lucas'));