// bagian judul
const body = document.body;

const title = document.createElement("h1");
title.textContent = "Survey Perokok";
// body.appendChild(title);

// bagian form
const form = document.createElement("form");

//name
const nameSide = document.createElement("div");

const labelName = document.createElement("label")
labelName.textContent = "Nama: "
labelName.setAttribute = ("for", "nama")

const inputName = document.createElement("input")
inputName.setAttribute("type","text");
inputName.setAttribute("id", "name")
nameSide.append(labelName, inputName);//nameSide

//umur
const ageSide = document.createElement("div")

const labelAge = document.createElement("label")
labelAge.setAttribute("for", "umur")
labelAge.textContent = "Umur: "
const inputAge = document.createElement("input")
inputAge.setAttribute("type","number")
inputAge.setAttribute("id","umur")
ageSide.append(labelAge, inputAge)

//jenis kelamin
const genderSide = document.createElement("div")
const labelsGender = document.createElement("label")
labelsGender.textContent = "Jenis Kelamin: "
genderSide.appendChild(labelsGender)



const genders = [
    {id: "L", text: "Laki-laki"},
    {id: "P", text: "Perempuan"}
];
for(let i=0; i < genders.length; i++){
    const inputGender = document.createElement("input")
    inputGender.setAttribute("type", "radio")
    inputGender.setAttribute("name", "gender")
    inputGender.setAttribute("id", genders[i].id)

    const labelGender = document.createElement("label")
    labelGender.setAttribute("for", genders[i].id)
    labelGender.textContent = genders[i].text;

    genderSide.append(labelGender, inputGender)
}


//apakah anda seorang perokok
const questionSide = document.createElement("div")

const labelPerokok = document.createElement("label")
labelPerokok.textContent ="Apakah anda seorang perokok? "
const selectRokok = document.createElement("select")
// questionSide.appendChild(labelPerokok)
const opt1 = document.createElement("option")
opt1.setAttribute("disabled", "true")
opt1.setAttribute("selected", "true")
opt1.textContent = "Pilih salah satu: "

const opt2 =document.createElement("option")
opt2.textContent = "Ya"

const opt3 = document.createElement("option")
opt3.textContent = "Tidak"

selectRokok.append(opt1, opt2, opt3)
questionSide.append(labelPerokok,selectRokok)


//brand rokok

const brandSide = document.createElement("div")

const labelBrand = document.createElement('label')
labelBrand.textContent = "Brand rokok yang digunakan : "
brandSide.appendChild(labelBrand)

const brands = [
    {id: "s",text:"Sampoerna" },
    {id: "surya", text: "Surya "},
    {id: "e", text: "esse"}
]

for(let i = 0;i < brands.length; i++){
    const inputBrand = document.createElement("input");
    inputBrand.setAttribute("type", "checkbox");
    inputBrand.setAttribute("name", "rokok");
    inputBrand.setAttribute("id", brands[i].id);
    
    const labelRokok = document.createElement("label");
    labelRokok.setAttribute("for", brands[i].id);
    labelRokok.textContent = brands[i].text;

    brandSide.append(labelRokok,inputBrand);
}

//button
const button = document.createElement("button")
button.setAttribute("type", "submit")
button.textContent= "Submit"
form.append(nameSide, ageSide, genderSide, questionSide, brandSide, button)


body.append(title, form);