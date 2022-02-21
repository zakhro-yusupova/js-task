 var amount = Number(prompt("Pul miqdorini kiriting"));

 var tickRoom = 750 * 10900;
 var museum = 120 * 12272.64;

var allcosts = (tickRoom + museum);

if (amount >= allcosts){
  console.log(`Oq yo'l, Alisher!`);
}
else{
  console.log(`Alisher, ozgina sabr qilish kerak bo'lar ekan.`)
}