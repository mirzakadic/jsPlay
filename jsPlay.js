const cities = [
  { name: "Russia", population: 17098242 },
  { name: "Canada", population: 9984670 },
  { name: "China", population: 9706961 },
  { name: "United States", population: 9372610 },
  { name: "Brazil", population: 8515767 },
  { name: "Australia", population: 7692024 },
  { name: "India", population: 3287590 },
  { name: "Argentina", population: 2780400 },
  { name: "Kazakhstan", population: 2724900 },
  { name: "Algeria", population: 2381741 },
  { name: "DR Congo", population: 2344858 },
  { name: "Greenland", population: 2166086 },
  { name: "Saudi Arabia", population: 2149690 },
  { name: "Mexico", population: 1964375 },
  { name: "Indonesia", population: 1904569 },
  { name: "Sudan", population: 1886068 },
  { name: "Libya", population: 1759540 },
  { name: "Iran", population: 1648195 },
  { name: "Mongolia", population: 1564110 },
  { name: "Peru", population: 1285216 },
  { name: "Chad", population: 1284000 },
  { name: "Niger", population: 1267000 },
  { name: "Angola", population: 1246700 },
  { name: "Mali", population: 1240192 },
  { name: "South Africa", population: 1221037 },
  { name: "Colombia", population: 1141748 },
  { name: "Ethiopia", population: 1104300 },
  { name: "Bolivia", population: 1098581 },
  { name: "Mauritania", population: 1030700 },
  { name: "Egypt", population: 1002450 },
  { name: "Tanzania", population: 945087 },
  { name: "Nigeria", population: 923768 },
  { name: "Venezuela", population: 916445 },
  { name: "Pakistan", population: 881912 },
  { name: "Namibia", population: 825615 },
  { name: "Mozambique", population: 801590 },
  { name: "Turkey", population: 783562 },
  { name: "Chile", population: 756102 },
  { name: "Zambia", population: 752612 },
  { name: "Myanmar", population: 676578 },
  { name: "Afghanistan", population: 652230 },
  { name: "Somalia", population: 637657 },
  { name: "Central African Republic", population: 622984 },
  { name: "South Sudan", population: 619745 },
  { name: "Ukraine", population: 603500 },
  { name: "Madagascar", population: 587041 },
  { name: "Botswana", population: 582000 },
  { name: "Kenya", population: 580367 },
  { name: "France", population: 551695 },
  { name: "Yemen", population: 527968 },
  { name: "Thailand", population: 513120 },
  { name: "Spain", population: 505992 },
  { name: "Turkmenistan", population: 488100 },
  { name: "Cameroon", population: 475442 },
  { name: "Papua New Guinea", population: 462840 },
  { name: "Sweden", population: 450295 },
  { name: "Uzbekistan", population: 447400 },
  { name: "Morocco", population: 446550 },
  { name: "Iraq", population: 438317 },
  { name: "Paraguay", population: 406752 },
  { name: "Zimbabwe", population: 390757 },
  { name: "Japan", population: 377930 },
  { name: "Germany", population: 357114 },
  { name: "Philippines", population: 342353 },
  { name: "Congo", population: 342000 },
  { name: "Finland", population: 338424 },
  { name: "Vietnam", population: 331212 },
  { name: "Malaysia", population: 330803 },
  { name: "Norway", population: 323802 },
  { name: "Côte d'Ivoire", population: 322463 },
  { name: "Poland", population: 312679 },
  { name: "Oman", population: 309500 },
  { name: "Italy", population: 301336 },
  { name: "Ecuador", population: 276841 },
  { name: "Burkina Faso", population: 272967 },
  { name: "New Zealand", population: 270467 },
  { name: "Gabon", population: 267668 },
  { name: "Western Sahara", population: 266000 },
  { name: "Guinea", population: 245857 },
  { name: "United Kingdom", population: 242900 },
  { name: "Uganda", population: 241550 },
  { name: "Ghana", population: 238533 },
  { name: "Romania", population: 238391 },
  { name: "Laos", population: 236800 },
  { name: "Guyana", population: 214969 },
  { name: "Belarus", population: 207600 }]
  
  for(let i=0; i<cities.length; i++){
    let randValR = Math.floor(Math.random()*255);
    let randValG = Math.floor(Math.random()*254);
    let randValB = Math.floor(Math.random()*253);
    let newDiv = document.createElement('div');
    newDiv.className = "newDiv";
    newDiv.textContent = cities[i].name;
    newDiv.style.width = `${cities[i].population/28000}px`;
    newDiv.style.height = `${cities[i].population/28000}px`;
    newDiv.style.borderRadius = `${cities[i].population/20000}px`;
    newDiv.style.backgroundColor = `rgb(${randValR}, ${randValG}, ${randValB})`;
    newDiv.style.fontSize = `${cities[i].population/150000}px`;

    
    
    document.body.appendChild(newDiv);

  }


  console.log(cities[2].population);