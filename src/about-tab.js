function aboutTabLoad() {
    const container = document.querySelector(".container")

    const title = document.createElement('h2');
    title.textContent = "About Us"

    const content = document.createElement('div');
    content.textContent = `Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Integer vehicula in sapien in maximus. Phasellus
    neque erat, accumsan vitae ligula nec, dignissim fringilla ante.
    Maecenas fringilla massa eu nulla rhoncus imperdiet. Phasellus
    vulputate sollicitudin magna sit amet congue. Integer quis felis
    luctus, luctus erat ut, pellentesque libero. Duis sollicitudin,
    dolor non fringilla ornare, quam augue porta mauris, et
    condimentum lorem tellus bibendum sem. Morbi at consectetur
    lacus. Curabitur auctor metus et risus egestas scelerisque.
    In feugiat ut quam sit amet auctor. Morbi et semper mi, et
    tempus mauris. Maecenas at augue a elit consequat commodo.
    Suspendisse ut tincidunt diam. Sed vel ligula nec lectus
    consequat pellentesque id vel est. Sed mattis risus eu ex
    finibus, eget placerat sem imperdiet. Sed magna nulla,
    sollicitudin euismod lorem nec, faucibus vehicula est.
    Nulla id ornare turpis, eget iaculis neque. Sed 
    dignissim risus at felis maximus, in condimentum
    ligula convallis.`
    content.setAttribute('class', 'content');

    container.append(title,content);
};

export {aboutTabLoad as default};