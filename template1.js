function personalInfo()
{
  var ipname = document.getElementById('ipname').value;
  var ipcontact = document.getElementById('ipcontact').value;
  var ipemail = document.getElementById('ipemail').value;
  var ipLinkedIn = document.getElementById('ipLinkedIn').value;
  var ipaddress = document.getElementById('ipaddress').value;
  var ipcareerObj = document.getElementById('ipcareerObj').value;
  let ipimg = document.getElementById('ipimg').files[0];

  document.getElementById('tempname').innerHTML= ipname;
  document.getElementById('tempcontact').innerHTML= ipcontact;
  document.getElementById('tempemail').innerHTML= ipemail;
  document.getElementById('templinkedin').innerHTML=  ipLinkedIn;
  document.getElementById('tempadd').innerHTML= ipaddress;
  document.getElementById('tempobj').innerHTML=  ipcareerObj;
  document.getElementById('NameHeader').innerHTML= ipname;

  let reader=new FileReader();
  reader.readAsDataURL(ipimg);

  reader.onloadend= function(){
    document.getElementById('tempimg').src=reader.result;
  };


}

function EducatinalDetails()
{
    var ipClg_Schname = document.getElementById('ipClg_Schname').value;
    var ipCity = document.getElementById('ipCity').value;
    var ipUniv = document.getElementById('ipUniv').value;
    var ipField = document.getElementById('ipField').value;
    var ipFrom = document.getElementById('ipFrom').value;
    var ipTo = document.getElementById('ipTo').value;
    var ipAchieve = document.getElementById('ipAchieve').value;

    ipClg_Schnameb=ipClg_Schname.bold();
    ipFieldb=ipField.bold();
    u=" in "
    v=u.bold();

    var e = document.getElementById('e').innerHTML;

    z=ipFieldb+v+ipClg_Schnameb

    s=`<li> ${z} </li>`+"  "+ipUniv+"<br>"+"  "+ipFrom+"-"+ipTo+"  "+ipCity+"<br>"+" "+ipAchieve+"<br>";
    g=e+s+"<br>";
    document.getElementById('e').innerHTML= g;
}

function CertificationDetails()
{
  var nameCF = document.getElementById('nameCF').value;
  var instituteCF = document.getElementById('instituteCF').value;
  var fromCFmon = document.getElementById('fromCFmon').value;
  var fromCFyer = document.getElementById('fromCFyer').value;
  var toCFmon = document.getElementById('toCFmon').value;
  var toCFyer = document.getElementById('toCFyer').value;


  nameCFb=nameCF.bold();


  var c= document.getElementById('c').innerHTML;

  s=`<li> ${nameCFb} </li>`+instituteCF+"<br>"+fromCFmon+fromCFyer+" - "+toCFmon+toCFyer+"<br>";

  g=c+s+"<br>";

  document.getElementById('c').innerHTML= g;

}

function TechSkills()
{
  var techSkills = document.getElementById('techSkills').value;

  var ts= document.getElementById('ts').innerHTML;
  s= ts+`<li> ${techSkills} </li>`;
  document.getElementById('ts').innerHTML= s;


}

function NonTechSkills()
{

  var nonTechSkills = document.getElementById('nonTechSkills').value;

  var nts= document.getElementById('nts').innerHTML;
  s= nts+`<li> ${nonTechSkills} </li>`;
  document.getElementById('nts').innerHTML= s;

}

function GenerateResume()
{
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
    document.getElementById('GenerateResume').style.display='none';

    document.getElementById('NavBar').style.display='none';
    document.getElementById('PrintResume').style.display='block';

}

function PrintResume()
{

  document.getElementById('PrintResume').style.display='none';
  window.print();
}
