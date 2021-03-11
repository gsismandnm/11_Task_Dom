 //Yeni bir container oluşturduk.
let container = document.createElement('div');
        container.className='container';
        //oluşturduğumuz container'ı body'e bağladık.
        document.body.appendChild(container);
        //Sayfamızın arka sayfasını renklendirdik.
        document.body.style.backgroundColor = "#31cabb";

//container içine bir row oluşturduk.
let row=document.createElement('div');
        row.className='row';
        document.querySelector(".container").appendChild(row);

//yaptığımız row u 5-2-5'li columa ayırdık. İlk sol columu oluşturduk. Rengini kırmızı yaptık.
let colSol=document.createElement('div');
        colSol.className='col-md-5';
        colSol.style.backgroundColor='red';
        colSol.style.border='solid';
        row.appendChild(colSol);

//divFrmGrp adında bir form oluşturduk ve onu columa ekledik.
let divFrmGrp =document.createElement('div');
        divFrmGrp.setAttribute("id", "divFrmGrp");
        divFrmGrp.className='form-group';
        colSol.appendChild(divFrmGrp);

//Email için bir div oluşturup içine label alanı oluşturduk.
let labelEmail =document.createElement('label');
        labelEmail.setAttribute("id", "labelEmail");
        labelEmail.htmlFor="inputEmail";
        labelEmail.innerHTML="E-mail for Register";
        divFrmGrp.appendChild(labelEmail);

//Email girebilmek için bir holder alan oluşturduk.
let inputEmail=document.createElement('input');
        inputEmail.type="email";
        inputEmail.id='inputEmail'
        inputEmail.className="form-control";
        inputEmail.placeholder="Lütfen e-mail adresinizi giriniz."
        divFrmGrp.appendChild(inputEmail);

//Password girmek için label alanı oluşturduk.
let labelSifre =document.createElement('label');
        labelSifre.setAttribute("id", "labelSifre");
        labelSifre.htmlFor="txtPassword";
        labelSifre.innerHTML="Password";
        divFrmGrp.appendChild(labelSifre);

//Password yazabilmek için input kısmını oluşturduk.
let inputSifre=document.createElement('input');
        inputSifre.id='inputSifre';
        inputSifre.type="password";
        inputSifre.className="form-control";
        inputSifre.placeholder="Lütfen şifrenizi giriniz @by Fat"
        divFrmGrp.appendChild(inputSifre);

//yaptığımız row u 5-2-5'li columa ayırmıştık. Orta columu oluşturduk.
let colOrta=document.createElement('div');
        colOrta.className='col-md-2';
        colOrta.style.borderBottom='solid';
        colOrta.style.borderTop='solid';
        row.appendChild(colOrta);

//orta colum içine "InfoTechAcademy" yazdık.
let paraReklam=document.createElement('div')
        paraReklam.className='p'
        paraReklam.textContent='InfoTechAcademy';
        colOrta.appendChild(paraReklam);

//yaptığımız row u 5-2-5'li columa ayırdık. İlk sağ columu oluşturduk.
let colSag=document.createElement('div');
        colSag.className='col-md-5';
        colSag.style.backgroundColor='white';
        colSag.style.border='solid';
        row.appendChild(colSag);

const newLocal = 'ul';
//sağ tarafta oluşturduğumuz columun içine ul ekledik.
let ulListe = document.createElement('ul');
        ulListe.className='list-group';
        colSag.appendChild(ulListe);

//ul içine birinci listeyi oluşturduk.
let liListe1=document.createElement('li');
        liListe1.className='list-group-item';
        liListe1.innerHTML="A Grubu İsim Listesi";
        liListe1.style.backgroundColor='yellow';
        ulListe.appendChild(liListe1);

//ul içine ikinci listeyi oluşturduk.
let liListe2=document.createElement('li');
        liListe2.className='list-group-item';
        liListe2.innerText="B Grubu İsim Listesi";
        liListe2.style.backgroundColor='yellow';
        ulListe.appendChild(liListe2);

//ul içine üçüncü listeyi oluşturduk.
let liListe3=document.createElement('li');
        liListe3.className='list-group-item';
        liListe3.innerHTML="C Grubu İsim Listesi";
        liListe3.style.backgroundColor='yellow';
        ulListe.appendChild(liListe3);

//container içinde birinci ve ikinci row arasına br ekledik.
let breakMe=document.createElement('br');
        breakMe.className='br';
        container.appendChild(breakMe);

//container içine ikinci row oluşturduk.
let row2=document.createElement('div');
        row2.className='row';
        document.querySelector(".container").appendChild(row2);

//ikinci rowun içine bir colum tanımladık.
let colAlt=document.createElement('div');
        colAlt.className='col-md-12';
        colAlt.style.border='solid';
        row2.appendChild(colAlt);
        colAlt.style.height='50px';

let paraKayanYazı=document.createElement('div');
        paraKayanYazı.className='h3';
        paraKayanYazı.innerHTML = 'Hack Your Future - Grecee - 2021 @by BFat';
        paraKayanYazı.style.textAlign='center';
        colAlt.appendChild(paraKayanYazı);
