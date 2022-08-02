import { activitiesImages } from '../images.js';

export function getActivities() {
    let activities = [];
    let heading = ["Covid Taskforce", "Donation Drive", "Women of Khayaal", "Feed the paws"];
    let subheading = ["A helping hand can save lives.", "A piece of clothing, for peace of mind.", "Cool and Calm", "A wiggle for their paws",
    ];
    let paragraph = ["When you are determined to help, it's surprising the things that you can do! We wanted to support our nation in the tough times of the COVID-19 outbreak and thus we helped the patients to find medicines, hospitals, oxygen cylinders etc. according to their requirements.",
        "We only use 40% of our wardrobe. Why not utilize the 60% for individuals who sleep unclothed? So, Team Khayaal decided to express their solidarity with those less fortunate than us by donating clothes. We successfully donated more than 4000+ clothes in places like Calcutta, South Bombay, Andheri, Mulund, Kanpur, Uttarakhand, Andheri, thereby spreading coziness with others and bringing a smile to their face.",
        "Every 3 in 5 women get harassed. Each day, 92 women get raped, that is one woman in 15 minutes! Our society failed to createa safe space for women. They go through a lot each day. Sexist remarks, victim-blaming, Abuse & a lot more.",
        "We want to work for stray animals with whom we share our mother earth. We aim to provide them with the bare minimum and protect them whilst we can. We will be collecting leftovers from hotels and restaurants so that these leftovers can feed strays."];
    let finalLine = ["It was a tough time but we were glad to save so many lives.", "", "This campaign was to bring attention to the same.", ""];

    activitiesImages.map((image, index) => {
        return (activities.push({
            image: image,
            heading: heading[index],
            subheading: subheading[index],
            paragraph: paragraph[index],
            finalLine: finalLine[index]
        }))
    })
    return activities;
}