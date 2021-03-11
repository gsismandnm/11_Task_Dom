//getElementsByClassName ile sağ tarafta yer alan listelerimiz üzerinde oynamalar yaptık.



// //GETELEMENTSBYCLASSNAME İLE ELEMENTİMİZİ SEÇTİK.
//document.getElementsByClassName
 //let items = document.getElementsByClassName('list-group-item');

//         //LİSTE GRUBU İÇİNDEKİ 2'NCİ SIRADAKİ ELEMENTİN İÇERİĞİNİ KENDİ İSTEDİĞİMİZ YAZI İLE DEĞİŞTİRDİK.
//       items[1].textContent =  `app.js dosyası ile bu elementin içeriğini değiştirdik.;`

//         //LİSTE GRUBU İÇİNDEKİ 4'NCÜ SIRADAKİ ELEMENTİN ARKA RENGİNİ MAVİ YAPTIK.
//       items[3].style.backgroundColor = 'blue';
        

//         //LİSTE GRUBU İÇİNDEKİ 5'NCİ SIRADAKİ ELEMENTİN YAZI RENGİNİ KIRMIZI YAPTIK.
 //        items[4].style.color='red'



let formClass= document.querySelector("col-md-6");


let formClass = document.createElement('form');
        formClass.id ='divForm';
        formClass.className ='formGroup';
        
formClass.style.border='2px';
formClass.style.backgroundColor='red';



