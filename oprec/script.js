const button = document.getElementsByTagName('button')[0];
const body = document.body;
const cover = document.getElementById('cover');
const container = document.getElementById('container');
const input = document.getElementsByTagName('input')[0];
const form = document.getElementsByTagName('form')[0];

function wrongInput(){
    flash();
    changeColor(body,'grey','black');
    changeColor(button,'grey','black');
    input.placeholder = 'NIM Not Found';
    input.value = 'NIM Not Found';
}

function green(name){
    flash()
    form.style.opacity = '0';
    window.setTimeout(()=>{
        container.innerHTML = '';
        container.style.boxSizing = 'border-box'; 
        container.style.padding = '46px 0'; 
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center'; 
        container.style.justifyContent = 'space-between';
        container.innerHTML = greenContent(name);
    },2000);
    changeColor(body,'#FF5E46','#FDF402');
}

function blue(name){
    flash()
    form.style.opacity = '0';
    window.setTimeout(()=>{
        container.innerHTML = '';
        container.style.boxSizing = 'border-box'; 
        container.style.padding = '46px 46px'; 
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center'; 
        container.style.justifyContent = 'center';
        container.innerHTML = blueContent(name);
        const announcement = document.getElementById('announcement');
        announcement.style.marginTop = '34.94px';
        const h4 = document.getElementsByTagName('h4')[0];
        const p1 = document.getElementsByTagName('p')[0];
        const p2 = document.getElementsByTagName('p')[1];
        h4.style.textAlign = 'left';
        p1.style.textAlign = 'left';
        p1.style.padding = '0';
        p2.style.textAlign = 'left';
        p2.style.padding = '0';
    },2000);
    changeColor(body,'white','#00D1FF');
}

function changeColor(element ,color1, color2){
    element.style.background = `linear-gradient(255.92deg, ${color1} 46.76%, ${color2} 200.78%)`;
}

function flash() {
    cover.style.opacity = '100%';
    window.setTimeout(()=>{
        cover.style.opacity = '0';
    },
    500);    
}


const greenContent = function(name) {
    return `<img src="./Logo 1.png" alt="">
    <div id="announcement">
        <h4>Congratulations ${name}!</h4>
        <p>You’ve passed the Airlab member open recruitment selection test.</p>
    </div>
    <div id="group-link">
        <a href="">Click Here </a> 
        <p> to join our whatsApp group</p>
    </div>`;
} 


const blueContent = function (name) {
    return `<img src="./Logo 1.png" alt="">
    <div id="announcement">
        <h4>Dear ${name},</h4>
        <p>Thank you for the effort you've put on our open recruitment test. However, We're sorry to inform you that we may not be able to proceed your participation on the recruitment. </p>
        <p>Keep your spirit high and chin up! We wish you the best luck and we can't wait to see you soon!</p>
    </div>`;
} 
