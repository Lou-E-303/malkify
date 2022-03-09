// chrome.browserAction.onClicked.addListener(buttonClicked);
//
// function buttonClicked() {
//     chrome.tabs.query({active: true, currentWindow: true}, sendMessage);
// };
//
// function sendMessage (tabs) {
//
//     const bookedSlotButton = (document.querySelector('.booked-slot--button'));
//     const newBackgroundColour = '#45b352';
//
//     bookedSlotButton.style.backgroundColor = newBackgroundColour;
//     console.log('Colour changed!')
//
//     const message = {
//         txt: "Hello!"
//     };
//     chrome.tabs.sendMessage(tabs[0].id, message)
//   };