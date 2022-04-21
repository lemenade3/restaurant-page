function homeTabLoad() {
    const container = document.querySelector('.container')

    const para1 = document.createElement('h2');
    para1.textContent = "Delicious Bistro Style Food!";
    const para2 = document.createElement('div');
    para2.textContent = "Made with love";
    const para3 = document.createElement('div');
    para3.textContent = "Natural - Fresh - Homemade";

    container.append(para1,para2,para3);
};

export {homeTabLoad as default}; 