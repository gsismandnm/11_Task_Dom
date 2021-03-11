//Yeni bir container oluşturduk.
let container = document.createElement('div');
        container.className='container';
        //oluşturduğumuz container'ı body'e bağladık.
        document.body.appendChild(container);

//container içine bir row yaptık.
let row=document.createElement('div');
        row.className='row';
        container.appendChild(row);

//yaptığımız row u 5-2-5'li columa ayırdık. İlk sol columu oluşturduk.
let colSol=document.createElement('div');
        colSol.className='col-md-5';
        row.appendChild(colSol);

//divFrmGrp adında bir form oluşturduk ve onu columa ekledik.
let divFrmGrp =document.createElement('div');
        divFrmGrp.setAttribute("id", "divFrmGrp");
        divFrmGrp.className='form-group';
        colSol.appendChild(divFrmGrp);

//Email girmek için bir div oluşturup içine label ve input alanı oluşturduk.
let labelEmail =document.createElement('label');
        labelEmail.setAttribute("id", "labelEmail");
        labelEmail.htmlFor="inputEmail";
        labelEmail.innerHTML="Email";
        divFrmGrp.appendChild(labelEmail);

let inputEmail=document.createElement('input');
        inputEmail.type="text";
        inputEmail.className="form-control";
        divFrmGrp.appendChild(inputEmail);

//yaptığımız row u 5-2-5'li columa ayırdık. İlk orta columu oluşturduk.
let colOrta=document.createElement('div');
        colOrta.className='col-md-2';
        row.appendChild(colOrta);

//yaptığımız row u 5-2-5'li columa ayırdık. İlk sağ columu oluşturduk.
let colSag=document.createElement('div');
        colSag.className='col-md-5';
        row.appendChild(colSag);

//sağ tarafta oluşturduğumuz columun içine ul ekledik.
let ulListe = document.createElement('ul');
        ulListe.className='list-group';
        colSag.appendChild(ulListe);

//ul içine listeleri oluşturduk.
let li=document.createElement('li');
        li.className='list-group-item';
        li.innerHTML="Birinci Sıra Liste";
        li.appendChild(ulListe);



