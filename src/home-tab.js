//Exports function to index.js to load the content for the Home Tab

function homeTabLoad() {
    const container = document.querySelector('.container')

    const para1 = document.createElement('h2');
    para1.textContent = "Good Food, Made Well...";

    const para2 = document.createElement('div');
    para2.textContent = "A dining experience like no other, whether enjoying a glass of wine while taking in the picturesque views or enjoying a quiet meal with friends and family, you can be sure your visit will be unforgettable.";
    para2.setAttribute('id', 'para2');

    const openingHrs = document.createElement('div');
    openingHrs.setAttribute('class', 'opening')
    const hrsTitle = document.createElement('h3');
    hrsTitle.textContent = "Come and visit! We are open every day from 11:00am till late";
    hrsTitle.setAttribute('class', 'opening')
    const hrsContent1 = document.createElement('div');
    hrsContent1.textContent = "Monday - Saturday: 11:00am - 12:00pm";
    hrsContent1.setAttribute('class', 'opening')
    const hrsContent2 = document.createElement('div');
    hrsContent2.textContent = "Sunday: 11:00am - 10:00pm";
    hrsContent2.setAttribute('class', 'opening')

    openingHrs.append(hrsTitle,hrsContent1,hrsContent2);

    const bottomSection = document.createElement('div');
    bottomSection.setAttribute('id', 'bottom-section')
    const bottom1 = document.createElement('div');
    bottom1.textContent = "Enjoy traditional, seasonal food.";
    bottom1.setAttribute('class', 'bottom')
    const bottom2 = document.createElement('div');
    bottom2.textContent = "All of our meat is responsibly sourced from local farms. ";
    bottom2.setAttribute('class', 'bottom')
    const bottom3 = document.createElement('div');
    bottom3.textContent = "Everything served is bought fresh on the day from the market.";
    bottom3.setAttribute('class', 'bottom')

    bottomSection.append(bottom1,bottom2,bottom3);

    container.append(para1,para2,openingHrs,bottomSection);
};

export {homeTabLoad as default}; 
