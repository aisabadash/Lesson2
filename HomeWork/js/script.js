   // Якщо змінна більше нуля - виведіть true, менше - false
   //Перевірте це на варіантах  1, 0, -3.

   // let value = 1;
   // (value > 0) ? console.log(true) : console.log(false);

   // Якщо змінна ="test" - виведіть true,
   //Перевірте це на варіантах  'test', "qwerty", true

   // let value = prompt("Введіть значення:");
   // if (value) {
   //    (value.toLowerCase() === "test") ? console.log(true) : console.log(false);
   // } else {
   //    console.log("Користквач не увів значення!");
   // }

   // Якщо змінна більше 10 -  відніміть 5,
   //менше - додайте 5, результат виведіть в консоль
   //Перевірте це на варіантах  1, 10, 13.

   // let value = prompt("Введіть число:");
   // (value > 10) ? console.log(Number(value) - 10) : console.log(Number(value) + 5);

   //Зробіть сервіс який отримує число від 1 до 12
   // виведіть місяць який дорівнює числу

   // let value = prompt("Введіть число від 1 до 12 включно:");
   // let month = null;

   // if (value) {
   //    switch (Number(value)) {
   //       case 1:
   //          month = "січень";
   //          break;
   //       case 2:
   //          month = "лютий";
   //          break;
   //       case 3:
   //          month = "березень";
   //          break;
   //       case 4:
   //          month = "квітень";
   //          break;
   //       case 5:
   //          month = "травень";
   //          break;
   //       case 6:
   //          month = "червень";
   //          break;
   //       case 7:
   //          month = "липень";
   //          break;
   //       case 8:
   //          month = "серпень";
   //          break;
   //       case 9:
   //          month = "вересень";
   //          break;
   //       case 10:
   //          month = "жовтень";
   //          break;
   //       case 11:
   //          month = "листопад";
   //          break;
   //       case 12:
   //          month = "грудень";
   //          break;
   //       default:
   //          alert("Не вірно введено значення");
   //    }
   // }

   // if (month != null) {
   //    console.log(month);
   // }

   //Зробіть сервіс який отримує тризначне число
   //Поверніть користувачу сумму цих чисел

   // let value = prompt("Введіть тризначне число:");

   // if (value) {
   //    if (Number(value) > 99 && Number(value) < 1000) {
   //       let arr = value.split("");
   //       let rez = null;
   
   //       arr.forEach(element => {
   //          rez = rez + Number(element);
   //       });
   //       console.log(`Введено число ${value}. Сума чисел = ${rez}`);
   //    } else {
   //       alert("Не вірно введено число");
   //    }
   // }   
