var onlyTwo = function(){
    alert("Only two pages was created per instructions(Home and About).")
}

var carTypeCoupe=["Honda Civic Coupe","Tesla Roadster","Infiniti G35","Acura NSX"];
var carTypeSuv=["Honda HR-V"," Tesla Model X","Infiniti Q30","Acura RDX"];
var priceCoupe=["$19,250","$250,000","$38,950","$156,000"];
var priceSuv=["$19,465","$79,500","$38,500","$35,800"];
var p=["Handsome, fun to drive, and historically reliable, the Honda Civic is a favorite among compact-car shoppers for good reason. Available as either a four-door sedan, a two-door coupe, or a four-door hatchback, the Civic’s fuel-efficient four-cylinder engines, spacious back seat (in sedan and hatchback models), and generally well-built interior help it stand out near the top of the compact-car class.",
"Touted to make its return to the lineup in 2020, the new Roadster picks up where the old model left off, and then some. Tesla claims a zero-to-60-mph time of 1.9 seconds and a top speed of more than 250 mph;",
"There were two generations of the Infiniti G35, both built on the same platform as the Nissan 350Z sports car. The G35 distinguished itself in the entry-level luxury segment with a roomy cabin, plenty of performance and a respectable price.",
"Should Acura even have this car? Ailing Acura strikes us as a brand in need of reinvention from the bottom up, starting with a new Integra, the car that the people have crowned as the real keeper of Acura’s flame."]
var pSuv=[" As the smallest Honda crossover, the HR-V is essentially a slightly larger and higher-riding version of the Fit hatchback with available all-wheel drive and more SUV-like styling. Launched in 2015, the HR-V competes with other subcompact crossovers such as the Jeep Renegade and the Mazda CX-3.",
"ike the Model S, the X won’t embarrass itself if it lines up next to a supercar on a drag strip. An electric motor at each axle provides four-wheel drive. Add up the motors’ maximum potential and you get a theoretical 762 horsepower, but the arithmetic isn’t that simple. ",
"The Q30 is its own odd animal, and therein lies some of its appeal.",
"Acura has retreated to the safety of posh interiors, creamy ride quality, quiet operation, lots of tech features, and not too many demands on the driver."]
var imgCoupe=["https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q1/654924/2016-honda-civic-coupe-concept-photos-and-info-news-car-and-driver-photo-657570-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*",
"https://cdn.vox-cdn.com/thumbor/E7HsNNmkOHGmEmWbePbrLB_JNG0=/0x0:3840x2160/1200x675/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/57642479/Roadster_Hero.0.jpg",
"https://i.pinimg.com/736x/0a/cd/83/0acd83a4bf5e1bfec625a9791a7c0ca1--infinity-g-suv-cars.jpg",
"http://st.motortrend.com/uploads/sites/5/2012/12/Acura-NSX-concept-front-side-view-bright-green.jpg"];
var imgSuv=["http://autoevoluti.com/wp-content/uploads/2015/04/2015-Honda-HR-V-Black.jpg",
"https://i.ytimg.com/vi/yqbX-PCzo18/maxresdefault.jpg","https://www.mervynstewart.com/newmodels/QX30_EXT_KH3_image_032.png",
"http://st.motortrend.com/uploads/sites/10/2016/05/2016-acura-rdx-advance-suv-angular-front.png"];
function clicked() {
var carOpMake= document.getElementById('cars').value;
var carOpType= document.getElementById("make").value;
var Car= document.getElementById("Car");
var carPrice= document.getElementById("car-price");
var img= document.createElement("img");
var pTag= document.createElement("p");
var src = document.getElementById("body");
for(var i=0;i<carTypeCoupe.length;i++){
if (carOpMake == "Honda" && carOpType == "Coupe" ) {
	Car.innerHTML=carTypeCoupe[0];
	carPrice.innerHTML=priceCoupe[0];
	img.setAttribute("src",imgCoupe[0]);
	img.style.cssText= "margin-left:500px;"
	document.body.appendChild(img);
	pTag.innerHTML=p[0];
    pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Honda" && carOpType =="Suv"){
	Car.innerHTML= carTypeSuv[0];
	carPrice.innerHTML=priceSuv[0];
	img.setAttribute("src",imgSuv[0]);
	img.style.cssText= "margin-left:500px;";
	document.body.appendChild(img);
	pTag.innerHTML=pSuv[0];
	 pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Tesla" && carOpType == "Coupe"){
	Car.innerHTML=carTypeCoupe[1];
	carPrice.innerHTML=priceCoupe[1];
	img.setAttribute("src",imgCoupe[1]);
	img.style.cssText= "margin-left:400px;";
	document.body.appendChild(img);
	pTag.innerHTML=p[1];
	 pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Tesla" && carOpType== "Suv"){
	Car.innerHTML=carTypeSuv[1];
	carPrice.innerHTML= priceSuv[1];
	img.setAttribute("src",imgSuv[1]);
	img.style.cssText="margin-left:400px;"
    document.body.appendChild(img);
	pTag.innerHTML=pSuv[1];
	 pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Infinity" && carOpType == "Coupe"){
	Car.innerHTML=carTypeCoupe[2];
	carPrice.innerHTML=priceCoupe[2];
	img.setAttribute("src",imgCoupe[2]);
	img.style.cssText= "margin-left:680px;"
	document.body.appendChild(img);
	pTag.innerHTML=p[2];
    pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Infinity" && carOpType== "Suv"){
	Car.innerHTML=carTypeSuv[2];
	carPrice.innerHTML= priceSuv[2];
	img.setAttribute("src",imgSuv[2]);
	img.style.cssText=" width:55%; margin-left: 400px; "
	document.body.appendChild(img);
	pTag.innerHTML=pSuv[2];
	 pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Acura" && carOpType == "Coupe"){
	Car.innerHTML=carTypeCoupe[3];
	carPrice.innerHTML=priceCoupe[3];
	img.setAttribute("src",imgCoupe[3]);
	img.style.cssText= "margin-left:550px;"
	document.body.appendChild(img);
	pTag.innerHTML=p[3];
    pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}else if(carOpMake == "Acura" && carOpType== "Suv"){
	Car.innerHTML=carTypeSuv[3];
	carPrice.innerHTML= priceSuv[3];
	img.setAttribute("src",imgSuv[3]);
	img.style.cssText="width:40%; margin-left:500px;"
	document.body.appendChild(img);
	pTag.innerHTML=pSuv[3];
	 pTag.style.cssText="color:red; font-size:40px";
	document.body.appendChild(pTag);
}
}
}
reload()

