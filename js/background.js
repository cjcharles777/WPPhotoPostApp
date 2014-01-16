// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ http://smus.com/oauth2-chrome-extensions/
// The onClicked callback function.


var oauth = ChromeExOAuth.initBackgroundPage({
  'request_url': 'https://api.imgur.com/oauth2/addclient',
  'authorize_url': 'https://api.imgur.com/oauth2/authorize',
  'access_url': 'https://api.imgur.com/oauth2/token',
  'consumer_key': '2a91c3d998a7924',
  'consumer_secret': 'd6eabe90616fe7c77323413000d0d0848bab8792'
});

oauth.authorize(function() { 
	
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
  window.open(url, '_blank');
 };
 
