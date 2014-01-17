// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ http://smus.com/oauth2-chrome-extensions/
// The onClicked callback function.


var imgurAuth = new OAuth2('imgur', {
  client_id: '885c3b459c09e5e',
  client_secret: 'f48b829200dd1b624a0ba62183758ef4628d3e87'
  });

imgurAuth.authorize(function() {
  // Ready for action
});
chrome.runtime.onInstalled.addListener(function() {
	  var context = 'image';
  var title = "WP Picture Post";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.srcUrl;
  var url = sText;
  saveImagetoImgur(url)  ;
  window.open(url, '_blank');
 };
 
function saveImagetoImgur(url)
{
	var fd = new FormData(); 
    fd.append("image", url); // Append the file
    var xhr = new XMLHttpRequest(); // Create the XHR (Cross-Domain XHR FTW!!!) Thank you sooooo much imgur.com
	xhr.open("POST", "https://api.imgur.com/3/upload"); // Boooom!
	 xhr.onload = function() 
	 {  
        var link = JSON.parse(xhr.responseText).data.link;
       
    };
	xhr.setRequestHeader('Authorization', 'Bearer ' + imgurAuth.getAccessToken());
	 xhr.send(fd);
}
