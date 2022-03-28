class BoredAPI {
    constructor(url) {
        this.url = url;
    }
}

const activities = new BoredAPI('https://www.boredapi.com/api/activity');

const boredHeaderAPI = async () => {
    const response = await fetch(activities.url);
    const data = await response.json();
    const header_three = document.createElement('h3');
    const textNodeHeader = document.createTextNode(data.activity);
    header_three.appendChild(textNodeHeader);
    header_three.setAttribute(
        'style',
        'justify-content: center; color: #75FF33; padding: 20px; text-align: center; vertical-align: middle;'
    );
    let api_display = document.body.appendChild(header_three);
    return api_display;
};

const boredParagraphAPI = async () => {
    const response = await fetch(activities.url);
    const data = await response.json();
    const paragraph = document.createElement('p');
    const textNodeParagraph = document.createTextNode(data.activity);
    paragraph.appendChild(textNodeParagraph);
    paragraph.setAttribute(
        'style',
        'justify-content: center; color: #fff; margin-top: 20px; padding: 20px; text-align: center; vertical-align: middle;'
    );
    let api_display = document.body.appendChild(paragraph);
    return api_display;
};

const diplayActivities = () => {
    boredHeaderAPI();
    boredParagraphAPI();
};

diplayActivities();
