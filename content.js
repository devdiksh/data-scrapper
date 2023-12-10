// content.js
/* eslint-disable no-undef */


console.log('Content script loaded!');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrapeData') {
    // Your data scraping logic goes here
    // For example, log the title of the current webpage
    console.log('Webpage Title:', document.title);
  }
});
