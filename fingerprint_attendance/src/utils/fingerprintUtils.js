// src/utils/fingerprintUtils.js

const FingerprintScanner = require('your-fingerprint-scanner-library'); // Replace with the actual library

// Initialize the fingerprint scanner
const fingerprintScanner = new FingerprintScanner();

// Open connection to the fingerprint scanner
const initializeScanner = () => {
  return new Promise((resolve, reject) => {
    fingerprintScanner.init((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

// Capture fingerprint template
const captureFingerprint = () => {
  return new Promise((resolve, reject) => {
    fingerprintScanner.capture((template) => {
      if (template) {
        resolve(template);
      } else {
        reject(new Error('Fingerprint capture failed'));
      }
    });
  });
};

// Close connection to the fingerprint scanner
const closeScannerConnection = () => {
  fingerprintScanner.close();
};

module.exports = {
  initializeScanner,
  captureFingerprint,
  closeScannerConnection,
};
