// 1 task
// function Odd(number) {
//     let res = []
//     for (let i = 1; i <= number; i++ ) {
//         if (i % 2 != 0) {
//             res += i }
//          }
//         return res
// }
// console.log(Odd(10))

 
// 2 task  

// function raqamlarYigindisi(son) {
//     let yigindi = 0;
//     let raqamlar = son.toString();
  
//     for (let i = 0; i < raqamlar.length; i++) {
//       yigindi += parseInt(raqamlar[i]);
//     }
  
//     return yigindi;
//   }
 
//   console.log(raqamlarYigindisi(456));      
//   console.log(raqamlarYigindisi(123456));   
  
// 3 task 

// function reverse(text) {
//     let reverse = ''
//     for (let i = text.lenght - 1; i >=0; i--) {
//         reverse += text[i]
//     }
//     return reverse }


// console.log(reverse('dunyo'))    

// 4 task 

// function table(number) {
//     let n = 10
//     let res = []
//     for (let i = 1; i <= n; i++ ) {
//         res.push(number * i ) 
//     } 
//     return res
// } console.log(table(5))

// 5 task 

// function calc(n, k) {
//     let sum = 0;
//     let i = 0;
    
//     while (i < k) {
//         sum += n;
//         i++;
//     } 
    
//     return sum;
// }

// console.log(calc(3, 4)); 
// console.log(calc(2,5)); 

// 6 task

// function kopaytirishJadvali(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= n; j++) {
//             row += (i * j).toString().padStart(4, ' ');
//         }
//         console.log(row);
//     }
// }

// console.log("n = 3:");
// kopaytirishJadvali(3);

// console.log("\nn = 4:");
// kopaytirishJadvali(4);

// 7 task 

// function bahola(ball) {
//     if (ball >= 90 && ball <= 100) {
//         return "A'lo";
//     } else if (ball >= 70 && ball <= 89) {
//         return "Yaxshi";
//     } else if (ball >= 60 && ball <= 69) {
//         return "Qoniqarli";
//     } else if (ball >= 0 && ball <= 59) {
//         return "Qoniqarsiz";
//     } else {
//         return "Notogri ball kiritildi";
//     }
// }

// console.log(bahola(85)); 
// console.log(bahola(95)); 
// console.log(bahola(65)); 
// console.log(bahola(45)); 

// 8 task 

// function haftaKuni(kun) {
//     switch (kun) {
//         case 1:
//             return "Dushanba";
//         case 2:
//             return "Seshanba";
//         case 3:
//             return "Chorshanba";
//         case 4:
//             return "Payshanba";
//         case 5:
//             return "Juma";
//         case 6:
//             return "Shanba";
//         case 7:
//             return "Yakshanba";
//         default:
//             return "Noto'g'ri raqam";
//     }
// }

// console.log(haftaKuni(3)); 
// console.log(haftaKuni(7)); 
// console.log(haftaKuni(8)); 

// 8 task 

// function yoshToifa(yosh) {
//     if (yosh >= 0 && yosh <= 12) {
//         return "Bola";
//     } else if (yosh >= 13 && yosh <= 19) {
//         return "O'smir";
//     } else if (yosh >= 20 && yosh <= 59) {
//         return "Katta";
//     } else if (yosh >= 60) {
//         return "Qariya";
//     } else {
//         return "Noto‘g‘ri yosh";
//     }
// }

// console.log(yoshToifa(8));   
// console.log(yoshToifa(15));  
// console.log(yoshToifa(45));  
// console.log(yoshToifa(65));  

// 9 task 

// function oyKunlari(oy) {
//     if (oy === 1 || oy === 3 || oy === 5 || oy === 7 || oy === 8 || oy === 10 || oy === 12) {
//         return 31;
//     } else if (oy === 4 || oy === 6 || oy === 9 || oy === 11) {
//         return 30;
//     } else if (oy === 2) {
//         return 28;
//     } else {
//         return "Noto'g'ri oy";
//     }
// }

// console.log(oyKunlari(2)); 
// console.log(oyKunlari(7));  
// console.log(oyKunlari(13)); 

// 10 task 

// function loginTekshir(login, parol) {
//     if (login === "admin" && parol === "12345") {
//         return "Xush kelibsiz, Admin";
//     } else if (login === "user" && parol === "password") {
//         return "Xush kelibsiz, Foydalanuvchi";
//     } else {
//         return "Login yoki parol xato";
//     }
// }

// console.log(loginTekshir("admin", "12345"));    
// console.log(loginTekshir("user", "password"));  
// console.log(loginTekshir("admin", "wrong"));    

// 11 task 

