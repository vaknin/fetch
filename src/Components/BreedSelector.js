import React from 'react';

const breeds = ["random", "affenpinscher","african","airedale","akita","appenzeller","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","bulldog","bullterrier","cairn","cattledog","chihuahua","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","frise","germanshepherd","greyhound","groenendael","hound","husky","keeshond","kelpie","komondor","kuvasz","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","newfoundland","otterhound","papillon","pekinese","pembroke","pinscher","pointer","pomeranian","poodle","pug","puggle","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","setter","sheepdog","shiba","shihtzu","spaniel","springer","stbernard","terrier","vizsla","weimaraner","whippet","wolfhound"];
const options = [];
for (let b of breeds){
    //Make the breed's name uppercase
    let upperB = b.charAt(0).toUpperCase() + b.slice(1);
    options.push(<option key={b} value={b}>{upperB}</option>);
}



const BreedSelector = props => {

    return (
        <select onChange={props.changeBreed} className="custom-select mb-3">
            {options}
        </select>
    );
};

export default BreedSelector;