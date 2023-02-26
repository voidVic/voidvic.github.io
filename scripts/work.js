
const videos = [
    {
        heading: 'Human Tracking Camera',
        content: 'A rotating camera based solution which can track down any individual human. Rotates along with human moves and give back a timelapse video of the activity along with the description of what that person is doing.',
        videoLink: 'https://drive.google.com/uc?export=download&id=1-bXK4rAg_wIRaQir497p7myB_Yc6WfDX',
        showVideo: false
    },
    {
        heading: 'Home Bot',
        content: 'A chatbot which takes care of all the connected devices at your home including controlling them, and respond to all your queries related to the devices.',
        videoLink: 'https://drive.google.com/uc?export=download&id=1kFpKQHPIwOmw9_KMsnAuiwMOoiXRPrGQ',
        showVideo: true
    },
    {
        heading: 'IoT Device control via Augmented Reality',
        content: 'Solution which help humans to just scan the smart device and operate via the augmented conttrol over them. No need to remember the names from the long list of devices on your app.',
        videoLink: 'https://drive.google.com/uc?export=download&id=1KB2bsa3SW1QUBYLD6RQq2Q3dhYzF3aw_'
    }
];

const getWorkHTML = function() {
    let videosDom = [];
    for(let i = 0 ; i < videos.length ; i++) {
        let vid = videos[i];
        videosDom.push(`
            <div class="video-container col-sm-12 col-md-12 col-lg-12">
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <video id='my-video' class='video-js' controls preload='auto' width='640' height='264'
                        data-setup='{}'>
                        <source src='${vid.videoLink}' type='video/mp4'>
                        <p class='vjs-no-js'>
                            To view this video please enable JavaScript, and consider upgrading to a web browser that
                            <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
                        </p>
                    </video>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                    <h3>${vid.heading}</h3>
                    <p>${vid.content}</p>
                </div>

            </div>
        `);
    }

    return `
    <div class="page-content">
        ${videosDom.join(' ')}
        <div class="m-t-20 col-lg-12 col-md-12 col-sm-12">
            <h2 class="t-a-l">Other works</h2>
            <ul class="t-a-l">
                <li><a href="http://voidvic.github.io/voice" target="_blank">Voice Commands in Web App</a></li>
                <li><a href="http://voidvic.github.io/2048" target="_blank">Web Based 2048 Game.</a></li>
                <li><a href="http://voidvic.github.io/spaceShoot" target="_blank">Space Shooting Game.</a></li>
                <li><a href="http://voidvic.github.io/expense" target="_blank">Expense Divider App.</a></li>
            </ul>
        </div>
    </div>
    `
}