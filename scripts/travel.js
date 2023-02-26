const TEXT_ORIENTATION = {
  LEFT: 'left',
  RIGHT: 'right'
};

const travelArr = [
  {
    title: 'Mount Everest Base Camp - Nepal',
    textOrientation: TEXT_ORIENTATION.LEFT,
    flag: 'images/nepal-flag.png',
    desc: `Waited for 2 years for this day. Last 2 months were dedicated for preparing my body and mind for this 15 day event.
        </br>
        </br>
        These photographs are not a reflection of just another vacation.  It's a lifetime event for me.
        </br>
        </br>
        There are cairns, prayer flags and memorial monuments everywhere, honouring all the climbers and sherpas who have died attempting to climb Mt. Everest.
        Entire region is draped with a panoramic view of the Himalayan Mountains, including the well-known peaks of Tawache, Everest, Nuptse, Lhotse, Ama Dablam, and Thamserku.`,
    mainImage1: 'images/everest-tengboche.jpeg',
    midImage: 'images/ebc.jpeg'
  },

  {
    title: 'Happiest nation in the world - Bhutan',
    textOrientation: TEXT_ORIENTATION.RIGHT,
    flag: 'images/bhutan-flag.png',
    desc: `This is a country where happiness index is lim x->0 (1/x).
        </br>
        </br>
        I did trek to <b>Tiget Nest</b> there. Met a lot of amazing people over this trek, 
        including an 80 year old Buddhist Monk who was energetic enough to trek up the mountain and offer his prayers. 
        I crossed the pine tree forest, saw water powered prayer wheel. 
        Walked, slipped in mud, got up and walked back. 
        Hours of slow walking up to the temple and a beautiful view, the happiness on my face is nothing as compared to what I actually felt after reaching the nest. 
        The peace, the wind, the prayers and happy faces of all age groups, and these photograph reminds me of all this.
        </br>
        </br>
        <b>Dochula Pass</b> also deserves a mention. Often a violent history and dark times encourage people to create something inspiring and beautiful, and this is exactly what the people of Bhutan did. 
        They created Dochula Pass, Bhutan in honor of 108 Bhutanese soldiers who died in a military operation.`,
    mainImage1: 'images/dochula-pass.jpeg',
    midImage: 'images/tiger-nest.jpeg'
  },

  {
    title: 'IoT Conference and a week long exploration - Singapore',
    textOrientation: TEXT_ORIENTATION.LEFT,
    flag: 'images/sgp-flag.png',
    desc: `This was an official trip which I extended to spend some time in the city making it a personal trip towards the end.
        </br>
        </br>
        Represented one of my previous company in the field of IoT. 
        Saw major shifts arising from convergence of technologies bringing different capabilities into one ecosystem. 
        Got guidance by industry leaders in space of IoT there.
        </br>
        </br>
        Singapore, being one of the most prominent cities in the world, will provide me with a different kind of experience from the one I could expect from other Asian capital cities.
        Amongst the towering skyscrapers, I seek out one of the many inner-city gardens and jungles, designed as green hideaways for the people of Singapore. Also many activities are put on offers for free, such as the world-famous light and sound show at Gardens by the Bay- an unforgettable experience.`,
    mainImage1: 'images/sgp-nm.jpg',
    midImage: 'images/sgp-uk-1.jpeg'
  },

  {
    title: 'Majestic Ladakh - India',
    textOrientation: TEXT_ORIENTATION.RIGHT,
    flag: 'images/india-flag.png',
    desc: `I've been to Ladakh multiple times, solo, with my wife and with friends. I never get bored with this place. I get a bike and cruise through the beautiful mountains across..
        </br>
        </br>
        Camping at Nubra Valley was amazing. Mesmerizing view of Sand dunes, river on 2 sides and huge Himalayas everywhere around. 
        Also have experianced amazing ride from Changla pass and Khardungla to reach Pangong-Tso. The best part was setting up the tent with her and stay under uncountable stars.`,
    mainImage1: 'images/ladakh-bike.jpeg',
    midImage: 'images/pangong-camp.jpeg'
  }
];

const getTravel = function () {
  let travelArrayDom = [];
  for (let travel of travelArr) {
    console.log(travel);
    const midImage = `<img class="travel-mid-photo" src="${travel.midImage}"></img>`;
    const textBlock = `
            <div class="t-a-l">${travel.desc}</div>
        `;
    travelArrayDom.push(`<div class="travel-card">
            <h4 class="m-t-20 travel-title">${
            travel.title
            } <img class="travel-flag" src="${travel.flag}"></img></h4>
            <div class="col-sm-12 col-md-12 col-lg-12">
                <div class="col-sm-12 col-md-6 col-lg-6">
                ${
                travel.textOrientation === TEXT_ORIENTATION.LEFT
                    ? textBlock
                    : midImage
                }
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6">
                ${
                travel.textOrientation !== TEXT_ORIENTATION.LEFT
                    ? textBlock
                    : midImage
                }
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <img class="travel-mid-photo" src="${travel.mainImage1}"></img>
                </div>
            </div>
        </div>
        `);
  }
  return `
    <div class="page-header">
        Travel Stories
    </div>
    <div class="page-content">
        <p class="quote">
            "Traveling - it leaves you speechless, then turns you into a storyteller."
        </p>
        ${travelArrayDom.join(" ")}
    </div>
    `;
};
