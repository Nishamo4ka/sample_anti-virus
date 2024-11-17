
    function validphone(phone)
{
len=phone.length
digits="0123456789"
if(len != 7 && len != 9)
{alert("Неверное количество знаков в номере")
document.dataentry.phone.focus()}

for(i=0; i<3; i++)
{if (digits.indexOf(phone.charAt(i))<0)
{alert("Это должны быть цифры")
document.dataentry.phone.focus()
break}
}

}