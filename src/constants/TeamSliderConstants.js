import { memberImages } from '../images.js';

export function getMembers() {
    let members = [];
    let name = [
        "Uday Somaiya", "Sharmishtha Singh", "Rohan Pariakar",
        "Pallak Bhutani", "Viraj Gaikwad", "Janvi Bhanushali",
        "Sanika Kamble", "Iram Dhanani", "Mohammed Rangwala",
        "Khushi Mundra", "Divyanshi Chopra"];
    let position = [
        "President for Strategy", "Founder", "Co-Founder",
        "Campaign President", "President for Public Relations",
        "President for Content Writing", "President for Design Team",
        "President for Content Creators", "President of Human Resources",
        "Vice President for Education Campaign", "Vice President for Content Writing"
    ]
    memberImages.map((image, index) => {
        members.push({
            image: image,
            name: name[index],
            position: position[index]
        })
    })
    return members;
}