// function faslAniqlovchi(oy) {
//     if (oy === 12 || oy === 1 || oy === 2) {
//         return "Qish";
//     } else if (oy >= 3 && oy <= 5) {
//         return "Bahor";
//     } else if (oy >= 6 && oy <= 8) {
//         return "Yoz";
//     } else if (oy >= 9 && oy <= 11) {
//         return "Kuz";
//     } else {
//         return "Noto'g'ri oy raqami";
//     }
// }

// console.log(faslAniqlovchi(1));  
// console.log(faslAniqlovchi(4));  
// console.log(faslAniqlovchi(7));  
// console.log(faslAniqlovchi(10)); 

// 12 task 

// function bahoTavsifi(baho) {
//     if (baho === 5) {
//         return "A'lo";
//     } else if (baho === 4) {
//         return "Yaxshi";
//     } else if (baho === 3) {
//         return "Qoniqarli";
//     } else if (baho === 2) {
//         return "Qoniqarsiz";
//     } else if (baho === 1) {
//         return "Yomon";
//     } else {
//         return "Noto'g'ri baho";
//     }
// }

// console.log(bahoTavsifi(5));  
// console.log(bahoTavsifi(3));  
// console.log(bahoTavsifi(0)); 

// 13 task 

// function yilFasl(fasl) {
//     if (fasl.toLowerCase() === "qish") {
//         return "Dekabr, Yanvar, Fevral";
//     } else if (fasl.toLowerCase() === "bahor") {
//         return "Mart, Aprel, May";
//     } else if (fasl.toLowerCase() === "yoz") {
//         return "Iyun, Iyul, Avgust";
//     } else if (fasl.toLowerCase() === "kuz") {
//         return "Sentabr, Oktabr, Noyabr";
//     } else {
//         return "Bunday fasl yo'q";
//     }
// }

// console.log(yilFasl("qish"));   
// console.log(yilFasl("yoz"));    
// console.log(yilFasl("kecha")); 

// 14 task 

// function sonTavsifi(son) {
//     return son === 0 ? "Nol" :
//         (son > 0 ? (son % 2 === 0 ? "Musbat juft son" : "Musbat toq son") :
//         (son % 2 === 0 ? "Manfiy juft son" : "Manfiy toq son"));
// }

// console.log(sonTavsifi(4));  
// console.log(sonTavsifi(-3)); 
// console.log(sonTavsifi(0));  

// 15 task 

// function rangKodi(rang) {
//     return rang.toLowerCase() === "qizil" ? "#FF0000" :
//            rang.toLowerCase() === "yashil" ? "#00FF00" :
//            rang.toLowerCase() === "ko'k" ? "#0000FF" :
//            "Bunday rang kodi yo'q";
// }


// console.log(rangKodi("qizil"));  
// console.log(rangKodi("yashil")); 
// console.log(rangKodi("qora"));  


// 16 task 

// function createMatch(team1, team2, score) {
//     const scoreParts = score.split(":");
//     const score1 = parseInt(scoreParts[0]);
//     const score2 = parseInt(scoreParts[1]);

//     const winner = score1 > score2 ? team1 : (score1 < score2 ? team2 : "Durrang");

//     return {
//         team1: team1,
//         team2: team2,
//         score: score,
//         winner: winner,
//         duration: "90 min",
//         stadium: "Santiago Bernabeu"
//     };
// }

// console.log(createMatch("Real Madrid", "Barcelona", "2:1"));

// 17 task 

// function getWeather(city, temperature) {
    
//     const namlik = Math.floor(Math.random() * 101); 
//     const windSpeed = Math.floor(Math.random() * 21); 
    
//     let status;
//     if (temperature >= 30) {
//         status = "Issiq";
//     } else if (temperature >= 20) {
//         status = "Quyoshli";
//     } else if (temperature >= 10) {
//         status = "Salqin";
//     } else {
//         status = "Sovuq";
//     }

//     return {
//         city: city,
//         temperature: temperature,
//         namlik: namlik,
//         windSpeed: windSpeed,
//         status: status
//     };
// }
// console.log(getWeather("Tashkent", 25));

// 18 task 

function botReply(message) {
   
    const currentTime = new Date().toLocaleTimeString();

    let reply;
    if (message.endsWith('?')) { 
        if (message.toLowerCase().includes('havo yaxshimi')) {
            reply = "Ha";
        } else {
            reply = "Tushunmadim";
        }
    } else {
        reply = "Tushunmadim";
    }

    return {
        message: message,
        reply: reply,
        time: currentTime
    };
}

console.log(botReply("Bugun havo yaxshimi?"));
