 let body = document.querySelector("body")
 let nav = document.querySelector("nav")
 let list = document.querySelector("div")
 let logo = document.querySelector("#firstImg")



   
   


                    for(i=1;i<115;i++){
                    const surahs = [
                  "",  "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة",
                    "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
                    "هود", "يوسف", "الرعد", "إبراهيم", "الحجر",
                    "النحل", "الإسراء", "الكهف", "مريم", "طه",
                    "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان",
                    "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
                    "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر",
                    "يس", "الصافات", "ص", "الزمر", "غافر",
                    "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية",
                    "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
                    "الذاريات", "الطور", "النجم", "القمر", "الرحمن",
                    "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
                    "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق",
                    "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
                    "نوح", "الجن", "المزمل", "المدثر", "القيامة",
                    "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
                    "التكوير", "الإنفطار", "المطففين", "الانشقاق", "البروج",
                    "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
                    "الشمس", "الليل", "الضحى", "الشرح", "التين",
                    "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
                    "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل",
                    "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
                    "المسد", "الإخلاص", "الفلق", "الناس"
                    ];

                    

                    
                    
                    oudio = document.createElement("audio")
                    source =document.createElement("source")
                    btn = document.createElement("button")
                    
                    source.setAttribute("id",`np${i}`)
                    oudio.setAttribute("id",`${i}`)
                    btn.setAttribute("id",`x${i}`)
                    btn.style=`
                    background-image:url('img/5065130.png');
                    `                                               
                    btn.setAttribute("onclick",`playx(${i})`)
                    btn.setAttribute("onblur",`pusex(${i})`,)                                                               
                    oudio.appendChild(source)
                    title=document.createElement("p")                     
                    div = document.createElement("div")
                    
                    
                    
                    img = document.createElement("img")
                    img.setAttribute("id",`r${i}`)
                    img.setAttribute("src","img/5488650.png")                
                    img.setAttribute("onclick",`cratDiv(${i})`)
                    img.setAttribute("onblur",`crat(${i})`)                                  
                    img.style=`width:30px;
                    text-align:;
                    margin-right:;
                    margin-left:-95%;
                    margin-top:4%;
                    z-index:50;        
                    position:absolute;
                    `      
                    
                    fin = document.createElement("div")
                    fin.innerHTML=`
                    <div align="center" >
                    <hr id="myHr" > <br>
                    <a href="https://chat.whatsapp.com/KNZXOcIvDQ6KRrqUid6xx5" >
                    <img src="img/3647863.png" class="img" ></a>
                    <a href="https://youtube.com/@bot-app-master?si=-6cBxzsT1ytHg9vS" >
                    <img src="img/3647861 (1).png" class="img"  ></a>
                    <img src="img/3647856.png" class="img"  >
                    <p class="p9">جــمـيـع الـحـقـوق مـحـفـوضـة ©2024</p> 
                    </div>
                    
                    
                    `
                    mb = document.createTextNode(`${45.6+i} MB`)
                    topic = document.createTextNode(`سورة ${surahs[i]}`)                 
                    title.append(topic)  
                    title.setAttribute("id",`title`)
                    
                    btn.appendChild(title)
                    pub= document.createElement("button")
                    pub.style=`width:9%;height:40px;background-color:transparent;margin-left:35%;position:absolute;z-index:50;margin-top:3%;`
                    
                    function puub(m){
                    document.getElementById(`x${m}`).style.backgroundImage='url(img/1654021.png)'
                    }
                    pub.setAttribute("onclick",`puub(${i})`)
               
                    div.append(pub)
                    hr = document.createElement("hr") 
                    hr.setAttribute("id",`h${i}`)   
                    btn.append(mb)                                           
                    div.append(hr)
                    div.append(btn)
                    div.append(img)
                    div.append(oudio)
                    list.append(div)
                    
                    newDiv = document.createElement("div")
                    newDiv.setAttribute("id","newDiv") 
                    
             
                    
                    // استخدام Fetch API لجلب البيانات
             
                     
                     
                     
             
                     
                     
                     z=1  
                     k=0       
                     logo.setAttribute("src","img/527251.png")
                     
                     
                     bbttnn = document.getElementById(`x${i}`)
                     
                     function changeColor() {
                     newDiv.style.backgroundColor=nav.style.backgroundColor
                     z += 1;
                     const hrs = document.querySelectorAll("hr");
                     const paragraphs = document.querySelectorAll("p"); // استهداف جميع الفقرات
                     //   bbttnn.style.backgroundColor="transparent"
                     if (z % 2 == 0) {
                     
                     list.style.backgroundColor = "";
                     nav.style.backgroundColor = "#F0F8FF";
                     logo.setAttribute("src", "img/527251.png");
                     newDiv.style.backgroundColor = "#F0F8FF";
                     
                     hrs.forEach(hr => {
                     hr.style = `
                     border-color: transparent;
                     box-shadow: 1px 1px 10px #085484;
                     `;
                     });
                     
                     // تغيير لون جميع الفقرات
                     paragraphs.forEach(p => {
                     p.style.color = "#085484"; // أو أي لون تريده
                     });
                     } else {
                     hrs.forEach(hr => {
                     hr.style = `
                     border-color: transparent;
                     box-shadow: 1px 1px 10px green;
                     `;
                     });
                     
                     // إعادة تعيين لون جميع الفقرات
                     paragraphs.forEach(p => {
                     p.style.color = "green"; // أو أي لون تريده
                     });
                     
                     body.style.backgroundColor = "";
                     nav.style.backgroundColor = "#F0FFF0";
                     logo.setAttribute("src", "img/527251.png");
                     newDiv.style.backgroundColor = "#F0FFF0";
                     }
                     } 
         
                     function retoure(m){
                     body.append(fin)
                     newDiv = document.getElementById("newDiv")
                     
                     if (newDiv) {
                     // إزالة جميع العناصر الفرعية
                     while (newDiv.firstChild) {
                     newDiv.removeChild(newDiv.firstChild);
                     }
                     // إزالة newDiv نفسه
                     newDiv.remove();
                     }
                     
                     
                     document.getElementById(`${m}`).pause()
                     document.getElementById(`${m}`).duration==0
                     nav.style.position="fixed"
                     body.style.maxWidth="500px"                
                     body.style.padding="0px"
                     body.style.margin="0px"                     
                     list.style.width="100%"
                     list.style.height="100%"
                     list.style.opacity="100"
                     document.getElementById(`x${m}`).style.backgroundColor="transparent"
                     document.getElementById(`x${m}`).style.backgroundImage="url(img/1654021.png)"
                     k=0
                     }
                     q=0
                     function pling(m){
                     q+=1
                     if(q%2!=0){
                     playing.style.backgroundImage='url(img/3512272.png)';
                     document.getElementById(`${m}`).pause()
                     }
                     else{
                     playing.style.backgroundImage='url(img/5355372_audio_multimedia_music_pause_sound_icon.png)';
                     document.getElementById(`${m}`).play()
                     }
                     }
                     
                     function playx(m){
                      
                     k+=1
                     console.log( document.getElementById(`np${m}`).src,surahs[m])
                     bttn =  document.getElementById(`x${m}`)     
                     if(z % 2 == 1){
                     bttn.style.backgroundColor="#F0FFF0"
                     }  
                     if(z % 2 == 0){
                     bttn.style.backgroundColor="#F0F8FF"
                     }
                     if(k>=2){
                     fin.remove()                    
                     
                     bttn.style.backgroundImage="url(img/)"
              
                     list.style.opacity="0"   
                     nav.style.position="fixed"
                     list.style.width="0px"
                     list.style.height="0px"
                     list.style.zIndex="0"
                     
                     newDiv.style=`
                     
                     width:100%;
                     height:100%;
                     background-color:;
                     position:fixed;
                     z-index:2000;
                     margin-block:17%;
                     position:fixed;
                     background-image:url('img/bdjfru.png');
                     background-size:100%;
                     background-repeat:no-repeat;
                     background-position:50% 50%;
                     opacity:100;
                     `
                      newDiv.style.backgroundColor = "#F0FFF0";
                     a = document.createElement("a")
                     if(m<10){
                     apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/00${m}.mp3`;
                     a.setAttribute("href",`${apiUrl}`)
                     a.setAttribute("download",``)
              
                     }
                     if(m>=10){
                     apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/0${m}.mp3`;
            a.setAttribute("href",`${apiUrl}`)
            a.setAttribute("download",``)
          
                     }
                     if(m>=100){
                     apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/${m}.mp3`;
        
      a.setAttribute("href",`${apiUrl}`)
      a.setAttribute("download",``)
                     }
                     
       
                     repeter = document.createElement("button")
                     titre = document.createElement("p")
                     retour = document.createElement("button")
                     partager = document.createElement("button")
                     avance = document.createElement("button")
                     retarde = document.createElement("button")
                     range = document.createElement("input")
                     playing = document.createElement("button")
                     progress = document.createElement("div")
                     progress.setAttribute("id","progress")
                
                     range.setAttribute("type","range")
                     
                     retour.style=` 
                     background-image:url('img/4829870_arrow_back_left_icon.png');
                     position:fixed;
                     width:40%;
                     z-index:700;
                     background-size:40%;
                     
                     background-position:8%; 
                     background-color:;                                `            
                     retour.setAttribute("onclick",`retoure(${m})`)
                     
                     partager.style=`
                     padding-block:0%;
                     background-image:url('img/5831144.png');
                     margin-left:80%;
                     position:; 
                     background-position:8%;             
                     `
                     partager.setAttribute("onclick",`cratDiv(${m})`)
                     repeter.style=`
                     padding-block:0%;
                     background-image:url('img/216588_download_arrow_button_icon.png');
                     //  margin-left:80%;
                     position:relative; 
                     background-position:;             
                     `
                     
                     range.style=`
                     width:60%;
                     padding:1%;
                     height:;
                     margin-block:450px;
                     margin-botton:0%;
                     margin-left:20%;
                     position:fixed;
                     background-image:url('img/');
                     border:none;
                     
                     
                     
                     `
                     retarde.style=`
                     margin-block:475px;
                     margin-botton:0%;
                     margin-left:20%;
                     position:fixed;
                     background-position:8%;             
                     background-image:url('img/3512265.png');
                     
                     `
                     playing.style=`
                     background-position:7%;             
                     margin-block:475px;
                     margin-botton:0%;
                     margin-left:40%;
                     position:fixed;
                     background-image:url('img/5355372_audio_multimedia_music_pause_sound_icon.png');
                     `
                     
                     playing.setAttribute("onclick",`pling(${m})`)
                     avance.style=`
                     margin-block:475px;
                     margin-botton:0%;
                     margin-left:60%;
                     position:fixed;
                     background-position:8%;
                     background-image:url('img/3512266.png');             
                     `
                     titre.style=`
                     margin-block:358px;
                     font-size:35px;
                     color:green;
                     margin-botton:0%;
                     width:100%;
                     text-align:center;
                     margin-left:5px;
                     position:fixed;
                     font-family: 'Amiri', serif;
                     `
                  
                     
                     
                     range.setAttribute("value",0)
                     range.setAttribute("min",0)
                     range.setAttribute("max",100)
                     range.setAttribute("id","range")
                     range.setAttribute("step","1") 
                     center = document.createElement("center")
                     titre.append(document.createTextNode(`${surahs[m]}`))
                     br= document.createElement("br")
                     center.append(titre)
                     newDiv.append(retour) 
                     newDiv.append(partager) 
                     newDiv.append(titre) 
                     newDiv.append(range) 
                     newDiv.append(progress)
                     newDiv.append(retarde) 
                     newDiv.append(playing) 
                     newDiv.append(avance) 
                     a.append(repeter)
                     newDiv.append(a) 
                     
                     
                     
                     body.append(newDiv)
                     
                     
                     const audio = document.getElementById(`${m}`);            
                     audio.addEventListener('timeupdate', () => {
                     range.value = (audio.currentTime / audio.duration) * 100;
                     });
                     
                     range.addEventListener('input', () => {
                     audio.currentTime = (range.value / 100) * audio.duration;
                     });
                     retarde.addEventListener('click', () => {
                     audio.currentTime = (range.value / 100) * audio.duration -5;
                     });
                     avance.addEventListener('click', () => {
                     audio.currentTime = (range.value / 100) * audio.duration + 5;
                     });
                     
                     setInterval(()=>{   if(audio.currentTime / audio.duration *100 ==100){
                     playing.style.backgroundImage='url(img/3512272.png)';
                     }  },500)
            
                     progress.setAttribute("id","progresss")
                     
                     setInterval(()=>{ progress.style.width = `${range.value *2.17}px`;
                     progress.textContent = `${range.value}% ` },500)
                     
                     
                     range.addEventListener('input', () => {
                     progress.style.width = `${range.value *2.17}px`;
                     progress.textContent = `${range.value} %`  
                     });
                     
                     progress.style= `
                     
                     
                     background-color: #4CAF50;
                     color: #fff;
                     height:17px;
                     padding-left:2%;
                     border-radius: 5px;
                     transition: width 0.5s;
                     margin-block:450px;
                     margin-botton:0%;
                     margin-left:20%;
                     position:fixed;
                     
                     `
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     }
                     else{
                     
                     disq =  document.getElementById(`${m}`) 
                     img9 =   document.getElementById(`x${m}`) 
                     disq.play()
                     img9.style.backgroundImage="url(img/1654027.png)"
                     
                     }
                     
                     
                     }
                     
                     function pusex(m){
                     if(k>=2){
                     
                     
                     
                     //   audio = document.getElementById(`${m}`)
                     
                     
                     }
                     else{
                     
                     
                     document.getElementById(`x${m}`).style.backgroundColor="transparent" 
                     
                     document.getElementById(`${m}`).pause()         
                     imge =   document.getElementById(`x${m}`) 
                     imge.style.backgroundImage=`url('img/5065130.png')`
                     k=0
                     }
                     
                     }
                     
                     function cratDiv(m){          
                     imge =   document.getElementById(`x${m}`) 
                     imge.style.backgroundImage=`url('img/1654021.png')`
                     
                     if (navigator.share) {
                     navigator.share({
                     title: document.title,
                     text: '',
                     url: window.location.href
                     }).then(() => {
                     console.log('Thanks for sharing!');
                     }).catch((error) => {
                     console.error('Error sharing:', error);
                     });
                     } else {
                     // إذا لم يكن Web Share API مدعومًا، يمكنك نسخ الرابط إلى الحافظة
                     copyToClipboard(window.location.href);
                     alert('Link copied to clipboard!');
                     }
                     }
                     
                     function copyToClipboard(text) {
                     const textarea = document.createElement('textarea');
                     textarea.value = text;
                     document.body.appendChild(textarea);
                     textarea.select();
                     document.execCommand('copy');
                     document.body.removeChild(textarea);
                     }
                     
                     
                     
                     function crat(m){  
                     imge =   document.getElementById(`x${m}`) 
                     imge.style.backgroundImage=`url('src/for you/')`
                     
                     }
                  
                     audioElement =  document.getElementById(`${i}`)
                     function protocol(m){ 
                           if(m==0){
                           apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/001.mp3`;
                           document.getElementById(`np${m}`).src=apiUrl
                           console.log(apiUrl)
                           }
    
                           if(m>=0 & m<10){
                         
                           apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/00${m}.mp3`;
                           document.getElementById(`np${m}`).src=apiUrl
                       //    console.log( document.getElementById(`np${m}`).src)
                           }
                           if(m>=10 & m<100){
                           apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/0${m}.mp3`;
                           document.getElementById(`np${m}`).src=apiUrl
                       //    console.log(apiUrl)
                           }
                           if(m>=100 & m<120){
                           apiUrl = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/${m}.mp3`;
                           document.getElementById(`np${m}`).src=apiUrl
                         //       console.log(apiUrl)
                           
                           }
    
                      audioElement.load()
                           

       
                     }
                      protocol(`${i}`)
                     
                     
               
                     
                     
                     
                     
    
                     }        

       
body.append(fin)
         
         
         
        
               
      
         


         
       
     
            
       











      
      
      
      





                  




 
  
 



 