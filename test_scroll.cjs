const http = require('http');
const { spawn } = require('child_process');

// Run chrome with remote debugging
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  'https://code17-f5b8erd0hkdhcbba.westus3-01.azurewebsites.net/'
]);

setTimeout(async () => {
  try {
    const res = await fetch('http://127.0.0.1:9222/json');
    const tabs = await res.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    
    const WebSocket = require('ws');
    const ws = new WebSocket(wsUrl);
    
    ws.on('open', () => {
      // scroll to #discuss
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: 'document.getElementById("discuss").scrollIntoView();'
        }
      }));
      
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 1000);
    });
    
    ws.on('message', (data) => {
      const msg = JSON.parse(data);
      if (msg.id === 2 && msg.result && msg.result.data) {
        const fs = require('fs');
        fs.writeFileSync('/Users/obiwan/.gemini/antigravity/brain/3263afc5-22ab-46ef-8d59-ff1e12e284d8/azure_intake_scrolled_exact.png', Buffer.from(msg.result.data, 'base64'));
        console.log('EXACT_SCREENSHOT_SAVED');
        chrome.kill();
        process.exit(0);
      }
    });
  } catch (e) {
    console.error('Err:', e);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
